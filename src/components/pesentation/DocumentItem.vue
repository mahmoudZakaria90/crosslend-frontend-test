<template>
  <div class="document-item">
    <div class="document-item-name">document-from-2018.pdf</div>
    <div class="document-item-date">01-02-2018</div>
  </div>
</template>

<script>
export default {
  name: "DocumentItem",
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
    &-name
        flex-grow: 2
    &-date
        flex-grow: 1
</style>