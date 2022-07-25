// 3- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.
// La fórmula del perímetro  es p = 2*(a +b)
let lado1 = parseInt(prompt("Te indicare el perimetro de un rectangulo, escribe el valor de uno de los lados "));
let lado2 = parseInt(prompt("Escribe el valor del otro lado"));

function perimetro(){
    if(lado1 > 0 && lado2 > 0){
document.write("El perimetro del rectangulo de lados: " + lado1 + ", " + lado2 + " es: " + 2*(lado1 + lado2));
    } else{
        document.write("Debes 2 valores mayores a 0")
    }
}
perimetro();