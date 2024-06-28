namespace AbstractNamespace {
  // Definición de la clase abstracta Vehicle
  abstract class Vehicle {
    // El constructor toma un parámetro wheelCount de tipo number y lo asigna a una propiedad protegida
    constructor(protected wheelCount: number) {}

    // Método abstracto que debe ser implementado por las clases derivadas
    abstract updateWheelCount(newWheelCount: number): void;

    // Método que muestra el número de ruedas del vehículo
    showNumberOfWheels() {
      console.log(`moved ${this.wheelCount} miles`);
    }
  }

  // Definición de la clase Motorcycle que extiende la clase abstracta Vehicle
  class Motorcycle extends Vehicle {
    // El constructor de Motorcycle llama al constructor de la clase base Vehicle con 2 ruedas
    constructor() {
      super(2);
    }

    // Implementación del método abstracto updateWheelCount
    updateWheelCount(newWheelCount: number) {
      this.wheelCount = newWheelCount;
    }
  }

  // Definición de la clase Automobile que extiende la clase abstracta Vehicle
  class Automobile extends Vehicle {
    // El constructor de Automobile llama al constructor de la clase base Vehicle con 4 ruedas
    constructor() {
      super(4);
    }

    // Implementación del método abstracto updateWheelCount
    updateWheelCount(newWheelCount: number) {
      this.wheelCount = newWheelCount;
      console.log(`moved ${this.wheelCount} miles`);
    }
  }

  // Creación de una instancia de Motorcycle
  const motorCycle = new Motorcycle();
  // Actualización del número de ruedas de motorCycle
  motorCycle.updateWheelCount(1);

  // Creación de una instancia de Automobile
  const automobile = new Automobile();
  // Actualización del número de ruedas de automobile
  automobile.updateWheelCount(3);
}
