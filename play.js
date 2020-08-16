const fetch = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('done');
        }, 1500)
    });
    return promise;
}
const callbackFn = (text) => {
    console.log(text);
};
setTimeout(() => {
    console.log('Time is done');
    fetch().then(text =>{
        console.log(text);
        return fetch();
    }).then(text2 =>{
        console.log(text2);
    })
}, 2000);