const tem = [];
var esta = false;
let entrada = document.querySelector(".entrada");
let boton0 = document.querySelector(".b0");
let boton1 = document.querySelector(".b1");
let boton2 = document.querySelector(".b2");
let boton3 = document.querySelector(".b3");
let boton4 = document.querySelector(".b4");
let boton5 = document.querySelector(".b5");
let boton6 = document.querySelector(".b6");
let boton7 = document.querySelector(".b7");
let boton8 = document.querySelector(".b8");
let boton9 = document.querySelector(".b9");
let ac = document.querySelector(".ac");
let Sumar = document.querySelector(".sumar");
let Restar = document.querySelector(".restar");
let Multiplicar = document.querySelector(".multiplicar");
let Dividir = document.querySelector(".dividir");
let Resultado = document.querySelector(".resultado");
let punto = document.querySelector(".punto");

document.addEventListener("click", (e) => {
  if (e.target === boton0) {
    entrada.value += boton0.value;
  } else if (e.target === boton1) {
    lim();
    entrada.value += boton1.value;
  } else if (e.target === boton2) {
    lim();
    entrada.value += boton2.value;
  } else if (e.target === boton3) {
    lim();
    entrada.value += boton3.value;
  } else if (e.target === boton4) {
    lim();
    entrada.value += boton4.value;
  } else if (e.target === boton5) {
    lim();
    entrada.value += boton5.value;
  } else if (e.target === boton6) {
    lim();
    entrada.value += boton6.value;
  } else if (e.target === boton7) {
    lim();
    entrada.value += boton7.value;
  } else if (e.target === boton8) {
    lim();
    entrada.value += boton8.value;
  } else if (e.target === boton9) {
    lim();
    entrada.value += boton9.value;
  } else if (e.target === ac) {
    entrada.value = "";
    tem.length = 0;
    
        console.log(tem);
      
  } else if (e.target === Sumar) {
    operacion(e);
  } else if (e.target === Restar) {
    operacion(e);
  } else if (e.target === Multiplicar) {
    operacion(e);
  } else if (e.target === Dividir) {
    operacion(e);
  } else if (e.target === punto) {
    lim();
    entrada.value += punto.value;
  } else if (e.target === Resultado) {
    try {
      let resul = operacion(e);

      console.log("antes");
      console.log(resul);
      resul.pop();
      console.log(resul);
      console.log("despues");

      let resul2 = resul.join("");
      console.log("antes");
      console.log(tem);
      tem.length = 0;
      console.log("despues");
      console.log(tem);

      console.log("Resultado de la operación:", resul2);
      entrada.value = eval(resul2);
    //   tem.push(entrada.value);
      
      console.log(esta);
    } catch (error) {
      console.error("Error en la evaluación:", error);
      entrada.value = "Error";
      esta = true;
      console.log(esta);
    }
   
  }
});

function operacion(e) {
  tem.push(entrada.value);
  tem.push(e.target.value);
  entrada.value = e.target.value;
  console.log(tem);
  return tem;
}
function lim() {
    if (esta) {
        entrada.value = "";
        esta = false;
    }
    let operadores = ["+", "-", "*", "/"];
    for (let op of operadores) {
        if (entrada.value[0] == op) {
            entrada.value = "";
        }
    }
}
