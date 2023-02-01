<template>
    <div>
        <p>{{num}}</p>
        <button @click="btn">按钮1</button>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
    setup() {
        //let num = 20; //这个样子定义的数据不是响应式的（做不到）
        let num = ref(20)
        console.log(num.value)
        const btn = ()=>{
            num.value++
            console.log(num.value++)
        }
        return {
            num,
            btn
        }
    }
})
</script>