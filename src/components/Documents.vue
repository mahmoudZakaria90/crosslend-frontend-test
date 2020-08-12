<template>
  <Wrapper>
    <template v-slot:header>
      <div class="documents-header">
        <h2 role="button" class="wrapper-title documents-title">Document name</h2>
        <h2 role="button" class="wrapper-title documents-title">Date</h2>
      </div>
    </template>
    <template v-slot:content>
      <DocumentItem />
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
  async mounted() {
    const request = await fetch(
      "https://frontend.apply.crosslend.dev/documents.json"
    );
    const response = await request.json();
    const { documents } = response;
    const filtered = documents.filter((document) => {
      const dateOnly = document.date.split("T");
      const startDate = 1491004800000;
      const endDate = 1510358400000;
      const dateTimestamp = new Date(dateOnly).getTime();
      return dateTimestamp >= startDate && dateTimestamp <= endDate;
    });
    console.log(filtered);
  },
};
</script>

<style lang="sass" scoped>
.documents
  &-header
    display: flex
  &-title
    flex: 1 0
    &:first-of-type
      flex-grow: 2
</style>