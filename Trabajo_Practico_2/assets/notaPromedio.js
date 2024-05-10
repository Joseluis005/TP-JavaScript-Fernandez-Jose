let primerT=parseInt(prompt("Ingrese su nota del 1er trimestre"));
let segundoT=parseInt(prompt("Ingrese su nota del 2do trimestre"));
let tercerT=parseInt(prompt("Ingrese su nota del 3er trimestre"));
let promedio=parseInt((primerT+segundoT+tercerT)/3);
switch (true){
    case promedio == 1 || promedio == 2 || promedio == 3:
        console.log("Nota Insuficiente");
    break;
    case promedio == 4 || promedio == 5:
        console.log("Nota regular");
    break;
    case promedio == 6 || promedio == 7:
        console.log("Nota buena");
    break;
    case promedio == 8 || promedio == 9:
        console.log("Nota Muy Buena");
    break;        
    case promedio == 10:
        console.log("Nota Sobresaliente");
    break;
    default:
        console.log("El valor ingresado es inválido");
}
