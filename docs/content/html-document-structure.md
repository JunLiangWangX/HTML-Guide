# HTML文档结构

```html
<!DOCTYPE html>
<html>
   <head>
   </head>
   <body>
   </body>
</html>
```

完整的HTML文档由以下部分组成：

| 标签 | 名称 | 作用                                                         |
| :------------------------------------------------------- | -------- | :----------------------------------------------------------- |
| <p style='white-space: nowrap;'><\!DOCTYPE html></p> | <p style='white-space: nowrap;'>文档类型</p> | 规定浏览器的渲染模式与解析文档的标准 |
| < html>< /html>                                          | 根元素 | 包含整个页面的内容                                           |
| < head>< /head>                                          | 头部元素 | 该元素的内容对用户不可见，其中包含例如面向搜索引擎的搜索关键字、页面描述、CSS 样式表和字符编码声明等 |
| < body>< /body>                                          | 身体元素 | 该元素包含期望让用户在访问页面时看到的内容，包括文本、图像、视频、游戏、可播放的音轨或其他内容 |



## 一、文档类型：DOCTYPE

```html
<!DOCTYPE html [publish "DTD公共标识" "DTD"]>
```

> DTD：Document Type Definition——文档类型定义（[详情](https://en.wikipedia.org/wiki/Document_type_definition)）

在 HTML文档中，文档类型 doctype 的声明是必要的。它确保了`浏览器以何种渲染模式、何种标准来解析和渲染HTML文档`。如今在大部分HTML文档的头部，你都将会看到`<!DOCTYPE html>` 的身影。这个声明的目的是`防止浏览器在渲染文档时，切换到我们称为怪异模式 (兼容模式)`的渲染模式并且规定它按照`最新的Web相关规范来解析渲染文档`。



### 渲染模式的由来

在很久以前的网络上Web页面通常有两种版本：一种为网景（Netscape）的 Navigator 版本，另一种为微软（Microsoft）的 Internet Explorer 版本。当 W3C 创立网络标准后，为了不破坏当时既有的网站，浏览器不能直接弃用这些标准。因此，浏览器采用了三种模式——`怪异模式（Quirks mode）`，`接近标准模式（Almost standards mode）`以及`标准模式（Standards mode）`，使其把能符合新规范的网站和不符合规范的老旧网站区分开。



### 如何选择渲染模式

当不存在文档声明时浏览器即会进入怪异模式，当文档声明为< !DOCTYPE html>时则会进入标准模式(前沿验证)。我们都知道HTML每个版本的标准都会有严格(Strict)、过渡(Transitional)、框架集(Frameset)三个部分内容，当文档声明的DTD选择严格(Strict)版本则会进入标准模式(如若不是最新标准则是遗留验证)，当DTD选择过渡(Transitional)版本则会进入接近标准模式。

| 模式名称                                               | 声明方式                                          | 模式行为                                          |
| ------------------------------------------------------ | ------------------------------------------------- | ------------------------------------------------- |
| 怪异模式                                               | 无需声明文档类型                                  | 以浏览器各自的行为标准解析渲染页面                |
| <p style='white-space: nowrap;'>标准模式(前沿验证)</p> | < !DOCTYPE html>                                  | 根据`最新`的W3C Web Strict(严格) 标准解析渲染页面 |
| <p style='white-space: nowrap;'>标准模式(遗留验证)</p> | < !DOCTYPE HTML PUBLIC  .....  "..../strict.dtd"> | 根据`以往`的W3C Web Strict(严格) 标准解析渲染页面 |
| <p style='white-space: nowrap;'>接近标准模式</p>       | < !DOCTYPE HTML PUBLIC  ..... "..../loose.dtd">   | 根据W3C Web Transitional(过渡) 标准解析渲染页面   |



### 渲染模式的影响

`浏览器的渲染模式主要影响文档解析与CSS布局样式`，例如，不将样式继承到表中。在旧版本的 IE 和 Opera 中，box 模型在怪异模式下更改为 IE 5.5 box 模型。本文档没有列举所有的布局怪癖。有关列表，请参考  [Mozilla’s documentation](https://developer.mozilla.org/en-US/docs/Mozilla_Quirks_Mode_Behavior)和 [Quirks Mode specification](https://quirks.spec.whatwg.org/)。浏览器的渲染模式也有一些脚本方面的影响。在 Firefox14之前，HTML id 属性没有在标准模式和接近标准模式下从全局脚本范围建立对象引用。在 Firefox 中，document.all 在怪异模式下部分可用，但在其他模式下不可用。当进入模仿旧版本 IE 的模式时，对 IE 脚本的影响更为显著。还有一些怪异行为会影响 HTML解析，并会导致符合标准的页面被错误解析 ，这些怪异行为通常是由古怪的布局导致。



### 常见的文档声明

| 版本                                               | 文档声明                                                     |
| -------------------------------------------------- | ------------------------------------------------------------ |
| 最新HTML标准                                       | < !DOCTYPE HTML>                                             |
| HTML4.01(严格)                                     | < !DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"    "http://www.w3.org/TR/html4/strict.dtd"> |
| <p style='white-space: nowrap;'>HTML4.01(过渡)</p> | < !DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"    "http://www.w3.org/TR/html4/loose.dtd"> |
| HTML4.01(框架)                                     | < !DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN"   "http://www.w3.org/TR/html4/frameset.dtd"> |
| HTML 2.0                                           | < !DOCTYPE html PUBLIC "-//IETF//DTD HTML 2.0//EN">          |
| HTML 3.2                                           | < !DOCTYPE html PUBLIC "-//W3C//DTD HTML 3.2 Final//EN">     |



::: tip 您应当使用< !DOCTYPE html>声明文档类型
在IE已被微软停止服务的今天，市面上的主流浏览器几乎都符合如今Web相关的规范标准，因此对于如今的HTML文档类型应当都声明为标准模式前沿验证
:::



::: details 本节参考

-  [https://developer.mozilla.org/zh-CN/docs/Web/HTML/Quirks_Mode_and_Standards_Mode](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Quirks_Mode_and_Standards_Mode)
-  [https://developer.mozilla.org/zh-CN/docs/Glossary/Doctype](https://developer.mozilla.org/zh-CN/docs/Glossary/Doctype)
-  [https://hsivonen.fi/doctype/](https://hsivonen.fi/doctype/)
-  [https://www.w3.org/QA/2002/04/valid-dtd-list.html](https://www.w3.org/QA/2002/04/valid-dtd-list.html)

:::