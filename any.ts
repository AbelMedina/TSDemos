namespace anyNamespace {
  // Declaración de una variable val con tipo any y asignación inicial de un número
  let val: any = 22;

  // Reasignación de val a un string
  val = "string value";

  // Reasignación de val a un nuevo array
  val = new Array();

  // Intento de llamar a un método doesnotexist en val
  // Esto no generará un error de compilación debido al uso de tipo any
  val.doesnotexist(33);

  // Intento de usar el método push de un array (comentado)
  // val.push(33);

  // Impresión en consola del valor de val
  console.log(val);
}
