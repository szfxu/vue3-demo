<template>
   <!-- 子组件 -->
   <p>{{num}}</p>
   <button @click="hdClick">按钮</button>
</template>
<script lang='ts' setup>
import {  defineProps, defineEmits } from 'vue'
    defineProps({
      num:{
         type: Number,
         default: 30
      }
    })
    const emit = defineEmits<{
         (event: 'fn',val: number): void
      }>()
    const hdClick = ()=>{
      // 以前通过$emit("自定义事件名",参数)
      emit("fn", 10)
    }
</script>
<style lang = "less" scoped>
    
</style>