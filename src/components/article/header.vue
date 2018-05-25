<template>
  <header>{{title}}</header>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  text-align: center;
  font-size: 16px;
  line-height: 50px;
  height: 50px;
}
</style>
