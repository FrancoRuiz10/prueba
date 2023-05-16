let miedad=30
let mascota="mora"
const espacio=" "

let pasos=100;
while (pasos>=0){
    document.write ("quedan ",pasos, " pasos."); /*document write me permite que el texto salga en la pantalla*/
    pasos=pasos-1
}


function saludar(nombre, apellido ,serie){
    alert("Hola " +nombre+ " "+apellido+ " Tu serie favorita es  "+serie)
}
saludar("Franco", "Ruiz", "Bersek")


console.log(document.querySelector("h1"));

function saludar(){
    alert("Hola a todos");
}


let nombre=prompt("Ingrese su nombre y apellido");
let cursos=prompt("Ingrese el numero de curso");
while (cursos != 58){
    alert("curso equivocado")
    cursos=prompt("Ingrese su curso nuevamente: ")
}if(cursos==58){
    alert(nombre+" Ingreso al curso "+cursos)
}