// 箭头函数
// 不能用new
// 没有原型prototype
// 没有arguments
// 没有this
function x(params) {
  
  
}

const a = function() {

}

// dom.addEventListener('click', function(params) {
  
// })

// dom.click = function(params) {
  
// }

// const sum = (a, b) => {
//   return a + b
// }
const sum = (a, b) => a + b
console.log(sum(1, 2));

// 剩余参数
const b = (...arg) => {}

// 参数默认值
const c = (a = '1') => {}

// 类语法
function User(params) {
  
}
User()
User.getName = function(params) {
  
}
const newUser = new User()
User.prototype.getAge = function(params) {
  
}

class User1 {
  constructor() {

  }

  // 静态方法
  static getName() {

  }

  getAge() {

  }
}

class User2 extends User1 {
  constructor() {
    super()
  }
}

// bind()


const fn = () => {
  console.log('触发');
}

// fn()


const debounce = (fn, deley = 1000) => {  
  let timer = null
  return (...arg) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      // fn(...arg)
      // fn.call(this, ...arg)
      const bindFn = fn.bind(this, ...arg)
      bindFn()
    }, deley)
  }
}

const newFn = debounce(fn, 3000)
newFn()
newFn()
newFn()
newFn()
newFn()