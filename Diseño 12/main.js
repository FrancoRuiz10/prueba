let minumero= prompt("Ingrese un numero:")
if (minumero > 90){
    alert ("Es mayor que 90")
}else if (minumero == 90 ){
    alert ("El resultado es igual a 90")
} else{
    alert ("El resultado es menor a 90")
} //metodo que conosco para realizar if

let numero=prompt("Ingrese otro numero")
let mayornumero= (numero>90) ? alert ("es mayor a 90") : 
(numero == 90)? alert ("es 90") : alert ("no es mayor") //metodo nuevo y unificado para escribir if


//array tarea
let miscompras= ["pan", "tomate", "papa", "cebolla"]
console.log (miscompras.length);
alert (miscompras[2])

// para hacer and se utiliza &&, el or se utiliza el || y el not se utiliza el !

let mascota= prompt("Ingrese una mascota")
let edad=prompt("Ingrese su edad")
if (mascota =="perro" && edad <2){
    alert ("Tu perro es cachorro");
} else if (mascota== "perro" && edad>2 ){
    alert ("tu perro ya no es cachorro")
}else{
    alert("usted no posee perro")
}
let numeroo= prompt("Ingrese un numero")
let mayor=(numeroo>10) ? alert ("el numero es mayor a 10"): (numeroo<10) ? alert ("el numero es menor a 10"): alert("usted no ingreso numero")