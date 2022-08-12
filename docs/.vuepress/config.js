/*
 * @Description: vuepress配置文件
 * @Author: JunLiangWang
 * @Date: 2022-08-08 15:48:22
 * @LastEditors: JunLiangWang
 * @LastEditTime: 2022-08-12 10:52:15
 */
module.exports = {
    // 基本配置 https://www.vuepress.cn/config/#%E5%9F%BA%E6%9C%AC%E9%85%8D%E7%BD%AE
    base: '/HTML-Guide/',
    title: 'HTML指南',
    description: '个人总结的一份HTML指南',
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
        }]
    ],
    extraWatchFiles: ['**/*.md', '*.md', '**/*.vue', '*.vue'],
    // 永久链接
    // permalink: "/:year/:month/:day/:slug",
    // 主题配置 https://www.vuepress.cn/theme/default-theme-config.html#%E9%A6%96%E9%A1%B5
    themeConfig: {
        logo: '/logo.svg',
        nav: [{
            text: '📝 评论',
            link: '/comment'
        }],
        sidebar: [
            '/',
            '/README1',
            '/README2'
        ],
        search: true,
        searchMaxSuggestions: 10,
        lastUpdated: '最后更新', // string | boolean
        author: '汪军梁',
        // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
        repo: 'https://github.com/JunLiangWangX/HTML-Guide',
        // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
        // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
        repoLabel: 'GitHub',

        // 以下为可选的编辑链接选项

        // 假如你的文档仓库和项目本身不在一个仓库：
        // docsRepo: 'vuejs/vuepress',
        // 假如文档不是放在仓库的根目录下：
        docsDir: 'docs',
        // 假如文档放在一个特定的分支下：
        docsBranch: 'dev',
        // 默认是 false, 设置为 true 来启用
        editLinks: true,
        // 默认为 "Edit this page"
        editLinkText: '帮助我们改善此页面！',


        smoothScroll: true

    },
    // 插件配置 https://www.vuepress.cn/plugin/
    // 插件市场 https://github.com/vuepress/awesome-vuepress/blob/main/v1.md#community-themes
    plugins: [
        ['last-reading', {
            popupConfig: {
                message: '返回之前位置',
                buttonText: '确定'
            },
        }],
        ['vuepress-plugin-gotop-plus'],
        ['vuepress-plugin-baidu-autopush'],
        ['img-lazy'],
        // 支持PWA地址：https://vuepress.vuejs.org/zh/plugin/official/plugin-pwa.html#%E5%AE%89%E8%A3%85
        ['@vuepress/pwa', {
            serviceWorker: true,
            updatePopup: {
                message: "有新内容更新！",
                buttonText: "刷新"
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
            fallbackImage: `/logo.svg`,
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
            clientSecret: 'b62934f0953c056d0d7e075098b38f1f86c0afe6',
            locale:"zh"
        }/*, {
            // 设置 `platform` 而不是 `api`
            platform: 'github-v4',
            // 其他的 Vssue 配置
            owner: 'JunLiangWangX',
            repo: 'HTML-Guide',
            clientId: 'aaa464cfcc37b6c87225',
            clientSecret: 'b62934f0953c056d0d7e075098b38f1f86c0afe6',
            locale:"zh"
        }*/]
    ]
}
