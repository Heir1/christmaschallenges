const fs = require('fs');

const arr = Array();
let topThreeCalories = Array();
let topThreeTotalCalories = 0;
let sum = 0;

const allContents = fs.readFileSync('file.txt', 'utf-8');
allContents1 = allContents.split(/\r?\n/);

    allContents1.forEach((line, index) => {
        if(index < allContents1.length){
            if(line){
                sum += Number(line)
                if(index === allContents1.length-1){
                    arr.push(sum)
                }
            }
            else{
                arr.push(sum);
                sum=0;
            }
        }
    });

    console.log(`The max elf has ${Math.max(...arr)} calories`);

    topThreeCalories = [...(arr.sort((a,b) => a-b)).slice((arr.sort((a,b) => a-b)).length-3)]

    topThreeCalories.map(num => topThreeTotalCalories += num )

    console.log(`The top three elves are ${topThreeCalories}`);

    console.log(`The total sum of the top three elves is ${topThreeTotalCalories} calories`);