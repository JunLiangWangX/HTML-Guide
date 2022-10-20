/*
 * @Description: AbortController 接口表示一个控制器对象，
 *                允许你根据需要中止一个或多个 Web 请求。
 * @Author: JunLiangWang
 * @Date: 2022-10-20 15:42:43
 * @LastEditors: JunLiangWang
 * @LastEditTime: 2022-10-20 15:52:21
 */
class AbortController {
    constructor(){
        this.example=`let controller;
        const url = 'video.mp4';
        
        const downloadBtn = document.querySelector('.download');
        const abortBtn = document.querySelector('.abort');
        
        downloadBtn.addEventListener('click', fetchVideo);
        
        abortBtn.addEventListener('click', () => {
          if (controller) {
            controller.abort();
            console.log('中止下载');
          }
        });
        
        function fetchVideo() {
          controller = new AbortController();
          const signal = controller.signal;
          fetch(url, { signal })
            .then((response) => {
              console.log('下载完成', response);
            })
            .catch((err) => {
              console.error('下载错误：'+err.message);
            });
        }`
        this.describe='AbortController 接口表示一个控制器对象，允许你根据需要中止一个或多个 Web 请求。'
    }
    readonly signal:AbortSignal
    describe:String
    example:String
    abort(){
        return '中止一个尚未完成的 Web（网络）请求。这能够中止 fetch 请求及任何响应体的消费和流。'
    }
}