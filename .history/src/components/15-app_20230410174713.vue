<template>
    <Table :arr="state.arr">
        <template #btns="scope">
            <button @click="hdClick(scope.index)">编辑</button>
        </template>
    </Table>
    <Table :arr="state.arr">
        <template #btns>
            <button>编辑</button>
            <button>删除</button>
        </template>
    </Table>
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
const hdClick = (index:number)=>{
    console.log(111, state.arr[index])
}
</script>

<style lang = "less" scoped>
    
</style>