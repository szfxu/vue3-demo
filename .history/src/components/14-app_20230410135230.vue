<template>
    <Child>
        <!-- 匿名插槽和具名，插槽作用域 -->
        <!-- 简写 v-slot: 写成 # -->
        <!-- <template v-slot:link>
            <a href="#">a标签</a>
        </template> -->
        <template #link>
            <a href="#">a标签1</a>
        </template>
        <template #btn="scope">
            <!-- scope 这个对象自定义的，但是一般都叫scope
            scope 专门收集所对应的子组件内部的scope标签的标签属性，作为自己的属性(除了name 属性)
            -->
            <button>按钮 {{scope.title}} {{scope.mybtn}}</button>
        </template>
        
    </Child>
</template>

<script lang='ts' setup>
import Child from './14-appChild.vue'
import {  } from 'vue'

</script>

<style lang = "less" scoped>
    
</style>