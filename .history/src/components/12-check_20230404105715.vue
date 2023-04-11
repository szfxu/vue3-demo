<template>
  <input type="checkbox">全选/全不选
  <ul>
    <li v-for="item,index in list" :key="index">{{item}</li>
  </ul>
</template>

<script lang='ts' setup>
import { reactive,toRefs  } from 'vue'
let data = reactive({
  list:[10,20,30,40,50]
})
let {list} = toRefs(data)
</script>

<style lang = "less" scoped>
  
</style>