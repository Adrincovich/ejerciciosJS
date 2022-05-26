/* Crear un array que contenga 5 palabras y recorrer dicho array utilizando un
bucle for de JavaScript para mostrar una alerta utilizando cada una de las palabras.*/

var array1 = ["palabra1", "palabra2", "palabra3", "palabra4", "palabra5"];
// for (var index1 = 0; index1 < array1.length; index1++) {
//     alert(array1[index1]);
// }


//Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por cada palabra modificada.

// for (var index2 = 0; index2 < array1.length; index2++) {
//     var element1 = array1[index2];
//     alert(element1[0].toUpperCase() + element1.toLowerCase().slice(1));
// }



/* Crear una array vacío y con un bucle for de 10 repeticiones. Llenar el array con el
número de la repetición, es decir que al final de la ejecución del bucle for debería
haber 10 elementos dentro del array, desde el número 0 hasta al número 9.
Mostrar por la consola del navegador el array final (utilizar console.log).*/

var array3 = [];

for (var index3 = 0; index3 < 10; index3++) {
    array3.push(index3);
}
console.log(array3);