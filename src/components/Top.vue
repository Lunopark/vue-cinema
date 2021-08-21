<template>
<div class="container">
  <div class="top">
    <h1>Популярные фильмы</h1>
    <TopItem :popular="popular" />
  </div>
</div>
</template>

<script>
import server from "@/assets/libs/server";
import TopItem from "@/components/TopItem";

export default {
    name: 'Top',
    data(){
    return {
      popular: []
    }
  },
  created() {
    server('popular').then(data => {
      this.popular = data.results.slice(5, 10);
    })
  },
    components: {
        TopItem
    }
}
</script>

<style lang="scss">
 h1 {
        color: #fff;
        text-align: center;
    }
.top{
    align-items: center;
    display: inline-block;
    justify-content: space-between;
    text-align: center;
    padding: 25px 0 25px 0;
}
</style>