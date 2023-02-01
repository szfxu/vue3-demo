<template>
      <!-- ref方法（操作复杂数据类型） -->
      <p>{{obj.num}}</p>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
export default defineComponent({
    setup () {
        let obj = {
            num:99
        }
        return {
            obj
 
        }
    }
})
</script>

<style lang = "less" scoped>
    
</style>