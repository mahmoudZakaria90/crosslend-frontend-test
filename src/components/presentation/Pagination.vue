<template>
  <div class="pagination">
    <div class="pagination-group">
      <button class="pagination-btn" @click="firstPage" :disabled="currentPage === 1">
        <FontAwesomeIcon :icon="['fas','angle-double-left']" />
      </button>
      <button class="pagination-btn" @click="prevPage" :disabled="this.currentPage === 1">
        <FontAwesomeIcon :icon="['fas','angle-left']" />
      </button>
      <span class="pagination-status">{{currentPage}} of {{totalPages}}</span>
      <button class="pagination-btn" @click="nextPage" :disabled="currentPage === totalPages">
        <FontAwesomeIcon :icon="['fas','angle-right']" />
      </button>
      <button class="pagination-btn" @click="lastPage" :disabled="currentPage === totalPages">
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
    totalPages: Number,
    documentsLength: Number,
  },
  data() {
    return {
      currentPage: 1,
      sliceStart: 0,
      sliceEnd: Number(process.env.VUE_APP_DOCUMENTS_SIZE),
    };
  },
  methods: {
    firstPage() {
      this.currentPage = 1;
      this.sliceStart = 0;
      this.sliceEnd = Number(process.env.VUE_APP_DOCUMENTS_SIZE);
      eventBus.$emit("updatingPages", {
        start: this.sliceStart,
        end: this.sliceEnd,
      });
    },
    nextPage() {
      const { VUE_APP_DOCUMENTS_SIZE } = process.env;
      if (this.currentPage < this.totalPages) {
        this.currentPage = this.currentPage + 1;
        this.sliceStart = this.sliceStart + Number(VUE_APP_DOCUMENTS_SIZE);
        this.sliceEnd = this.sliceEnd + Number(VUE_APP_DOCUMENTS_SIZE);
        eventBus.$emit("updatingPages", {
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
        eventBus.$emit("updatingPages", {
          start: this.sliceStart,
          end: this.sliceEnd,
        });
      }
    },
    lastPage() {
      const { VUE_APP_DOCUMENTS_SIZE } = process.env;
      this.currentPage = this.totalPages;
      this.sliceStart = this.documentsLength - Number(VUE_APP_DOCUMENTS_SIZE);
      this.sliceEnd = this.documentsLength;
      eventBus.$emit("updatingPages", {
        start: this.sliceStart,
        end: undefined,
      });
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
        &:disabled
            border-color: $title-color
            color: $title-color
            cursor: default
</style>