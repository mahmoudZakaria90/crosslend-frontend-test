<template>
  <div>
    <Wrapper class="documents-wrapper">
      <template v-slot:header v-if="documents.length">
        <h2
          id="sort_by_name"
          role="button"
          class="wrapper-title documents-title"
        >
          <span class="documents-title-trigger" @click="sortByName">Document name</span>
          <FontAwesomeIcon
            v-if="sortedBy === 'documentName'"
            :icon="['fas', `${nameSortToggle ? 'caret-up' : 'caret-down'}`]"
          />
        </h2>
        <h2 role="button" class="wrapper-title documents-title">
          <span class="documents-title-trigger" @click="sortByDate">Date</span>
          <FontAwesomeIcon
            v-if="sortedBy === 'date'"
            :icon="['fas', `${dateSortToggle ? 'caret-down' : 'caret-up'}`]"
          />
        </h2>
      </template>
      <template v-slot:content v-if="documents.length">
        <DocumentItem
          v-for="({name, date}, key) in documents"
          :key="key"
          :name="name"
          :date="date"
        />
        <Pagination
          :totalPages="Math.ceil(documentsLength / pageSize)"
          :documentsLength="documentsLength"
        />
      </template>
      <p v-if="responseError" class="error">{{responseError.message}}</p>
      <p v-if="!documents.length" class="no-docs-text">No documents to fetch.</p>
    </Wrapper>
  </div>
</template>

<script>
import DocumentItem from "./presentation/DocumentItem";
import Wrapper from "./presentation/Wrapper";
import Pagination from "./presentation/Pagination";

import { eventBus } from "../utils/";

export default {
  name: "Documents",
  components: {
    DocumentItem,
    Wrapper,
    Pagination,
  },
  data() {
    return {
      documents: [],
      documentsLength: null,
      sortedBy: "date",
      dateSortToggle: false,
      nameSortToggle: false,
      pageSize: Number(process.env.VUE_APP_DOCUMENTS_SIZE),
      responseError: null,
    };
  },
  methods: {
    sortByDate() {
      this.nameSortToggle = false;
      if (this.dateSortToggle) {
        this.dateSortToggle = false;
      } else {
        this.dateSortToggle = true;
      }
      this.documents.sort(
        ({ name: aName, date: aDate }, { name: bName, date: bDate }) => {
          const aTimeStamp = new Date(aDate.split("T")[0]).getTime();
          const bTimeStamp = new Date(bDate.split("T")[0]).getTime();
          if (aTimeStamp === bTimeStamp) {
            return aName.localeCompare(bName);
          }
          if (!this.dateSortToggle) {
            return aTimeStamp - bTimeStamp;
          }
          return bTimeStamp - aTimeStamp;
        }
      );
      this.sortedBy = "date";
    },
    sortByName() {
      this.dateSortToggle = false;
      if (this.nameSortToggle) {
        this.nameSortToggle = false;
      } else {
        this.nameSortToggle = true;
      }
      this.documents.sort(
        ({ name: aName, date: aDate }, { name: bName, date: bDate }) => {
          const aTimeStamp = new Date(aDate.split("T")[0]).getTime();
          const bTimeStamp = new Date(bDate.split("T")[0]).getTime();
          if (aName === bName) {
            return bTimeStamp - aTimeStamp;
          }
          if (this.nameSortToggle) {
            return aName.localeCompare(bName);
          }
          return bName.localeCompare(aName);
        }
      );
      this.sortedBy = "documentName";
    },
    updateDocuments(docs, start, end) {
      this.documents = docs.slice(start, end);
      this.dateSortToggle = false;
      this.sortByDate();
    },
    updateDocumentsWithLength(targetDoc){
      const { VUE_APP_DOCUMENTS_SIZE } = process.env;
      this.documentsLength = targetDoc.length;
      this.updateDocuments(targetDoc, 0, VUE_APP_DOCUMENTS_SIZE);
    }
  },
  async mounted() {
    const pattern = /\.pdf$|\.docx$/;
    const { VUE_APP_DOCUMENTS_ENDPOINT } = process.env;
    try {
      const request = await fetch(VUE_APP_DOCUMENTS_ENDPOINT);
      const { documents } = await request.json();

      const filteredDocs = documents.filter(({ name }) => pattern.test(name));

      this.updateDocumentsWithLength(filteredDocs)

      eventBus.$on("updatingPages", ({ start, end }) => {
        this.updateDocuments(filteredDocs, start, end);
      });

      eventBus.$on("resetDocuments", () => {
        this.updateDocumentsWithLength(filteredDocs);
      });
      //Date picker Filters
      eventBus.$on("filter", ({ startTimestamp, endTimestamp }) => {
        const filteredByForm = documents.filter(({ date }) => {
          const dateTimestamp = new Date(date.split("T")[0]).getTime();
          return (
            dateTimestamp >= startTimestamp && dateTimestamp <= endTimestamp
          );
        });
        this.updateDocumentsWithLength(filteredByForm)
      });
    } catch (error) {
      this.responseError = error;
    }
  },
};
</script>

<style lang="sass" scoped>
.documents
  &-wrapper
    min-height: 301px
  &-title
    flex: 1 0
    flex-basis: 25%
    max-width: 25%
    cursor: pointer
    &:first-of-type
      flex-basis: 75%
      max-width: 75%
    &-trigger
      margin-right: 5px
.no-docs-text
  @media(max-width: 768px)
    text-align: right
</style>