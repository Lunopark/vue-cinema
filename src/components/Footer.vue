<template>
    <footer class="footer">
        <div class="container">
            <img src="../assets/tmdblogo.svg" class="tmdblogo" alt="">
            <img src="../assets/bladelogo.png" class="bladelogo" alt="">
            <p class="footer_text">Movie DB app on Vue.js | by Rostislav Podolskiy</p>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style scoped>
footer{
    background: #0d253f;
    border-top: 1px solid #01b4e4;
    min-height: 65px;
    padding: 10px;
    align-items: center;
}
.tmdblogo{
    margin-top: 5px;
    width: 100px;
    float: left;
}
.bladelogo{
    width: 50px;
    float: right;
}
.footer_text{
    padding: 15px;
    color: #01b4e4;
    text-align: center;
}
</style>