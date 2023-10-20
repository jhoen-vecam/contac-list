let contactos = ["jhonathan vergara", "jhoen vecam","israel vergara"];
 contactos=[{
  
  id:1,
  nombres:"jhonathan ",
  apellidos:"vergara",
  teléfono: "07675656",
  ubicaciones:"barrio el pozon",
  ciudad:"cartagena",
  dirección:"pozon",

 },{
  
  id:2,
  nombres:"jhoen ",
  apellidos:"vecam",
  teléfono: "0767455",
  ubicaciones:"barrio el pozon",
  ciudad:"cartagena",
  dirección:"pozon",

 },
 {
  
  id:3,
  nombres:"israel",
  apellidos:"vergara",
  teléfono: "07",
  ubicaciones:"barrio el pozon",
  ciudad:"cartagena",
  dirección:"pozon",

 }]
 //console.log(contactos[1]);

function añadirNuevoContacto(nuevoContacto){
 
    contactos.push(nuevoContacto);
    
}
añadirNuevoContacto( 
  {id:4,
  nombres:"rafael ",
  apellidos:"orozco",
  teléfono: "0767332455",
  ubicaciones:"barrio el pozon",
  ciudad:"cartagena",
  dirección:"pozon",});


console.log("lista de contactos actualizada:" , contactos);
//console.log( contactos);

function quitarContacto(){

    contactos.splice(0,1);
}
quitarContacto();
console.log("lista de contacto actualizada" , contactos);
//console.log(contactos);

function imprimirContactos() {
  console.log("Lista de contactos:");
  contactos.forEach(function(contacto) {
    console.log(contacto);
  });
 }
  
 // imprimirContactos();

 function añadirNuevoContacto(nuevoContacto){
 
   contactos.push(nuevoContacto);
   
}
//añadirNuevoContacto("falcao gaarcia" );



//console.log( contactos.id[1]);
