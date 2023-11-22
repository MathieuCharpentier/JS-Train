const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What is your name? ", giveanswer);

/**
 * Take a String, add Bienvenue before and ! after that string and print the result in console
 * @param {String} answer Your name
 */
function giveanswer (answer) 
{
    console.log(`Bienvenue ${answer} !`);
    console.log("")
    rl.close();
}
