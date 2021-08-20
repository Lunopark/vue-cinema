<template>
    <div>
        <section class="slider" v-for="(movie,index) in popular" :key="index">
            <img :src="'https://image.tmdb.org/t/p/original/' + movie.backdrop_path" alt="">
            <div class="container">
                <article class="slider-desc">
                <h2>{{ movie.title }}</h2>
                <p class="desc">{{ movie.overview }}</p>
            </article>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'Slider',
    props: ['popular'],
    mounted() {
        console.log(1.1)
    }
}
</script>

<style lang="scss">
.slider{
    position: relative;
    .slider-desc{
        background: #000;
        background: -moz-linear-gradient(top, rgba(#fff,1) 0%, rgba(#000,1) 100%);
        background: -webkit-linear-gradient(top, rgba(#fff,1) 0%, rgba(#000,1) 100%);
        background: linear-gradient(to bottom, rgba(#fff,1) 0%, rgba(#000,1) 100%);
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        color: #fff;
    }
}
</style>