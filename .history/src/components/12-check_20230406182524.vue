<template>
  <input type="checkbox" v-model="checkAll">全选/全不选
  <ul>
    <li v-for="item,index in list" :key="index">
    <input type="checkbox" v-model="checkList[index]">{{item}}
    </li>
  </ul>
</template>

<script lang='ts' setup>
import { reactive,toRefs,computed  } from 'vue'
let data = reactive({
  list:[10,20,30,40,50],
  checkList:[false, false, false, false, false]
})
let {list, checkList} = toRefs(data)

let checkAll = computed({
  get(){
    //checkAll 受checkList 这个数组的影响
    // checkList 包含一个false, 就应该返回false
    return !data.checkList.includes(false)
  },
  set(newVal){

  }
})
</script>

<style lang = "less" scoped>
  
</style>