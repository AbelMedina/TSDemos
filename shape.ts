namespace Shape {
  // Definición de una clase Person dentro del namespace Shape
  class Person {
    // La clase Person tiene una propiedad llamada name de tipo string
    name: string;
  }

  // Creación de una constante jill de tipo objeto con una propiedad name
  // El tipo se define inline como { name: string }
  const jill: { name: string } = {
    name: "jill",
  };

  // Asignación del objeto jill a una variable de tipo Person
  // En TypeScript, esto es válido debido a la compatibilidad estructural de tipos
  const person: Person = jill;
  // Se imprime en consola el contenido de la variable person
  console.log(person);
}
