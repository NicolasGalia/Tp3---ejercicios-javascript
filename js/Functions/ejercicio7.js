// 4- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.

let numero = parseInt(prompt("Elija un numero"));

function tablaMultiplicar(){
    document.write("El numero que elegiste lo multiplicaremos del 1-10: <br>");

    document.write("<table border>"); //Empiezo a crear la tabla
    document.write("Tu numero es: " + numero + "<br>"); 
    
    for(let i = 1; i <= 10; i++){
        document.write("<tr>") //creo la fila

        document.write("<td>"); //3ra columna opcional
        document.write(numero); //Pongo esta columna pero creo que no hace falta

        document.write("<td>") //1ra columna
        document.write("Lo multiplicamos por: " + i);

        document.write("<td>") //2da columna
        document.write(numero*i + "<br>")

        document.write("</td>") //cierro 1ra
        document.write("</td>") //cierro 2da
        document.write("</td>"); //Cierro 3ra
        document.write("</tr>") //cierro la fila

    }
    document.write("</table>") //cierro tabla
}
tablaMultiplicar();