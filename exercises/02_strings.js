/*Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string
con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).*/

var nuevaVariable1 = "Nuevo Texto";
var resultadoSubstring = nuevaVariable1.substring(0,5);

document.write(resultadoSubstring);


/*Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula
y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).*/


var nuevaVariable2 = "textovariable"
var nuevaVariable2Case = (nuevaVariable2[0].toUpperCase() + nuevaVariable2.toLowerCase().slice(1));

document.write("   ", nuevaVariable2Case);


/*Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del
primer espacio en blanco y guardarla en una variable (utilizar indexOf).*/

var nuevaVariable3 = "Nuevo Texto"
var nuevaVariable3Index = nuevaVariable3.lastIndexOf(" ");

document.write(" Posicion del espacio en blanco: ", nuevaVariable3Index)