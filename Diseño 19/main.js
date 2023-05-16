class vehiculos{
    constructor(tipo,  color, velocidad) {
        this.tipo1=tipo;
        this.color1=color;
        this.velocidad1=velocidad;
        this.dato = Este vehiculo es un ${this.tipo}, de color ${this.color} y va a una velocidad de ${this.velocidad}
    }
    verdatos () {
        document.write(this.dato+ "<br>");
    }
}

const automobil = new vehiculos ("auto", "rojo", "5" ) 
const motocycle= new vehiculos("motovehiculo", "verde", "3")
const camion= new vehiculos ("camion" , "negro", "5")
automobil.verdatos();
camion.verdatos();
motocycle.verdatos();