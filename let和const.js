let x = 1
const y = 2

/***
 * 1、不在作为属性定义到全局变量
 * 2、无变量提升
 * 3、不可重复定义
 * 4、const必须初始化
 * 5、块级作用域
 * 6、
 * */ 

console.log('var');
for (var j = 0; j < 10; j++) {
  setTimeout(() => {
    console.log(j);
  }, 1000) 
}

console.log('解决办法：var+fun');
for (var k = 0; k < 10; k++) {
  (function(k) {
    setTimeout(() => {
      console.log(k);
    }, 1000) 
  })(k)
}

console.log('let');
for (let i = 0; i < 10; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000) 
}