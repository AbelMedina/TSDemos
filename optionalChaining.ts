namespace OptionalChainingNS {
  // Definición de la interfaz Wheels con una propiedad opcional count
  interface Wheels {
    count?: number;
  }

  // Definición de la interfaz Vehicle con una propiedad opcional wheels de tipo Wheels
  interface Vehicle {
    wheels?: Wheels;
  }

  // Implementación de la clase Automobile que cumple con la interfaz Vehicle
  class Automobile implements Vehicle {
    constructor(public wheels?: Wheels) {}
  }

  // Creación de una instancia de Automobile con una propiedad wheels cuyo count es undefined
  const car: Automobile | null = new Automobile({
    count: undefined,
  });

  // Imprimir el objeto car
  console.log("car ", car);

  // Usar el encadenamiento opcional para acceder a la propiedad wheels del objeto car
  console.log("wheels ", car?.wheels);

  // Usar el encadenamiento opcional para acceder a la propiedad count de wheels
  console.log("count ", car?.wheels?.count);
}
