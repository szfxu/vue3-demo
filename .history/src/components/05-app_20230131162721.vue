<template>
    <p>{{objRet.num}}</p>
</template>

<script lang='ts'>
import { defineComponent, reactive } from 'vue'
export default defineComponent({
    setup () {
        let obj = {
            num:20
        }
        let objRet = reactive(obj)
        console.log(111, objRet.num)
        return {
            objRet
        }
    }
})
</script>

<style lang = "less" scoped>
    
</style>