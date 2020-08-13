<template>
  <div class="filter-date-wrap">
    <FontAwesomeIcon class="filter-date-icon" :icon="['far', 'calendar']" />
    <Datepicker
      class="filter-date-picker"
      v-model="injectedVal"
      :placeholder="placeholder"
      :format="'dd-MM-yyyy'"
      :open-date="openDate"
      :disabled="disabled"
      :disabled-dates="disabledDates"
      :required="required"
    >From</Datepicker>
    <FontAwesomeIcon class="filter-date-icon filter-date-chevron" :icon="['fas', 'chevron-down']" />
  </div>
</template>

<script>
import Datepicker from "vuejs-datepicker";
export default {
  name: "DatePicker",
  components: {
    Datepicker,
  },
  props: {
    disabled: Boolean,
    disabledDates: Object,
    placeholder: String,
    required: Boolean,
    openDate: Date,
  },
  data() {
    return {
      injectedVal: this.value,
    };
  },
  watch: {
    injectedVal() {
      this.$emit("input", this.injectedVal);
    },
  },
};
</script>

<style lang="sass" scoped>
@import ../../assets/sass/colors
.filter
    &-date
        &-wrap
            position: relative
            margin-bottom: 10px
        &-icon
            position: absolute
            top: 50%
            left: 10px
            transform: translate(0, -50%)
            z-index: 1
            pointer-events: none
        &-chevron
            right: 10px
            left: auto
            color: $btn-bg
</style>