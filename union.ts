namespace UnionNamespace {
  // Declaración de una variable unionObj con un tipo de unión que puede ser null o un objeto con una propiedad name de tipo string
  let unionObj: null | { name: string } = null;

  // Reasignación de unionObj a un objeto con una propiedad name
  unionObj = { name: "jon" };

  // Impresión en consola del objeto unionObj
  console.log(unionObj);
}
