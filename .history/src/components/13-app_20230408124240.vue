<template>
    <!-- v-model 传值 -->
    <Child v-model:num="num"></Child>
</template>
<script lang='ts' setup>
import child from './13-appChild.vue'
import {   } from 'vue'
let num = ref(20)
</script>

<style lang = "less" scoped>
    
</style>