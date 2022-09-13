<!--
 * @Description: 代码容器
 * @Author: JunLiangWang
 * @Date: 2022-08-21 17:08:04
 * @LastEditors: JunLiangWang
 * @LastEditTime: 2022-09-05 15:25:54
-->
<template>
  <div>
    <codemirror :value="'<p>试一试把</p>'" :options="{
        // codemirror options
        tabSize: 4,
        mode: 'text/html',
        theme: 'base16-dark',
        lineNumbers: true,
        line: true,
        // more codemirror options, 更多 codemirror 的高级配置...
      }"/>
  </div>
</template>

<script>
import { codemirror } from 'vue-codemirror'
import 'codemirror/lib/codemirror.css'

export default {
  components: {
    codemirror
  },
  mounted() {
   if (process.browser) {
      const VueCodemirror = require("vue-codemirror");
      Vue.use(VueCodemirror);
    }
  },
};
</script>