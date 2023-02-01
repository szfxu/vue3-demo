<template>
    <!-- watch 监听数据的改变 -->
    <p>{{num}}</p>
    <button @click="num++">新增</button>
</template>

<script lang='ts' setup>
import { ref, watch } from 'vue'
// let num = ref(20)
// watch(要监听的响应式数据，数据更新的时候执行的回调函数)
// watch(num,(newVal, oldVal)=>{
//     console.log(111, newVal, oldVal)
// })
let obj = {
    num:20
}
</script>

<style lang = "less" scoped>
    
</style>