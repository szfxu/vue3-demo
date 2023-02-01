<template>
    <!-- watch 监听数据的改变 -->
    <p>{{objRet.num}}</p>
    <button @click="objRet.num++">新增</button>
</template>

<script lang='ts' setup>
import { ref, watch, reactive, toRefs } from 'vue'
let obj = {
    num:50
}
let objRet = reactive(obj)
//watch 后面的 [] 监听数据
watch([()=>objRet.num], (newVal, oldVal)=>{
    console.log(111, newVal, oldVal)
})
</script>

<style lang = "less" scoped>
    
</style>