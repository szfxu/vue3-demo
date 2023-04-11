<template>
     <!-- 父组件 -->
     <Child :num="num" @fn="changeNum"></Child>
</template>

<script lang='ts' setup>
import Child from "./11-appChild.vue"
import { ref } from 'vue'
let num = ref(20)
const changeNum = (val:number)=>{
     num.value+=val
}
</script>
<style lang = "less" scoped>
    
</style>