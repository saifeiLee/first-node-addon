const addon = require('./build/Release/addon')

// console.log(addon.hello()) // 'world'

function jsSum() {
    let a = 5.4123;
    let b = 3.14159;
    for (let i = 0; i < 1000000000; i++) {
        a += b;
    }
    let total = a;
    return total;
}


// console.time('c++')
// console.log(addon.sum())
// console.timeEnd('c++')

// console.time('js')
// console.log(jsSum())
// console.timeEnd('js')


console.log(addon.add(1, 2))