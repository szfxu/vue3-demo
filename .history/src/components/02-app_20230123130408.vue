<template>
    <div>
        <p>{{num}}</p>
        <button @click="btn">{{num}}</button>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    setup() {
        let num = 20
        console.log(num)
    }
})
</script>