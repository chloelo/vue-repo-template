<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/" class="mr-2">首頁</RouterLink>|
      <RouterLink to="/prime-vue-demo" class="mr-2">primeVue 範例</RouterLink>|
      <RouterLink to="/vee-validate-demo" class="mr-2">vee-validate 表單驗證範例</RouterLink>|
      <RouterLink to="/amcharts-demo">amcharts 圖表範例</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped lang="scss"></style>
