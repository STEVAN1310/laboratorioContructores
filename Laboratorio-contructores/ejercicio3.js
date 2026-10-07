function Estudiante(nombre, edad, nota) {
    this.nombre = nombre;
    this.edad = edad;
    this.nota = nota;

    this.aprobado = this.nota >= 3;

    this.mostrarResultado = function() {
        if (this.aprobado) {
            return `El estudiante ${this.nombre} ha aprobado con una nota de ${this.nota}.`;
        } else {
            return `El estudiante ${this.nombre} ha reprobado con una nota de ${this.nota}.`;
        }   
    }
}
const estudiante1 = new Estudiante("Juan", 20, 4.3);
const estudiante2 = new Estudiante("Maria", 22, 2.5);
const estudiante3 = new Estudiante("Pedro", 19, 3); 
const estudiante4 = new Estudiante("Ana", 21, 5);

console.log(estudiante1.mostrarResultado()); 
console.log(estudiante2.mostrarResultado());
console.log(estudiante3.mostrarResultado());
console.log(estudiante4.mostrarResultado());