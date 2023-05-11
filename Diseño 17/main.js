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
function longitudpalabra(nombre){
    return nombre.length;
}


let longitudnombre=longitudpalabra("Franco");
console.log(longitudnombre);



