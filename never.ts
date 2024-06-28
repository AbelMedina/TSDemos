namespace neverNamespace {
  // Definición de la función oldEnough que toma un parámetro age de tipo number
  // La función puede devolver un valor de tipo boolean o nunca devolver (never) si se lanza una excepción
  function oldEnough(age: number): never | boolean {
    // Si la edad es mayor que 59, se lanza un error y la función no devuelve ningún valor
    if (age > 59) {
      throw new Error("Too old!");
    }

    // Si la edad es menor o igual a 18, se devuelve false
    if (age <= 18) {
      return false;
    }

    // Para cualquier otra edad, se devuelve true
    return true;
  }
}
