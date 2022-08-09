/*
 * @Description: vuepress配置文件
 * @Author: JunLiangWang
 * @Date: 2022-08-08 15:48:22
 * @LastEditors: JunLiangWang
 * @LastEditTime: 2022-08-09 10:25:29
 */
module.exports = {
    // 基本配置 https://www.vuepress.cn/config/#%E5%9F%BA%E6%9C%AC%E9%85%8D%E7%BD%AE
    base: '/',
    title: 'HTML指南',
    description: '个人总结的一份HTML指南',
    head: [
        ['link', {
            rel: 'icon',
            href: '/logo.png'
        }]
    ],
    extraWatchFiles: ['**/*.md', '*.md', '**/*.vue', '*.vue'],
    // 主题配置 https://www.vuepress.cn/theme/default-theme-config.html#%E9%A6%96%E9%A1%B5
    themeConfig: {
        logo: '/logo.png',
        /*nav: [{
            text: 'GitHub',
            link: 'https://github.com/JunLiangWangX/HTML-Guide',
            target: '_blank'
        }],*/
        sidebar: [
            '/',
            '/README1',
            '/README2'
        ],
        search: true,
        searchMaxSuggestions: 10,
        lastUpdated: 'Last Updated', // string | boolean

        // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
        repo: 'https://github.com/JunLiangWangX/HTML-Guide',
        // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
        // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
        repoLabel: 'GitHub',

        // 以下为可选的编辑链接选项

        // 假如你的文档仓库和项目本身不在一个仓库：
        // docsRepo: 'vuejs/vuepress',
        // 假如文档不是放在仓库的根目录下：
        docsDir: 'docSite',
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
        ['@vuepress/plugin-back-to-top', false],
        [
            'vuepress-plugin-gotop-plus'
        ], 'vuepress-plugin-baidu-autopush', 'img-lazy',
        ['last-reading', {
            popupConfig: {
                message: '返回之前位置',
                buttonText: '确定'
            },
        }]
    ]
}