---
title: 【vue】对vue中mixin的理解
date: 2022-10-11
categories:
  - 前端
tags:
  - vue
sidebar: auto
---

### 一、mixin 是什么

- mixin 是面向对象程序设计语言中的类，提供了方法的实现。其他类可以访问 mixin 类的方法而不必成为其子类；
- mixin 类通常作为功能模块使用，在需要该功能时“混入”，有利于代码复用又避免了多继承的复杂。
- 本质就是一个 JS 对象，可以包含组件中的任意功能选项，如 data、components、methods、creaded、computed 以及生命周期函数等等。
- 只需要将共用的功能以对象的方式传入 mixins 选项中，当组件使用 mixins 对象时所有 mixins 对象的对象都将被混入该组件本身的选项中来。
- **局部混入**

```js
  import mixin1 from './mixin1'export default {       }
```

- **全局混入**

```js
Vue.mixin({
  created: function () {
    console.log('全局混入')
  },
})
```

- **注意：当组件存在与 mixin 对象相同的选项的时候，进行递归合并的时候组件的选项会覆盖 mixin 的选项；但是如果相同的选项为生命周期钩子的时候，会合并成一个数组，先执行 mixin 的钩子，再执行组件的钩子。**

### 二、使用场景

在开发中，经常会遇到在不同的组件中用到相同或者相似的代码，这些代码的功能相对独立；

### 三、原理分析

- 优先递归处理 mixins；
- 先遍历合并 parent 中的 key，调用 mergeField 方法进行合并，然后保存在变量 options；
- 再遍历 child，合并补上 parent 中没有的 key，调用 mergeField 方法进行合并，保存在变量 options；
- 通过 mergeField 函数进行合并；
- 合并策略包括：替换型、合并型、队列型、叠加型；
- 替换行策略有：props、methods、inject、computed；
- 合并型策略是 data，通过 set 方法进行合并和重新赋值，就是将新的同名参数替代旧的参数；
- 队列型策略有生命周期函数和 watch，原理是将函数存入一个数据，然后正序遍历依次执行。
- 叠加型有 component、directives、filters，通过原型链进行层层的叠加。

### 四、面试官：说说你对 mixin 的理解

> **回答：mixin 是一种类，在 vue 中就是 js 文件，主要的作用是作为功能模块引用。因为在项目中，可能不同组件会有相同的功能，比如控制元素的显示和隐藏，如果他们的变量和规则也完全相同的话，就可以把这个功能单独提取出来，放在 mixin.js 中，再引入，就可以实现一样的功能了。引入的方法也分为全局混入和局部混入，局部混入就是在每个组件中引入，全局混入就是在 main.js 中通过 Vue.mixin()引入。**
