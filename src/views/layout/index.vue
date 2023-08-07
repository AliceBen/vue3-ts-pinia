<template>
  <div class="layout-wrap">
    <div class="layout-left">
     <Logo></Logo>
    </div>
    <div class="layout-right">
      <div class="layout-nav"></div>
      <div class="layout-content">
        <div class="content"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import Logo from './logo/index.vue'
</script>

<style lang="scss" scoped>
@import '../../styles/variable.scss';
.layout-wrap {
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  .layout-left {
    width: $layout-left-width;
    height: 100%;
    background: $base-menu-background;
  }
  .layout-right {
    width: calc(100vw - $layout-left-width);
    height: 100%;
    background: #ccc;
  }
  .layout-nav {
    width: calc(100vw - $layout-left-width);
    height: $base-tabbar-height;
    border: 1px solid #fff;
  }
  .layout-content {
    position: relative;
    width: calc(100vw - $layout-left-width);
    height: calc(100vh - 50px);
    background: #fff;
    padding: 20px;
  }
  .content {
    position: absolute;
    width: calc(100vw - $layout-left-width - 40px);
    height: 100px;
    background: #ccc;
  }
}
</style>

