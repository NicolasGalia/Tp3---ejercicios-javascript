// Crear un array llamado meses y que almacene el nombre de los doce meses del año. Mostrar por pantalla en forma de lista  los doce nombres del arreglo.

let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre",]
cantidadMeses = 0

document.write("<h3>Mostrar los meses en items</h3>")
document.write("<ul>");
for (let cantidadMeses = 0; cantidadMeses < meses.length; cantidadMeses++) {
    document.write("<li>" + meses[cantidadMeses] + "</li>")
}
document.write("</ul");