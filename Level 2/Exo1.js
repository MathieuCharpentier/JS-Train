let numberArray = [Math.random() * 9999,Math.random() * 9999,Math.random() * 9999];
console.log(numberArray);
let max = numberArray[0];

for(let i = 1; i < numberArray.length; i++)
{
    if(max < numberArray[i])
    {
        max = numberArray[i]
    }
}

console.log(max);

