<!--
 * @Description: 代码容器
 * @Author: JunLiangWang
 * @Date: 2022-08-21 17:08:04
 * @LastEditors: JunLiangWang
 * @LastEditTime: 2022-08-22 10:28:50
-->
<template>
  <vue-code-highlight language="html" contenteditable="true">
    <pre   v-text="`<html>
     <head></head>
     <body></body>
    </html>`">
    </pre>
  </vue-code-highlight>
</template>

<script>
import { component as VueCodeHighlight } from "vue-code-highlight";

export default {
  components: {
    VueCodeHighlight,
  },
  props: {
    code: {
      type: String,
      default: 
      `<html>
        <body></body>
      </html>`,
    },
  },
};
</script>
<style scoped>
.code-content-container {
}
</style>

<style>
</style>