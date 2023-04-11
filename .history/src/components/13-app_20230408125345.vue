<template>
    <!-- v-model 传值 -->
    <Child v-model:num="num"></Child>
</template>
<script lang='ts' setup>
import Child from './13-appChild.vue'
import {  ref  } from 'vue'
let num = ref(100)
</script>

<style lang = "less" scoped>
    
</style>