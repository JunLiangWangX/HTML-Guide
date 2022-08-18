

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
    <a href="https://junliangwangx.github.io/HTML-Guide/"><img src='./resource/foreign-sites-btn(EN).svg'></a>
</p>
<p align='center'><a href='./README.md'>中文</a> &nbsp&nbsp&nbsp <a href='./README(EN).md'>English</a></p>

  

<p align='center'><img  src='https://pagespeed-insights.herokuapp.com?url=https://junliangwangx.github.io/HTML-Guide/' width='70%'/></p>	

<details>
  <summary>Table of Contents</summary>
  <ul>
    <li><a href="#-background">👀 Background</a></li>
    <li><a href="#-usage">🤳 Usage</a></li>
    <li><a href="#-project-structure">🧩 Project Structure</a></li>
    <li><a href="#-issue-and-comment">📫 Issue And Comment</a></li>
    <li><a href="#-contributing">👨‍💻 Contributing</a></li>
    <li><a href="#-support">💪 Support</a></li>
    <li><a href="#-license">🔑 License</a></li>
  </ul>
</details>

   

## 👀 Background

Front-end technologies are changing with each passing day, and development frameworks have sprung up like mushrooms after a rain. But no matter how the technology develops or how the framework is updated, All changes are nothing more than the encapsulation and transformation of HTML, JS, and CSS

<h5>I think the key to learning web development well is whether you can learn well and understand the three basic languages ​​​​of HTML, JS, and CSS.。</h5>

This project is a website that introduces HTML, one of the three basic languages (the CSS and JS guides will be published after the project is updated). There are so many HTML learning websites on the market, why do you choose to build your own wheels? The reason is that when I was learning HTML, I found that various websites have the following problems:

- The knowledge points are scattered. If you want to understand and learn HTML comprehensively and uniformly, you need to see many different websites.
- The operation of various websites is more complicated, and various jumps and advertisements make people confused
- The introduction of knowledge points is blunt and difficult to understand

<h5>Therefore, I came up with the idea of making a website that introduces HTML by myself. It can introduce HTML comprehensively, uniformly, vividly and vividly. It will not be full of advertisements, and the layout structure is clean and tidy, and it can give you the answers you want quickly and accurately! And so the project - 《The HTML Guide》 was born!</h5>

   

## 🤳 Usage

<p align='center'>In order to bring you a different feeling, we have used some technical means and satisfied all the characteristics of PWA, which will bring you an unexpected experience! ! !
</p>

<h3 align='center'>😀🤩😍🥳</h3>

​        

<h3 align='center'>⚙️ Installable ⚙️</h3>

<h5 align='center'>PC can install web pages to the desktop through the install icon in the upper right corner of the browser's navigation bar, and mobile devices can add web pages to the home screen through the browser, so you can get an app-level experience</h5>

<img src="./resource/pc-install.gif" width='70%'><img src="./resource/mobile-install.gif" width='30%' align='right'>





​        

<h3 align='center'>❌ Offline Access ❌</h3>

<h5 align='center'>When you add a web page to your desktop, you get an app-level experience, including the ability to access web pages and read documents even without a network</h5>

<img src="./resource/pc-offline.gif" width='70%'><img src="./resource/mobile-offline.gif" width='30%' align='right'>



​       

<h3 align='center'>📍 Record Reading Position 📍</h3>

<h5 align='center'>When you exit the web page and enter again, click 'Return to previous position' to return to the last reading position</h5>

<img src="./resource/pc-back-to.gif" width='70%'><img src="./resource/mobile-back-to.gif" width='30%' align='right'>



​       

## 🧩 Project Structure

```
├── .github/workflows                  # github action Configuration file storage directory
    ├── deploy.yml                     # github pages Automatic deployment
    └── generate-readme-file.yml       # readme relevant resource files are automatically generated
├── docs                               # website content storage directory
    ├── .vuepress                      # used to store vuepress global configuration, components, static                                              resources, etc.
        ├── public                     # static resource storage directory
            ├── manifest.json          # PWA manifest configuration file
            └── ......                 # png/svg...resource files
        ├── styles                     # style file storage directory
            └── palette.styl           # used to override default color constants
        ├── config.js                  # entry file for configuration file
        └── enhanceApp.js              # enhanced configuration for client applications
    ├── comment.md                     # comment page
    ├── xxx.md                         # md ends with all kinds of pages
    └── ......
├── resource                           # store static resources in readme
    └── ......                   
├── .gitignore                         # github ignore files
├── LICENSE                            # license
├── README(EN).md                      # readme
├── README.md                          # readme
├── _config.yml                        # github page configuration file
└── package.json                       # npm configuration file
```

   

##  Issue And Comment

<img src='./resource/reactions.svg' width='100%'>

#### What should I do if I encounter a problem?

If you encounter problems during use, please search [issues](https://github.com/JunLiangWangX/HTML-Guide/issues) to see if there is an answer to your question. If you cannot find an answer, please Submit your issues in [issues](https://github.com/JunLiangWangX/HTML-Guide/issues) and we will deal with them in time.

#### How to express your views and suggestions?

<p>If you want to post your own opinions and suggestions, you can go to 
    <a href='https://github.com/JunLiangWangX/HTML-Guide/discussions'>discussions</a> or
    <a href='https://github.com/JunLiangWangX/HTML-Guide/issues/3'>comments in issues</a> , of course you can also go directly to the
    <a href='https://junliangwangx.github.io/HTML-Guide/comment.html'>comment in site</a>
    (<a href='https: //wangjunliang.com/HTML-Guide/comment.html'>domestic</a>) published
</p>

   

## 👨‍💻 Contributing

If you find a project bug or are interested in contributing to the project ingredients, please follow these rules:

- This project is constructed by [vuepress](https://vuepress.vuejs.org/) and requires your ability to develop based on [vuepress](https://vuepress.vuejs.org/)
- Read [🧩 Project Structure](#-Project Structure) and related project code carefully to make sure you know enough about the project
- If it is a project bug, please submit an [issue](https://github.com/JunLiangWangX/HTML-Guide/issues), before submitting an issue, please search whether the relevant content has been raised
- Please fork  to your own project first, do not create a branch directly under the repository.
- Please describe the commit information accurately
- PRs are committed to the `dev` branch, not the `main` branch

<h3>The sea has confidants in memory, and the ends of the earth are like neighbors. Thanks for everyone's contributions!!!</h3>

<img src='./resource/repository.svg'>

   

## 💪 Support

<p align='center'>
    <h4 align='center'>赠汪伦</h4>
    <p align='center'>李白</p>
    <p align='center'>李白乘舟将欲行，忽闻岸上踏歌声。</p>
    <p align='center'>桃花潭水深千尺，不及汪伦送我情。</p>
</p>



<p align='center'>
    If you think the project is good, you can give the project a <a href='https://github.com/JunLiangWangX/HTML-Guide/'>start</a>✨, and post your thoughts in <a href='https://github.com/JunLiangWangX/HTML-Guide/issues/3'>comment</a>✍. Of course, if you are well-off, you can invite the author to drink a cup of coffee🍵
</p>

|                      Alipay                       |                      WeChat Pay                      |
| :-----------------------------------------------: | :--------------------------------------------------: |
| <img src='./resource/alipay(EN).svg' width='50%'> | <img src='./resource/wechatpay(EN).svg' width='50%'> |

   

## 🔑 License

[MIT](./LICENSE)

