<template>
    <div>
        <!-- ref方法（操作基本数据类型） -->
        <p>{{num}}</p>
        <button @click="num++">按钮1</button>
        <button @click="btn">按钮2</button>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref, Ref } from 'vue';
export default defineComponent({
    setup() {
        //let num = 20; //这个样子定义的数据不是响应式的（做不到双向绑定数据，做不到影响界面的变化）
        let num:Ref<number>= ref(20) // 这个num 是Vue内部封装的一个响应式对象数据
        //num.value 才能真正的拿到20的这个数据
        //所以，以后在js中要操作这种响应式数据，需要.value
        // 但是模板上依旧使用{{num}} 原因是Vue在编译模板的时候帮我们用了.value 获取了一次
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