

<p align="center"><img src='./resource/logo(EN).svg' ></p>

## 

<p align="center">
  <a href="https://github.com/JunLiangWangX/HTML-Guide" target="_blank">
    <img src="https://img.shields.io/github/stars/JunLiangWangX/HTML-Guide?style=social&label=Star&maxAge=2592000">
  </a>
  <a href="https://github.com/JunLiangWangX/HTML-Guide/graphs/commit-activity"  target="_blank">
    <img src="https://img.shields.io/github/commit-activity/m/JunLiangWangX/HTML-Guide">
  </a>
  <a href="https://github.com/JunLiangWangX/HTML-Guide/commit"  target="_blank">
    <img src="https://img.shields.io/github/last-commit/JunLiangWangX/HTML-Guide">
  </a>
  <a href="https://github.com/JunLiangWangX/HTML-Guide/issues?q=is%3Aopen"  target="_blank">
    <img src="https://img.shields.io/github/issues/JunLiangWangX/HTML-Guide">
  </a>
  <a href="https://github.com/JunLiangWangX/HTML-Guide/issues?q=is%3Aclose"  target="_blank">
    <img src="https://img.shields.io/github/issues-closed-raw/JunLiangWangX/HTML-Guide">
  </a>
  <a href="https://GitHub.com/JunLiangWangX/HTML-Guide/pull/"  target="_blank">
    <img src="https://img.shields.io/github/issues-pr/JunLiangWangX/HTML-Guide">
  </a>
  <a href="https://github.com/JunLiangWangX/HTML-Guide/pulls?q=is%3Aclosed"  target="_blank">
    <img src="https://badgen.net/github/closed-prs/JunLiangWangX/HTML-Guide">
  </a>
</p>
<p align="center">
    <a href="https://wangjunliang.com/HTML-Guide/"><img src='./resource/domestic-site-btn(EN).svg'></a>
    <a href="https://junliangwangx.github.io/HTML-Guide/en/"><img src='./resource/foreign-sites-btn(EN).svg'></a>
</p>
<p align='center'><a href='./README.md'>δΈ­ζ</a> &nbsp&nbsp&nbsp <a href='./README(EN).md'>English</a></p>

  

<p align='center'><img  src='./resource/proformance.svg' width='70%'/></p>	

<details>
  <summary>Table of Contents</summary>
  <ul>
    <li><a href="#-background">π Background</a></li>
    <li><a href="#-usage">π€³ Usage</a></li>
    <li><a href="#-project-structure">π§© Project Structure</a></li>
    <li><a href="#-issue-and-comment">π« Issue And Comment</a></li>
    <li><a href="#-contributing">π¨βπ» Contributing</a></li>
    <li><a href="#-support">πͺ Support</a></li>
    <li><a href="#-license">π License</a></li>
  </ul>
</details>



## π Background

Front-end technologies are changing with each passing day, and development frameworks have sprung up like mushrooms after a rain. But no matter how the technology develops or how the framework is updated, All changes are nothing more than the encapsulation and transformation of HTML, JS, and CSS

<h5>I think the key to learning web development well is whether you can learn well and understand the three basic languages ββββof HTML, JS, and CSS.γ</h5>

This project is a website that introduces HTML, one of the three basic languages (the CSS and JS guides will be published after the project is updated). There are so many HTML learning websites on the market, why do you choose to build your own wheels? The reason is that when I was learning HTML, I found that various websites have the following problems:

- The knowledge points are scattered. If you want to understand and learn HTML comprehensively and uniformly, you need to see many different websites.
- The operation of various websites is more complicated, and various jumps and advertisements make people confused
- The introduction of knowledge points is blunt and difficult to understand

<h5>Therefore, I came up with the idea of making a website that introduces HTML by myself. It can introduce HTML comprehensively, uniformly, vividly and vividly. It will not be full of advertisements, and the layout structure is clean and tidy, and it can give you the answers you want quickly and accurately! And so the project - γThe HTML Guideγ was born!</h5>

   

## π€³ Usage

<p align='center'>In order to bring you a different feeling, we have used some technical means and satisfied all the characteristics of PWA, which will bring you an unexpected experience! ! !
</p>

<h3 align='center'>ππ€©ππ₯³</h3>

β        

<h3 align='center'>βοΈ Installable βοΈ</h3>

<h5 align='center'>PC can install web pages to the desktop through the install icon in the upper right corner of the browser's navigation bar, and mobile devices can add web pages to the home screen through the browser, so you can get an app-level experience</h5>

<img src="./resource/pc-install.gif" width='70%'><img src="./resource/mobile-install.gif" width='30%' align='right'>





β        

<h3 align='center'>β Offline Access β</h3>

<h5 align='center'>When you add a web page to your desktop, you get an app-level experience, including the ability to access web pages and read documents even without a network</h5>

<img src="./resource/pc-offline.gif" width='70%'><img src="./resource/mobile-offline.gif" width='30%' align='right'>



β       

<h3 align='center'>π Record Reading Position π</h3>

<h5 align='center'>When you exit the web page and enter again, click 'Return to previous position' to return to the last reading position</h5>

<img src="./resource/pc-back-to.gif" width='70%'><img src="./resource/mobile-back-to.gif" width='30%' align='right'>



β       

## π§© Project Structure

```
βββ .github/workflows                  # github action Configuration file storage directory
|    βββ deploy.yml                    # github pages Automatic deployment
|    βββ deploy(domestic).yml          # automatic deployment of domestic sites
|    βββ generate-readme-file.yml      # readme relevant resource files are automatically generated
βββ docs                               # website content storage directory
|    βββ .vuepress                     # used to store vuepress global configuration, components, static     |    |    |                              resources, etc.
|    |    βββ components               # store Vue component directory
|    |    |    βββ ......              # some Vue components
|    |    βββ public                   # static resource storage directory
|    |    |    βββ manifest.json       # PWA manifest configuration file
|    |    |    βββ ......              # png/svg...resource files
|    |    βββ styles                   # style file storage directory
|    |    |    βββ palette.styl        # used to override default color constants
|    |    βββ config.js                # entry file for configuration file
|    |    βββ enhanceApp.js            # enhanced configuration for client applications
|    βββ content                       # store various md documents (Chinese)
|    |    βββ xxxx.md                  # various md documents
|    |    βββ .......                     
|    βββ en                            # store English pages
|    |    βββ content                  # store various md documents (English)
|    |    |    βββ xxxx.md             # various md documents
|    |    |    βββ .......                
|    |    βββ comment.md               # comments page (English)
|    |    βββ README.md                # site Home (English)
|    |    βββ support.md               # support page (English)
|    |    βββ usage.md                 # instructions page (English)
|    βββ comment.md                    # comments page (Chinese)
|    βββ README.md                     # site home (Chinese)
|    βββ support.md                    # support page (Chinese)
|    βββ usage.md                      # instructions page (Chinese)
βββ resource                           # store static resources in readme
βββ .gitignore                         # github ignore files
βββ LICENSE                            # license
βββ README(EN).md                      # readme
βββ README.md                          # readme
βββ _config.yml                        # github page configuration file
βββ deploy.sh                          # deploy domestic site modification file script
βββ package.json                       # npm configuration file
```

   

##  Issue And Comment

<img src='./resource/reactions.svg' width='100%'>

#### What should I do if I encounter a problem?

If you encounter problems during use, please search [issues](https://github.com/JunLiangWangX/HTML-Guide/issues) to see if there is an answer to your question. If you cannot find an answer, please Submit your issues in [issues](https://github.com/JunLiangWangX/HTML-Guide/issues) and we will deal with them in time.

#### How to express your views and suggestions?

<p>If you want to post your own opinions and suggestions, you can go to 
    <a href='https://github.com/JunLiangWangX/HTML-Guide/discussions'>discussions</a> or
    <a href='https://github.com/JunLiangWangX/HTML-Guide/issues/6'>comments in issues</a> , of course you can also go directly to the
    <a href='https://junliangwangx.github.io/HTML-Guide/en/comment.html'>comment in site</a>
    (<a href='https://wangjunliang.com/HTML-Guide/comment.html'>domestic</a>) published
</p>





## π¨βπ» Contributing

If you find a project bug or are interested in contributing to the project ingredients, please follow these rules:

- This project is constructed by [vuepress](https://vuepress.vuejs.org/) and requires your ability to develop based on [vuepress](https://vuepress.vuejs.org/)
- Read [π§© Project Structure](#-project-structure) and related project code carefully to make sure you know enough about the project
- If it is a project bug, please submit an [issue](https://github.com/JunLiangWangX/HTML-Guide/issues), before submitting an issue, please search whether the relevant content has been raised
- Please fork  to your own project first, do not create a branch directly under the repository.
- Please describe the commit information accurately and related [issue](https://github.com/JunLiangWangX/HTML-Guide/issues)
- PRs are committed to the `main` branch, not the `dev` or other branch

<h3>The sea has confidants in memory, and the ends of the earth are like neighbors. Thanks for everyone's contributions!!!</h3>

<img src='./resource/repository.svg'>

   

## πͺ Support

<p align='center'>
    <h4 align='center'>θ΅ ζ±ͺδΌ¦</h4>
    <p align='center'>ζη½</p>
    <p align='center'>ζη½δΉθε°ζ¬²θ‘οΌεΏ½ι»ε²ΈδΈθΈζ­ε£°γ</p>
    <p align='center'>ζ‘θ±ζ½­ζ°΄ζ·±εε°ΊοΌδΈεζ±ͺδΌ¦ιζζγ</p>
</p>


<p align='center'>
    If you think the project is good, you can give the project a <a href='https://github.com/JunLiangWangX/HTML-Guide/'>star</a>β¨, and post your thoughts in <a href='https://github.com/JunLiangWangX/HTML-Guide/issues/6'>comment</a>β. Of course, if you are well-off, you can invite the author to drink a cup of coffeeπ΅
</p>


|                      Alipay                       |                      WeChat Pay                      |
| :-----------------------------------------------: | :--------------------------------------------------: |
| <img src='./resource/alipay(EN).svg' width='50%'> | <img src='./resource/wechatpay(EN).svg' width='50%'> |

   

## π License

[MIT](./LICENSE)

