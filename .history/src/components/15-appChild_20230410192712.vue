<template>
    <table>
        <tr>
            <td>姓名</td>
            <td>年龄</td>
            <td>操作</td>
        </tr>
        <tr v-for="item,index in arr2" :key="index">
            <!-- 让item 按照 {name: string} 这个类型来展示/使用 -->
            <td>{{item.name}}</td>
            <td>{{item.age}}</td>
            <!-- <td>{{(item as {age:number}).age}}</td> -->
            <td>
                <slot name="btns" :index="index"></slot>
            </td>
        </tr>
    </table>
</template>

<script lang='ts' setup>
import {  } from 'vue'
let props = defineProps({
    arr:{
        type: Array,
        default:[]
    }
})

// 定义一个接口 UserType 
// 如何取到arr,就是定义的props
let arr2 = props.arr as UserType[]
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