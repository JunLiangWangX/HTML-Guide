/*
 * @Description: vuepress配置文件
 * @Author: JunLiangWang
 * @Date: 2022-08-08 15:48:22
 * @LastEditors: JunLiangWang
 * @LastEditTime: 2022-10-17 11:38:00
 */
module.exports = {
    // 基本配置 https://www.vuepress.cn/config/#%E5%9F%BA%E6%9C%AC%E9%85%8D%E7%BD%AE
    
    // 国际化配置 https://vuepress.vuejs.org/zh/guide/i18n.html#%E7%AB%99%E7%82%B9%E5%A4%9A%E8%AF%AD%E8%A8%80%E9%85%8D%E7%BD%AE
    locales: {
        // 键名是该语言所属的子路径， 作为特例，默认语言可以使用 '/' 作为其路径。
        '/': {
            lang: 'zh-CN',
            title: 'HTML指南',
            description: '一份全面且准确的HTML指南'
        },
        '/en/': {
            lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
            title: 'HTML Guide',
            description: 'A comprehensive and accurate HTML guide'
        }
    },
    
    //打包目录
    //dest:'./HTML-Guide',

    base: '/HTML-Guide/',
    head: [
        ['link', {
            rel: "icon",
            href: "/logox48.png"
        }],
        ['link', {
            rel: 'manifest',
            href: '/manifest.json'
        }],
        ['meta', {
            name: 'apple-mobile-web-app-capable',
            content: 'yes'
        }],
        ['meta', {
            name: 'apple-mobile-web-app-status-bar-style',
            content: 'black'
        }],
        ['link', {
            rel: 'apple-touch-icon',
            href: '/logox152.png'
        }],
        ['link', {
            rel: 'mask-icon',
            href: '/logo.svg',
            color: '#3eaf7c'
        }],
        ['meta', {
            name: 'msapplication-TileImage',
            content: '/iconx144.png'
        }],
        ['meta', {
            name: 'msapplication-TileColor',
            content: '#00000000'
        }],
        ['meta', {
            name: 'theme-color',
            content: '#fff'
        }],
        ['meta', {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1'
        }],
        ['meta', {
            name: 'google-site-verification',
            content: 'tQ2ZN1gkwpMXl93ab6xiXnRn-am7D29wRO6DOHUhDXA'
        }],
        ['meta', {
            property: 'og:type',
            content: 'website'
        }],
        ['meta', {
            property: 'og:image',
            content: '/HTML-Guide/logo.svg'
        }]
    ],
    extraWatchFiles: ['**/*.md', '*.md', '**/*.vue', '*.vue'],
    // 永久链接
    // permalink: "/:year/:month/:day/:slug",

    // 主题配置 https://www.vuepress.cn/theme/default-theme-config.html#%E9%A6%96%E9%A1%B5
    themeConfig: {
        sidebarDepth:2,
        logo: '/logo.svg',
        algolia: {
            apiKey: '1a860c9e89ee8ceba13280ccec343b8b',
            indexName: 'HTML Guide',
            appId: 'XDPW45V07P'
        },
        locales: {
            '/': {
                selectText: '🌍 语言',
                label: '简体中文',
                nav: [{
                    text: '📝 评论',
                    link: '/comment'
                }, {
                    text: '🤳🏻 使用手册',
                    link: '/usage'
                },{
                    text: '💪 支持作者',
                    link: '/support'
                }, {
                    text: '📣 报告问题',
                    link: 'https://github.com/JunLiangWangX/HTML-Guide/issues'
                }],
                // 最后更新文本 string | boolean
                lastUpdated: '最后更新',
                // 默认为 "Edit this page"
                editLinkText: '帮助我们改善此页面！',
                sidebar: [
                    '/content/1.what-is-html',
                    '/content/2.how-to-parse-html',
                    '/content/3.html-dom',
                    '/content/4.elements-attributes-events',
                    '/content/5.element-global-attributes',
                    '/content/6.element-global-events',
                    '/content/7.html-document-structure',
                    '/content/8.elements-in-head',
                    '/content/9.elements-in-body',
                    '/content/10.element-classification',
                    '/content/11.html-development-history'
                ]
            },
            '/en/': {
                selectText: '🌍 Languages',
                label: 'English',
                nav: [{
                    text: '📝 Comment',
                    link: '/en/comment'
                }, {
                    text: '🤳🏻 Usage',
                    link: '/en/usage'
                },{
                    text: '💪 Support',
                    link: '/en/support'
                }, {
                    text: '📣 Report  Problem',
                    link: 'https://github.com/JunLiangWangX/HTML-Guide/issues'
                }],
                // 最后更新文本 string | boolean
                lastUpdated: 'Latest update',
                // 默认为 "Edit this page"
                editLinkText: 'Edit this page on GitHub!',
                sidebar: [
                    '/en/content/1.what-is-html',
                    '/en/content/2.how-to-parse-html',
                    '/en/content/3.html-dom',
                    '/en/content/4.elements-attributes-events',
                    '/en/content/5.element-global-attributes',
                    '/en/content/6.element-global-events',
                    '/en/content/7.html-document-structure',
                    '/en/content/8.elements-in-head',
                    '/en/content/9.elements-in-body',
                    '/en/content/10.element-classification',
                    '/en/content/11.html-development-history'
                ]
            }
        },
        // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
        repo: 'https://github.com/JunLiangWangX/HTML-Guide',
        // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
        // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
        repoLabel: 'GitHub',
        // 假如你的文档仓库和项目本身不在一个仓库：
        // docsRepo: 'vuejs/vuepress',
        // 假如文档不是放在仓库的根目录下：
        docsDir: 'docs',
        // 假如文档放在一个特定的分支下：
        docsBranch: 'dev',
        // 默认是 false, 设置为 true 来启用
        editLinks: true,
        // 是否启用滑动动画
        smoothScroll: true

    },
    // 插件配置 https://www.vuepress.cn/plugin/
    // 插件市场 https://github.com/vuepress/awesome-vuepress/blob/main/v1.md#community-themes
    plugins: [
        ['last-reading', {
            popupConfig: {
                '/': {
                    message: '继续上次阅读',
                    buttonText: '前往'
                },
                '/en/': {
                    message: 'Go back to the last reading.',
                    buttonText: 'Go to'
                }
            },
        }],
        ['vuepress-plugin-gotop-plus'],
        ['img-lazy'],
        // 支持PWA地址：https://vuepress.vuejs.org/zh/plugin/official/plugin-pwa.html#%E5%AE%89%E8%A3%85
        ['@vuepress/pwa', {
            serviceWorker: true,
            updatePopup: {
                '/': {
                    message: "发现新内容可用",
                    buttonText: "刷新"
                },
                '/en/': {
                    message: "New content is available.",
                    buttonText: "Refresh"
                }
            }
        }],
        // seo 地址：https://github.com/lorisleiva/vuepress-plugin-seo
        ['seo'],
        // 分享插件地址：https://sns.goyfe.com/guide/#install
        [`social-share`, {
            networks: [
                `wechat`,
                `qq`,
                `douban`,
                `weibo`,
                `email`,
                `twitter`,
                `facebook`,
                `reddit`,
                `telegram`,
                `line`,
                `skype`,
                `telegram`,
            ],
            email: `1428637884@gmail.com`,
            twitterUser: `JunLiangWang`,
            fallbackImage: `/HTML-Guide/logo.svg`,
            autoQuote: true,
            qrcodeOptions: {
                width: 240,
            },
            extendsNetworks: {
                qq: {
                    icon: `/HTML-Guide/QQ.png`,
                }
            }
        }],
        // 评论插件地址：https://vssue.js.org/zh/guide/
        ['@vssue/vuepress-plugin-vssue', {
            // 设置 `platform` 而不是 `api`
            platform: 'github-v4',
            // 其他的 Vssue 配置
            owner: 'JunLiangWangX',
            repo: 'HTML-Guide',
            clientId: 'aaa464cfcc37b6c87225',
            clientSecret: 'b62934f0953c056d0d7e075098b38f1f86c0afe6'
        }],
    ]
}