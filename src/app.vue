<template>
<div class="lazy-list">
  <h2>Vue lazy-loading App!</h2>
  <ul>
    <!-- 使用 router-link 组件来导航. -->
    <!-- 通过传入 `to` 属性指定链接. -->
    <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
    <router-link tag="li" to="/home">
      <a>home</a>
    </router-link>

    <router-link tag="li" to="/login">
      <a>login</a>
    </router-link>

    <router-link tag="li" to="/401">
      <a>401</a>
    </router-link>

    <router-link tag="li" to="/404">
      <a>404</a>
    </router-link>
  </ul>

  <router-view></router-view>
</div>
</template>

<script>
import '@/assets/common.scss'

export default {
}
</script>

<style lang="scss" scoped>
.lazy-list{
  h2{
    text-align: center;
  }

  li{
    text-align: center;
    line-height: 28px;
    height: 28px;
  }
}
</style>
