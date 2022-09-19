# What is HTML?

HTML (Hyper Text Markup Language) It consists of a series of `tags (such as<h3>、<ul>、<li>, etc.)`, these tags form various ` Elements (such as <h3>...</h3>、 <li>...</li>, etc. below)`, which define the meaning and structure of the content of the web page to form HTML documents.

<code-content title='Give it a try' preview='preview' :code="`<h3>What are the works of Wang Xiaobo?</h3>

<ul>
  <li>《The Bronze Age》</li>
  <li>《The Silver Age》</li>
  <li>《Golden Age》</li>
  <li> ............</li>
</ul>

<a target='_blank' href='https://en.wikipedia.org/wiki/Wang_Xiaobo'>
  more
</a>`"/>

::: warning
HTML is not a programming language, it is just a markup language used to define content and content structure
:::



## Hyper Text



`Hypertext refers to links that connect web pages within a single website or between multiple websites, which make HTML documents linked and can jump to each other`. Although it is only an element in an HTML document (represented by the `<a>` tag), it is a very important concept in HTML and even the Web, and it is precisely because of the concept of hypertext that today's World Wide Web World.

<code-content title='Give it a try' preview='preview'  :code="`<!--Hypertext-->
<a target='_blank' href='https://en.wikipedia.org/wiki/Main_Page'>
  wikipedia
</a>
`"/>

<br>



## Tags 
There are many different tags in HTML that define the meaning of the content, such as `<img> tag for images`, `<h1> tags for first-level headings`, `<a> tags for hyperlinks`, etc. . These different tags surround different content to form various `elements`, which indicate the meaning and organizational structure of the content of the web page.

<code-content title='Give it a try' preview='preview' :code="`<h1>first-level headings</h1>
<img src='https://junliangwangx.github.io/HTML-Guide/logo.svg'>
<a target='_blank' href='https://junliangwangx.github.io/HTML-Guide/'>hyperlinks</a>
`"/>

<br>




## Elements


`Elements consist of tags surrounding different content, and elements composed of different tags can express the meaning of the content` (this element is a picture, a piece of text or a video), and through the `element's arrangement order and Nesting expresses the structure of content`.

<code-content  title='Give it a try' preview='preview' :code="`<h3>My Conversation With Him</h3>

<p>
  <em>Me</em>：I am very
  <strong>Angry</strong>😡, you know what?
</p>
<p>
  <em>Him</em>：Yeah? sorry 😣
</p>
<p>
  <em>Me</em>：Won't you apologize to me 🤔?
</p>
<p>
  <em>Him</em>：sorry 😥
</p>`"/>

<br>



### Composition Of Elements

Most elements in HTML consist of `Opening tag`, `Closing tag` and `content`

<img :src="$withBase('/element(en).svg')">

- **Opening tag**： This consists of the name of the element (in this example, *p* for paragraph), wrapped in opening and closing angle brackets. This opening tag marks where the element begins or starts to take effect. In this example, it precedes the start of the paragraph text.
- **Closing tag**：This is the same as the opening tag, except that it includes a forward slash before the element name. This marks where the element ends. Failing to include a closing tag is a common beginner error that can produce peculiar results.
- **Content**：This is the content of the element. In this example, it is the paragraph text.

Some elements only have a start tag, usually used to insert/embed something at the element's place.For example: the element img is used to insert a specified image at the location of the element img

<code-content title='Give it a try' preview='preview'  :code="`<!--image-->
<img  src='https://junliangwangx.github.io/HTML-Guide/logo.svg'>
`"/>

<br>



### Nesting elements

You can put elements inside other elements - this is called nesting, and usually we use nested elements to organize the content structure of an HTML document. The nested outer element is the `parent element` of the inner element, and the inner element is the `child element` of the outer element. In the following example, the `<p> element is the parent element of the <strong> and <em> elements, The <strong> and <em> elements are children of the <p> element`.

<code-content title='Give it a try' preview='preview' :code="`<!--Nesting elements-->

<p>
  <strong>I'm really handsome</strong>
  <em>absolutely handsome</em>
</p>`"/>

You need to ensure that the elements are properly nested. The following is the correct nesting format. `There is no limit to the number of levels and elements of nesting. In theory, you can nest infinitely`.

```html
<Opening tag of parent element>
   <Opening tag of child element></closing tag of child element>
   <Opening tag of child element></closing tag of child element>
   <Opening tag of child element>
     <Opening tag of child element></closing tag of child element>
   </closing tag of child element>
</closing tag of parent element>
```

<br><br>



::: details 本节参考

-  [https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started)

:::