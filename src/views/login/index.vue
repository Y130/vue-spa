<template>
  <div class="login-container">
    <h3 class="title">登录</h3>
    <div class="row">
      <input v-model="username" placeholder="账户">
    </div>

    <div class="row">
      <input v-model="password" placeholder="密码">
    </div>

    <div class="row">
      <button v-on:click="handleLogin">提交</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  methods: {
    handleLogin() {
      this.$router.push({ path: 'home' })
    }
  }
}
</script>

<style lang="scss" scoped>
.login-container {
  background-color: #2d3a4b;
  .row {
    padding: 10px;
  }
}
</style>