namespace functionReturnNamespac {
  // Función runMore: toma un número (distance) y devuelve ese número incrementado en 10
  function runMore(distance: number): number {
    return distance + 10;
  }

  // Función eat: toma un número (calories) y imprime un mensaje en la consola
  function eat(calories: number) {
    console.log("I ate " + calories + " calories");
  }

  // Función sleepIn: toma un número (hours) y imprime un mensaje en la consola
  // No devuelve ningún valor (void)
  function sleepIn(hours: number): void {
    console.log("I slept " + hours + " hours");
  }

  // Llamada a la función eat con el argumento 100
  let ate = eat(100);
  // Imprime el valor devuelto por la función eat, que será undefined
  console.log(ate);

  // Llamada a la función sleepIn con el argumento 10
  let slept = sleepIn(10);
  // Imprime el valor devuelto por la función sleepIn, que será undefined
  console.log(slept);
}
