function Mascota(nombre, especie, edad, peso) {

    this.nombre = nombre;
    this.especie = especie;
    this.edad = edad;
    this.peso = peso;

    this.presentar = function() {
        return `Hola, mi nombre es ${this.nombre}, soy un ${this.especie} de ${this.edad} años y peso ${this.peso} kg.`;  
    }
}

const mascota1 = new Mascota("Luna", "Perro", 5, 20);
const mascota2 = new Mascota("Garfield", "Gato", 8, 25);
const mascota3 = new Mascota("Lucas", "Pez", 2, 0.6);

console.log(mascota1.presentar());
console.log(mascota2.presentar());
console.log(mascota3.presentar());