<template>
  <div>
    <Wrapper v-if="documents.length" class="documents-wrapper">
      <template v-slot:header>
        <div class="documents-header">
          <h2 role="button" class="wrapper-title documents-title" @click="sortByName">
            Document name
            <FontAwesomeIcon v-if="sortedBy === 'documentName'" :icon="['fas', 'caret-down']" />
          </h2>
          <h2 role="button" class="wrapper-title documents-title" @click="sortByDate">
            Date
            <FontAwesomeIcon v-if="sortedBy === 'date'" :icon="['fas', 'caret-down']" />
          </h2>
        </div>
      </template>
      <template v-slot:content>
        <DocumentItem
          v-for="({name, date}, key) in documents"
          :key="key"
          :name="name"
          :date="date"
        />
        <Pagination
          :totalPages="Math.round(documentsLength / pageSize)"
          :documentsLength="documentsLength"
        />
      </template>
    </Wrapper>
    <p v-if="responseError" class="error">{{error.message}}</p>
    <p v-if="filterError || !documents.length">No documents to fetch.</p>
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
      pageSize: Number(process.env.VUE_APP_DOCUMENTS_SIZE),
      responseError: null,
      filterError: null,
    };
  },
  methods: {
    sortByDate() {
      this.documents = this.documents.sort(
        ({ name: aName, date: aDate }, { name: bName, date: bDate }) => {
          const aTimeStamp = new Date(aDate.split("T")).getTime();
          const bTimeStamp = new Date(bDate.split("T")).getTime();
          if (aTimeStamp === bTimeStamp) {
            return aName.localeCompare(bName);
          }
          return bTimeStamp - aTimeStamp;
        }
      );
      this.sortedBy = "date";
    },
    sortByName() {
      this.documents = this.documents.sort(
        ({ name: aName, date: aDate }, { name: bName, date: bDate }) => {
          const aTimeStamp = new Date(aDate.split("T")).getTime();
          const bTimeStamp = new Date(bDate.split("T")).getTime();
          if (aName === bName) {
            return bTimeStamp - aTimeStamp;
          }
          return aName.localeCompare(bName);
        }
      );
      this.sortedBy = "documentName";
    },
    updateDocuments(filteredDocs, start, end) {
      this.documents = filteredDocs.slice(start, end);
      this.sortByDate();
    },
  },
  async mounted() {
    const pattern = /\.pdf|\.docx$/;
    const { VUE_APP_DOCUMENTS_ENDPOINT } = process.env;
    try {
      const request = await fetch(VUE_APP_DOCUMENTS_ENDPOINT);
      const response = await request.json();
      const { documents } = response;

      const filteredDocs = documents.filter(({ name }) => pattern.test(name));
      this.documentsLength = filteredDocs.length;
      this.updateDocuments(filteredDocs, 0, 6);
      eventBus.$on("updatingPages", ({ start, end }) => {
        this.updateDocuments(filteredDocs, start, end);
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
  &-header
    display: flex
  &-title
    flex: 1 0
    flex-basis: 25%
    max-width: 25%
    cursor: pointer
    &:first-of-type
      flex-basis: 75%
      max-width: 75%
</style>