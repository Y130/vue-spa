<template>
  <div class="error-401-container">
    <button @click="back" class="pan-back-btn">返回</button>
    <div class="msg">
      <div class="oops">OOPS!</div>
      <div class="tip">没有权限访问该页面</div>
      <router-link to="home">返回首页</router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: 'page401',
  methods: {
    back() {
      if (this.$route.query.noGoBack) {
        this.$router.push({ path: 'home' })
      } else {
        this.$router.go(-1)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .error-401-container {
    background:#f0f2f5;
    height:100%;
    text-align: center;

    button{
      margin-top: 10px;
    }

    div{
      padding: 10px 0;
    }
  }
</style>
