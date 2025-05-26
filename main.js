class matrial {
  constructor(nombre, ingles, programación , html ){
    this.nombre = nombre;
    this.ingles = ingles;
    this.programación = programación;
    this.html = html;
  }
  notaMedia(){
    ingles + programación + html / 3
  }
  
}
const nota = new matrial ("juan" , 9, 8 , 7)
nota =(nota.nombre +" "+ nota.ingles+ " " + nota.programación + " " + nota.html);
console.log(nota);
console.log(notaMedia);