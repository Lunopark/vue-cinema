<template>
<div class="container">
    <img src="../assets/bladelogo.png" class="headerlogo" alt="">
    <nav>
    <ul class="menu">
        <li class="menu_item"><a href="/">General</a></li>
        <li class="menu_item"><a href="#/about">About</a></li>
        <li class="menu_item">
             <input type="text" class="search" v-model="search" placeholder="Write for search" />
            <!-- <button class="search-btn" @click="searchHandler"><i class="material-icons">search</i></button> -->
        </li>
    </ul>
    </nav>
    </div>
</template>

<script>
export default {
    name:'Header',
    data() {
        return{
            search: ''
        }
    },
    computed: {
        filterPopular(){
            return this.popular.filter(movie => movie.title.includes(this.search))
        }            
        
    }
}
</script>

<style scoped>
.menu{
    align-items: center;
    display: flex;
    justify-content: flex-end;
    text-align: center;
    padding: 25px;
    background: #0d253f;
}
.menu a{
    padding: 25px;
    text-decoration: none;
    color: #fff;
}
.menu a:hover, .menu a:focus, .menu a:active{
    color: #01b4e4;
}
.search{
    margin-left: 25px;
    background: #0d253f;
    border: 1px solid #01b4e4;
    border-radius: 25px;
    padding: 5px 25px;
    color: #01b4e4;
}
.search:focus, .search:active{
    background: #fff;
}
.headerlogo{
    margin-top: 10px;
    width: 50px;
    float: left;
}
</style>