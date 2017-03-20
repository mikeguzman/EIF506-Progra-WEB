window.onload = prepararBoton;

var llamarAlerta = function () {
    alert("Hola Mundo");
};

function prepararBoton() {

   document.getElementById('btnDiscreto').onclick = function()
   {
       llamarAlerta();
   }
}

