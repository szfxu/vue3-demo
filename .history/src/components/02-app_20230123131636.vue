<template>
    <div>
        <p>{{num}}</p>
        <button @click="btn">按钮1</button>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    setup() {
        let num = ref(20)
        console.log(num)
        const btn = ()=>{
            console.log(num++)
        }
        return {
            num,
            btn
        }
    }
})
</script>