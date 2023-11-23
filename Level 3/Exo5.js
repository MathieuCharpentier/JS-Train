let allScores = [];
let globalScore = 0;

for(let i = 0; i < 10; i++)
{
    let secondBall = 0;

    allScores[i] = Number(readlineSync("Quel est le score de votre premier tir? "));

    while (allScores[i] < 0 || allScores[i] > 10)
    {
        allScores[i] = Number(readlineSync("le score entré est hors limite, réssayez "));
    }
    
    if(allScores[i] != 10)
    {
 
        secondBall = Number(readlineSync("Quel est le score de votre premier tir? "));

        while (allScores[i] < 0 || allScores[i] > 10 && secondBall+allScores[i] > 10)
        {
            secondBall = Number(readlineSync("le score entré est hors limite, réssayez "));
        }
    }
}

console.log(allScores)

/**
 * ask a question and return the user answer
 * @param {String} text question to ask to user 
 * @returns 
 */
function readlineSync(text)
{
    var readlineSync = require("readline-sync")
    var answer = readlineSync.question(text)
    return answer
}