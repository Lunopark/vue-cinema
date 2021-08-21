<template>
  <div>
      <h1 class="list-title">Список фильмов</h1>
      <section class="about-item" v-for="(movie, index) in popular" :key="index">

        <article class="about-desc">
          <div class="container">
            <img :src="'https://image.tmdb.org/t/p/w500/' + movie.backdrop_path" alt="">
            <h2 class="about-title">{{movie.title}}
            <span class="descrip">{{movie.overview}}</span>
            </h2>
          </div>

        </article>
        <hr />
      </section>
  </div>
</template>

<script>
export default {
  name: "List",
  props: ['popular'],
  mounted() {
    console.log(1.1);
  }
}
</script>

<style lang="scss" scoped>
.list-title{
    background: #fff;
    color: #000;
    text-align: center;
}
.about-desc{
    padding: 15px;
    background: #fff;
    display: flex;
}
.about-title{
    width: 50%;
    float: right;
}
.descrip{
    margin-top: 15px;
    font-size: 20px;
    font-weight: normal;
    width: 100%;
    float: right;
}
</style>