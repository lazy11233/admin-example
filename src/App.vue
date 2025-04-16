<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div>
    <RouterLink to="/">首页</RouterLink>
    <RouterLink to="/login">Login</RouterLink>
    <RouterLink to="/register">Login</RouterLink>
  </div>

  <RouterView />
</template>
