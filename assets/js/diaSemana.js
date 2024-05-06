let nDay =parseInt(prompt('Ingrese un número del 1 al 7'));
console.log(nDay);
switch (nDay){
    case 1:
        console.log("Es lunes");
    break;
    case 2:
        console.log("Es martes");
    break;
    case 3:
        console.log("Es miércoles");
    break;
    case 4:
        console.log("Es jueves");
    break;
    case 5:
        console.log("Es viernes");
    break;
    case 6:
        console.log("Es sábado");
    break;
    case 7:
        console.log("Es domingo");
    break;
    default:
        console.log('El valor introducido no es válido');
}