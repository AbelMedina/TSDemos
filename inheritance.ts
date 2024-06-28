namespace InheritanceNamespace {
  // Definición de la clase base Vehicle
  class Vehicle {
    // El constructor toma un parámetro wheelCount de tipo number y lo asigna a una propiedad protegida
    constructor(protected wheelCount: number) {}

    // Método que muestra el número de ruedas del vehículo
    showNumberOfWheels() {
      console.log(`moved ${this.wheelCount} miles`);
    }
  }

  // Definición de la clase Motorcycle que extiende la clase Vehicle
  class Motorcycle extends Vehicle {
    // El constructor de Motorcycle llama al constructor de la clase base Vehicle con 2 ruedas
    constructor() {
      super(2);
    }

    // Método para actualizar el número de ruedas del motocicleta
    updateWheelCount(newWheelCount: number) {
      this.wheelCount = newWheelCount;
    }
  }

  // Definición de la clase Automobile que extiende la clase Vehicle
  class Automobile extends Vehicle {
    // El constructor de Automobile llama al constructor de la clase base Vehicle con 4 ruedas
    constructor() {
      super(4);
    }
  }

  // Creación de una instancia de Motorcycle
  const motorCycle = new Motorcycle();
  // Llamada al método showNumberOfWheels en la instancia de Motorcycle
  motorCycle.showNumberOfWheels(); // Imprimirá "moved 2 miles"

  // Creación de una instancia de Automobile
  const automobile = new Automobile();
  // Llamada al método showNumberOfWheels en la instancia de Automobile
  automobile.showNumberOfWheels(); // Imprimirá "moved 4 miles"
}
