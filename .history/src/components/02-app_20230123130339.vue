<template>
    <div>
        <p>{{num}}</p>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    setup() {
        let num = 20
    }
})
</script>