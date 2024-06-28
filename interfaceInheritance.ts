namespace InterfaceNamespace {
  // Definición de la interfaz Thing
  interface Thing {
    name: string;
    getFullName: () => string;
  }

  // Definición de la interfaz Vehicle que extiende de Thing
  interface Vehicle extends Thing {
    wheelCount: number;
    updateWheelCount: (newWheelCount: number) => void;
    showNumberOfWheels: () => void;
  }

  // Implementación de la clase Motorcycle que cumple con la interfaz Vehicle
  class Motorcycle implements Vehicle {
    name: string;
    wheelCount: number;

    // El constructor de Motorcycle toma un parámetro name y lo asigna a la propiedad name
    constructor(name: string) {
      this.name = name;
    }

    // Implementación del método updateWheelCount de la interfaz Vehicle
    updateWheelCount(newWheelCount: number) {
      this.wheelCount = newWheelCount;
      console.log(`Automobile has ${this.wheelCount}`);
    }

    // Implementación del método showNumberOfWheels de la interfaz Vehicle
    showNumberOfWheels() {
      console.log(`moved Automobile ${this.wheelCount} miles`);
    }

    // Implementación del método getFullName de la interfaz Thing
    getFullName() {
      return "MC-" + this.name;
    }
  }

  // Creación de una instancia de Motorcycle
  const moto = new Motorcycle("beginner-cycle");
  // Llamada al método getFullName e impresión del resultado
  console.log(moto.getFullName()); // Imprimirá "MC-beginner-cycle"
}
