<template>
  <div>
    <Header />
    <div class="container">
      <h1 class="app-title">Documents</h1>
      <button class="filter-by-btn" @click="filterBy">Filter by</button>
      <div class="row">
        <div ref="filter" class="col filter">
          <FilterForm />
        </div>
        <div class="col documents">
          <Documents />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/presentation/Header";
import Documents from "./components/Documents";
import FilterForm from "./components/Filter";

export default {
  name: "App",
  components: {
    Header,
    Documents,
    FilterForm,
  },
  methods: {
    filterBy() {
      if (this.$refs.filter) {
        this.$refs.filter.classList.add("is-shown-sm");
      }
    },
  },
};
</script>

<style lang="sass" scoped>
@import ./assets/sass/colors

.app
  &-title
    margin-bottom: 30px

.documents
  flex-basis: 75%
  max-width: 75%
  padding-right: 0
  @media(max-width: 992px)
    flex-basis: 60%
    max-width: 60%
  @media(max-width: 768px)
    flex-basis: 100%
    max-width: 100%
    padding-left: 20px
.filter
  flex-basis: 25%
  max-width: 25%
  padding-left: 0
  &.is-shown-sm
    display: block
    position: absolute
    top: 0
    left: -20px
    z-index: 99999
    flex-basis: auto
    max-width: none
    width: 50%
    @media(min-width: 769px)
      position: static
      flex-basis: 40%
      max-width: 40%
      width: auto
    @media(max-width: 480px)
      width: 80%
  @media(max-width: 992px)
    flex-basis: 40%
    max-width: 40%
  @media(max-width: 768px)
    display: none
  &-by-btn
    display: none
    position: absolute
    top: 100px
    left: -28px
    border-radius: 2px 2px 0px 0
    transform: rotate(90deg)
    padding: 6px 15px
    background: $btn-D8-bg
    box-shadow: 1px 2px 3px rgba(black, .2)
    z-index: 9
    @media(max-width: 768px)
      display: block
</style>
