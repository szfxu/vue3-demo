<template>
    <!-- watch 监听数据的改变 -->
    <p>{{num}}</p>
    <button @click="num++"></button>
</template>

<script lang='ts' setup>
import { ref } from 'vue'
let num = ref(20)
    
</script>

<style lang = "less" scoped>
    
</style>