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

// ES2020 提议 globalThis作为顶层对象

