<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div>
    <RouterLink to="/">首页</RouterLink> |
    <RouterLink to="/login">Login</RouterLink> |
    <RouterLink to="/register">Register</RouterLink>
  </div>

  <div class="color-red">参考输出
    <button class="i-carbon:3d-cursor text-3xl text-white"/>
    <div class="ic-baseline-access-time-filled"></div>
  </div>
  <div class="i-ph-anchor-simple-thin" />
  <!-- 来自 Material Design 图标库的橙色警报 -->
  <div class="i-mdi-alarm text-orange-400" />
  <!-- 大型 Vue 标志 -->
  <div class="i-logos-vue text-3xl" />
  <!-- 亮色模式下的太阳，暗色模式下的月亮，来自 Carbon -->
  <button class="i-carbon-sun dark:i-carbon-moon" />
  <!-- Twemoji 的笑脸，悬停时变成泪水 -->
  <div class="flex flex-justify-center">
    <i
      class="i-twemoji-grinning-face-with-smiling-eyes hover:i-twemoji-face-with-tears-of-joy text-3xl"
    />
  </div>
  <div class="i-material-symbols-light-10k-outline-sharp"></div>
  <RouterView />
</template>
