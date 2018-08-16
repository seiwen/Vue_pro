// resolve代表是转向成功态
// reject代表的是转向失败态  resolve和reject均为函数
// Promise的实例就有一个then方法,then方法中有两个参数
let p = new Promise((resolve,reject) => {
    setTimeout(() => {
        let a = '520';
        resolve(a);
    }, 2000);
});
p.then((data) => {console.log(data)}, (err) => {console.log('err')});