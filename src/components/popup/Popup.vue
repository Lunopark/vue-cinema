<template>
<div class="popup-wrapper">
    <div class="popup">
        <div class="popup-header">
            <span>Preview</span>
            <span>
                <i class="material-icons" @click="closePopup">close</i>
            </span>
        </div>
        <div class="popup-content">
            <slot></slot>
        </div>
        <div class="popup-footer">
            <button class="popup-btn">Перейти</button>
        </div>
    </div>  
</div>  
</template>

<script>
export default {
    name: 'Popup',
    props: ['popular'],
    data() {
        return {}
    },
    methods: {
        closePopup() {
            this.$emit('closePopup')
        }
    },
}
</script>

<style lang="scss">
.popup-wrapper{
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
}
.popup{
    padding: 16px;
    position: fixed;
    top: 50px;
    width: 400px;
    background: #fff;
    box-shadow: 0 0 17px 0 #e7e7e7;
    z-index: 10;
    &-header{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    &-content, &-footer{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    &-btn{
        background: #fff;
        border: 1px solid #01b4e4;
        border-radius: 25px;
        padding: 5px 25px;
        color: #01b4e4;
    }
    &-btn:active, &-btn:focus, &-btn:hover {
        background: #0d253f;
    }
    .material-icons{
        cursor: pointer;
    }
}
</style>