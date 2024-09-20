//1 Programa de una sola línea que haga aparecer un alert con “Hello World”:
alert("hello world");

//2 Programa de una sola línea que escriba en la pantalla un texto que diga “Hello World” usando
document.write("hello world");

//3 Programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5:
document.write(3 + 5);

//4 Programa de dos líneas que pida el nombre del usuario con prompt y escriba un texto que diga “Hola nombreUsuario”:
let nombreUsuario = prompt("¿como es tu nombre?");
document.write("Hola " + nombreUsuario);

//5 Programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números:
let numero1 = parseFloat(prompt("ingrese el primer número"));
let numero2 = parseFloat(prompt("ingrese el segundo número"));
document.write("La suma es: " + (numero1 + numero2));

//6 Programa que pida dos números y escriba en la pantalla cuál es el mayor:
let num1 = parseFloat(prompt("ingresar el primer número"));
let num2 = parseFloat(prompt("ingresar el segundo número"));
document.write("el numero mayor es: " + (num1 > num2 ? num1 : num2));

//7 Programa que pida 3 números y escriba en la pantalla el mayor de los tres:
let nume1 = parseFloat(prompt("ingresar el primer número"));
let nume2 = parseFloat(prompt("ingresar el segundo número"));
let nume3 = parseFloat(prompt("ingresar el tercer número"));
document.write("El mayor es: " + Math.max(nume1, nume2, nume3));

//8 Programa que pida un número y diga si es divisible por 2:
let num = parseFloat(prompt("ingrese un número"));
document.write(num % 2 === 0 ? "tu numero es divisible por 2" : "tu numero no es divisible por 2");

//9 Programa que pida un número y determine si es par o impar:
let par = parseFloat(prompt("ingrese un número"));
document.write(par % 2 === 0 ? "tu número es par" : "tu número es impar");

//10 Programa que pida una nota numérica y determine si el alumno ha aprobado (nota mayor o igual a 5):
let nota = parseFloat(prompt("agregue la nota del alumno"));
document.write(nota >= 5 ? "aprobado" : "reprobado");

//11 Programa que pida un número del 1 al 12 y muestre el nombre del mes correspondiente:
let mes = parseInt(prompt("ingresar un número del 1 al 12"));
let meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
document.write(meses[mes - 1]);

//12 Programa que pida un número del 1 al 7 y muestre el día de la semana correspondiente:
var dia = parseInt(prompt("ingresar un número del 1 al 7"));
var dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
document.write(dias[dia - 1]);