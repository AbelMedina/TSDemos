namespace TAliasesNamespace {
  // Definición de un tipo de unión literal Points que puede ser uno de los valores 20, 30, 40 o 50
  type Points = 20 | 30 | 40 | 50;

  // Declaración de una variable score con el tipo Points y asignación inicial del valor 20
  let score: Points = 20;

  // Impresión en consola del valor de score
  console.log(score);

  // Definición de un tipo de objeto complejo ComplexPerson con varias propiedades
  type ComplexPerson = {
    name: string; // Nombre de la persona, tipo string
    age: number; // Edad de la persona, tipo number
    birthday: Date; // Fecha de cumpleaños, tipo Date
    married: boolean; // Estado civil, tipo boolean
    address: string; // Dirección, tipo string
  };
}
