<template>
      <!-- ref方法（操作复杂数据类型） -->
      <p>{{objRef.num}}</p>
</template>

<script lang='ts'>
import { defineComponent, ref } from 'vue'
export default defineComponent({
    setup () {
        let obj = {
            num:31
        }
        let objRef = ref(obj)
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