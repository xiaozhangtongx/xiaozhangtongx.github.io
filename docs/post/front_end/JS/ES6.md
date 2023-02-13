---
title: 【JS】ES6部分学习
date: 2022-12-22
categories:
  - 前端
tags:
  - ES6
sidebar: auto
---

> **学习资料：**
>
> - [ECMAScript 6 入门](https://www.bookstack.cn/read/es6-3rd/sidebar.md)
> - [尚硅谷Web前端ES6教程，涵盖ES6-ES11](https://www.bilibili.com/video/BV1uK411H7on?p=24&share_source=copy_web)

### 1.Symbol

ES6 引入了一种新的原始数据类型`Symbol`，表示独一无二的值。它是 JavaScript 语言的第七种数据类型，前六种是：`undefined`、`null`、布尔值（Boolean）、字符串（String）、数值（Number）、对象（Object）。

#### 1.1 创建 Symbol

```
const sym = Symbol('foo');
```

上面代码中，`sym`的描述就是字符串`foo`。

```js
// 1.创建Symbol
let s1 = Symbol()
let s2 = Symbol('123')

// 2.Symbol.for创建
let s3 = Symbol.for('123')

// 3.不能与其他类型的数据进行运算
// let res1 = s1 + 100    报错

// 4.将 Symbol 显式转为字符串
console.log(s2.description)

console.log(s1, s2, s3)
```

#### 1.2 作为属性名的 Symbol

> Symbol一般向对象中添加属性或方法

```js
let mySymbol = Symbol();
// 第一种写法
let a = {};
a[mySymbol] = 'Hello!';
// 第二种写法
let a = {
  [mySymbol]: 'Hello!'
};
// 第三种写法
let a = {};
Object.defineProperty(a, mySymbol, { value: 'Hello!' });
// 以上写法都得到同样结果
a[mySymbol] // "Hello!"
```

#### 1.3 [Symbol内置属性](https://www.bookstack.cn/read/es6-3rd/spilt.8.docs-symbol.md)

除了定义自己使用的 Symbol 值以外，ES6 还提供了 11 个内置的 Symbol 值，指向语言内部使用的方法。

**有一说一，没得搞懂！！！**

### 2.Promise

#### 2.1 Promise 的含义

Promise 是异步编程的一种解决方案，比传统的解决方案——回调函数和事件——更合理和更强大。它由社区最早提出和实现，ES6 将其写进了语言标准，统一了用法，原生提供了`Promise`对象。

所谓`Promise`，简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果。从语法上说，Promise 是一个对象，从它可以获取异步操作的消息。Promise 提供统一的 API，各种异步操作都可以用同样的方法进行处理。

```js
// 实例化Promise对象
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    // 成功状态
    let data = '这是数据的数据'
    resolve(data)
    // 失败状态
    let err = '失败数据'
    reject(err)
  }, 1000)
})
// 调用Promise对象的then方法
p.then((value) => {
  console.log(value)
}).catch((reason) => {
  console.log(reason)
})
```

-  **封装AJAX GET方法**

```js
/**
 * 封装一个aendAJAX方法发送GET AJAX请求
 * 参数 URL
 * 返回Promise对象
 */

function sendAJAX(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', url)
    xhr.send()
    // 处理结果
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status >= 200 && xhr.status < 300) {
          resolve(xhr.response)
        } else {
          reject(xhr.status)
        }
      }
    }
  })
}

sendAJAX('https://api.apiopen.top/getJoke')
  .then((value) => console.log(value))
  .catch((reason) => console.log(reason))
```

#### 2.2 Promise状态

一个 `Promise` 必然处于以下几种状态之一：

- *待定（pending）*: 初始状态，既没有被兑现，也没有被拒绝。
- *已兑现（fulfilled）*: 意味着操作成功完成。
- *已拒绝（rejected）*: 意味着操作失败。

> 说明：Promise状体只能由`pending`变为`fulfilled`，由`pending`变为`rejected`而且一个Promise对象只能改变一次

#### 2.3 Promise对象的值

保存着异步任务[成功/失败]的结果

- resolve
- reject

1.then方法注册 当resolve(成功)/reject(失败)的回调函数

```js
// onFulfilled 是用来接收promise成功的值
// onRejected 是用来接收promise失败的原因
promise.then(onFulfilled, onRejected);
```

> then方法是异步执行的

2.resolve(成功) onFulfilled会被调用

```js
const promise = new Promise((resolve, reject) => {
   resolve('fulfilled'); // 状态由 pending => fulfilled
});
promise.then(result => { // onFulfilled
    console.log(result); // 'fulfilled' 
}, reason => { // onRejected 不会被调用
    
})
```

3.reject(失败) onRejected会被调用

```js
const promise = new Promise((resolve, reject) => {
   reject('rejected'); // 状态由 pending => rejected
});
promise.then(result => { // onFulfilled 不会被调用
  
}, reason => { // onRejected 
    console.log(rejected); // 'rejected'
})
```

4.promise.catch

> 在链式写法中可以捕获前面then中发送的异常,

```js
promise.catch(onRejected)
相当于
promise.then(null, onRrejected);

// 注意
// onRejected 不能捕获当前onFulfilled中的异常
promise.then(onFulfilled, onRrejected); 

// 可以写成：
promise.then(onFulfilled)
       .catch(onRrejected);   
```

4.promise chain

> promise.then方法每次调用 都返回一个新的promise对象 所以可以链式写法

```js
function taskA() {
    console.log("Task A");
}
function taskB() {
    console.log("Task B");
}
function onRejected(error) {
    console.log("Catch Error: A or B", error);
}

var promise = Promise.resolve();
promise
    .then(taskA)
    .then(taskB)
    .catch(onRejected) // 捕获前面then方法中的异常
```

#### 2.4 Promise工作流程

![img](../../../../assets/img/promises.png)

#### 2.5 Promise静态对象

1.Promise.resolve 返回一个fulfilled状态的promise对象

```javascript
Promise.resolve('hello').then(function(value){
    console.log(value);
});

Promise.resolve('hello');
// 相当于
const promise = new Promise(resolve => {
   resolve('hello');
});
```

2.Promise.reject 返回一个rejected状态的promise对象

```javascript
Promise.reject(24);
new Promise((resolve, reject) => {
   reject(24);
});
```

3.Promise.all 接收一个promise对象数组为参数

> 只有全部为resolve才会调用 通常会用来处理 多个并行异步操作

```js
const p1 = new Promise((resolve, reject) => {
    resolve(1);
});

const p2 = new Promise((resolve, reject) => {
    resolve(2);
});

const p3 = new Promise((resolve, reject) => {
    reject(3);
});

Promise.all([p1, p2, p3]).then(data => { 
    console.log(data); // [1, 2, 3] 结果顺序和promise实例数组顺序是一致的
}, err => {
    console.log(err);
});
// 输出的结果为3，只有全为成功的时候才会输出123，因为其中有一个是失败的，所以输出的为失败的结果3
```

4.Promise.race 接收一个promise对象数组为参数

> Promise.race 只要有一个promise对象进入 FulFilled 或者 Rejected 状态的话，就会继续进行后面的处理。
>
> 谁先改变状态那就输出谁

```javascript
function timerPromisefy(delay) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(delay);
        }, delay);
    });
}
var startDate = Date.now();

Promise.race([
    timerPromisefy(10),
    timerPromisefy(20),
    timerPromisefy(30)
]).then(function (values) {
    console.log(values); // 10
});
```

#### 2.6 原生的JS实现Promise

```js
// 声明构造函数
function Promise(executer) {
  //添加属性
  this.promiseState = 'pending'
  this.promiseResult = null
  // 声明属性
  this.callback = {}
  // 保存实例对象this的值
  const that = this

  // resolve函数
  function resolve(data) {
    // 保证Promise状态只能改变一次
    if (that.promiseState !== 'pending') return
    // 1.修改对象(promiseState)
    // 注意这里的this指向的是window这个对象，解决方法：1.另外声明一个变量 2.箭头函数
    that.promiseState = 'fulfilled'
    // 2.设置对象结果值(promiseResult)
    that.promiseResult = data
    // 调用成功的回调函数
    if (that.callback.OnResolved) {
      that.callback.OnResolved(data)
    }
  }

  // reject函数
  function reject(data) {
    // 保证Promise状态只能改变一次
    if (that.promiseState !== 'pending') return
    // 1.修改对象(promiseState)
    that.promiseState = 'rejected'
    // 2.设置对象结果值(promiseResult)
    that.promiseResult = data
    // 调用成功的回调函数
    if (that.callback.OnRejected) {
      that.callback.OnRejected(data)
    }
  }

  // 执行器函数是同步调用的
  try {
    executer(resolve, reject)
  } catch (e) {
    reject(e)
  }
}

// 添加then方法
Promise.prototype.then = function (OnResolved, OnRejected) {
  // 调用回调函数
  if (this.promiseState === 'fulfilled') {
    OnResolved(this.promiseResult)
  }
  if (this.promiseState === 'rejected') {
    OnResolved(this.promiseResult)
  }
  // 判断pending状态
  if (this.promiseState === 'pending') {
    // 保存回调函数
    this.callback = {
      OnResolved: OnResolved,
      OnRejected: OnRejected,
    }
  }
}
```

#### 2.7 async

> 作为一个关键字放在函数的前面，表示该函数是一个异步函数，意味着该函数的执行不会阻塞后面代码的执行  异步函数的调用跟普通函数一样

```javascript
async function timeout(){
    return "helloworld";
}
console.log(timeout());
console.log("我在异步函数后面，会先执行谁呢");
// Promise { 'helloworld' }
// 我在异步函数后面，会先执行谁呢
```

> 可以看出执行顺序还是函数先执行，但是函数的返回结果是一个Promise对象，要获取Promise的返回值应该用then方法

```javascript
async function timeout(){
    return "helloworld";
}
timeout().then((result)=>{
    console.log(result);
});
console.log("我在异步函数后面，会先执行谁呢");

// 我在异步函数后面，会先执行谁呢
// helloworld
```

> 此时先输出的就是后面的一串文字，说明异步函数的执行没有阻塞后面的代码执行，`async`的内部实现原理就是如果该函数中有一个返回值，当调用该函数时，默认会在内部调用`Promise.solve()` 方法把它转化成一个`Promise` 对象作为返回，若函数内部抛出错误，则调用`Promise.reject()`返回一个`Promise` 对象

```javascript
async function timeout1(flag){
    if(flag){
        return "hello world";
    }else{
        throw new Error("error!!");
    }
}

console.log(timeout1(true));
console.log(timeout1(false));
// Promise {<resolved>: "hello world"}
// Promise {<rejected>: Error: error!!...}
```

> 既然`async`返回的是一个`Promise` 对象，那么`Promise` 的所有用法他都可以用，如`Promise.catch`捕获异常等

#### 2.8 await

`await`必须要放在`async`函数中

> `await`即等待，用于等待一个`Promise`对象。它只能在异步函数 `async function`中使用，否则会报错
>  **它的返回值不是`Promise`对象而是`Promise`对象处理之后的结果**
>  `await`表达式会暂停当前 `async function`的执行，等待`Promise` 处理完成。若 `Promise` 正常处理`(fulfilled)`，其回调的`resolve`函数参数作为 `await` 表达式的值，继续执行 `async function`，若 `Promise` 处理异常`(rejected)`，`await` 表达式会把 `Promise` 的异常原因抛出。​如果 `await` 操作符后的表达式的值不是一个 `Promise`，那么该值将被转换为一个已正常处理的 `Promise`。

> 与Promise对比
>  1、**不再需要多层.then方法**
>  假设一个业务分很多步骤完成，并且每个步骤都是异步，依赖上一个步骤的结果。

```javascript
function takeLongTime(n) {
    return new Promise(resolve => {
        setTimeout(() => resolve(n + 200), n);
    });
}

function step1(n) {
    console.log(`step1 with ${n}`);
    return takeLongTime(n);
}

function step2(n) {
    console.log(`step2 with ${n}`);
    return takeLongTime(n);
}

function step3(n) {
    console.log(`step3 with ${n}`);
    return takeLongTime(n);
}

// Promise方式
function doIt() {
    console.time("doIt");
    const time1 = 300;
    step1(time1)
        .then(time2 => step2(time2))
        .then(time3 => step3(time3))
        .then(result => {
            console.log(`result is ${result}`);
            console.timeEnd("doIt");
        });
}

doIt();

// async await方式
async function doIt() {
    console.time("doIt");
    const time1 = 300;
    const time2 = await step1(time1);
    const time3 = await step2(time2);
    const result = await step3(time3);
    console.log(`result is ${result}`);
    console.timeEnd("doIt");
}
doIt();
```

> 2、**可以对Promise进行并行处理**