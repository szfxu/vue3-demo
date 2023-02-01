<template>
    <p>{{num}}</p>
</template>

<script lang='ts' setup>
import { reactive } from 'vue';

 let obj = {
    num:21
 }
 let objRet = reactive(obj)
</script>

<style lang = "less" scoped>
    
</style>