<template>
    <TopItem :popular="popular" />
</template>

<script>
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
      this.popular = data.results.slice(0, 5);
    })
  },
    components: {
        TopItem
    }
}
</script>

<style lang="scss">
.top{
    background: #fff;
}
</style>