/*nner html*/
 function cambiaTitulo(){
    let titulo=document.getElementById("titulo");
    titulo.innerHTML = "Título NUEVO";
}
/* atributos html*/
function cambiaImagen(){
    document.getElementById("imagen").src = "../img/descarga.jpg";
}
function cambiaValor(){
    document.getElementById("usuario").value="admin";
}
/** propiedades css**/
function cambiaColor(){
    let titulo=document.getElementById("titulo");
    titulo.style.color = "grenn";
    titulo.style.backgroundColor = "yellow";
    titulo.style.fontSize = "4em";
    titulo.style.border = "2px solid red";
}
function ocultaImagen(){
    document.getElementById("imagen").style.display = "none";
}
/** aplicar una clase a un elemento  **/
function aplicaClase(){
    let titulo=document.getElementById("titulo2");
    titulo.className = "importante";
}
/** Escribir nuevo HTML  **/
function nuevoHTML(){
    document.write("<h1>Nuevo HTML</h1>");
}

function cambiaIdioma(){
    let miSelect=document.getElementById("idioma");
    let titulo=document.getElementById("titulo");
    if ( miSelect.value=="en" ) {
        titulo.innerHTML = "New Title";
    } else {
        titulo.innerHTML = "Nuevo Título";
    }
}