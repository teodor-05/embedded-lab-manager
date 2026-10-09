// Pasul 2: Datele de test si valorile permise
const components = [
  { id: 1, name: "Ultrasonic Sensor HC-SR04", allocated: false, type: "Sensor", project: "General Lab Use" },
  { id: 2, name: "I2C LCD Display", allocated: true, type: "Display", project: "Digital Safe" },
  { id: 3, name: "Arduino Uno Board", allocated: false, type: "Microcontroller", project: "General Lab Use" }
];

const TYPES = ["Sensor", "Actuator", "Display", "Microcontroller"];

// Pasul 3: Listarea numelor
function listNames(lista) {
  return lista.map((c) => c.name);
}

// Pasul 4: Numararea elementelor disponibile (nealocate)
function countAvailable(lista) {
  return lista.filter((c) => !c.allocated).length;
}

// Pasul 5: Cautarea dupa nume
function searchByName(lista, text) {
  const lowerText = text.toLowerCase();
  return lista.filter((c) => c.name.toLowerCase().includes(lowerText));
}

// Pasul 6: Adaugarea unui element, cu validare
function nextId(lista) {
  return lista.reduce((max, c) => Math.max(max, c.id), 0) + 1;
}

function addComponent(lista, name, type, project = "General Lab Use") {
  const cleanName = name.trim();
  
  // Validare titlu gol
  if (cleanName === "") {
    console.log("Eroare validare: Numele componentei nu poate fi gol.");
    return lista;
  }
  
  // Validare tip permis
  if (!TYPES.includes(type)) {
    console.log("Eroare validare: Tip invalid (" + type + ").");
    return lista;
  }
  
  const newComp = {
    id: nextId(lista),
    name: cleanName,
    allocated: false,
    type: type,
    project: project
  };
  
  // Se intoarce un array nou
  return [...lista, newComp];
}

// Pasul 7: Comutarea starii si stergerea
function toggleAllocated(lista, id) {
  return lista.map((c) => (c.id === id ? { ...c, allocated: !c.allocated } : c));
}

function deleteComponent(lista, id) {
  return lista.filter((c) => c.id !== id);
}

// Pasul 8: Testele din consola
console.log("--- Citire ---");
console.log("Componente:", listNames(components).join(", "));
console.log("Disponibile:", countAvailable(components));
console.log("Cautare 'sensor':", listNames(searchByName(components, "sensor")).join(", "));

console.log("--- Adaugare ---");
let newList = addComponent(components, "Servo Motor SG90", "Actuator", "Digital Safe");
console.log("Lista noua are", newList.length, "componente.");
console.log("Originalul a ramas cu", components.length, "componente.");

console.log("--- Modificare si stergere ---");
newList = toggleAllocated(newList, 1);
console.log("Dupa alocarea id 1, disponibile:", countAvailable(newList));
newList = deleteComponent(newList, 2);
console.log("Dupa stergerea id 2:", listNames(newList).join(", "));

console.log("--- Validare ---");
addComponent(newList, "   ", "Sensor");
addComponent(newList, "LED RGB", "Light");