<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import SideBar from './components/SideBar.vue'
defineOptions({ name: 'LayoutBase' })
</script>

<template>
  <div class="app-wrapper relative w-full h-full">
    <side-bar />
    <div class="main-container min-h-full ml-220px">
      <nav-bar />
      <div class="app-main min-h-[calc(100vh-50px)]">
        <router-view />
      </div>
    </div>
  </div>
</template>
