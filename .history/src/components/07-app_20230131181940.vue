<template>
    <p>{{num}}</p>
    <button @click="num++">增加</button>
</template>

<script lang='ts' setup>
//setup 语法糖加上之后，script 之间的代码会被Vue 内部自动添加到原先的setup方法上
import { reactive, toRefs } from 'vue';
 let obj = {
    num:21
 }
 let objRet = reactive(obj)
 let {num} = toRefs(objRet)
</script>
<style lang = "less" scoped>
    
</style>