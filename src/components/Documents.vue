<template>
  <Wrapper>
    <template v-slot:header>
      <h1>Documents</h1>
    </template>
    <template v-slot:content>
      <h1>Welcome</h1>
    </template>
  </Wrapper>
</template>

<script>
import Wrapper from "./pesentation/Wrapper";
export default {
  name: "Documents",
  components: {
    Wrapper,
  },
};
</script>

<style>
</style>