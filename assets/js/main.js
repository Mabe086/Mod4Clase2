// Clase Equipo EcmaScript5
// function Equipo(serial, marca, modelo) {
//     this.serial = serial
//     this.marca = marca
//     this.modelo = modelo
// }


// Clase Equipo EcmaScript6
class Equipo {
    constructor(serial, marca, modelo){
        this.serial = serial
        this.marca = marca
        this.modelo = modelo
    }
}


const equipo1 = new Equipo("88888", "Microsoft", "MT001")

console.log(equipo1);