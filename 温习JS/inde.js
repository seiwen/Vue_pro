
const array = [1, 2, 3, 4, 5];
array.b = '100';
for (let i = 0; i < array.length; i++) { //编程式
    const element = array[i];
    console.log(element);
}
array.forEach(element => { //声明式 （不关心如何实现）
    console.log(element);
});
for (const key in array) { //key会变成字符串类型，包括数组的私有属性也可以打印出来
    console.log(typeof key);
    if (array.hasOwnProperty(key)) {
        const element = array[key];
        console.log(element);
    }
}
let obj = {
    school: 'ada',
    age: 27
}; //Object.keys 将对象的key作为新的数组
for (const val of Object.keys(obj)) { //支持return 并且是值of数组（不能遍历对象）
    console.log(obj[val]);
}
//2)filter 是否操作原数组：不，返回结果：过滤后的新数组，回调函数的返回结果：如果返回true 表示这一项放到新数组中 (删除)
let newArry = [1, 2, 3, 4, 5].filter(element => {
    return element > 2 && element < 5;
});
console.log(newArry);
//3)map 映射 将原有的数组映射成一个新数组 不操作原数组，返回新数组，回调函数中返回什么这一项就是什么  (更新)
let arr1 = [1, 2, 3].map(item => {
    return `<li>${item}</li>`; //``是ES6中的模板字符串 遇到变量用${}取值
});
console.log(arr1.join(''));