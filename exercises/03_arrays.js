//Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11.
//No sabia si mostrar los meses 5 y 11 del array (junio y diciembre) o los meses 5 y 11 calendario (mayo y noviembre)

var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(meses[5] + " y " + meses[11]);


//Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).

console.log(meses.sort());


//Agregar un elemento al principio y al final del array (utilizar unshift y push).

meses.unshift("Principio");
meses.push("Final");
console.log(meses);


//Quitar un elemento del principio y del final del array (utilizar shift y pop).

meses.shift();
meses.pop();
console.log(meses);


//Invertir el orden del array (utilizar reverse).

console.log(meses.reverse());


//Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).

console.log(meses.join("-"));


//Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).

var mayoNoviembre = meses.slice(4, 11);

console.log(mayoNoviembre);