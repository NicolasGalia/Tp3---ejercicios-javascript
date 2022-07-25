// Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

// Mostrar la longitud del arreglo.
// Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
// Añade en última posición la ciudad de París.
// Escribe por pantalla el elemento que ocupa la segunda posición.
// Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.
let ciudades = [];

do{
    let ciudad = prompt("Ingrese el nombre de una ciudad cualquiera");
    ciudades.push(ciudad);
} while(confirm("Desea seguir agregando ciudades? Sugerimos escribir 5 ciudades"));

document.write(ciudades + ": estas son las ciudades que elegiste." + "<br>");

document.write("La longitud del array generado es: " + ciudades.length  + "<br>");

document.write(ciudades[0] +". "+ ciudades[2] +". "+ ciudades[ciudades.length - 1]  + ". :estos elementos ocupan la primera, tercera y ultima posicion en el array." + "<br>");

ciudades.push("Paris");

document.write(ciudades[1] + ": este elemento ocupa la segunda posicion del array." + "<br>");

ciudades[1] = "Barcelona";

document.write(ciudades  + ". Agregamos la ciudad de Barcelona en la 2da posicion, y la de Paris en la ultima");