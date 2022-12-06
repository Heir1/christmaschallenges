const fs = require('fs');

const allContents = fs.readFileSync('file.txt', 'utf-8');
let totalScore = 0;

allContents.split(/\r?\n/).forEach((line, index) => {

    // first part

    // if(line == "A X") totalScore += 4
    // else if(line == "B Y") totalScore += 5
    // else if(line == "C Z") totalScore += 6
    // else if(line == "A Y") totalScore += 8
    // else if(line == "B Z") totalScore += 9
    // else if(line == "C X") totalScore += 7
    // else if(line == "A Z") totalScore += 3
    // else if(line == "B X") totalScore += 1
    // else if(line == "C Y") totalScore += 2

    // second part

    if(line == "A X") totalScore += (3 + 0)
    else if(line == "B Y") totalScore += (2 + 3)
    else if(line == "C Z") totalScore += (1 + 6)
    else if(line == "A Y") totalScore += (1 + 3)
    else if(line == "B Z") totalScore += (3 + 6)
    else if(line == "C X") totalScore += (2 + 0)
    else if(line == "A Z") totalScore += (2 + 6)
    else if(line == "B X") totalScore += (1 + 0)
    else if(line == "C Y") totalScore += (3 + 3)

});

console.log(totalScore);

// A X 
// B X
// C X

// A Y 
// B X
// C Z

// A X = 4
// B Y = 5
// C Z = 6
// A Y = 8
// B Z = 9
// C X = 7
// A Z = 3
// B X = 1
// C Y = 2

// A (rock) Y (papier) = 8 A Y 
// B (papier) Z (ciseau) = 9 B Z
// C (ciseau) X (rock) = 7 C X

// A (rock) Z (ciseau) = 3 A Z
// B (papier) X (rock) = 1 B X
// C (ciseau) Y (papier) = 2 C Y

// A (rock) X (rock) (Y) = 1+3
// B (papier) Y (rock) (X) = 1+0
// C (ciseau) X (rock) (Z) = 1+6

// In the first round, your opponent will choose Rock (A), and you need the round to end in a draw (Y), so you also choose Rock. This gives you a score of 1 + 3 = 4.

// In the second round, your opponent will choose Paper (B), and you choose Rock so you lose (X) with a score of 1 + 0 = 1.

// In the third round, you will defeat your opponent's Scissors with Rock for a score of 1 + 6 = 7.

// In the first round, your opponent will choose Rock (A), and you should choose Paper (Y). This ends in a win for you with a score of 8 (2 because you chose Paper + 6 because you won).

// In the second round, your opponent will choose Paper (B), and you should choose Rock (X). This ends in a loss for you with a score of 1 (1 + 0).

// The third round is a draw with both players choosing Scissors, giving you a score of 3 + 3 = 6.