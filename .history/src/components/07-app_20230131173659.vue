<template>
    <p>{{num}}</p>
</template>

<script lang='ts' setup>
import { reactive, toRefs } from 'vue';

 let obj = {
    num:21
 }
 let objRet = reactive(obj)
 let {num} = toRefs(objRet)
</script>

<style lang = "less" scoped>
    
</style>