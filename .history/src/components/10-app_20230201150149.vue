<template>
    <p>{{dbNum}}</p>
    <button @click="num++">按钮</button>
    <p>{{dbNum2}}</p>
    <button @click="objRet.num++">按钮2</button>
</template>
<script lang='ts' setup>
import { ref, computed, reactive } from 'vue'
    let num = ref(20)
    // 返回值就是计算属性的值, 接收返回值之后，可以在上面直接展示
    let dbNum = computed(()=>{
        return num.value *2
    })
    let obj = {
        num:60
    }
    let objRet = reactive(obj)
   let dbNum2 =  computed(()=>{
        return objRet.num * 2
    })
    computed({
     get() {
        
     },
     set() {

     }   
    })
</script>

<style lang = "less" scoped>
    
</style>