class libro {
  constructor(titulo ,autor ,isbn,_prestado ) {
    this.titulo = titulo;
    this.autor = autor;
    this.isbn = isbn;
    this._prestado =false;


  }

  getprestar(){
    if (!this._prestado) {
      this._prestado = true;
      console.log(`El libro "${this.titulo}" ha sido prestado.`);
    } else {
      console.log(`El libro "${this.titulo}" ya está prestado.`);
    }
  }
    
  
  getdevolver() {
    if (this._prestado) {
      this._prestado = false;
      console.log(`El libro "${this.titulo}" ha sido devuelto.`);
    } else {
      console.log(`El libro "${this.titulo}" no estaba prestado.`);
    }
  }
  getEstado()  {
    return this._prestado ? "Prestado" : "Disponible";
  }
}

class biblioteca {
  constructor(nombre){
    this.nombre = nombre;
    this.libros = [];
  }
  agregarlibro () {
   this.libros.push(libro);

  }
  buscarPorISBN() {
    this.libros.find(libro => libro.isbn === isbn);
  }
  prestarLibro(isbn) {
    const libro = this.buscarPorISBN(isbn);
    if (libro) {
      libro.prestar();
    } else {
      console.log(` Libro con ISBN ${isbn} no encontrado.`);
    }
  }
  mostrarlibros() {
    console.log(`libro esta en${this.nombre}`);
    this.libros.forEach(libro => {
      console.log(`- ${this.titulo} de ${this.autor}`);
    });

  }
}

const libro1 = new libro("Cien años de soledad", "Gabriel García Márquez", "11111" )
const libro2 = new libro("1984", "George Orwell", "12345");
const biblioteca1= new biblioteca ("biblioteca central")


/* libro1.getprestar();
libro1.getdevolver(); */
biblioteca1.buscarPorISBN(libro2);
biblioteca1.agregarlibro(libro1);
biblioteca1.agregarlibro(libro2);
biblioteca1.mostrarlibros();