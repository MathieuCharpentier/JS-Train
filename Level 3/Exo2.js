let life = readlineSync("combien de tour voler vous faire? ");
let n = readlineSync("Quel sera la valeur maximal? ");
n = Math.round(Math.random() * Number(n));
console.log(n);

for(let i = life; i >= 0; i--)
{
    playerAnswer = readlineSync("Choisissez un nombre: ");
    if(n > playerAnswer)
    {
        console.log("C'est plus");
    }
    else if(n < playerAnswer)
    {
        console.log("C'est moins");
    }
    else
    {
        console.log("Bravo, Vincent Lagaffe te félicite d'avoir trouvé: "+ n);
        i=0;
    }
}

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