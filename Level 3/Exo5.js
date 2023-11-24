let allScores = [[],[]];
let bonus = [];
let globalScore = 0;

for(let i = 0; i < 10; i++)
{
    allScores[0][i] = Number(readlineSync("Quel est le score de votre premier tir? "));

    while (allScores[0][i] < 0 || allScores[0][i] > 10)
    {
        allScores[0][i] = Number(readlineSync("le score entré est hors limite, réssayez "));
    }

    
    
    if(allScores[0][i] != 10)
    {
        allScores[1][i] = Number(readlineSync("Quel est le score de votre second tir? "));

        while (allScores[1][i] + allScores[0][i] > 10)
        {
            allScores[1][i] = Number(readlineSync("le score entré est hors limite, réssayez "));
        }
    }

    if(allScores[0][i] == 10)
    {
        bonus[i] = 1;
    }
    else if(allScores[0][i] + allScores[1][i] == 1)
    {
        bonus[i] = 2;
    }
    else
    {
        bonus[i] = 0;
    }
}

for(let i = 0; i <= 9; i++)
{
    if(bonus[i] == 0)
    {
        globalScore += allScores[0][i] + allScores[1][i];
    }
    else if(bonus[i] == 1)
    {
        globalScore += allScores[0][i] + allScores[1][i] + allScores[0][i+1] + allScores[1][i+1];
    }
    else
    {
        globalScore += allScores[0][i] + allScores[1][i] + allScores[0][i+1];
    }
}

console.log(allScores);
console.log(globalScore);

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