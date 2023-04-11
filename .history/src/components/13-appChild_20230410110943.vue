<template>
    子组件:{{num}}
    <button @click="hdClick">按钮</button>
</template>

<script lang='ts' setup>
import {  } from 'vue'
let props = defineProps({
    num:{
        type:Number,
        default:100
    }
})
// update:固定写法，后面的变量是父组件中v-model:后面的这个
let n = props.num
 const emit = defineEmits<{
   (event: 'update:num',n:number): void
}>()
// emit(上面的event的值，要修改的值)
const hdClick = ()=>{
    n++
    emit('update:num',n)
}
</script>

<style lang = "less" scoped>
    
</style>