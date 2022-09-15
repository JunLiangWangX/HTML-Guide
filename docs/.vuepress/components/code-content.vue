<!--
 * @Description: 代码容器
 * @Author: JunLiangWang
 * @Date: 2022-08-21 17:08:04
 * @LastEditors: JunLiangWang
 * @LastEditTime: 2022-09-15 17:46:48
-->
<template>
  <div class="code-edit-container">
    <header>
      <span>🧑‍💻 动手试一试</span>
      <span
        :class="'shrink ' + (isShrink ? 'rotate' : '')"
        @click="isShrink = !isShrink"
        >🔺</span
      >
    </header>
    <div :class="'code-container ' + (isShrink ? 'hiden' : '')">
      <codemirror
        class="content"
        v-model="cuCode"
        :options="{
          // codemirror options
          tabSize: 4,
          mode: 'text/html',
          theme: 'base16-dark',
          lineWrapping: true,
          // more codemirror options, 更多 codemirror 的高级配置...
        }"
      />
      <div class="content preview" v-html="cuCode"></div>
    </div>
  </div>
</template>

<script>
import { codemirror } from "vue-codemirror";
import "codemirror/lib/codemirror.css";

import "codemirror/mode/javascript/javascript.js";
import "codemirror/mode/htmlmixed/htmlmixed.js";
import "codemirror/theme/base16-dark.css";

export default {
  props: {
    code: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      cuCode: this.code,
      isShrink: false,
    };
  },
  components: {
    codemirror,
  },
  mounted() {
    if (process.browser) {
      const VueCodemirror = require("vue-codemirror");
      Vue.use(VueCodemirror);
    }
  },
};
</script>
<style scoped>
.code-edit-container {
  width: 100%;
  overflow: hidden;
}
header {
  color: #e8e8e8;
  background: #282c34;
  height: 45px;
  padding: 0 10px;
  line-height: 45px;
  font-size: 16px;
  font-weight: bold;
  border-bottom: 1px solid #4f4f4f;
  user-select: none;
}
.shrink {
  float: right;
  font-size: 22px;
  cursor: pointer;
  transition: all 0.3s ease-out;
}
.rotate {
  transform: rotate(180deg);
}
.code-container {
  width: 100%;
  height: 400px;
  background: #282c34;
  overflow: hidden;
  transition: all 0.3s ease-out;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 15px;
  padding: 15px;
  box-sizing: border-box;
}
.hiden {
  height: 0;
}
.content {
  width: 100%;
  height: 100%;
}
.preview {
  background: white;
}
</style>
<style>
.cm-s-base16-dark span.cm-tag {
  color: #409eff !important;
}
.cm-s-base16-dark span.cm-comment {
  color: #368f47 !important;
}
.cm-s-base16-dark.CodeMirror {
}
.code-container a {
  font-weight: 500;
  color: #409eff;
  text-decoration: underline;
}
</style>