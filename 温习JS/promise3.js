function buyPack() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(Math.random() > 0.5){
                resolve('520');
            }else{
                reject('025');
            }
        }, Math.random()*1000);
    });
}
buyPack().then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
});