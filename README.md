# Fundamentos de TypeScript

Este repositorio proporciona una guía completa sobre los conceptos esenciales de TypeScript a través de una serie de ejemplos de código. El objetivo es ayudarte a comprender las características clave y los beneficios de usar TypeScript en tus proyectos.

## Descripción General

TypeScript es un superconjunto de JavaScript con tipado estático que se compila en JavaScript puro. Añade tipos estáticos, interfaces, clases y otras características a JavaScript, facilitando la escritura de código robusto y mantenible. Este repositorio cubre diversas características de TypeScript, incluyendo tipos, clases, interfaces, genéricos y más.

## Temas Cubiertos

1. **Tipos en TypeScript**
   - Comprensión de los tipos implícitos y explícitos.
   - Ejemplo:
     ```typescript
     class Person {
       name: string;
     }
     const jill: { name: string } = { name: "jill" };
     const person: Person = jill; // No hay problema porque la estructura coincide
     ```

2. **Tipo `any`**
   - Flexibilidad y riesgos asociados con el uso de `any`.
   - Ejemplo:
     ```typescript
     let val: any = 22;
     val = "string value";
     val = new Array();
     val.doesnotexist(33); // Error en tiempo de ejecución
     console.log(val);
     ```

3. **Tipo `unknown`**
   - Alternativa más segura a `any` con comprobaciones de tipo.
   - Ejemplo:
     ```typescript
     let val: unknown = 22;
     if (val instanceof Array) {
       val.push(33);
     }
     ```

4. **Tipos de Unión e Intersección**
   - Uso de tipos de unión e intersección para manejar múltiples tipos o combinaciones de tipos.
   - Ejemplo:
     ```typescript
     let unionObj: null | { name: string } = null;
     unionObj = { name: "jon" };
     console.log(unionObj);
     ```

5. **Tipos Literales**
   - Restringir los valores de una variable a literales específicos.
   - Ejemplo:
     ```typescript
     type Points = 20 | 30 | 40 | 50;
     let score: Points = 20;
     console.log(score);
     ```

6. **Funciones en TypeScript**
   - Declaración de funciones con tipos de retorno explícitos.
   - Ejemplo:
     ```typescript
     function runMore(distance: number): number {
       return distance + 10;
     }
     ```

7. **Tipo `never`**
   - Uso de `never` para funciones que nunca deben retornar.
   - Ejemplo:
     ```typescript
     function oldEnough(age: number): never | boolean {
       if (age > 59) {
         throw Error("Too old!");
       }
       return age > 18;
     }
     ```

8. **Clases y Modificadores de Acceso**
   - Uso de `private`, `protected` y `readonly` para controlar la visibilidad y mutabilidad.
   - Ejemplo:
     ```typescript
     class Person {
       constructor(private readonly msg: string) {}
       speak() {
         console.log(this.msg);
       }
     }
     ```

9. **Clases Abstractas e Interfaces**
   - Definición de contratos con interfaces y creación de clases abstractas.
   - Ejemplo:
     ```typescript
     abstract class Vehicle {
       abstract updateWheelCount(newWheelCount: number): void;
     }
     ```

10. **Genéricos**
    - Creación de funciones y clases flexibles y seguras con genéricos.
    - Ejemplo:
      ```typescript
      interface HasLength {
        length: number;
      }
      function getLength<T extends HasLength>(arg: T): number {
        return arg.length;
      }
      ```

11. **Coalescencia Nullish (`??`)**
    - Proporcionar valores predeterminados para `null` o `undefined`.
    - Ejemplo:
      ```typescript
      const val1 = undefined;
      const val2 = 10;
      const result = val1 ?? val2;
      console.log(result); // Imprime 10
      ```

12. **Encadenamiento Opcional**
    - Acceso seguro a propiedades anidadas.
    - Ejemplo:
      ```typescript
      interface Wheels {
        count?: number;
      }
      const car: Automobile | null = new Automobile({ count: undefined });
      console.log(car?.wheels?.count);
      ```

### Ejemplo Completo de Uso de Coalescencia Nullish y Encadenamiento Opcional

```typescript
interface Car {
  make?: string;
  model?: string;
  wheels?: {
    count?: number;
  };
}

const myCar: Car = {
  make: "Toyota",
  wheels: {
    count: undefined,
  },
};

console.log(myCar.make); // Imprime "Toyota"
console.log(myCar.model ?? "Model not specified"); // Imprime "Model not specified"
console.log(myCar.wheels?.count ?? 4); // Imprime 4 (valor por defecto porque count es undefined)
```

## Cómo Usar Este Repositorio

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/tu-usuario/TypeScript-Fundamentos.git
   cd TypeScript-Fundamentos
   ```

2. **Explora los ejemplos:**
   - Abre los archivos individuales en tu editor de código preferido para ver los ejemplos de TypeScript en acción.

3. **Ejecuta los ejemplos:**
   - Usa un compilador de TypeScript o un IDE para compilar y ejecutar el código.

## Contribuciones

Siéntete libre de contribuir a este repositorio enviando issues o pull requests. Las contribuciones son bienvenidas para mejorar los ejemplos o agregar nuevos temas.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT - consulta el archivo LICENSE para más detalles.

---

Este repositorio pretende ser un recurso completo para cualquier persona que quiera entender y dominar TypeScript. Ya seas un principiante o un desarrollador experimentado, estos ejemplos te ayudarán a comprender los conceptos básicos de TypeScript de manera efectiva.
