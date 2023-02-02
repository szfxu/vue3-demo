<template>
    <p>{{dbNum}}</p>
</template>

<script lang='ts' setup>
import { ref, computed } from 'vue'
    let num = ref(20)
   let dbNum = computed(()=>{
        return num.value *2
    })
</script>

<style lang = "less" scoped>
    
</style>