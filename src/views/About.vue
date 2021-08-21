<template>
  <div class="about">
    <Header />
    <List :popular="popular" />
  </div>
</template>

<script>
import Header from "@/components/Header";
import server from "@/assets/libs/server";
import List from "@/components/List";

export default {
  name: "About",
  data() {
    return {
      popular: [],
    };
  },
  created() {
    server("popular").then((data) => {
      this.popular = data.results.slice(0, 10);
    });
  },
  components: {
    List,
    Header
  },
};
</script>

<style scoped>
.about h1{
  text-align: center;
}
.about span{
  float: left;
}
</style>