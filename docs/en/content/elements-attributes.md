# Element Attributes

In the real world, we usually use content such as name, age, gender, appearance, etc. to describe a person. Similarly, in HTML, there is also content to describe elements (such as element name, style, etc.), which we collectively call `attributes` (such as The name attribute of the element name is specified below, and the style attribute of the element style is specified).

<code-content title='Give it a try' preview='preview' code="<input type='submit' name='button' style='background:yellow;'  />"/>



## Attributes Composition

A property must contain the following three parts: `attributes name`, `equal sign` and `attributes value (surrounded by a pair of single/double quotes)`

<img :src="$withBase('/attributes(EN).svg')">

::: warning

There is a space between the attribute and the element name (or the previous attribute if there are already one or more attributes)

:::



## GloBal Attributes

`Global attributes are attributes common to all HTML elements, they can be used on all elements, even though attributes may not work for some elements`. We can specify global attributes on all HTML elements, even those not specified in the standard. This means that any non-standard element must still be able to apply these attributes, even if using these elements means the document is no longer html5 compliant.

| Attributes Name | Effect                                                       | Attributes Value                                             |
| --------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| accesskey       | Provides a hint to generate keyboard shortcuts for the current element | String                                                       |
| autocapitalize  | Controls whether and how user text input is automatically capitalized | Enumeration type: <br /> `off` or `none` all letters default to lowercase <br />`on` or `sentences`: the first letter of each sentence defaults to uppercase, other letters are Defaults to lowercase<br />`words`: the first letter of each word defaults to uppercase; all other letters default to lowercase<br />`characters`: all letters default to uppercase |
| class           | A space-separated list of element classes that allow CSS and Javascript to select and access specific elements via class selectors or DOM methods. | String                                                       |
| contenteditable | Indicates whether the element can be edited by the user. If it can, the browser modifies the element's components to allow editing. | Enumeration type: true, false                                |
| data-*          | It known as custom data attributes, which give us the ability to embed custom data attributes on all HTML elements, and allow scripting to exchange proprietary data between HTML and DOM representations. | String                                                       |
| dir             | Indicates the direction of text in an element                | Enumeration type: <br />ltr, refers to left to right<br />rtl, refers to right to left<br />auto, refers to the direction determined by the user agent. |
| draggable       | Whether to allow dragging elements using the drag and drop API | Enumeration type: true, false                                |
| hidden          | Indicates whether the element is hidden                      | Boolean                                                      |
| id              | Defines a document-wide unique identifier (ID). It is used to identify elements in links (using snippets), scripts and styles (via CSS). | String                                                       |
| is              | Allows you to specify that standard HTML elements behave like defined built-in elements | String                                                       |
| lang            | language for representing elements                           | BCP47 Define                                                 |
| part            | Contains a space-separated list of the names of the part attributes in the element. By the name of the part, the CSS pseudo-element "::part" can be used to select and style the specified element in the shadow tree. | String                                                       |
| slot            | Assign a slot in a shadow tree to an element: The element with the `slot` attribute is assigned to the slot created by the slot whose value of the name attribute matches the value of the `slot` attribute. | String                                                       |
| style           | Contains CSS style declarations to apply to the element.     | String                                                       |
| tabindex        | Indicates if its element is focusable, and if/where it participates in sequential keyboard navigation (usually using the Tab key, hence the name). | Integer                                                      |
| title           | Represents advisory information text, relative to the element to which it belongs. This information is usually present, but never necessary, and is displayed to the user as a prompt. | String                                                       |
| translate       | It is used to specify whether the attribute value of the corresponding element and the content of its child text nodes should follow the system language to make corresponding translation changes. | Enumeration type: yes, no                                    |
| itemid          | A unique global identifier representing an element, used in Microdata technology | String                                                       |
| itemprop        | Used to add properties to an object, used in Microdata technology | String                                                       |
| itemref         | Provides a list of element ids (not itemids), with additional attributes elsewhere in the document, for use in Microdata technology | String                                                       |
| itemscope       | It defines a data item associated with metadata for use in Microdata technology | Boolean                                                      |
| itemtype        | The URL specifying the vocabulary that will be used to define the itemprop (item property) in the data structure for use in Microdata technology | url                                                          |



::: details Reference in this section

-  [https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started#attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started#attributes)

:::