let pyramidLine = "*";
let space = ""
let lineNumber = 15;

for (let i = 0; i < lineNumber-1; i++) 
{
    space += " "
}

for(let i = 1; i < lineNumber; i++)
{
    let output = space + pyramidLine;
    console.log(output);
    pyramidLine += "**";
    space = space.slice(0,-1);
}