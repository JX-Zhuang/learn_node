export let count = 1;
setTimeout(() => {
    count++;
    console.log('main', count);
}, 1000);