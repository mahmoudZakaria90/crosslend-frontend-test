<template>
  <div class="container">
    <h1>Documents</h1>
    <div class="row">
      <div class="col filter">
        <FilterForm />
      </div>
      <div class="col documents">
        <Documents />
      </div>
    </div>
  </div>
</template>

<script>
import Documents from "./components/Documents";
import FilterForm from "./components/Filter";

export default {
  name: "App",
  components: {
    Documents,
    FilterForm,
  },
};
</script>

<style lang="sass" scoped>
.documents
  flex-basis: 75%
  max-width: 75%
  padding-right: 0
.filter
  flex-basis: 25%
  max-width: 25%
  padding-left: 0
</style>
