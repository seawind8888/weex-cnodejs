<template>
    <div class="header-container">
        <image class="header-icon" @click="pushListEmit()" src="http://tz88.com.cn/imgs/list.png"></image>
        <text class="hedaer-info">{{titleInfo}}</text>
        <image class="header-icon" src="http://tz88.com.cn/imgs/edit.png"></image>
    </div>
</template>
<style>
.header-container {
    height: 100px;
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    top: 0;
    left: 0;
    right: 0; 
    padding-left: 20px;
    padding-right: 20px;
    background-color: #444444;
}
.hedaer-info {
    color: #ffffff;
    text-align: center;
    line-height: 100px;
    flex:1;
    font-size: 32
}
.header-icon {
    width: 50px;
    height: 50px
}
</style>
<script>
    export default {
        props: ['titleInfo'],
        methods: {
            pushListEmit() {
                this.$emit('pushEmit')
            }
        }
    }
</script>

