<template>
  <div class="wrapper">
    <slot name="header"></slot>
    <slot name="content"></slot>
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
</style>