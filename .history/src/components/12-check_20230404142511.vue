<template>
  <input type="checkbox" v-model="checkAll">全选/全不选
  <ul>
    <li v-for="item,index in list" :key="index">
    <input type="checkbox">{{item}}
    </li>
  </ul>
</template>

<script lang='ts' setup>
import { reactive,toRefs,computed  } from 'vue'
let data = reactive({
  list:[10,20,30,40,50],
  checkList:[false, false, true, false, false]
})
let {list, checkList} = toRefs(data)

let checkAll = computed({
  get(){
    
  },
  set(){

  }
})
</script>

<style lang = "less" scoped>
  
</style>