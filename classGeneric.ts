namespace GenericNamespace {
  // Definición de la interfaz Wheels
  interface Wheels {
    count: number;
    diameter: number;
  }

  // Definición de la interfaz genérica Vehicle
  interface Vehicle<T> {
    getName(): string;
    getWheelCount: () => T;
  }

  // Implementación de la clase Automobile que cumple con la interfaz Vehicle<Wheels>
  class Automobile implements Vehicle<Wheels> {
    constructor(private name: string, private wheels: Wheels) {}

    getName(): string {
      return this.name;
    }

    getWheelCount(): Wheels {
      return this.wheels;
    }
  }

  // Implementación de la clase Chevy que extiende de Automobile
  class Chevy extends Automobile {
    constructor() {
      super("Chevy", { count: 4, diameter: 18 });
    }
  }

  // Creación de una instancia de Chevy
  const chevy = new Chevy();
  console.log("car name ", chevy.getName());
  console.log("wheels ", chevy.getWheelCount());
}
