// Taking inputs using node.jss

// first it will print the place of node files on the device.
// second it will print the place of the script you are working on.
// the rest will be the inputs you have put.

function sum(x1, x2){
    return x1 + x2
}

x1 = process.argv[2];
x1 = Number(x1)
x2 = process.argv[3];
x2 = Number(x2)
console.log(sum(x1,x2))