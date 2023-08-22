<template>
  <div>home</div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'

// 获取仓库
import useUserStore from '@/store/modules/user'
let userStore = useUserStore()

onMounted(() => {
  userStore.userInfo()
})

</script>