// 速写
const name = 'a'
const obj = {
  name,
  age: 1,
  addr: {
    city: 'A'
  }
}
const obj1 = {
  sum(a, b) {
     
  }
}

// 展开
const arr = [1, 2, 3, 4]
const max = Math.max(...arr)
console.log(max);

const obj3 = {
  ...obj,
  ...obj1
}
console.log(obj3);

// 解构
const { age } = obj
const { addr: { city } } = obj
const [a, b, c, d] = arr
console.log(city);
console.log(a, b, c, d);

// 属性描述符
const user = {
  name: 'a',
  age: 1
}
// js内部描述
// {
//   name: {
//     value: 'a',
//     configurable: true, // 是否可以重新定义
//     enumerable: true, // 允许遍历
//     writable: true
//   },
//   age: {
//     value: 1,
//     configurable: true, // 是否可以重新定义
//     enumerable: true, // 允许遍历
//     writable: true
//   },
// }

// 修改属性描述符
Object.defineProperty(user, 'name', {
  value: 'b',
  writable: false,
  enumerable: false,
  configurable: false
})
// 拿属性描述符
const desc = Object.getOwnPropertyDescriptor(user, 'name')
console.log(desc);

const obj4 = {}
Object.defineProperty(obj4, 'age', {
  get() {
    return 1
  },
  set(val) {
    console.log(val);
  }
})

// 键值对
Object.keys(obj)
Object.values(obj)
Object.entries(obj)
Object.fromEntries([
  ['a', '1'],
  ['b', '2'],
]) // { a: '1', b: '2'}

// 冻结
Object.freeze(obj)
