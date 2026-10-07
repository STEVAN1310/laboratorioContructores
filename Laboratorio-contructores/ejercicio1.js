function Computador(marca, procesador, ram, precio){

    this.marca = marca;
    this.procesador = procesador;
    this.ram = ram;
    this.precio = precio;

}

const laptop1 = new Computador("Huawei", "Intel i5", "8GB", 2200000);
const laptop2 = new Computador("Asus", "Intel i7", "16GB", 3500000);
const laptop3 = new Computador("Lenovo", "Intel i3", "4GB", 1500000);

console.log(laptop1);
console.log(laptop2);
console.log(laptop3);