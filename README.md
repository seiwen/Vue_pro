# Vue_pro

## vue数据驱动(主要操作的是数据)

- 操作dom

## JS数据类型

- 基本数据类型   number string boolean null undefined
- Object func...
- Symbol(ES6)

## {} []

### 改变原数组的 数组的变异（括号中的能改变原数组）

- 操作数组的方法  (pop push unshift shift splice reverse sort) indexOf lastIndexOf concat slice、

## forEcah filter(过滤) map(映射) some every reduce (includes find)->es6的

## 框架和库

- 框架  vue 拥有完整的解决方案 我们写好人家调用我
- 库 Jquery underscore zepto animate.css 我们调用他

## 渐进式 （渐进增强）

- vue全家桶 vuejs + vue-router + vuex + axios
- 通过组合 完成一个完整的框架

## MVC (backbone) 单向

- model 数据
- view 视图
- controller 控制器

## MVVM (angular vue) 双向

- model 数据
- view 视图
- viewModel 视图模型

## Object.defineProperty(es5)的没有替代方案

- 不支持ie8 <=

## 安装vue

- cdn直接引用
- npm install vue

## 利用vue制作简易todo

## vue复习

- vm => viewModel 数据最终都会被vm所代理。
- {{a}}} 取值表达式。 通过{{}}来进行取值，默认可以不写this,  可以写  表达式、赋值运算、计算、三元表达式， 尽量少写逻辑(computed)

### 指令：dom元素的行间属性，vue提供了内置的指令，必须v-开头，后面的值均为变量

- v-model (表单元素) 忽略掉value,checked,selected，将数据绑定的视图上。视图修改后会影响数据的变化
- v-text 取代{{}} v-cloak解决闪烁问题，后期都可以不采用，使用加上样式
- v-once 绑定一次，数据在变化不会导致视图刷新，写在不想刷新的标签上
- v-html 将html字符串转化成html
- v-for 循环（数组、对象、字符串、数字）
    ···
        `<div v-for="value in/of 数组"></div>`
        `<div v-for="(value,index) in/of 数组"></div>`
    ···

### 事件v-on(@)

- 绑定给dom元素，函数需要定义在methods中，不能和data里的内容重名，this指向的是实例，不能使用箭头函数，事件源对象如果不写括号，可以自动传入，否则只能手动传入$event
    ···
        `<div @事件="fn"></div>`
    ···