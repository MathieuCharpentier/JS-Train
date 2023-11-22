let notes = Math.random() * 21;

console.log(notes);

switch(true)
{
    case notes > 0 && notes < 5:
        console.log("Catastrophique, il faut tout revoir");
        break;
    case notes > 4 && notes < 11:
        console.log("Insuffisant");
        break;
    case notes > 10 && notes < 15:
        console.log("Peut mieux faire");
        break;
    case notes > 14 && notes < 18:
        console.log("Bien");
        break;
    case notes > 17 && notes < 21:
        console.log("Excellent, bon travail");
        break;
    default: 
        console.log("Note invalide");
}