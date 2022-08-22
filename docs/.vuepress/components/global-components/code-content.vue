<!--
 * @Description: 代码容器
 * @Author: JunLiangWang
 * @Date: 2022-08-21 17:08:04
 * @LastEditors: JunLiangWang
 * @LastEditTime: 2022-08-21 17:23:38
-->
<template>
  <div class="code-content-container" v-html="code" />
</template>

<script>
export default {
  props: {
    code: {
      type: String,
      default: "",
    },
  },
};
</script>

<style>
</style>