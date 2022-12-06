const fs = require('fs');

const allContents = fs.readFileSync('file.txt', 'utf-8');
let sum = 0;
let sum0=0;
let sum1=0;

let letters = "0abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
let arr = Array();

allContents.split(/\r?\n/).forEach((line, index) => {

    arr = [...[...new Set(line.split("").filter((e, i, a) => a.indexOf(e) !== i))]]
    console.log(line.split("").slice(0,(line.length/2)-1)+" ==== "+((line.split("").slice((line.length)/2, line.length))));
    arr.map(val => {
        if(((line.split("").slice(0,(line.length/2)-1)).includes(val)) && ((line.split("").slice((line.length)/2, line.length)).includes(val))){
            sum += letters.indexOf(val)
        }
    })
});

console.log(sum);