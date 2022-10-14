console.log("Hola desde los eventos");

/** 
 * 
 * /Creamos las variables para acceder al html
 * 
 */

const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const btnSumar = document.getElementById("btnSumar");
const btnRestar = document.getElementById("btnRestar");
const btnMultiplicar = document.getElementById("btnMultiplicar");
btnSumar.addEventListener("click", Sumar);
btnRestar.addEventListener("click", Restar);
btnMultiplicar.addEventListener("click", Multiplicar);

const resultado = document.querySelector(".resultado");

//Creamos la función para sumar
function Sumar() {
    //Estamos diciendo que queremos que sume los valores que ingrese el usuario al dar click.
    let valor1 = Number(num1.value);
    let valor2 = Number(num2.value);
    return resultado.innerText = `${valor1}  + ${valor2} = ${valor1 + valor2} `
}

//Creamos la función para restar
function Restar() {
    //Estamos diciendo que queremos que reste los valores que ingrese el usuario al dar click.
    let valor1 = Number(num1.value);
    let valor2 = Number(num2.value);
    return resultado.innerText = `${valor1}  - ${valor2} = ${valor1 - valor2} `
}

//Creamos la función para multiplicar
function Multiplicar() {
    //Estamos diciendo que queremos que multiplique los valores que ingrese el usuario al dar click.
    let valor1 = Number(num1.value);
    let valor2 = Number(num2.value);
    return resultado.innerText = `${valor1}  x ${valor2} = ${valor1 * valor2} `
}