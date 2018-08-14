//数组
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
//4)includes 查询数组里是否包括此项，返回一个布尔值 有返回true 无返回false
let arr3 = [1,2,3,4,5,55];
console.log(arr3.includes(6));
//5)find 返回找到的那一项 不会改变原数组  回调函数中返回true表示找到了，找到后停止循环，如果没有找到返回undefined
let result = arr3.find((item, index) => { //找到具体的某项用find
    return item.toString().indexOf(5) > -1;
});
console.log(result);
//6)some 找true  找到ture后停止 返回true 找不到返回false
let result1 = arr3.some((item, index) => {
    return item.toString().indexOf(5) > -1;
});
console.log(result1);
//7)every 找false 找到false后停止 返回false
let result2 = arr3.every((item, index) => {
    return item.toString().indexOf(5) > -1;
});
console.log(result2);
//8)reduce 收敛 4个参数 返回的是叠加的结果 原数组不发生变化 回调函数返回的结果
    //prev代表的是数组的第一项,next是数组的第二项
    //第二次prev是undefined,next是数组的第三项
let sum = [1, 2, 3, 4, 5].reduce((prev, next, index, item) => {
    // console.log(prev,next);
    // return 100;//本次的返回值会作为下一次的prev
    return prev + next; //数组求和
});
console.log(sum);
let sum1 = [{price:30,count:2},{price:30,count:3},{price:30,count:4}].reduce((prev, next) => {
    return prev + next.price*next.count;
},0);//后面加0  默认指定第一次的prev
console.log(sum1);
//[[1,2,3],[4,5,6],[7,8,9]]
let flat = [[1,2,3],[4,5,6],[7,8,9]].reduce((prev, next) => {
    return prev.concat(next);
});
console.log(flat);