<template>
  <div class="layout-wrap">
    <div class="layout-left">
      <Logo></Logo>
       <el-scrollbar class="scrollbar">
          <el-menu 
            background-color="#111441" 
            text-color="#61657e" 
            active-text-color="#fff"
            :default-active="$route.path"
            :collapse="LayOutSettingStore.fold ? true : false"
          >
            <Menu :menuList="userStore.menuRouters"></Menu>
          </el-menu>
        </el-scrollbar>
    </div>
    <div class="layout-right" :class="{fold: LayOutSettingStore.fold ? true : false}">
      <div class="layout-nav">
        <Tabbar></Tabbar>
      </div>
      <div class="layout-content">
        <div class="content">
         <Main></Main>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Logo from './logo/index.vue'
import Menu from './menu/index.vue'
import Main from './main/index.vue'
import Tabbar from './tabbar/index.vue'
// 获取用户相关的小仓库
import useUserStore from '@/store/modules/user'
import useLayOutSettingStore from '@/store/modules/setting'

let userStore = useUserStore()
//获取layout配置仓库

let LayOutSettingStore = useLayOutSettingStore()
</script>

<style lang="scss" scoped>
@import '../../styles/variable.scss';
.layout-wrap {
  width: 100vw;
  height: 100vh;
  .layout-left {
    width: $layout-left-width;
    height: 100vh;
    background: $base-menu-background;
    transition: all 0.3s;
    .scrollbar {
      width: 100%;
      height: calc(100vh - $base-menu-logo-height);
      .el-menu {
        border-right: none;
      }
    }
    
  }
  .layout-right {
    position: fixed;
    width: calc(100vw - $layout-left-width);
    height: $base-tabbar-height;
    transition: all 0.3s;
    top: 0px;
    left: $layout-left-width;
    &.fold {
      width: calc(100vw - $base-menu-min-width );
      left: $base-menu-min-width;
    }
  }
  .layout-nav {
    // width: calc(100vw - $layout-left-width);
    height: $base-tabbar-height;
    border: 1px solid #fff;
    top: 0px;
    left: $layout-left-width;
    transition: all 0.3s;
    background: #fff;
  }
  .layout-content {
    position: relative;
    // width: calc(100vw - $layout-left-width);
    height: calc(100vh - 50px);
    background: #fff;
    padding: 20px;
  }
}
</style>
