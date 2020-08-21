<template>
  <div class="wrapper">
    <div class="wrapper-header">
      <slot name="header"></slot>
    </div>
    <div>
      <slot name="content"></slot>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>
@import ../../assets/sass/colors

.wrapper
  padding: 20px
  background-color: $wrapper-bg
  border-radius: 5px
  box-shadow: 1px 2px 3px rgba(black, .2)
  &-header
    position: relative
    display: flex
    margin-bottom: 15px
  &-title
    font-size: inherit
</style>