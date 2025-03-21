//Crea una función donde reciba un array de números y devuelva el mayor de ellos.
function encontrarMayorNumero(numeros) {
    let mayor = numeros[0];
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > mayor) {
            mayor = numeros[i];
        }
    }
    return mayor;
}
let numeros = [2000, 3000, 4000, 7200, 67, 1, 24, 16];
let mayorNumero = encontrarMayorNumero(numeros);
console.log(`El número mayor es: ${mayorNumero}`);


//Crea una función donde reciba un String y devuelva el número de vocales existentes.(E)
function contarV(cadena) {
    let contadorV = 0;
    for (let i = 0; i < cadena.length; i++) {
        let caracter = cadena[i];
        if (caracter === 'a' || caracter === 'e' || caracter === 'i' || caracter === 'o' || caracter === 'u' ||
            caracter === 'A' || caracter === 'E' || caracter === 'I' || caracter === 'O' || caracter === 'U') {
            contadorV++;
        }
    }
    return contadorV;
}
let cadena = "el sol es azul";
let numeroDeVocales = contarV(cadena);
console.log("Número de vocales en la cadena: " + numeroDeVocales);

//Función que reciba un array de números y que devuelva la suma de todos los números pares

function numerossuma(numeropar) {
    let suma = 0; 

    for (let i = 0; i < numeropar.length; i++) {
        if (numeropar[i] % 2 === 0) {
            suma += numeropar[i];
        }
    }
    return suma;
}
let numeropar = [45,78,2000,200,90,87,95];
let sumaPares = numerossuma(numeropar);
console.log("La suma de los números pares es: " + sumaPares);


//Función flecha que reciba un array de números y que se almacene en un nuevo array con cada numero elevado al cuadrado (E)
const elevarAlCuadrado = (array) => {
    let cuadrados = array.map(num => num * num);
    return cuadrados;
};

let numer = [1, 2, 3, 4, 5];
let cuadrados = elevarAlCuadrado(numer);

console.log(cuadrados); // [1, 4, 9, 16, 25]
