<template>
    <div>
        <div class="top-item" v-for="(movie, index) in popular" :key="index">
        <img :src="'https://image.tmdb.org/t/p/original/' + movie.backdrop_path" alt="">
        <h2>{{movie.title}}</h2>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TopItem',
    props: ['popular']
}
</script>

<style>
    .top-item{
        flex-basis: 25%;
        box-shadow: 0 0 8px 0 #e0e0e0;
        padding: 16px;
        margin-bottom: 16px;
    }
</style>