// Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.

function cadenaDeTexto(numero){
    if(numero % 2 == 0){
        document.write("El numero es par.<br>");
    } else{
        document.write("El numero es impar.<br>");
    }
}
cadenaDeTexto(parseInt(prompt("Elije un numero entero")));