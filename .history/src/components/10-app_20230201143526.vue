<template>
    <p>{{dbNum}}</p>
    <button @click="num++">按钮</button>
</template>
<script lang='ts' setup>
import { ref, computed } from 'vue'
    let num = ref(20)
   let dbNum = computed(()=>{
        return num.value *2
    })

    let obj = {
        num:20
    }
    let objRet = reactive(obj)
</script>

<style lang = "less" scoped>
    
</style>