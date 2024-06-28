namespace GenericsNamespace {
  // function getLength<T>(arg: T): number {
  //   if (arg.hasOwnProperty("length")) {
  //     return arg["lenght"];
  //   }
  //   return 0;
  // }

  // Definición de la interfaz HasLength que tiene una propiedad length de tipo number
  interface HasLength {
    length: number;
  }

  // Función genérica getLength que acepta un argumento de tipo T, donde T está restringido a tipos que implementan HasLength
  function getLength<T extends HasLength>(arg: T): number {
    return arg.length;
  }

  // Llamada a la función getLength con un número, lo que resultará en un error de compilación
  console.log(getLength<number>(22)); // Error: Argument of type 'number' is not assignable to parameter of type 'HasLength'.

  // Llamada a la función getLength con una cadena, que tiene una propiedad length
  console.log(getLength("Hello world.")); // Imprimirá 12
}
