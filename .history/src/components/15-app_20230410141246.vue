<template>
    <Table :arr="state.arr"></Table>
</template>

<script lang='ts' setup>
import Table from "./15-appChild.vue"
import {  reactive } from 'vue'
let state = reactive({
    arr:[{
        name:"小明",
        age:"18"
    },{
        name:"小红",
        age:"20"
    }]
})

</script>

<style lang = "less" scoped>
    
</style>