let N1 = Number(prompt("Introduzca un número por favor."));
let N2 = Number(prompt("Introduzca un segundo número por favor."));
let N3 = Number(prompt("Introduzca un tercer número por favor."));

if (N1<=N2&&N2<=N3) console.log(N1, N2, N3);
else if (N1<=N3 && N3<=N2) console.log(N1, N3, N2); 
else if (N2<=N1&&N1<=N3) console.log(N2, N1, N3);
else if (N2<=N3&&N3<=N1) console.log(N2, N3, N1);
else if (N3<=N2&&N2<=N1) console.log(N3, N2, N1);  
else if (N3<=N1&&N1<=N2) console.log(N3, N1, N2);
else console.log(N1, N2, N3, "son iguales");

