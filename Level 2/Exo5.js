let pyramidLine = "";
let lineNumber = 12;

for(let i = 0; i < lineNumber; i++)
{
    pyramidLine += "*"
    console.log(pyramidLine);
}

for(let i = 0; i < LineNumber; i++)
{
    pyramidLine = pyramidLine.slice(0,-1); //remove the last character of the string pyramidLine
    console.log(pyramidLine);
}