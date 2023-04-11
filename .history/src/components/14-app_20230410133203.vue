<template>
    <Child>
        <!-- 匿名插槽和具名，插槽作用域 -->
        <template v-slot:link>
            <a href="#">a标签</a>
        </template>
        <template v-slot:btn>
            <button>按钮</button>
        </template>
    </Child>
</template>

<script lang='ts' setup>
import Child from './14-appChild.vue'
import {  } from 'vue'

</script>

<style lang = "less" scoped>
    
</style>