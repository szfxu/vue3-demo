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
 const emit = defineEmits<{
   (event: 'change'): void
}>()
const hdClick = ()=>{
    emit()
}

</script>

<style lang = "less" scoped>
    
</style>