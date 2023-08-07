<template>
  <div class="home-wrap">
    <div class="home-left">
     
    </div>
    <div class="home-right">
      <div class="home-nav"></div>
      <div class="home-content">
        <div class="content"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
@import '../../styles/variable.scss';
.home-wrap {
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  .home-left {
    width: $home-left-width;
    height: 100%;
    background: black;
  }
  .home-right {
    width: calc(100vw - $home-left-width);
    height: 100%;
    background: #ccc;
  }
  .home-nav {
    width: calc(100vw - $home-left-width);
    height: 50px;
    border: 1px solid #fff;
  }
  .home-content {
    position: relative;
    width: calc(100vw - $home-left-width);
    height: calc(100vh - 50px);
    background: #fff;
    padding: 20px;
  }
  .content {
    position: absolute;
    width: calc(100vw - $home-left-width - 40px);
    height: 100px;
    background: #ccc;
  }
}
</style>

