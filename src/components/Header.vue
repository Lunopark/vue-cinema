<template>
<div class="container">
    <ul class="menu">
        <li class="menu_item"><a href="#">Top 5</a></li>
        <li class="menu_item"><a href="#">Popular</a></li>
        <li class="menu_item"><a href="#">About</a></li>
        <li>
            <input type="text">
        </li>
    </ul>
    </div>
</template>

<script>
export default {
    name:'Header'
}
</script>

<style scoped>
.menu{
    display: flex;
    text-align: center;
    padding: 25px;
}
.menu a{
    padding: 25px;
    text-decoration: none;
    color: #fff;
}
.menu a:hover, .menu a:focus, .menu a:active{
    color: #01b4e4;
}
</style>