namespace ClassesNamespace {
  // class Person {
  //   constructor() {}
  //   msg: string;
  //   speak() {
  //     console.log(this.msg);
  //   }
  // }

  // const tom = new Person();
  // tom.msg = "hello";
  // tom.speak();

  // class Person {
  //   constructor(private msg: string) {}

  //   speak() {
  //     console.log(this.msg);
  //   }
  // }

  // const tom = new Person("Hello");
  // // tom.msg = "hello";
  // tom.speak();

  // Definición de la clase Person
  class Person {
    // El constructor toma un parámetro msg de tipo string y lo asigna a una propiedad privada y de solo lectura
    constructor(private readonly msg: string) {}

    // Método speak: imprime en la consola el mensaje modificado
    speak() {
      // Intento de modificar la propiedad readonly msg (esto causará un error)
      this.msg = "speak " + this.msg;
      console.log(this.msg);
    }
  }

  // Creación de una instancia de la clase Person con el mensaje "Hello"
  const tom = new Person("Hello");

  // Llamada al método speak de la instancia tom
  tom.speak(); // Esto intentará modificar una propiedad readonly, causando un error en tiempo de compilación
}
