/*
 * @Description: vuepress配置文件
 * @Author: JunLiangWang
 * @Date: 2022-08-08 15:48:22
 * @LastEditors: JunLiangWang
 * @LastEditTime: 2022-08-08 17:42:38
 */
module.exports = {
    base: '/',
    title: 'HTML指南',
    description: '个人总结的一份HTML指南',
    
    head: [
        ['link', {
            rel: 'icon',
            href: '/logo.png'
        }]
    ],
    // 主题配置 https://www.vuepress.cn/theme/default-theme-config.html#%E9%A6%96%E9%A1%B5
    themeConfig: {
        logo: '/logo.png',
        nav: [{
            text: 'GitHub',
            link: 'https://github.com/JunLiangWangX/HTML-Guide',
            target: '_blank'
        }],
        sidebar:  [
            '/doc/README1',
            '/doc/README2'
        ],
        search: true,
        searchMaxSuggestions: 10
    },
    extraWatchFiles: ['**/*.md','*.md', '**/*.vue', '*.vue']
}