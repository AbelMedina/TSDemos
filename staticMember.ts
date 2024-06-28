namespace StaticMembersNamespace {
  // class ClassA {
  //   static typeName: string;

  //   constructor() {}
  //   static getFullName() {
  //     return "ClassA " + ClassA.typeName;
  //   }
  // }

  // const a = new ClassA();
  // // console.log(a.typeName);
  // console.log(ClassA.typeName);

  // Definición de la clase Runner
  class Runner {
    // Propiedad estática lastRunTypeName
    static lastRunTypeName: string;

    // Constructor que toma un parámetro typeName de tipo string y lo asigna a una propiedad privada
    constructor(private typeName: string) {}

    // Método run que asigna el valor de typeName a la propiedad estática lastRunTypeName
    run() {
      Runner.lastRunTypeName = this.typeName;
    }
  }

  // Creación de instancias de la clase Runner con diferentes typeName
  const a = new Runner("a");
  const b = new Runner("b");

  // Llamada al método run de la instancia b
  b.run();

  // Llamada al método run de la instancia a
  a.run();

  // Impresión en consola del valor de la propiedad estática lastRunTypeName
  console.log(Runner.lastRunTypeName); // Imprimirá "a"
}
