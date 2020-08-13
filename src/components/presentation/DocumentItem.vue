<template>
  <div class="document-item">
    <div class="document-item-name">{{name}}</div>
    <div class="document-item-date">{{formattedDate}}</div>
  </div>
</template>

<script>
export default {
  name: "DocumentItem",
  props: {
    name: String,
    date: String,
  },
  computed: {
    formattedDate() {
      return this.date.split("T")[0].split("-").reverse().join("-");
    },
  },
};
</script>

<style lang="sass" scoped>
@import ../../assets/sass/colors

.document-item
  display: flex
  padding: 10px
  background-color: white
  &:nth-of-type(even)
    background-color: $document-odd-bg
  & > *
    flex: 1 0
  &-name
    max-width: 75%
    flex-basis: 75%
    overflow: hidden
    text-overflow: ellipsis
    white-space: nowrap
  &-date
    max-width: 25%
    flex-basis: 25%
</style>