// let a = 10
/***
 * 变量提升
 * 块级作用域，let 声明的变量只在当前块级作用域中有效，比方说for
 * 暂时性死区（TDZ） ES6规定的，你在块内声明的变量从一开就形成了封闭作用域
 *  在变量声明前使用 都会报错
 * 
 * typeof 以前的话是可以 变量未经声明就可以使用的，是不报错的
 * 但是在暂时性死区的情况下，他将会报错，不再是百分百安全的操作
 * 
 * let a = a
 * 还没完成执行前就去取值，当然报错了
 * 
 * ES5 只有全局作用域和函数作用域
 * 没有块级作用域
 * 
 * ES5规定 函数只能在全局作用域和函数作用域中声明
 * 浏览器没有遵守规定
 * 
 * ES6 版本中，明确允许在块级作用域中声明函数 类似于let
 * 其实这个样子是会报错的
 * 
 * 浏览器和规范是有差异的，具体实现还是由浏览器决定
 * 类似于var，允许是允许了函数声明类似于var
 * var 的就会提升，狗日的！！！！
 * 
 * 在块级作用域中，函数声明的差异巨大，应避免在块级作用域中声明函数
 * 如果需要也应该写成 函数表达式
 * 
 * 顶层对象属性与全局变量挂钩，被认为是设计的最大败笔
 * 
 * ES5 中的var 和 function 保留
 * ES6 开始脱钩，不再挂载window
 * 
*/

const { keys } = require("lodash");

// function f() { console.log('I am outside!'); }

// (function () {
//   // var f = undefined
//   if (false) {
//     // 重复声明一次函数f
//     function f() { console.log('I am inside!'); }
//   }

//   // f();
//   // console.log(f)
// }());

// var a = 10
// function aF () {}

// console.log(a, window.a)
// console.log(starredaF, window.aF)

// console.log()

// ES2020 提议 glostarredbalThis作为顶层对象

// 课堂回顾
/***
 * 新增变量声明 let const
 * 块级作用域
 * 变量声明不提升
 * 暂时性死区（TDZ）
 * 
 * 函数声明 ES5规定，函数只能在全局作用域，和函数作用域中声明
 * 但是ES6规定，也可以在块级作用域中声明，但是浏览器实现差异较大，
 * 虽然ES6规定是类似let，但是其实在块级作用域中是var
 * 
 * 关于在全局变量中声明的属性，归window所有的问题
 * 全局声明的变量会被挂载到window上（导致无法提前得知当前变量是否不可用，因为他可能归window所有）
 * ES6 修复了这一边，let，const都将不会继承这一点缺陷
 * 
 * this对象的问题
 * 浏览器中this 指向window，代表全局对象
 * 但是各个环境差异大，
 * node中 this 是当前模块
 * ES6中 this 是undefined
 * 
 * ES2020 引入新的gloablThis 作为顶层对象
 * 垫片库已经实现
*/

// 解构和赋值 是两种操作，1是解构，2是赋值
// 按照一定模式从数组和对象中提取值，
// 模式匹配

// 可遍历结构 iterator 转为对象之后
// 解构成功 解构失败 不完全解构

// generator 函数
// 解构赋值
// 匹配的模式 和 赋值的变量

// let {bar: bar = 12} = {baz: 'xxxx'}
// console.log(bar)

// 解构赋值用的是严格等于
// 解构赋值允许等号左边不放置任何变量名

// let {toString: s} = 3
// console.log(s === Number.prototype.toString)
// 解构赋值规则就是 如果被解构对象不是数组或者对象的话，就会先转成对象
// null undefined

// let {(a)} = {a: 1}
// 可以使用圆括号的一种，赋值语句的非模式部分，可以使用圆括号
// [(b)] = [1]

// Map 结构原生就支持Iterator接口，取也方便

// 课堂回顾
/**
 * 解构赋值
 *  通过模式匹配来取得变量并赋值
 *  [a, b] = [1, 2]
 *  模式
 *  右侧变量得是数组或者对象，如果不是，那么它会被转成对象，
 *  或者实现iterator接口
 *  解构成功，解构失败，不完全解构
 * 数组 对象
*/

/********important！*********/
// 第4章 - 第11章跳过

// ES5 对象的属性都是字符串 容易造成属性名冲突
// Symbol
// let s = Symbol('afda')
// console.log(s.toString())
// 有什么用 多个模块共同构成一个对象
// let s = Symbol('aaa')
// let obj = {
//   [s]: 'value',
//   a: 'aa'
// }

// for (const key in obj) {
//   console.log(key)
// }

// console.log(obj[s], obj)

// console.log(s.description)
// s = 1
// s +=1s
// if(!s) {
//   console.log(1111)
// }

// Symobol 是原始数据类型
// 作为对象属性的时候，无法被for in for of key

// let s = Symbol('aaaa')

// let obj  = {
//   [s]: 'safsadf',
//   a: 1212
// }

// console.log(Object.getOwnPropertySymbols(obj))
// console.log(Reflect.ownKeys(obj))

// 常规方法无法遍历啊
// 可以用这个东西，定义非私有，但又只希望用于内部的方法
// private 访问权限修饰符

// let s = Symbol.for('foo')
// console.log(s)
// console.log(Symbol.keyFor(s))

// console.log(Symbol.hasInstance)

// let str = "aaaa"
// console.log(str.search('a'))

// 

// class MySearch {
//   constructor(value) {
//     this.value = value
//   }
//   [Symbol.search](string) {
//     return 'xxxxxxxxxxx'
//   }
// }

// console.log('aaa'.search(new MySearch('aa')))

// Symbol 有一些自带的属性
// 这些属性
// instance 
// console.log([] instanceof Array)

// 字面量 和 对象

// 字面量是坚决不能有属性和方法的
// console.log('aaa' instanceof String)
// console.log(String('aaaa') instanceof String)
// console.log(new String('aaaa') instanceof String)

// 全新数据解构 Map 和 Set
// Set 类似于数组

// let s = new Set()
// // let m = new Map()
// // console.log(s)
// s.add(1)
// s.add(2)
// s.add([1,2,3,4,5,5])
// console.log(s)
// console.log(m)

// 向set 加入值得时候，不会发生类型转换，他类似于 === 
// 区别在于 set认为 nan等于自身，而全等于不等于，不会发生类型转换

// let s = new Set()?

// for in 和 for of 用于什么
// 这两者有什么区别

// map he set 结构是什么
// 这两个有什么区别，相比现有array，object结构，有什么不同

// promise 是什么，（异步回调解决方案）
// 如何使用，基本API，原理是什么
// async 和 await 是什么，如何使用
// iterator接口是什么，用来干什么的，如何使用
// generator 函数是什么，有什么用处，
// class 的基本语法，class 声明相比于原生构造函数，有什么特点
// Module 语法，ES6模块化，

// let a = new Set([NaN, NaN])
// console.log(a)

// 增删改查
// add delete clear has size

// [
//   {
//     sign: date
//     time: xxxx
//   }, // 
//   {},
//   {},
//   {}, // 
//   {},
//   {},
// ]

// [...new Set([xxxxx])]
// Array.from(new Set([]))
// Set 方法分为两大类
// 操作方法和遍历方法
// keys, values, entries, forEach
// Set 的遍历顺序就是插入顺序
// 为什么要有这两个方法，因为interator的关系，他规定的，接口规定的
// 统一了一下



