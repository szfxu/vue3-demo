<template>
    <p>{{num}}</p>
    <button @click="hdClick">添加</button>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs } from 'vue'
export default defineComponent({
    setup () {
        let obj = {
            num:20
        }

        let {num} = toRefs(reactive(obj))
        const hdClick = ()=>{
            num.value++
        }
        
        return {
            num,
            hdClick
        }
    }
})
</script>

<style lang = "less" scoped>
    
</style>