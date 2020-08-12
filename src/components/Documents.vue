<template>
  <Wrapper>
    <template v-slot:header>
      <div class="documents-header">
        <h2 role="button" class="wrapper-title documents-title" @click="sortByName">Document name</h2>
        <h2 role="button" class="wrapper-title documents-title" @click="sortByDate">Date</h2>
      </div>
    </template>
    <template v-slot:content>
      <DocumentItem v-for="({name, date}, key) in documents" :key="key" :name="name" :date="date" />
    </template>
  </Wrapper>
</template>

<script>
import Wrapper from "./pesentation/Wrapper";
import DocumentItem from "./pesentation/DocumentItem";
export default {
  name: "Documents",
  components: {
    Wrapper,
    DocumentItem,
  },
  data() {
    return {
      documents: [],
    };
  },
  methods: {
    sortByDate() {
      this.documents = this.documents.sort((a, b) => {
        const aTimeStamp = new Date(a.date.split("T")).getTime();
        const bTimeStamp = new Date(b.date.split("T")).getTime();
        return bTimeStamp - aTimeStamp;
      });
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
    },
  },
  async mounted() {
    const pattern = /\.pdf|\.docx$/;
    const { VUE_APP_DOCUMENTS_ENDPOINT } = process.env;
    const request = await fetch(VUE_APP_DOCUMENTS_ENDPOINT);
    const response = await request.json();
    const { documents } = response;
    this.documents = documents.filter(({ name }) => pattern.test(name));
    this.sortByDate();
  },
};
</script>

<style lang="sass" scoped>
.documents
  &-header
    display: flex
  &-title
    flex: 1 0
    flex-basis: 25%
    max-width: 25%
    &:first-of-type
      flex-basis: 75%
      max-width: 75%
</style>