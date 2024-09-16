const opciones_caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
const longitud_opciones = opciones_caracteres.length;

let longitud_maxima = 18;
let longitud_minima = 6;

let boton_generar = document.getElementById('generar');
let boton_limpiar = document.getElementById('limpiar');

let output_contrasena = document.getElementById('contrasena');

function generar()
{
    let longitud = parseInt(document.getElementById('longitud').value);
    if(longitud_minima > longitud || longitud_maxima < longitud)
    {
        alert("La longitud de la cadena debe estar entre " + longitud_minima + " y " + longitud_maxima + " caracteres.");
        return;
    }
    let mayuscula, minuscula, numero, especial;
    mayuscula = minuscula = numero = especial = true;
    let contrasena = "";
    let indice;
    for(let i = 0; i < longitud; i++)
    {
        indice = Math.floor(Math.random()*longitud_opciones);
        if(indice < 26) mayuscula = false;
        else if(indice < 52) minuscula = false;
        else if(indice < 62) numero = false;
        else especial = false;
        contrasena += opciones_caracteres[indice];
    }
    if(mayuscula || minuscula || numero || especial)
    {
        alert("Contrasena debil generada.");
    }
    else
    {
        alert("Contrasena fuerte generada.");
    }
    output_contrasena.value = contrasena;
}

function limpiar()
{
    output_contrasena.value = "";
}