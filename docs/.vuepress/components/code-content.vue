<!--
 * @Description: 代码容器
 * @Author: JunLiangWang
 * @Date: 2022-08-21 17:08:04
 * @LastEditors: JunLiangWang
 * @LastEditTime: 2022-10-08 15:13:48
-->
<template>
  <div class="code-edit-container">
    <header @click="isShrink = !isShrink">
      <span>🧑‍💻 {{ title }}</span>
      <span :class="'shrink ' + (isShrink ? 'rotate' : '')">🔺</span>
    </header>
    <div :class="'code-container ' + (isShrink ? 'hiden' : '')">
      <div class="container">
        <component
          v-if="dynamicComponent"
          :is="dynamicComponent"
          class="content"
          v-model="cuCode"
          :options="{
            tabSize: 4,
            mode: 'text/html',
            theme: 'base16-dark',
            lineWrapping: true,
          }"
        ></component>
        <span class="tip">html</span>
      </div>
      <div class="container">
        <div class="content preview" v-html="cuCode" />
        <span class="tip tip-preview">{{ preview }}</span>
      </div>
    </div>
  </div>
</template>

<script>
//import { codemirror } from "vue-codemirror";
import "codemirror/lib/codemirror.css";

//import "codemirror/mode/javascript/javascript.js";
//import "codemirror/mode/htmlmixed/htmlmixed.js";
import "codemirror/theme/base16-dark.css";

export default {
  props: {
    code: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "动手试一试",
    },
    preview: {
      type: String,
      default: "预览",
    },
  },
  data() {
    return {
      cuCode: this.code,
      isShrink: false,
      dynamicComponent:null
    };
  },
  /*components: {
    codemirror,
  },*/
  mounted() {
    import ("codemirror/mode/javascript/javascript.js")
    import ("codemirror/mode/htmlmixed/htmlmixed.js")
    import("vue-codemirror/src/codemirror.vue").then((module) => {
      this.dynamicComponent = module.default;
    });
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
  cursor: pointer;
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
  padding: 0;
}
.content {
  width: 100%;
  height: 100%;
  overflow: auto;
}
.container {
  width: 100%;
  height: 100%;
  overflow: auto;
  position: relative;
}
.tip {
  position: absolute;
  top: 10px;
  right: 10px;
}
.tip-preview {
  color: silver;
}
.preview {
  background: white;
  padding: 10px;
  box-sizing: border-box;
}
@media screen and (max-width: 650px) {
  .code-container {
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: none;
    grid-column-gap: 0;
  }
}
</style>
<style>
.cm-s-base16-dark span.cm-tag {
  color: #409eff !important;
}
.cm-s-base16-dark span.cm-comment {
  color: #368f47 !important;
}
.code-container a {
  font-weight: 500;
  color: #409eff;
  text-decoration: underline;
}
.CodeMirror {
  height: 100%;
}
</style>