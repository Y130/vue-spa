<template>
  <div class="error-404-container">
    <div class="msg">
      <div class="oops">OOPS!</div>
      <div class="tip">这个页面你不能进......</div>
      <router-link to="home">返回首页</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'page404'
}
</script>

<style lang="scss" scoped>
  .error-404-container {
    background:#f0f2f5;
    height:100%;
    text-align: center;

    div{
      padding: 10px 0;
    }
  }
</style>
