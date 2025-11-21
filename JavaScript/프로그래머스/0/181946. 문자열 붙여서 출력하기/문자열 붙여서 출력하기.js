const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    str1 = input[0];
    str2 = input[1];
    let array = [];
    let str = ""
    array.push(str1,str2);
    array.forEach(a => {
        str += a;
    })
    console.log(str)
});