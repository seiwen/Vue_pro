let a = '';
function buy(callback) {
    setTimeout(() => {
        a = '520';
        callback(a)
    }, 2000);
}
buy(function cookl(val) {
    console.log(val);
});
//回调函数 将后续的处理逻辑传入到当前要做的事，事情做好后调用此函数

//promise 解决回调问题的 promise 有三个状态（成功、失败和等待）
//