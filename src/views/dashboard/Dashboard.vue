<script lang="ts" setup>
import { ref } from 'vue'

const name = ref<string>('首页')

defineOptions({ name: 'DashboardPage' })
</script>

<template>
  <div>
    {{ name }}
  </div>
</template>
