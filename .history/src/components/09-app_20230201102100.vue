<template>
    <!-- watch 监听数据的改变 -->
    <p>{{num}}</p>
    <button @click="num++">新增</button>
</template>

<script lang='ts' setup>
import { ref, watch, reactive, toRefs } from 'vue'
let obj = {
    num:20
}
let objRet = reactive(obj)
let {num} = toRefs(objRet)
watch(num, (newVal, oldVal)=>{
    console.log(111, newVal, oldVal)
})
</script>

<style lang = "less" scoped>
    
</style>