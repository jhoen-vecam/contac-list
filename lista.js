let contactos = [
  {
    id: 1,
    nombres: "jhonathan ",
    apellidos: "vergara",
    teléfono: "07675656",
    ubicaciones: "barrio el pozon",
    ciudad: "cartagena",
    dirección: "pozon",
  },
  {
    id: 2,
    nombres: "jhoen ",
    apellidos: "vecam",
    teléfono: "0767455",
    ubicaciones: "barrio el pozon",
    ciudad: "cartagena",
    dirección: "pozon",
  },
  {
    id: 3,
    nombres: "israel",
    apellidos: "vergara",
    teléfono: "07",
    ubicaciones: "barrio el pozon",
    ciudad: "cartagena",
    dirección: "pozon",
  },
];

function añadirNuevoContacto(nuevoContacto) {
  contactos.push(nuevoContacto);
}

añadirNuevoContacto({
  id: 4,
  nombres: "rafael ",
  apellidos: "orozco",
  teléfono: "0767332455",
  ubicaciones: "barrio el pozon",
  ciudad: "cartagena",
  dirección: "pozon",
});

console.log("Lista de contactos actualizada al agregar un nuevo contacto:", contactos);

function quitarContacto() {
  contactos.splice(0, 1);
}

quitarContacto();
console.log("Lista de contactos actualizada al quitar un contacto:", contactos);

function imprimirContactos() {
  console.log("Lista de contactos impresos:");
  contactos.forEach(function (contacto) {
    console.log(contacto);
  });
}

imprimirContactos();

function actualizarUnContacto() {
   contactos[1] = {
    id: 5,
    nombres: "jhoencitho ",
    apellidos: "vecam",
    teléfono: "121212",
    ubicaciones: "colombia",
    ciudad: "cartagena",
    dirección: "pozon",
  };
  
}

actualizarUnContacto();
console.log("Lista de contactos actualizada después de actualizar un elemento", contactos);