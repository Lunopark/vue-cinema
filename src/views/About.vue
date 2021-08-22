<template>
  <div class="about">
    <Header />
    <List :popular="popular" />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header";
import server from "@/assets/libs/server";
import List from "@/components/List";
import Footer from "@/components/Footer";

export default {
  name: "About",
  data() {
    return {
      popular: [],
    };
  },
  created() {
    server("popular").then((data) => {
      this.popular = data.results;
    });
  },
  components: {
    List,
    Header,
    Footer
  },
};
</script>

<style scoped>

</style>