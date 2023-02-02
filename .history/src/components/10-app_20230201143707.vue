<template>
    <p>{{dbNum}}</p>
    <button @click="num++">按钮</button>
</template>
<script lang='ts' setup>
import { ref, computed, reactive } from 'vue'
    let num = ref(20)
   let dbNum = computed(()=>{
        return num.value *2
    })
    let obj = {
        num:20
    }
    let objRet = reactive(obj)
    computed(()=>{
        return objRet.num * 2
    })
</script>

<style lang = "less" scoped>
    
</style>