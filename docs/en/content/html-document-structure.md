# HTML Structure

```html
<!DOCTYPE html>
<html>
   <head>
   </head>
   <body>
   </body>
</html>
```

A complete HTML document consists of the following parts:

| Tag | Name                                              | Role                                                     |
| :------------------------------------------------------- | :------- | :----------------------------------------------------------- |
| <p style='white-space: nowrap;'><\!DOCTYPE html></p> | <p style='white-space: nowrap;'>document type</p> | Specifies the browser's rendering mode and standards for parsing documents |
| < html>< /html>                                          | root element                                      | Include the content of the entire page     |
| < head>< /head>                                          | head element                                      | The content of this element is invisible to the user and includes, for example, search engine-facing search keywords, page descriptions, CSS style sheets, and character encoding declarations, etc. |
| < body>< /body>                                          | body element                                      | This element contains the content that users expect to see when they visit the page, including text, images, videos, games, playable audio tracks, or other content |



## DOCTYPE

```html
<!DOCTYPE html [PUBLIC "DTD FPIs"  "DTD URL"]>
```

> DTD：Document Type Definition（[Details](https://en.wikipedia.org/wiki/Document_type_definition)）

In HTML documents, the declaration of the document type doctype is necessary. It ensures `in what rendering mode and what standard the browser parses and renders the HTML document`. You will see `<!DOCTYPE html>` in the head of most HTML documents these days. The purpose of this declaration is to `prevent the browser from switching to a rendering mode we call quirks mode (compatibility mode)` when rendering documents and to specify that it parses rendered documents according to `latest web-related specifications`.



### The Rendering Modes

In the old days on the web, there were usually two versions of web pages: one was Netscape's Navigator version, and the other was Microsoft's Internet Explorer version. When the W3C created web standards, in order not to break existing websites at the time, browsers couldn't just drop these standards. Therefore, the browser adopts three modes - `Quirks mode`, `Almost standards mode` and `Standards mode`, to enable it to integrate websites and Separate outdated sites that do not meet the specs.



### Choose Rendering Mode

The browser enters quirks mode when no document declaration exists, and Standards Mode (cutting edge validation) when the document declaration is < !DOCTYPE html>. We all know that the standard of each version of HTML will have three parts: Strict, Transitional, and Frameset. When the DTD declared in the document selects the Strict version, it will enter the Standard Mode (if not The latest standard is legacy validation taget ), and when the DTD selects the transitional (Transitional) version, it will enter a  Almost Standards Mode.

| Mode Name                                                    | Declaration Method                                | Mode Action                                                  |
| :----------------------------------------------------------- | :------------------------------------------------ | :----------------------------------------------------------- |
| Quirks Mode                                                  | No Doctype                                        | Parse and render the page according to the browser's respective behavioral standards |
| <p style='white-space: nowrap;'>Standards Mode<br />(cutting edge validation)</p> | < !DOCTYPE html>                                  | Parse rendered pages according to the `latest` W3C Web Strict  standard |
| <p style='white-space: nowrap;'>Standards Mode<br />(legacy validation taget)</p> | < !DOCTYPE HTML PUBLIC  .....  "..../strict.dtd"> | Parse rendered pages according to `old` W3C Web Strict standards |
| <p style='white-space: nowrap;'>Almost Standards Mode</p>    | < !DOCTYPE HTML PUBLIC  ..... "..../loose.dtd">   | Parse rendered page according to the W3C Web Transitional standard |



### The Effects

`The rendering mode mainly affects document parsing and CSS layout styles`. For example, not inheriting styles into tables is a quirk. In old versions of IE and Opera, the box model changes to the IE 5.5 box model in the Quirks mode. This document does not enumerate all the layout quirks. For a list, please refer to [Mozilla’s documentation](https://developer.mozilla.org/en-US/docs/Mozilla_Quirks_Mode_Behavior) and the [Quirks Mode specification](https://quirks.spec.whatwg.org/).

Although the Quirks mode is primarily about CSS, there are some scripting quirks as well. Until Firefox 14, the HTML id attribute didn’t establish object references from the global scripting scope in the Standards and Almost Standards modes. In Firefox, document.all is partially available in the Quirks mode but not in the other modes. The effects on scripting are more dramatic in IE when falling into a mode that emulates an old version of IE.



### HTML Doctype Declarations List

| Version                                                    | Documentation Statement                                      |
| :--------------------------------------------------------- | :----------------------------------------------------------- |
| Latest HTML Standards                                      | < !DOCTYPE HTML>                                             |
| HTML4.01(Strict)                                           | < !DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"    "http://www.w3.org/TR/html4/strict.dtd"> |
| <p style='white-space: nowrap;'>HTML4.01(Transitional)</p> | < !DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"    "http://www.w3.org/TR/html4/loose.dtd"> |
| HTML4.01(Frameset)                                         | < !DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN"   "http://www.w3.org/TR/html4/frameset.dtd"> |
| HTML 2.0                                                   | < !DOCTYPE html PUBLIC "-//IETF//DTD HTML 2.0//EN">          |
| HTML 3.2                                                   | < !DOCTYPE html PUBLIC "-//W3C//DTD HTML 3.2 Final//EN">     |



::: tip You should declare the doctype with < !DOCTYPE html>
Today, when IE has been discontinued by Microsoft, almost all mainstream browsers on the market conform to today's Web-related specifications, so today's HTML document types should all be declared as standard mode cutting edge validation.
:::



::: details Reference in this section

-  [https://developer.mozilla.org/en-US/docs/Web/HTML/Quirks_Mode_and_Standards_Mode](https://developer.mozilla.org/en-US/docs/Web/HTML/Quirks_Mode_and_Standards_Mode)
-  [https://developer.mozilla.org/en-US/docs/Glossary/Doctype](https://developer.mozilla.org/en-US/docs/Glossary/Doctype)
-  [https://hsivonen.fi/doctype/](https://hsivonen.fi/doctype/)
-  [https://www.w3.org/QA/2002/04/valid-dtd-list.html](https://www.w3.org/QA/2002/04/valid-dtd-list.html)

:::