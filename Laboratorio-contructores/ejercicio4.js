function Libro (titulo, autor, genero, precio) {
    this.titulo = titulo;
    this.autor = autor;
    this.genero = genero;
    this.precio = precio;  
    
    this.prestado = false;

    this.prestar = function() {

        if (!this.prestado) {

            this.prestado = true;
            console.log(`El libro "${this.titulo}" ha sido prestado.`);
        } else {
            console.log(`El libro "${this.titulo}" ya está prestado.`);
        }
    };

    this.devolver = function() {
        if (this.prestado) {
            this.prestado = false;
            console.log(`El libro "${this.titulo}" ha sido devuelto.`);
        } else {
            console.log(`El libro "${this.titulo}" no estaba prestado.`);
        }
}
}

    const libro1 = new Libro("Coraline ", "Neil Gaiman", "Cuento", 43400);
    const libro2 = new Libro("El Principito", "Antoine de Saint-Exupéry", "Novela", 25000);
    const libro3 = new Libro("Escibir Reflexiones para el amor", "jorge Leyva Durán", "Reflexión", 39000);
    
    console.log(libro1);
    console.log(libro2);
    console.log(libro3);  
    
    libro1.prestar();
    libro1.prestar();
    libro1.devolver();
    libro1.devolver();
    libro2.prestar();
    libro2.devolver();
    libro3.prestar();
    libro3.devolver();

