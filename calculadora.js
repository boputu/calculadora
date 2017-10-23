function cambia(){
  var elemento = document.getElementById("pantallaca");
  elemento.style.fontWeight = "bold";
  // Funcion que muestra el resultado en negrita
}

var pantalla;
function numero(idnum){
  pantalla=idnum;
  pantallaca.innerHTML += idnum;
}
pantalla=0;
// Funcion que muestra en pantalla cada tecla al pasarle un numero en el html.

function C(){
  pantallaca.innerHTML=null;
  // Funcion sencilla para borrar todo, igualando el div a nada.
}

function CE(){
  var contenido = pantallaca.innerHTML;
  contenido = contenido.split("");


  var ultimoCaracter = contenido.length-1;
  var borrar = contenido.splice(ultimoCaracter, 1);

  contenido = contenido.join("");
  pantallaca.innerHTML=contenido;
  // Funcion para borrar el último numero.
}

function operacion(numeros){
  var separar = numeros.split("+");
  // Separa los numeros a traves de la suma
  if (separar.length==3) {
    // Length lo que hace es contar la separación previa del array
    var resultado = parseInt(separar[0])+parseInt(separar[1])+parseInt(separar[2]);
    // Guarda en una variable la suma de los 3 componentes
    pantallaca.innerHTML = resultado;
    //Muestra en pantalla el resultado anterior (pantalla es el id del div)
  }else if (separar.length==2) {
    // Cuenta cuantos componentes hay al separarlo
    var operando1=separar[0].split("*");
    var operando2=separar[1].split("*");
    // Se separan los dos operantes por la multiplicacion

    if (operando1.length==2) {
      var multiplicacion = parseInt(operando1[0])*parseInt(operando1[1]);
      var resultado = multiplicacion+parseInt(operando2);
    }else if (operando2.length==2) {
      var multiplicacion = parseInt(operando2[0])*parseInt(operando2[1]);
      var resultado = multiplicacion+parseInt(operando1);
      //Si al separarlo hay dos componentes significa que los dos hay que multiplicarlos y el restante sumarlo y se guarda en resultado
    }
    pantallaca.innerHTML = resultado;
    //Muestra en pantalla el resultado
  }else if (separar.length==1) {
    var separadomultiplicacion = numeros.split("*");
    var resultado = parseInt(separadomultiplicacion[0])*parseInt(separadomultiplicacion[1])*parseInt(separadomultiplicacion[2]);
    pantallaca.innerHTML = resultado;
    //Si al separarlo solo hay un componente se multiplican y se guarda el resultdo.
  }
}
