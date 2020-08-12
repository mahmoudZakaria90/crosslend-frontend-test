<template>
  <Wrapper>
    <template v-slot:header>
      <h2 role="button" class="wrapper-title">Filter</h2>
    </template>
    <template v-slot:content></template>
  </Wrapper>
</template>

<script>
import Wrapper from "./pesentation/Wrapper";
export default {
  name: "FilterForm",
  components: {
    Wrapper,
  },
  data() {
    return {};
  },
};
</script>

<style lang="sass" scoped>
</style>