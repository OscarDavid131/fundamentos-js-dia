/*Metodo mas usado*/
//document.getElementById("demo").innerHTML = "Hello JavaScript";
//document.getElementById("demo").style.fontSize = "35px";

/*Salidas de datos*/
window.alert(5+2);
console.log(6+2);

/*Declaraciones*/
let a,b,c;
a = 5;
b = 6;
c = a + b;
window.alert(c);
//document.getElementById("demo").innerHTML = c;
/*Vsriables*/
let p, q, r;
p = 5;
q = 7;
const m = 8; 
r = p + q + m;
document.getElementById("demo1").innerHTML = r;

/*Tipos de datos */
let num = 24;//numero entero
let name = "Oscar David";//cadena
let km = 14.5;//decimal
let isColombiano = true;//booleano
let obj = {firstname:"Ana",lastname:"Perez"}; //objeto

let y = 17 + "POO";
let unir = "17" + "POO"
window.alert(unir);
window.alert(y);

/*Definicion de una funcion */
function myFunction(){
    document.getElementById("demo2").innerHTML = "New paragraph";
}
