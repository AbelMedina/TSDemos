namespace IntersectionNamespace {
  // Declaración de una variable obj con un tipo de intersección que incluye
  // un objeto con una propiedad name de tipo string y una propiedad age de tipo number
  let obj: { name: string } & { age: number } = {
    name: "tom",
    age: 25,
  };

  // Impresión en consola del objeto obj
  console.log(obj);
}
