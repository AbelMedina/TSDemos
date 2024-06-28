namespace GetSetNamespace {
  // Definición de la clase Speaker
  class Speaker {
    // Propiedad privada message
    private message: string;

    // El constructor toma un parámetro name de tipo string y lo asigna a una propiedad privada
    constructor(private name: string) {}

    // Getter para la propiedad Message
    get Message() {
      // Verifica si el mensaje no incluye el nombre del speaker
      if (!this.message.includes(this.name)) {
        throw new Error("Message is missing speaker's name");
      }
      // Devuelve el mensaje
      return this.message;
    }

    // Setter para la propiedad Message
    set Message(val: string) {
      let tmpMessage = val;
      // Si el valor no incluye el nombre del speaker, lo añade al inicio del mensaje
      if (!val.includes(this.name)) {
        tmpMessage = this.name + " " + val;
      }
      // Asigna el mensaje temporal a la propiedad message
      this.message = tmpMessage;
    }
  }

  // Creación de una instancia de la clase Speaker con el nombre "john"
  const speaker = new Speaker("john");

  // Uso del setter para asignar un valor a la propiedad Message
  speaker.Message = "Hello";

  // Uso del getter para obtener el valor de la propiedad Message e imprimirlo en consola
  console.log(speaker.Message); // Imprimirá "john Hello"
}
