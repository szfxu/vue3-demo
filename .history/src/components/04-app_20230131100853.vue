<template>
    <p ref="op">这是p标签</p>
</template>

<script lang='ts'>
import { defineComponent,ref } from 'vue'
export default defineComponent({
    setup () {
        let op = ref(); //获取绑定了ref，且值为op的标签
        console.log(op)
        return {

 
        }
    }
})
</script>

<style lang = "less" scoped>
    
</style>