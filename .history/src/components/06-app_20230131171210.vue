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
        const hdClick = ()=>{
            num.value++
            console.log(222, num.value)
        }
        let {num} = toRefs(reactive(obj))
   
        //toRefs 把reactive 转化成ref的格式，这样就可以使用.value
        return {
            num,
            hdClick
        }
    }
})
</script>

<style lang = "less" scoped>
    
</style>