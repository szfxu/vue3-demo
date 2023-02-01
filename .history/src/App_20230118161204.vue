<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'

/*
"scripts": {
    "dev": "vite --host",
    "build": "vue-tsc && vite build",
    "preview": "vite preview"
  },
  npm run dev 开发环境下的命令
  npm run build 打包命令
  npm run preview  提供启动预览的服务器
*/

</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
