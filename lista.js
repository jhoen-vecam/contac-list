let contactos = ["jhonathan vergara", "jhoen vecam","israel vergara"];


function añadirNuevoContacto(nuevoContacto){
 
    contactos.push(nuevoContacto);
    
}
añadirNuevoContacto("rafael orozco" );
añadirNuevoContacto("poncho zuleta");

console.log("lista de contactos actualizada:");
console.log( contactos);

function quitarContacto(){

    contactos.pop(contactos)
}
quitarContacto();
console.log("lista de contacto actualizada");
console.log(contactos);

function imprimirContactos() {
    console.log("Lista de contactos:");
    contactos.forEach(function(contacto) {
      console.log(contacto);
    });
  }
  
  imprimirContactos();
