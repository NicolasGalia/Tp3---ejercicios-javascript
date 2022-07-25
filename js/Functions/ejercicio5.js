// 2- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.

function informacion(cadenaDetexto){
    if(cadenaDetexto == cadenaDetexto.toUpperCase()){
        document.write("La cadena de texto que escribiste la escribiste solo con: MAYUSCULAS!");
    } else if(cadenaDetexto == cadenaDetexto.toLowerCase()){
        document.write("La cadena de texto que escribiste la escribiste solo con: minusculas!");
    } else{
        document.write("La cadena de texto que escribiste contiene: minusculas y mayusculas!")
    }
}

informacion(prompt("Escribe una cadena de texto"));