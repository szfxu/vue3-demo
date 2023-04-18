<template>
    <!-- 能够把里面的标签传送到指定标签的最后的位置 -->
    <Teleport to="#aaa">
        <p>这是一个p标签</p>
    </Teleport>
    <Table :arr="state.arr">
        <template #btns="{index}">
            <button @click="hdClick(index)">编辑</button>
        </template>
    </Table>
    <div id="aaa"></div>
    <Table :arr="state.arr">
        <template #btns>
            <button>编辑</button>
            <button>删除</button>
        </template>
    </Table>
</template>

<script lang='ts' setup>
// import Table from "./15-appChild.vue"
import Table from '@'
import {  reactive } from 'vue'
let state = reactive({
    arr:[{
        name:"小明",
        age:28
    },{
        name:"小红",
        age:20
    }]
})
const hdClick = (index:number)=>{
    console.log(111, state.arr[index])
}
console.log(globdata)
console.log(globObj)
fn('')
$('#app')
$.ajax()
</script>

<style lang = "less" scoped>
    
</style>