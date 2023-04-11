<template>
    子组件:{{num}}
    <button @click="hdClick">按钮</button>
</template>

<script lang='ts' setup>
import {  } from 'vue'
defineProps({
    num:{
        type:Number,
        default:100
    }
})
// update:固定写法，后面的变量是父组件中v-model:后面的这个
 const emit = defineEmits<{
   (event: 'update:num'): void
}>()
const hdClick = ()=>{
    emit()
}

</script>

<style lang = "less" scoped>
    
</style>