<template>
  <Wrapper>
    <template v-slot:header>
      <h2 class="wrapper-title">Filter</h2>
      <button class="filter-form-close" @click="handleClose">
        <FontAwesomeIcon :icon="['fas', 'times']" />
      </button>
    </template>
    <template v-slot:content>
      <form action class="filter-form" @submit.prevent="handleSubmit">
        <DatePicker
          id="start_date"
          v-model="startDate"
          :openDate="new Date('October, 2017')"
          :placeholder="'From'"
          :required="true"
        />
        <DatePicker
          id="end_date"
          v-model="endDate"
          :placeholder="'To'"
          :openDate="new Date(startDate)"
          :disabled="!startDate"
          :disabledDates="{
          to: new Date(startDate)
        }"
        />
        <button class="filter-form-btn" type="submit" :disabled="!startDate">Apply filters</button>
        <button
          class="filter-form-btn filter-form-clear"
          type="reset"
          @click="handleClear"
          :disabled="!startDate"
        >Clear filters</button>
      </form>
    </template>
  </Wrapper>
</template>

<script>
import DatePicker from "./presentation/DatePicker";
import Wrapper from "./presentation/Wrapper";

import { eventBus } from "../utils/";

export default {
  name: "FilterForm",
  components: {
    DatePicker,
    Wrapper,
  },
  data() {
    return {
      startDate: null,
      endDate: null,
    };
  },
  methods: {
    handleSubmit() {
      const startDate = new Date(this.startDate);
      const endDate = this.endDate ? new Date(this.endDate) : Date.now();

      //Remove timezones
      startDate.setHours(0, -startDate.getTimezoneOffset(), 0, 0);
      this.endDate && endDate.setHours(0, -endDate.getTimezoneOffset(), 0, 0);

      const startDateISO = startDate.toISOString();
      const endDateISO = this.endDate ? endDate.toISOString() : endDate;
      const startTimestamp = new Date(startDateISO).getTime();
      const endTimestamp = new Date(endDateISO).getTime();
      eventBus.$emit("filter", {
        startTimestamp,
        endTimestamp,
      });
    },
    handleClear() {
      eventBus.$emit("reset");
      eventBus.$emit("resetDocuments");
    },
    handleClose() {
      this.$parent.$refs.filter.classList.remove("is-shown-sm");
    },
  },
};
</script>

<style lang="sass" scoped>
@import ../assets/sass/colors
.filter
  &-header
    position: relative
  &-form
    &-btn
      display: block
      width: 100%
      height: 50px
      background-color: $btn-bg
      border-radius: 5px
      margin-top: 15px
      color: white
      &:disabled
        background-color: $title-color
        cursor: default
    &-clear
      background-color: $btn-clear-bg
    &-close
      display: none
      position: absolute
      top: 0
      right: 0
      font-size: 20px
      outline: none
      @media(max-width: 768px)
        display: block
</style>