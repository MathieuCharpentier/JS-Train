const navbar = document.createElement("nav");
document.body.appendChild(navbar);

for(let i = 0; i <= 4; i++)
{
    const button = document.createElement("input");
    button.type = "button";
    button.textContent = "Exercice"+i;
    button.onclick = "Exo"+i;
    navbar.appendChild(button);
}


let descriptionExo = ["la liste", "l'horloge", "Le FizzBuzz", "Le fizzbuzz ++"];

Exo0();

/**
 * create the homepage
 */
function Exo0()
{
    const grid = document.createElement("div");
    grid.id = "grid";
    document.body.appendChild(grid);

    for(let i = 0; i < 4; i++)
    {
        const cardDiv = document.createElement("div");
        cardDiv.classList = "card";
        const cardTitle = document.createElement("h2");
        cardTitle.innerText = "Exercice "+(i+1);
        const cardText = document.createElement("p");
        cardText.innerText = descriptionExo[i];
        const cardLink = document.createElement("a");
        cardLink.href = "Exo"+(i+1)+".html";
        cardLink.innerText = "Clique ici"
        grid.appendChild(cardDiv);
        cardDiv.appendChild(cardTitle);
        cardDiv.appendChild(cardText);
        cardDiv.appendChild(cardLink);
    }
}