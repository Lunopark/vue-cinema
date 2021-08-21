<template>
  <div class="home">
    <Popup v-if="PopupVisible" @closeWarning="closePopupWindow" />
    <Header />
    <Slider :popular="popular" />
    <Top />
    <Footer />
  </div>
</template>

<script>
import Popup from "@/components/Popup"
import server from "@/assets/libs/server";
import Header from "@/components/Header"
import Slider from "@/components/Slider";
import Top from "@/components/Top";
import Footer from "@/components/Footer";

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
  methods: {
    ShowPopup() { 
      this.PopupVisible = true
    },
    closeWarningWindow(){
      this.PopupVisible = false
  }
},
  components: { 
    Slider,
    Top,
    Header,
    Footer,
    Popup
  }
}
</script>
