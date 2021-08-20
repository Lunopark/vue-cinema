<template>
  <div class="home">
    <Header />
    <Slider :popular="popular" />
    <Top />
  </div>
</template>

<script>
import server from "@/assets/libs/server";
import Header from "@/components/Header"
import Slider from "@/components/Slider";
import Top from "@/components/Top"

export default {
  name: 'Home',
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
    Slider,
    Top,
    Header
  }
}
</script>
