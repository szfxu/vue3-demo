<template>
    <!-- watch 监听数据的改变 -->
    <p>{{num}}</p>
    <button @click="num++">新增</button>
</template>

<script lang='ts' setup>
import { ref, watch } from 'vue'
let num = ref(20)
watch()
</script>

<style lang = "less" scoped>
    
</style>