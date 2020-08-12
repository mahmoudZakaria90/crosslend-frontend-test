<template>
  <div class="pagination">
    <div class="pagination-group">
      <button class="pagination-btn">
        <FontAwesomeIcon :icon="['fas','angle-double-left']" />
      </button>
      <button class="pagination-btn">
        <FontAwesomeIcon :icon="['fas','angle-left']" />
      </button>
      <span class="pagination-status">{{currentPage}} of {{pageLength}}</span>
      <button class="pagination-btn" @click="nextPage">
        <FontAwesomeIcon :icon="['fas','angle-right']" />
      </button>
      <button class="pagination-btn">
        <FontAwesomeIcon :icon="['fas','angle-double-right']" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    pageLength: Number,
  },
  data() {
    return {
      currentPage: 1,
    };
  },
  methods: {
    nextPage() {
      if (this.currentPage < this.pageLength) {
        this.currentPage = this.currentPage + 1;
      }
    },
  },
};
</script>

<style lang="sass" scoped>
@import ../../assets/sass/colors

.pagination
    margin-top: 20px
    text-align: right
    &-group
        display: inline-block
    &-status
        margin: 0 5px
    &-btn
        width: 22px
        height: 22px
        line-height: 22px
        margin: 0 5px
        background-color: white
        color: $header-bg
        border: 1px solid $header-bg
</style>