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
        let {num} = toRefs(reactive(obj))
        
        return {
            num
        }
    }
})
</script>

<style lang = "less" scoped>
    
</style>