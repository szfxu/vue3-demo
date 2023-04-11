<template>
    <table>
        <tr>
            <td>姓名</td>
            <td>年龄</td>
            <td>操作</td>
        </tr>
        <tr v-for="item,index in arr" :key="index">
            <!-- 让item 按照 {name: string} 这个类型来展示/使用 -->
            <td>{{(item as {name:string}).name}}</td>
            <td>{{(item as {age:number}).age}}</td>
            <td>
                <slot name="btns" :index2="index"></slot>
            </td>
        </tr>
    </table>
</template>

<script lang='ts' setup>
import {  } from 'vue'
defineProps({
    arr:{
        type: Array,
        default:[]
    }
})
</script>

<style  scoped>
table{
    border-collapse: collapse;
}
table,tr,td{
        border: 1px solid #000;
}
th,td{
    padding: 10px;
}
</style>