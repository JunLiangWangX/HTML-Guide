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
      var hm = document.createElement("script")
      hm.src = "https://www.googletagmanager.com/gtag/js?id=G-7F09CR2Q4D"
      hm.async = 1
      var s = document.getElementsByTagName("script")[0];
      s.parentNode.insertBefore(hm, s);
      window.dataLayer = window.dataLayer || [];

      function gtag() {
        dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config', 'G-7F09CR2Q4D');
    }
  })
}