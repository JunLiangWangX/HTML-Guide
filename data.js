/*
 * @Description: 
 * @Author: JunLiangWang
 * @Date: 2022-10-20 14:55:43
 * @LastEditors: JunLiangWang
 * @LastEditTime: 2022-10-20 15:39:27
 */
const AbortController={
    parent:null,
    describe:'AbortController 接口表示一个控制器对象，允许你根据需要中止一个或多个 Web 请求。',
    attributes:{
        signal:{
            type:AbortSignal,
            readonly:true,
            describe:'返回一个 AbortSignal 对象实例，它可以用来 with/abort 一个 Web（网络）请求'
        }
    },
    event:{
        abort:{
            describe:'中止一个尚未完成的 Web（网络）请求。这能够中止 fetch 请求及任何响应体的消费和流。',
            return:null,
            parame:[]
        }
    }
}

const AbortSignal={
    parent:'EventTarget',
    describe:'AbortSignal 接口表示一个信号对象（signal object），它允许你通过 AbortController 对象与 DOM 请求（如 Fetch）进行通信并在需要时将其中止。',
    attributes:{
        aborted:{
            type:Boolean,
            readonly:true,
            describe:'aborted 是一个只读属性，它返回一个 Boolean表示与之通信的请求是否被终止（true）或未终止（false）'
        },
        reason:{
            type:DOMException,
            readonly:true,
            describe:'当 signal 没有被中止时，该属性值为 undefined。当使用 AbortController.abort() 或 AbortSignal.abort() 中止 signal 时，可以设置一个指定的值。如果没有在这些方法中明确的设置，则默认是"AbortError"DOMException。'
        }
    },
    event:{
        static:{
            
        }
    }
}