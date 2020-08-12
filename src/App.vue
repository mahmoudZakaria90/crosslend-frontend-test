<template>
  <div class="row">
    <Documents></Documents>
  </div>
</template>

<script>
import Documents from "./components/Documents";
export default {
  name: "App",
  components: {
    Documents,
  },
  data() {
    return {
      documents: [],
    };
  },
  async mounted() {
    const request = await fetch(
      "https://frontend.apply.crosslend.dev/documents.json"
    );
    const response = await request.json();
    const { documents } = response;
    const filtered = documents.filter((document) => {
      const dateOnly = document.date.split("T");
      const startDate = 1491004800000;
      const endDate = 1510358400000;
      const dateTimestamp = new Date(dateOnly).getTime();
      return dateTimestamp >= startDate && dateTimestamp <= endDate;
    });
    console.log(filtered);
  },
};
</script>

<style>
</style>
