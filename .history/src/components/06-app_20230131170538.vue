<template>
    <p>{{num}}</p>
    <button @click="hdClick"></button>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs } from 'vue'
export default defineComponent({
    setup () {
        let obj = {
            num:20
        }
        const hdClick = ()=>{
            num.value++
        }
        let {num} = toRefs(reactive(obj))
        
        return {
            num,
            hdClick
        }
    }
})
</script>

<style lang = "less" scoped>
    
</style>