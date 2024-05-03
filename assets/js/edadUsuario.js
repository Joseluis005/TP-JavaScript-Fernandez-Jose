let edadUsuario = parseInt(prompt('Por favor, ingrese su edad'));
console.log(edadUsuario);
if (edadUsuario>0 && edadUsuario<13) {window.alert('Usted es un niño'); 
}
else if (edadUsuario>12 && edadUsuario<20) {window.alert('Usted es un adolescente');
}
else if (edadUsuario>=20 && edadUsuario<60) {window.alert('Usted es un adulto');
}
else if (edadUsuario>=60 && edadUsuario<120) {window.alert('Usted es un adulto');
}
else{ window.alert('El valor ingresado es inválido');}