# 2.事件



## 2.1 DOM事件

在整个 Web 平台中，events被分派给对象以发出事件的信号，例如网络活动或用户交互。这些对象实现了 EventTarget 接口，因此可以通过调用 addEventListener() 添加事件监听器来观察事件：

```js
obj.addEventListener("load", imgFetched)

function imgFetched(ev) {
  // great success
  …
}
```

可以使用 removeEventListener() 方法删除事件侦听器，并传递相同的参数。

```js
obj.removeEventListener("load", imgFetched)
```

或者，可以通过将 [AbortSignal](https://developer.mozilla.org/zh-CN/docs/Web/API/AbortSignal) 传递给 addEventListener() 并在拥有该信号的控制器上调用 abort() 来删除事件侦听器。

```js
const controller = new AbortController();

obj.addEventListener('click', () => {
  controller.abort();
},{ signal: controller.signal });
```

Events也是对象，并实现了Event接口（或派生接口）。在上面的例子中，ev 是事件。 ev 作为参数传递给事件侦听器的回调（通常是如上所示的 JavaScript 函数）。事件侦听器关闭事件的类型属性值（上例中的“加载”）。事件的 target 属性值返回事件被调度到的对象（上面的 obj）。

虽然事件通常由用户代理作为用户交互或完成某些任务的结果来分派，但应用程序可以通过使用通常称为合成事件的方式自行分派事件：