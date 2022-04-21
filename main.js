var nombre = "natalie";
const dni = "47658798s";
let trabajo = true;

//console.log(nombre, trabajo,dni);
//console.log(typeof(nombre,dni));

//escope global
var num1 = 23;

function sumar() {
  let num2 = 3;
  let result = num1 + num2;
  return result;
}

let resutlado = sumar();
console.log(resutlado);

//AROW
function arrow() {
  let nombre = "natalie";
  let primerApellido = "gomez";
  let segundoApellido = "tapia";
  let nombreCompleto = nombre + " " + primerApellido + " " + segundoApellido;
  return nombreCompleto;
}
console.log(arrow());

//BOOLEANO
trabajo = true;
function booleano() {
  console.log(trabajo);
}
booleano();

//INFINITOS
function infinitos(...infitinos) {
  infitinos.forEach((element) => {
    console.log(element);
  });
}
infinitos("hola", "adios", "perro");

function bombilla() {
  let num = Math.round(Math.random());

  if (num == 0) {
    console.log("🕯️");
  } else {
    console.log("💡");
  }
}
bombilla();

//FOR
for (let i = 0; i < 10; i++) {
  console.log(i + 1 + ". 💕");
}

//WHILE
let j = 1;
while (j < 10) {
  console.log(j + 1 + "💕");
  j++;
}

//FOR EACH RECORRE UN ARRAY
let letras = ["a", "b", "c", "d", "e"];
letras.forEach((element) => {
  console.log(element);
});

//ARRAY DE 5 A 0
let numero = 5;
for (let numero = 5; numero >= 0; numero--) {
  console.log(numero);
}

//SUBSTITUIR A PARTIR DE X ELEMENTO POR X
const arr = ["🍔", "🌯", "🍣", "🍕", "🍜", "🍱", "🍚", "🍘", "🥩"];
console.log(arr.fill("🍿", 4));

//BUSCAR SI HAY UNA PIÑA
const arr2 = ["🍕", "🍕", "🍍", "🍕", "🍕"];
console.log(arr2.some((elem) => elem == "🍍"));

//BORRAR SI HAY UNA FRUTA REPETIDA
let notRepiteFruit = [...new Set(arr2)];
console.log(notRepiteFruit);

//ELIMINAR PIÑA
arr2.splice(2, 1);
console.log(arr2);

//CAMBIAR ICONO A OTRO
const arr3 = ["🍓","🍋","🍓","🍋","🍓"] 
console.log(arr3.fill("🍄"));

//AÑADIR UN ICONO DESPUES DE OTRO
const arr4 = ["🌶️","🥛","🌶️","🥛","🌶️","🥛"];
 for (let i = 0; i < arr4.length; i++) {
     if (arr4[i] == "🌶️"){
         arr4.splice(i+1, 0, "🥵");
     }
     console.log(arr4[i]);
 }

 