<template>
    <!-- watch 监听数据的改变 -->
    <p>{{objRet.num}}</p>
    <button @click="objRet.num++">新增</button>
</template>

<script lang='ts' setup>
import { ref, watch, reactive, toRefs, watchEffect } from 'vue'
let obj = {
    num:50
}
let objRet = reactive(obj)
//watch 后面的 [] 监听数据[]
// watch([()=>objRet.num], (newVal, oldVal)=>{
//     console.log(111, newVal, oldVal)
// })

// 在页面刷新的时候就立即监听
// 如果是拿到新旧值的话，那就用watch

watchEffect(()=>{
    // 凡是写在这里的数据，只要发生变化，都会触发这里的代码执行

    // 如果
    console.log(objRet.num)
})


</script>

<style lang = "less" scoped>
    
</style>