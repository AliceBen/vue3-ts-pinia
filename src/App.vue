<script setup lang="ts">
import { onMounted } from 'vue'
import { reqLogin } from './api/user'

onMounted(() => {
  reqLogin({ username: 'admin', password: '111' })
})
</script>

<template>
  <div>vite</div>
</template>

<style scoped></style>
