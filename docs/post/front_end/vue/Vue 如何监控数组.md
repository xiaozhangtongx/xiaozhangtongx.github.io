---
title: 【vue】Vue如何监听数组
date: 2022-10-18
categories:
  - 前端
tags:
  - vue
sidebar: auto
---

## 前言

> 今天在面试中兴的时候，面试官问了这个问题，自己那时候回答的不好，于是在掘金上逛到了**拜小白**发布的这个帖子[温故而知新，Vue 如何监控数组](https://juejin.cn/post/7102368755275005959)，于是自己就把大佬的博客搬了下来。具体内容如下：

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/67ed4abc12af46839da36c3663ab7636~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image)

## 常见面试题

- Vue 如何监控数组
- defineProperty 真的不能监测数组变化吗？

## Vue 是如何追踪数据发生变化

在 Vue 中当我们把一个普通的 JS 对象作为 data 传入 Vue 实例，Vue2.x 对这个数据初始化时将遍历这个对象所有的属性，并使用 JS 的原生特性 Object.defineProperty 把这些属性全部转为 getter\setter。这些 getter\setter 对用户来说是不可见的，他们可以在属性被访问和修改时通知变更。同时每个组件实例都对应一个 watcher 实例，它会在组件渲染的过程中把“接触”过的数据属性记录为依赖。之后当依赖项的 setter 触发时，会通知 watcher，从而使它关联的组件重新渲染。

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/26c9df918e8c4c3ead00c0e089326472~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image)

## Vue 如何更新数组

```scss
// 方法一: 使用 Vue.set

Vue.set(vm.items, indexOfItem, newValue)

// 方法二: 使用 Vue 可监测的数组变异方法: Array.prototype.splice

vm.items.splice(indexOfItem, 1, newValue)
复制代码
```

## 为什么有些数组的数据变更不能被 Vue 监测到

简单来说，我们操作数组的一些动作 arr[2] = 'xxx' / arr.length = 2 或者是调用 Array.prototype 上挂载的部分方法并不能触发这个属性的 setter。

在数组的更新中有提到，可以**使用 Vue 可监测的数组变异方法: Array.prototype.splice，** **哪为什么这个方法可以触发状态的更新了。** 这是因为 Vue2.x 将数组的 7 个常用方法 push、pop、shift、unshift、splice、sort、reverse 进行了重写，所以通过调用包装之后的数组方法就能够被 Vue 监测到。

```javascript
// Vue 2.6.14
// src/core/observer/array.js

import { def } from '../util/index'

// 记录原始 Array 未重写之前的 API 原型方法
const arrayProto = Array.prototype
// 深拷贝一份上面的原型出来
export const arrayMethods = Object.create(arrayProto)

const methodsToPatch = ['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse']

/**
 * Intercept mutating methods and emit events
 * 拦截上边数组中列出的变异方法, 并发出事件通知
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  // 缓存 Array.prototype 中的同名原始方法
  const original = arrayProto[method]
  def(arrayMethods, method, function mutator(...args) {
    // 调用执行原有的数组方法
    const result = original.apply(this, args)
    const ob = this.__ob__
    let inserted
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args
        break
      case 'splice':
        inserted = args.slice(2)
        break
    }
    // 如果是插入的数据，将它再次监听起来
    if (inserted) ob.observeArray(inserted)
    // 触发订阅，像页面更新响应就在这里触发
    ob.dep.notify()
    return result
  })
})
```

## Vue 为什么不能通过下标操作数组或者改变数组的长度来触发视图更新

**那 Vue2.x 监测数组变更的两条限制：不能监听利用索引直接设置一个数组项，不能监听直接修改数组的长度，是因为 defineProperty 的限制么？**

---

**答案：是的**

---

Object.defineProperty 对于数组变化监听的表现与 Vue2.x 还是有不同的，比如 Object.defineProperty 可以监听到通过索引直接修改数组项，当然也不是说 Object.defineProperty 可以完全监听数组的变化，像直接修改数组的长度或者 push\pop 之类的方法还是不能触发 setter 的。

这里就会出现一个新的问题？

**为什么 Object.defineProperty 明明能监听到数组值的变化，而 Vue 却没有实现呢？**

---

这是因为 Vue 是对**数组元素**进行了监听，而没有对**数组本身**的变化进行监听。

```kotlin
var Observer = function Observer (value) {
    this.value = value;
    this.dep = new Dep();
    this.vmCount = 0;
    def(value, '__ob__', this);
    // 区分对象和数组，对象和数组走不通的响应式方案
    if (Array.isArray(value)) {
      // 判断是否支持__proto__属性，根据不同的请求来添加数组的拦截方法
      if (hasProto) {
        protoAugment(value, arrayMethods);
      } else {
        copyAugment(value, arrayMethods, arrayKeys);
      }
      // 循环数组的元素，再次调用observe方法，
      this.observeArray(value);
    } else {
      // 如果是对象，循环对象属性，为对象属性添加getter，setter方法，将属性变成响应式
      this.walk(value);
    }
  };
```

这其实是出于**性能原因的考量**，给每一个数组元素绑定上监听，实**际消耗很大而受益并不大**。

其实还有一些考虑是：对数据的操作更常用的操作数组的方法是使用数组原型上的一些方法如 push、shift 等来操作数组。Object.defineProperty 是对象上的方法，用来对数组的下标进行检测，会改变数据本来的性质。

总结来说：三点原因

- **性能原因的考量**
- 对数据的操作更常用的操作数组的方法是使用数组原型上的一些方法如 push、shift 等来操作数组。
- Object.defineProperty 是对象上的方法，用来对数组的下标进行检测，会改变数据本来的性质。

当然最重要的就是性能问题。

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/af3cbad8bd134f9192d1017e7f748449~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image?)

## Vue 3.0 是如何处理的？

Vue3 不再采用 defineProperty 的方式来进行监听而是采用 Proxy 的方式。下面我引用了 MDN 上对于 proxy 的介绍： Proxy 对象用于创建一个对象的代理，从而实现基本操作的拦截和自定义（如属性查找、赋值、枚举、函数调用等）。 当异步触发 Model 里的数据变化时，都会经过 Proxy 这一层，在这里则可以监听数组以及各种数据类型的变化，无论是数组下标赋值引起变化还是数组方法引起变化，都可以被监听到，也可以避开监听数组每个属性下造成的性能问题。

## 参考

- [cn.vuejs.org/v2/guide/re…](https://link.juejin.cn?target=https%3A%2F%2Fcn.vuejs.org%2Fv2%2Fguide%2Freactivity.html)
- [www.jianshu.com/p/fc8da283c…](https://link.juejin.cn?target=https%3A%2F%2Fwww.jianshu.com%2Fp%2Ffc8da283cb57)
- [baijiahao.baidu.com/s?id=163912…](https://link.juejin.cn?target=https%3A%2F%2Fbaijiahao.baidu.com%2Fs%3Fid%3D1639129122660779568%26wfr%3Dspider%26for%3Dpc)
- [blog.csdn.net/XH_jing/art…](https://link.juejin.cn?target=https%3A%2F%2Fblog.csdn.net%2FXH_jing%2Farticle%2Fdetails%2F120413904)
- [developer.mozilla.org/zh-CN/docs/…](https://link.juejin.cn?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FJavaScript%2FReference%2FGlobal_Objects%2FProxy)
