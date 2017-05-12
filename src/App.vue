<template>
  <div>
    <text @click="jump('/')">首页</text>
    <text @click="jump('/latest')">list</text>
    <router-view style="flex:1"></router-view>
  </div>
</template>

<script>
  export default {
    methods: {
      back: function () {
        this.$router.back()
      },
      jump (to) {
        this.$router.push(to)
      }
    }
  }
</script>