<template>
    <table>
        <tr>
            <td>姓名</td>
            <td>年龄</td>
            <td>操作</td>
        </tr>
        <tr v-for="item,index in arr" :key="index">
            <td>{{item.}}</td>
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

<style lang = "less" scoped>
    
</style>