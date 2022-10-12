# 什么是HTML？

HTML（Hyper Text Markup Language——超文本标记语言）它是一门定义网页结构和内容的标记语言。它由一系列的`标记（如下方中的<h3>、<ul>、<li>等）`组成，这些标记通过包围不同的内容从而形成各种各样的`元素（如下方中的<h3>...</h3>、<li>...</li>等）`，这些元素它定义了网页内容的含义和结构从而形成HTML文档。在这些元素中有一个元素极为重要——`超文本（超链接）`，在HTML中它由`<a>`标记体现，它使得HTML文档产生了联系，并且能相互跳转，也正因有了`超文本（超链接）`的概念才形成了如今的万维网世界。

<code-content :code="`<h3>王小波有什么著作?</h3>

<ul>
  <li>《青铜时代》</li>
  <li>《白银时代》</li>
  <li>《黄金时代》</li>
  <li> ............</li>
</ul>
<a target='_blank' href='https://baike.baidu.com/item/%E7%8E%8B%E5%B0%8F%E6%B3%A2/6673?fr=kg_general'>
  了解更多
</a>`"/>

::: warning 注意
HTML并非一门编程语言，它仅是用于定义内容与内容结构的标记语言
:::



## 超文本

`超文本是指连接单个网站内或多个网站间的网页的链接，它使得HTML文档产生了联系，并且能相互跳转`。虽然它在HTML文档中仅是一个元素（由`<a>`标记体现），但它在HTML甚至Web中却是一个非常重要的概念，也正因有了超链接的概念才形成了如今的万维网世界。

<code-content :code="`<!--超链接-->
<a target='_blank' href='https://www.baidu.com'>
  百度一下
</a>
`"/>

<br>



## 标记
HTML中有着许多不同的标记，它们定义了内容的含义，例如`代表图片的<img>标记`、`代表一级标题的<h1>标记`、`代表超链接的<a>标记`等等。这些不同的标记包围着不同的内容便组成了各种各样的`元素`，这些元素便表明了网页内容的含义和组织结构。

<code-content :code="`<h1>一级标题</h1>
<img src='https://wangjunliang.com/img/logo.458d8eba.svg'>
<a target='_blank' href='https://wangjunliang.com'>超链接</a>
`"/>

<br>




## 元素
`元素由不同的标记包围着不同的内容组成，不同的标记组成的元素则能表达出内容的含义`(这个元素是一张图片，一段文字或一个视频)，而通过`元素的排列顺序与嵌套则能表达出内容的组织结构`。

<code-content :code="`<h3>我与他的对话</h3>

<p>
  <em>我</em>：我非常
  <strong>愤怒</strong>😡,你知道吗？
</p>
<p>
  <em>他</em>：是吗？不好意思😣
</p>
<p>
  <em>我</em>：你不给我道歉吗🤔？
</p>
<p>
  <em>他</em>：对不起😥
</p>`"/>

<br>



### 元素的组成

HTML中大多数元素由`开始标记`、`结束标记`与`内容`组成

<img :src="$withBase('/element.svg')">

- **开始标签**（Opening tag）：包含标记的名称（本例为 h3），被左、右角括号所包围。表示元素从这里开始或者开始起作用
- **结束标签**（Closing tag）：与开始标签相似，只是其在元素名之前包含了一个斜杠。这表示着元素的结尾
- **内容**（Content）：元素的内容，本例中就是所输入的文本本身。

有些元素只有开始标签，通常用来在此元素所在位置插入/嵌入一些东西。例如：元素img是用来在元素img所在位置插入一张指定的图片。

<code-content :code="`<!--图片-->
<img src='https://wangjunliang.com/img/logo.458d8eba.svg'>
`"/>

<br>



### 元素的嵌套

你可以把元素放到其它元素之中——这被称作嵌套，通常我们使用嵌套元素来组织HTML文档的内容结构。嵌套的外层元素是内层元素的`父元素`，内层元素是外层元素的`子元素`，下面例子中`<p>元素是<strong>、<em>元素的父元素,<strong>、<em>元素是<p>元素的子元素`。

<code-content :code="`<!--嵌套元素-->

<p>
  <strong>我真的好帅</strong>
  <em>绝对帅</em>
</p>`"/>

你需要确保元素被正确的嵌套，下面为正确的嵌套格式，`嵌套没有层数与元素个数的限制，理论上你可以无限嵌套下去`。

```html
<父元素的开始标签>
   <子元素的开始标签></子元素的结束标签>
   <子元素的开始标签></子元素的结束标签>
   <子元素的开始标签>
     <子元素的开始标签></子元素的结束标签>
   </子元素的结束标签>
</父元素的结束标签>
```

<br><br>



::: details 本节参考

-  [https://developer.mozilla.org/zh-CN/docs/Learn/HTML/Introduction_to_HTML/Getting_started](https://developer.mozilla.org/zh-CN/docs/Learn/HTML/Introduction_to_HTML/Getting_started)

:::