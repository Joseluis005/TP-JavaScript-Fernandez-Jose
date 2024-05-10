let articulos=parseInt(prompt("Ingrese el número de artículos"));
let precio=parseInt(prompt("Ingrese el precio de cada artículo"));
let precio_total=articulos*precio;
let descuento = precio_total*0.15
let total_final=precio_total-descuento
switch(true){
    case precio_total>20000 && articulos>=10:
        console.log(`Se le descontará: $${descuento}`)
        break;
    default:
        console.log(`Usted no aplicará para el descuento, su total es: $${total_final}`)   
        break; 
}
