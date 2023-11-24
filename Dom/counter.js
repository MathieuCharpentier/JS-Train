let counter = 0;

const button = document.createElement("input");
button.type = "button";
document.body.appendChild(button);

const paragraphe = document.createElement("p");
paragraphe.innerText = "FizzBuzz";
document.body.appendChild(paragraphe);

button.addEventListener("click", (event) =>
{
    counter += 1;
    if(counter%3==0 && counter%5==0)
    {
        paragraphe.innerText = "FizzBuzz";
    }
    else if(counter%5==0)
    {
        paragraphe.innerText = "Buzz";
    }
    else if(counter%3==0)
    {
        paragraphe.innerText = "Fizz";
    }
    else
    {
        paragraphe.innerText = counter;
    }
}
);

