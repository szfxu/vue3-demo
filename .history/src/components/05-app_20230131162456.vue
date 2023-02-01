<template>
    <p></p>
</template>

<script lang='ts'>
import { defineComponent, reactive } from 'vue'
export default defineComponent({
    setup () {
        let obj = {
            num:20
        }
        let objRet = reactive(obj)
        return {
            objRet
        }
    }
})
</script>

<style lang = "less" scoped>
    
</style>