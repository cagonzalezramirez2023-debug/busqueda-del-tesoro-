//declaramos las variables

let tesoro= hath.floor(Math.random()*9);

let intentos = 3;

//se crea la función para Identificar una celda

function verificar (posicion) {

let celdas =document.getElementsByClassName("cell");

// Evita seguir jugando si ya terwind IF (Intentus) return; 
  if (intentos ===0) retutn;

//Evita repetir clic en elsna celde

if (celdas posicion).style.pointerEvents === "none") return;

// se descuenta Intento de en 1 hasta llegar a Intentos-1
intentos--;
// se prepara la condicion de comparar la posicion del contra donde

If (posicion === tesoro) {

celdas [posicion].style.hackgroundColor="gold";

celdas [posicion] .textcontent ="🔆"; 

document.getElementById ("mensaje").testContent "Felicidades contras tesorat";

desactivarTodo();
}else {
celdas [posicion].style.backgroundColor"gray": celdas posicion).textContent"
celdas [posicion].textcontent ="❌"
coldas [posicion].style.pointerEvents "none";

if (intentos===0){

document.getElementById("mensaje").testContent " Lo siento perdiste";

mostrarlesoro();

desactivarTodo();

}else{

document.getElementById("mensaje").textContent =

"Sigue buscando... Intentos restantes: intentos: " +intentos; 
}
}
} 
function mostrartesoro(){ 
  let celdas = document.getElementbyclassname("cell") 
  celdas[tesoro].textcontent ="🔹"; 

  funtion reiniciarjuego(){
    location.realad(); 
  }




