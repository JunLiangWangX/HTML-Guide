/*
 * @Description: 
 * @Author: JunLiangWang
 * @Date: 2022-10-25 10:40:16
 * @LastEditors: JunLiangWang
 * @LastEditTime: 2023-02-23 17:30:31
 */

// 使用异步函数也是可以的
export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData, // 站点元数据
  isServer // 当前应用配置是处于 服务端渲染 或 客户端
}) => {
  // ...做一些其他的应用级别的优化
  router.afterEach((to, from) => {
    // 加入google analytics
    if (process.env.NODE_ENV === 'production' && typeof window !== 'undefined') {
      var googleHm = document.createElement("script")
      googleHm.src = "https://www.googletagmanager.com/gtag/js?id=G-6LCRG453HW"
      googleHm.async = 1

      var s = document.getElementsByTagName("script")[0];
      s.parentNode.insertBefore(googleHm, s);
      window.dataLayer = window.dataLayer || [];

      function gtag() {
        dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config', 'G-6LCRG453HW');
    }
  })
}