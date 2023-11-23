let n = readlineSync("Choisissez un nombre: ");
let romanNumber = "";

if(n > 4999)
{
    readlineSync("Nombre trop grand, Choisissez un nombre: ");
}

while(n > 0)
{
    switch(true)
    {
        case n >= 1000:
            romanNumber += "M";
            n -= 1000;
            break;
        case n == 900:
            romanNumber += "CM";
            n -= 900;
            break;
        case n >= 500:
            romanNumber += "D";
            n -= 500;
            break;
        case n == 400:
            romanNumber += "CD";
            n -= 400;
            break;
        case n >= 100:
            romanNumber += "C";
            n -= 100;
            break;
        case n == 90:
            romanNumber += "XC";
            n -= 90;
            break;
        case n >= 50:
            romanNumber += "L";
            n -= 50;
            break;
            case n == 40:
            romanNumber += "XL";
            n -= 40;
            break;
        case n >= 10:
            romanNumber += "X";
            n -= 10;
            break;
            case n == 9:
            romanNumber += "IX";
            n -= 9;
            break;
        case n >= 5:
            romanNumber += "V";
            n -= 5;
            break;
        case n == 4:
            romanNumber += "IV";
            n -= 4;
            break;
        default:
            romanNumber += "I";
            n -= 1;
    }
}

console.log(romanNumber);

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