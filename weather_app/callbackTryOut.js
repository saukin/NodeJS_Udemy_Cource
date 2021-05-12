// const getX = (val, callback) => {
//     setTimeout(() => {
//         var x = val;
//         callback(x);
//     }, 1500);
    
// }

// getX(90, (a) => console.log(a))

const add = (x, y, callback) => {
    setTimeout(() => {
        let sum = x + y;
        callback(sum);
    }, 1500)
}

add(1, 4, (sum) => {
    console.log(sum)
})