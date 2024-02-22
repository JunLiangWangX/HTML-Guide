(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{453:function(t,_,v){"use strict";v.r(_);var d=v(10),r=Object(d.a)({},(function(){var t=this,_=t._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"元素的属性与事件"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#元素的属性与事件"}},[t._v("#")]),t._v(" 元素的属性与事件")]),t._v(" "),_("p",[t._v("在现实世界中我们通常使用名字、年龄、性别、外貌等内容来描述一个人，同样的在HTML中也有描述元素的内容（例如元素的名称、样式等），我们统称其为"),_("code",[t._v("属性")]),t._v("（例如下方指定元素名称的name属性，指定元素样式的style属性）。")]),t._v(" "),_("code-content",{attrs:{code:"<input type='submit' name='button' style='background:yellow;'  />"}}),t._v(" "),_("h2",{attrs:{id:"属性的组成"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#属性的组成"}},[t._v("#")]),t._v(" 属性的组成")]),t._v(" "),_("p",[t._v("一个属性必须包含如下三个部分内容："),_("code",[t._v("属性名称")]),t._v("、"),_("code",[t._v("等号")]),t._v("以及"),_("code",[t._v("属性值(由一对单/双引号引起来)")])]),t._v(" "),_("img",{attrs:{src:t.$withBase("/attributes.svg")}}),t._v(" "),_("div",{staticClass:"custom-block warning"},[_("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),_("p",[t._v("在属性和元素名称之间（如果已经有一个或多个属性，就与前一个属性之间）有一个空格")])]),t._v(" "),_("h2",{attrs:{id:"全局属性"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#全局属性"}},[t._v("#")]),t._v(" 全局属性")]),t._v(" "),_("p",[_("code",[t._v("全局属性是所有 HTML 元素共有的属性，它们可以用于所有元素，即使属性可能对某些元素不起作用")]),t._v("。我们可以在所有的 HTML 元素上指定全局属性，甚至是在标准里没有指定的元素。这意味着任何非标准元素仍必须能够应用这些属性，即使使用这些元素意味着文档不再是 html5 兼容的。")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("属性名")]),t._v(" "),_("th",[t._v("作用")]),t._v(" "),_("th",[t._v("属性值")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("accesskey")]),t._v(" "),_("td",[t._v("提供了为当前元素生成键盘快捷键的提示")]),t._v(" "),_("td",[t._v("可打印的字符")])]),t._v(" "),_("tr",[_("td",[t._v("autocapitalize")]),t._v(" "),_("td",[t._v("控制用户的文本输入是否和如何自动大写")]),t._v(" "),_("td",[t._v("枚举类型："),_("br"),t._v(" "),_("code",[t._v("off")]),t._v(" or "),_("code",[t._v("none")]),t._v("所有字母都默认为小写字母"),_("br"),_("code",[t._v("on")]),t._v(" or "),_("code",[t._v("sentences")]),t._v(": 每个"),_("strong",[t._v("句子")]),t._v("的第一个字母默认为大写字母，其他字母都默认为小写字母"),_("br"),_("code",[t._v("words")]),t._v(": 每个"),_("strong",[t._v("单词")]),t._v("的第一个字母默认为大写字母；所有其他字母都默认为小写字母"),_("br"),_("code",[t._v("characters")]),t._v(": 所有的"),_("strong",[t._v("字母")]),t._v("都默认为大写")])]),t._v(" "),_("tr",[_("td",[t._v("class")]),t._v(" "),_("td",[t._v("一个以空格分隔的元素的类名（classes）列表，它允许 CSS 和 Javascript 通过类选择器  或 DOM 方法来选择和访问特定的元素。")]),t._v(" "),_("td",[t._v("字符串")])]),t._v(" "),_("tr",[_("td",[t._v("contenteditable")]),t._v(" "),_("td",[t._v("表示元素是否可被用户编辑。如果可以，浏览器会修改元素的组件以允许编辑。")]),t._v(" "),_("td",[t._v("枚举类型：true、false")])]),t._v(" "),_("tr",[_("td",[t._v("data-*")]),t._v(" "),_("td",[t._v("被称为自定义数据属性的属性，它赋予我们在所有 HTML 元素上嵌入自定义数据属性的能力，并可以通过脚本在 HTML 与 DOM 表现之间进行专有数据的交换。")]),t._v(" "),_("td",[t._v("字符串")])]),t._v(" "),_("tr",[_("td",[t._v("dir")]),t._v(" "),_("td",[t._v("指示元素中文本方向")]),t._v(" "),_("td",[t._v("枚举类型："),_("br"),t._v("ltr，指从左到右"),_("br"),t._v("rtl，指从右到左"),_("br"),t._v("auto，指由用户代理决定方向。")])]),t._v(" "),_("tr",[_("td",[t._v("draggable")]),t._v(" "),_("td",[t._v("元素是否允许使用拖放操作API拖动")]),t._v(" "),_("td",[t._v("枚举类型：true、false")])]),t._v(" "),_("tr",[_("td",[t._v("hidden")]),t._v(" "),_("td",[t._v("表示元素是否被隐藏")]),t._v(" "),_("td",[t._v("布尔类型：true、false")])]),t._v(" "),_("tr",[_("td",[t._v("id")]),t._v(" "),_("td",[t._v("定义了一个全文档唯一的标识符 (ID)。它用于在链接（使用片段）、脚本和样式（通过CSS）中辨识元素。")]),t._v(" "),_("td",[t._v("字符串")])]),t._v(" "),_("tr",[_("td",[t._v("is")]),t._v(" "),_("td",[t._v("允许您指定标准 HTML 元素像定义的内置元素一样工作")]),t._v(" "),_("td",[t._v("字符串")])]),t._v(" "),_("tr",[_("td",[t._v("lang")]),t._v(" "),_("td",[t._v("表示元素的语言")]),t._v(" "),_("td",[t._v("BCP47语言定义")])]),t._v(" "),_("tr",[_("td",[t._v("part")]),t._v(" "),_("td",[t._v("包含一个以元素中 part 属性名称组成的列表，该列表以空格分隔。通过 Part 的名称，可以使用 CSS 伪元素“::part”来选择 shadow 树中指定元素并设置其样式。")]),t._v(" "),_("td",[t._v("字符串")])]),t._v(" "),_("tr",[_("td",[t._v("slot")]),t._v(" "),_("td",[t._v("将一个 shadow 树中的槽分配给一个元素：带有 "),_("code",[t._v("slot")]),t._v(" 属性的元素分配给由slot创建的槽，它的 name 属性的值匹配 "),_("code",[t._v("slot")]),t._v(" 属性的值。")]),t._v(" "),_("td",[t._v("字符串")])]),t._v(" "),_("tr",[_("td",[t._v("style")]),t._v(" "),_("td",[t._v("包含应用到元素的 CSS 样式声明。")]),t._v(" "),_("td",[t._v("字符串")])]),t._v(" "),_("tr",[_("td",[t._v("tabindex")]),t._v(" "),_("td",[t._v("指示其元素是否可以聚焦，以及它是否/在何处参与顺序键盘导航（通常使用Tab键，因此得名）。")]),t._v(" "),_("td",[t._v("整数")])]),t._v(" "),_("tr",[_("td",[t._v("title")]),t._v(" "),_("td",[t._v("表示咨询信息文本，和它属于的元素相关。这个信息通常存在，但绝不必要，作为提示信息展示给用户。")]),t._v(" "),_("td",[t._v("字符串")])]),t._v(" "),_("tr",[_("td",[t._v("translate")]),t._v(" "),_("td",[t._v("用来规定对应元素的属性值及其子文本节点内容，是否跟随系统语言作出对应的翻译变化。")]),t._v(" "),_("td",[t._v("枚举类型：yes、no")])]),t._v(" "),_("tr",[_("td",[t._v("itemid")]),t._v(" "),_("td",[t._v("代表元素的唯一的全局标识符，用于Microdata技术")]),t._v(" "),_("td",[t._v("字符串")])]),t._v(" "),_("tr",[_("td",[t._v("itemprop")]),t._v(" "),_("td",[t._v("被用于向一个物体中添加属性，用于Microdata技术")]),t._v(" "),_("td",[t._v("字符串")])]),t._v(" "),_("tr",[_("td",[t._v("itemref")]),t._v(" "),_("td",[t._v("提供了元素 id（并不是 itemid）的列表，并具有文档其它地方的额外属性，用于Microdata技术")]),t._v(" "),_("td",[t._v("字符串")])]),t._v(" "),_("tr",[_("td",[t._v("itemscope")]),t._v(" "),_("td",[t._v("它定义了一个与元数据关联的数据项，用于Microdata技术")]),t._v(" "),_("td",[t._v("布尔")])]),t._v(" "),_("tr",[_("td",[t._v("itemtype")]),t._v(" "),_("td",[t._v("指定了词汇的 URL，它将会用于定义数据结构中的 itemprop（条目属性），用于Microdata技术")]),t._v(" "),_("td",[t._v("url")])])])]),t._v(" "),_("details",{staticClass:"custom-block details"},[_("summary",[t._v("本节参考")]),t._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Learn/HTML/Introduction_to_HTML/Getting_started#%E5%B1%9E%E6%80%A7",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://developer.mozilla.org/zh-CN/docs/Learn/HTML/Introduction_to_HTML/Getting_started#%E5%B1%9E%E6%80%A7"),_("OutboundLink")],1)])])])],1)}),[],!1,null,null,null);_.default=r.exports}}]);