/* Crear una función suma que reciba dos valores numéricos y retorne el resultado.
Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador. */

// function suma(suma1, suma2){
//     var resultado = suma1 + suma2;
//     return resultado;
// }
// console.log("10 + 5 = "+ suma(10, 5));


/* A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número, mostrar una
alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado. */

// function suma (suma1, suma2){
//     if (isNaN(suma1) ||  isNaN(suma2)) {
//         alert("Uno de los parametros tiene error");
//         return "NaN"
//     } else {
//         var resultado = suma1 + suma2;
//         return resultado;
//     }
// }

// console.log("10 + 5 = "+ suma("k", 5));
// console.log("10 + 5 = "+ suma(20, 5));



/* A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. En caso que haya decimales
 mostrar un alerta con el error y retorna el número convertido a entero (redondeado). */


 function suma (suma1, suma2){
    if (isNaN(suma1) ||  isNaN(suma2)) {
        alert("Uno de los parametros tiene error");
        return NaN;
    } else if (!Number.isInteger(suma1) || !Number.isInteger(suma2)){
        alert("Los numeros son decimales, se retorna entero");
        var resultado1 = Math.round(suma1) + Math.round(suma2);
        return resultado1;
    } else {
        var resultado2 = suma1 + suma2;
        return resultado2;
    }
}

console.log("10 + 5 = "+ suma(20, 5));
console.log("10 + 5 = "+ suma("k", 5));
console.log("Resultado: "+ suma(10.66, 5));


