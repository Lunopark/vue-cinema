<template>
    <div>
        
        <div class="top-item" v-for="(movie, index) in popular" :key="index">
        <img :src="'https://image.tmdb.org/t/p/w500/' + movie.backdrop_path" class="top-item_image" alt="">
        <h4 class="top-item_title">{{movie.title}}</h4>
        <p class="vote">рейтинг: {{movie.vote_count}}</p>
        <button class="btn">Preview</button>
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
        margin: 15px 8px;
        padding: 15px 7px 15px 7px;
        display: inline-block;
    }
    .top-item_image{
        width: 200px;
        margin-bottom: 5px;
    }
    h4{
        color: #fff;
        text-align: center;
        margin-bottom: 5px;
    }
    .vote{
        color: #fff;
        margin-bottom: 35px;
    }
</style>