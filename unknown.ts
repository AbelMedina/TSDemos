namespace unknownNamespace {
  // Declaración de una variable val con tipo unknown y asignación inicial de un número
  let val: unknown = 22;

  // Reasignación de val a un string
  val = "string value";

  // Reasignación de val a una nueva instancia de Array
  val = new Array();

  // Verificación de si val es una instancia de Array
  if (val instanceof Array) {
    // Si val es un Array, se llama al método push para agregar el valor 33
    val.push(33);
  }

  // Impresión en consola del valor de val
  console.log(val);
}
