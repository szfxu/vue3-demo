<template>
      <!-- ref方法（操作复杂数据类型） -->
      <p>{{objRef.num}}</p>
      <button @click="objRef.num++">按钮</button>
      <button @click="hdClick"></button>
</template>

<script lang='ts'>
import { defineComponent, ref } from 'vue'
export default defineComponent({
    setup () {
        let obj = {
            num:31
        }
        let objRef = ref(obj)
        const hdClick = ()=>{
            objRef.value.num +=5
        }
        console.log(111, objRef)
        return {
            obj,
            objRef
        }
    }
})
</script>
<style lang = "less" scoped>
    
</style>