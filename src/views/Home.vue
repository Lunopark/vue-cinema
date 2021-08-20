<template>
  <div class="home">
    <Slider :popular="popular" />
  </div>
</template>

<script>
import server from '@/assets/libs/server';
import Slider from '@/components/Slider.vue'

export default {
  name: 'Home',
  data(){
    return{
      hello: 'Hello page',
      popular: []
    }
  },
  created() {
      server('popular').then(data => {
      this.popular = data.results.slice(0, 5)
    })
  },
  mounted() {
    console.log(1);
  },
  beforeUpdate() {
    console.log(2);
  },
  updated() {
    console.log(3);
  },
  components: {
    Slider
  }
}
</script>
