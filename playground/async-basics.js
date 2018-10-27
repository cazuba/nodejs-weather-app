console.log('Starting app...');

setTimeout(()=> {
    console.log('Doing some stuffs here...');
}, 2000);

setTimeout(() => console.log('Second stuffs...'), 0);

console.log('Finishing app!');