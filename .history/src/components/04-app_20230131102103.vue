<template>
    <p ref="op">这是p标签</p>
</template>

<script lang='ts'>
import { defineComponent,ref, onMounted } from 'vue'
export default defineComponent({
    setup () {
        let op = ref(); //获取绑定了ref，且值为op的标签
        console.log("setup",op.value)
        onMounted(()=>{
            console.log("onMounted", op.value) //挂载完毕之后，才能获取到元素
        })
        return {
            op
        }
    }
})
</script>

<style lang = "less" scoped>
    
</style>