//Imprime el tipo de datos de 5 variables.
let variable1 ="Gabo";
let variable2 = 25;
let variable3 = true;
let variable4 = [1,2,3,4];
let variable5 = null;


console.log("la variable 1 es una cadena de texto" +variable1);
console.log("la variable 2 es un numero"+ variable2);
console.log("la variable 3 es un booleano" + variable3);
console.log("la variable 4 es un arreglo" + variable4);
console.log("la variable 5 es un valor nulo" + variable5);

//tambien  imprimir el  tipo de dato de variable se puede hacer con typeof que te dice el tipo de dato

console.log(typeof variable1); 
console.log(typeof variable2); 
console.log(typeof variable3); 
console.log(typeof  variable4); 
console.log(typeof variable5); 

//ejercicio 2
//Modifica los valores de las variables por otros de distinto tipo.

let variables1 = 40;
let variables2 = "hola";
let variables3 = [2,4,6,8];
let variables4 = null;
let variables5 = false;


console.log("la variable 1 es un numero" +variables1);
console.log("la variable 2 es una cadena de texto"+ variables2);
console.log("la variable 3 es un arreglo" + variables3);
console.log("la variable 4 es un valor nulo" + variables4);
console.log("la variable 5 es un valor booleano" + variables5);

// con typeof que te dice el tipo de dato

console.log(typeof variables1); 
console.log(typeof variable2); 
console.log(typeof variable3); 
console.log(typeof  variable4); 
console.log(typeof variable5); 

// ejercicio 3
//Crea un bucle que sume todos los números del 1 al 50 y muestra el resultado
let suma = 0;
for(i=0;i>=50;i=+1){
    suma +=i;
    console.log (suma)
}

// ejercio 4

//Crea un bucle que cuente el número de vocales de una cadena
let cadena = "Banco Nacional de Mexico";
let contadorVocales = 0;

for (let i = 0; i < cadena.length; i++) {
    
    let caracter = cadena[i];
    if (caracter === 'a' || caracter === 'e' || caracter === 'i' || caracter === 'o' || caracter === 'u' ||caracter === 'A' || caracter === 'E' || caracter === 'I' || caracter === 'O' || caracter === 'U')
         {
        contadorVocales++;
    }
}
console.log("Número de vocales en la cadena: " + contadorVocales);
//EJERCICIO 5
//Bucle que imprima la tabla del 5 (while)
let tabla = 1;
while (tabla <= 12) {
    let r = tabla * 5;
    console.log(`5 x ${tabla} = ${r}`);
    tabla += 1;
};
//EJERCICIO 6
//Bucle que imprima todos los números pares del 1 al 30

for (let numeros = 1; numeros <= 30; numeros++) {
    if (numeros  % 2 == 0) {
        console.log(numeros);
    }
}
//EJERCICIO 7
//De un array de nombres con ayuda de un bucle imprime cada uno de ellos.

let nombres = ["axel", "raul", "fabian"];

for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);
}


//Crea un array que almacene 5 animales
let animales =["leon","cocodrilo","aguila","salmon","sapo"]
console.log(animales);

//Añade 2 animales más uno al principio y otro al final
animales.unshift("serpiente");
console.log(animales);

animales.push("perro");
console.log(animales);
//Elimina el que se encuentra en la 3a posición

animales.splice(2,1);
console.log(animales);

//Crea un Set de 5 Libros
let libros = new Set(["harry potter 1","harry potter 2","harry potter 3","harry potter 4","harry potter 5"]);
console.log (libros);

// Crea un array de series de TV
let series = ["le temes a la obscuridad", "los simpsons", "elite"];
let seriesSet = new Set(series);
console.log(series, );
console.log(seriesSet, );

//Crea un array de números y devuelva el mayor de ellos
let numeros = [2000, 3000, 4000, 7200, 67, 1, 24, 16];
let mayor = numeros[0];
for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > mayor) {
        mayor = numeros[i];
    }
}
console.log(`El número mayor es: ${mayor}`);


