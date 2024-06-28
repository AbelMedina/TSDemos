namespace InterfacesNamespace {
  // Definición de la interfaz Employee
  interface Employee {
    name: string;
    id: number;
    isManager: boolean;
    getUniqueId: () => string;
  }

  // Creación de un objeto linda que cumple con la interfaz Employee
  const linda: Employee = {
    name: "linda",
    id: 2,
    isManager: false,
    getUniqueId: (): string => {
      // Generación de un ID único basado en el nombre y ID
      let uniqueId = linda.id + "-" + linda.name;
      // Si no es manager, prefija el ID con "emp-"
      if (!linda.isManager) {
        return "emp-" + uniqueId;
      }
      return uniqueId;
    },
  };

  // Llamada al método getUniqueId de linda e impresión del resultado
  console.log(linda.getUniqueId()); // Imprimirá "emp-2-linda"

  // Creación de un objeto pam que cumple con la interfaz Employee
  const pam: Employee = {
    name: "pam",
    id: 1,
    isManager: true,
    getUniqueId: (): string => {
      // Generación de un ID único basado en el nombre y ID
      let uniqueId = pam.id + "-" + pam.name;
      // Si es manager, prefija el ID con "mgr-"
      if (pam.isManager) {
        return "mgr-" + uniqueId;
      }
      return uniqueId;
    },
  };

  // Llamada al método getUniqueId de pam e impresión del resultado
  console.log(pam.getUniqueId()); // Imprimirá "mgr-1-pam"
}
