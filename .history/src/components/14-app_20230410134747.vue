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
            <button>按钮 {{scope.title}}</button>
        </template>
        
    </Child>
</template>

<script lang='ts' setup>
import Child from './14-appChild.vue'
import {  } from 'vue'

</script>

<style lang = "less" scoped>
    
</style>