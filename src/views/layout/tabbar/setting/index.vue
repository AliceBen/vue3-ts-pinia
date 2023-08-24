<template>
  <el-button @click="updateRefsh" icon="Refresh" size="small" circle />
  <el-button @click="fullScreen" icon="FullScreen" size="small" circle />
  <el-button icon="Setting" size="small" circle />
  <img
    :src="userStore.avatar"
    style="width: 24px; height: 24px; margin: 0px 10px; border-radius: 50%"
  />
  <!-- 下拉菜单 -->
  <el-dropdown>
    <span class="el-dropdown-link">
      {{ userStore.username }}
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts" setup>
import useLayOutSettingStore from '@/store/modules/setting'
import useUserStore from '@/store/modules/user'
import { useRoute, useRouter } from 'vue-router'
let layoutSettingStore = useLayOutSettingStore()

let userStore = useUserStore()
// 获取路由器对象
let $router = useRouter()
let $route = useRoute()

//刷新按钮点击回调
const updateRefsh = () => {
  layoutSettingStore.refsh = !layoutSettingStore.refsh
  console.log('userStore', userStore.username)
}

// 全屏
const fullScreen = () => {
  let full = document.fullscreenElement
  if (!full) {
    document.documentElement.requestFullscreen()
  } else {
    document.exitFullscreen()
  }
}

// 退出登录
const logout = async () => {
  //第一件事情:需要向服务器发请求[退出登录接口]******
  //第二件事情:仓库当中关于用于相关的数据清空[token|username|avatar]
  //第三件事情:跳转到登录页面
  await userStore.userLogout()
  //跳转到登录页面
  $router.push({path: '/login', query: {redirect: $route.path}})
}
</script>

<style lang="scss" scoped></style>
