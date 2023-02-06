<template>
     <Child :num="num"></Child>
</template>

<script lang='ts' setup>
import Child from "./11-appChild.vue"
import { ref } from 'vue'
let num = ref(20)
</script>

<style lang = "less" scoped>
    
</style>