const asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a === 'number' && typeof b === 'number') {
                resolve(a + b);
            } else {
                reject('Arguments must be numbers');
            }
        }, 1500);
    });
};

const somePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Hey it worked!');
    }, 2500);
});

somePromise.then((rs) => {
    console.log('Success message:', rs);
}, (errMsg) => {
    console.log('Error message:', errMsg);
});

// SUCCESS MESSAGE
asyncAdd(2, 3).then((rs) => {
    console.log(rs);
}, (errMsg) => {
    console.log(errMsg);
});


// ERROR MESSAGE
asyncAdd("2", 3).then((rs) => {
    console.log(rs);
}, (errMsg) => {
    console.log(errMsg);
});