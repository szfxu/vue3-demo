<template>
   <!-- 子组件 -->
   <p>{{num}}</p>
</template>
<script lang='ts' setup>
import {  defineProps } from 'vue'
    defineProps({
      num:{
         type: Number,
         default: 0
      }
    })
</script>

<style lang = "less" scoped>
    
</style>