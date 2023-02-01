<template>
    <p>{{objRet.num}}</p>
</template>

<script lang='ts'>
import { defineComponent, reactive, ref } from 'vue'
export default defineComponent({
    setup () {
        let obj = {
            num:20
        }
        let objRet = reactive(obj)
        console.log(111, objRet.num)

        let obj2 = {
            num:20
        }
        let objRef = ref(obj2)

        return {
            objRet
        }
    }
})
</script>

<style lang = "less" scoped>
    
</style>