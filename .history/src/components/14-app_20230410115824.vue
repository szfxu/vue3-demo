<template>
    <Child>
        <template v-slot:link>

        </template>
        <a href="#">a标签</a>
        <button>按钮</button>
    </Child>
</template>

<script lang='ts' setup>
import Child from './14-appChild.vue'
import {  } from 'vue'

</script>

<style lang = "less" scoped>
    
</style>