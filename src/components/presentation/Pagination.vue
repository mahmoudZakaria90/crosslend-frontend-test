<template>
  <div class="pagination">
    <div class="pagination-group">
      <button class="pagination-btn">
        <FontAwesomeIcon :icon="['fas','angle-double-left']" />
      </button>
      <button class="pagination-btn" @click="prevPage">
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
import { eventBus } from "../../utils/";
export default {
  name: "Pagination",
  props: {
    pageLength: Number,
  },
  data() {
    return {
      currentPage: 1,
      sliceStart: 0,
      sliceEnd: Number(process.env.VUE_APP_DOCUMENTS_SIZE),
    };
  },
  methods: {
    nextPage() {
      const { VUE_APP_DOCUMENTS_SIZE } = process.env;
      if (this.currentPage < this.pageLength) {
        this.currentPage = this.currentPage + 1;
        this.sliceStart = this.sliceStart + Number(VUE_APP_DOCUMENTS_SIZE);
        this.sliceEnd = this.sliceEnd + Number(VUE_APP_DOCUMENTS_SIZE);
        eventBus.$emit("nextPage", {
          start: this.sliceStart,
          end: this.sliceEnd,
        });
      }
    },
    prevPage() {
      const { VUE_APP_DOCUMENTS_SIZE } = process.env;
      if (this.currentPage > 1) {
        this.currentPage = this.currentPage - 1;
        this.sliceStart = this.sliceStart - Number(VUE_APP_DOCUMENTS_SIZE);
        this.sliceEnd = this.sliceEnd - Number(VUE_APP_DOCUMENTS_SIZE);
        eventBus.$emit("prevPage", {
          start: this.sliceStart,
          end: this.sliceEnd,
        });
      }
    },
  },
  mounted() {
    eventBus.$emit("loadingPages", {
      start: this.sliceStart,
      end: this.sliceEnd,
    });
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