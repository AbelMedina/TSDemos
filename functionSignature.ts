namespace functionSignatureNamespace {
  // Definición de un tipo de función Run que toma un parámetro milles de tipo number y devuelve un boolean
  type Run = (milles: number) => boolean;

  // Declaración de una variable runner con el tipo Run
  // Se le asigna una función anónima que implementa la firma especificada por el tipo Run
  let runner: Run = function (milles: number): boolean {
    if (milles > 10) {
      return true;
    }
    return false;
  };

  // Llamada a la función runner con el argumento 9 y impresión del resultado en consola
  console.log(runner(9)); // Imprimirá false
}
