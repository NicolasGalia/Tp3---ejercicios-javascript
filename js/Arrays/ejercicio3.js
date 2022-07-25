// Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.

let sumas = [];
let pruebaDado1 = [];
let pruebaDado2 = [];

for (let i = 0; i < 50; i++) {
  let dado1 = Math.floor(Math.random() * (6 - 1 + 1) + 1);
  let dado2 = Math.floor(Math.random() * (6 - 1 + 1) + 1);
  let resultado = dado1 + dado2;
  pruebaDado1.push(dado1);
  pruebaDado2.push(dado2);
  sumas.push(resultado);
}
document.write("<br>resultado de las sumas: " + sumas);
document.write("<br>resultado del dado 1: " + pruebaDado1);
document.write("<br>resultado del dado 2: " + pruebaDado2);

document.write(
  "<table>" +
    "<thead>" +
    " <tr>" +
    " <th>Resultado</th>" +
    "  <th>Frecuencia</th>" +
    "</tr>" +
    "</thead>" +
    "<tbody>"
); 
for(let i = 2; i <= 12; i++) {
    document.write(" <tr>"); 
    let contador = 0;
    for(let posicion = 0; posicion < sumas.length; posicion++) {
        if (i === sumas[posicion]){
            //contar cuantas veces aparecio X volar
            contador++;
        }
    }
    document.write(
    "<td>" + i + "</td>" 
    + "<td>" + contador +"</td>" ); 
    document.write("</tr>"); 
}
document.write("</tbody>" + "</table>");
