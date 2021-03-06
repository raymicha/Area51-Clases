/*

Estructuras Repetitivas: Ciclos / Loops

Los ciclos son un elemento de la programación que nos permite repetir acciones una y otra vez hasta que el ciclo haya terminado.

Por ejemplo mostrar una cantidad de fotos que se descargaron desde una plataforma como Flickr o Instagram o repetidamente mostrarle cuadro de dialogo (prompt) hasta que el usuario ingrese una respuesta correcta a una pregunta de un quiz.

Para este tipo de ejemplo nos sirven los arreglos, ya que nos permiten almacenar multiples valores de informacion, como las imagenes que descargamos de Instagram o Flick o numeros, etc. 

*/

/* 
	Ejemplo usando el juego que muestra un número random. Supongamos que queremos mostrar 10 números aleatorios en nuestra pantalla



var random = Math.floor(Math.random() * 70 ) + 1;
document.write(random + '-'); 
var random = Math.floor(Math.random() * 50 ) + 1;
document.write(random + '-'); 
var random = Math.floor(Math.random() * 10 ) + 1;
document.write(random + '-'); 
var random = Math.floor(Math.random() * 20 ) + 1;
document.write(random + '-'); 
var random = Math.floor(Math.random() * 50 ) + 1;
document.write(random + '-'); 
var random = Math.floor(Math.random() * 90 ) + 1;
document.write(random + '-'); 
var random = Math.floor(Math.random() * 100 ) + 1;
document.write(random + '-'); 
var random = Math.floor(Math.random() * 30 ) + 1;
document.write(random + '-'); 
var random = Math.floor(Math.random() * 60 ) + 1;
document.write(random + '-'); 
var random = Math.floor(Math.random() * 34 ) + 1;
document.write(random + '-'); 
*/

/* 
	Ejemplo usando el juego que muestra un número random. Supongamos que queremos mostrar 10 números aleatorios en nuestra pantalla



var random = Math.floor(Math.random() * 70 ) + 1;
document.write(random + '-'); 
var random = Math.floor(Math.random() * 70 ) + 1;
document.write(random + '-'); 
var random = Math.floor(Math.random() * 70 ) + 1;
document.write(random + '-'); 
var random = Math.floor(Math.random() * 70 ) + 1;
document.write(random + '-'); 
var random = Math.floor(Math.random() * 70 ) + 1;
document.write(random + '-'); 

var contador = 0;

// Usando Whiles

while(contador < 10000) {
	var numRandom = Math.floor(Math.random() * 70 ) + 1;
  document.write(random + '-');
	contador = contador + 1;
}


*/



// Con ciclos 

/*
var contador = 0;

// Usando Whiles

while(contador < 10000) {
	var numRandom = numeroAleatorio(100);
	contador = contador + 1;
}

// Usando For

for( var contador = 0; contador < 1000; contador +=1 ){
	var numRandom = numeroAleatorio(100);
	contador = contador + 1;	
}

*/

// Agregando divs 

/*
var crearDivs = '';

for (var i = 1; i <= 100; i++) {
	crearDivs += '<div class="numeros">' + i + '</div>'; 
}

document.write(crearDivs);
*/

/*
// Sin ciclos

var respuestasCorrectas = 0;

var respuesta1 = prompt('pregunta 1');
var respuesta2 = prompt('pregunta 2');
var respuesta3 = prompt('pregunta 3');
var respuesta4 = prompt('pregunta 4');
var respuesta5 = prompt('pregunta 5');

function contadorRespuestas() {
  if(respuesta1 === 'blah') {
    respuestasCorrectas = respuestasCorrectas + 1;
  }
  if(respuesta2 === 'bleh') {
    respuestasCorrectas = respuestasCorrectas + 1;
  }
  if(respuesta3 === 'blih') {
    respuestasCorrectas = respuestasCorrectas + 1;
  }
  if(respuesta4 === 'bloh') {
    respuestasCorrectas = respuestasCorrectas + 1;
  }
  if(respuesta5 === 'bluh') {
    respuestasCorrectas = respuestasCorrectas + 1;
  }
}

function imprimirMensajes() {
  if(respuestasCorrectas === 5){
    document.write('Has ganado la corona de oro!');
  }else if(respuestasCorrectas === 3) {
    document.write('Has ganado la corona de plata');
  }else if(respuestasCorrectas < 3){
    document.write('Perdiste :(');
  }
}

contadorRespuestas();
imprimirMensajes();

*/

// Usando el ejercicio de las imagenes

/*
var imagenes = Array.from(document.querySelectorAll('img'));
for (var i=0; i<imagenes.length; i++) {
	var imagenesIndex = imagenes[i];
	if(imagenesIndex.className === 'hide') {
		imagenesIndex.setAttribute('style', 'display:none;');
	}
}
*/

// El ejercicio del Quiz usando ciclos
/*
var respuestasCorrectas = 0;
var qa = [
  ['¿Cuántos continentes tiene La Tierra?', 5],
  ['¿Como se llama el presidente de USA?', 'Donald Trump'],
  ['¿Qué animal hace cuac cuac?', 'Pato']
]

for(var i = 0; i <qa.length; i++){
  var pregunta = qa[i][0];
  var respuesta = qa[i][1];
  var usuarioRespuesta = prompt(pregunta);
  
  if(usuarioRespuesta == respuesta){
    var respuestasCorrectas = respuestasCorrectas + 1;
  }
}

if( respuestasCorrectas === 3 ) {
  document.write('<h2>Te ganaste la corona de oro!</h2>');
}else if( respuestasCorrectas === 2 ){
  document.write('<h2>Te ganaste la corona de plata!</h2>');
} else {
  document.write('<h2>Perdiste! :(</h2>')
}
*/




/*

// Con ciclos y arreglos

var respuestasCorrectas = 0;
var pregunta, respuesta, usuarioRespuesta;

var preguntasYrespuestas = [
	[ '¿Cuántos estados tienen los Estados Unidos?', 50 ],
	[ '¿Cuántos continentes hay en el mundo', 7 ],
	[ '¿Cuántas patas tiene una araña', 8 ]
];

for(var i = 0; i < preguntasYrespuestas.length; i++){
	pregunta = preguntasYrespuestas[i][0];
	respuesta = preguntasYrespuestas[i][1];
	usuarioRespuesta = parseInt(prompt(pregunta));
	if(usuarioRespuesta === respuesta){
		//respuestasCorrectas++
		//respuestasCorrectas = respuestasCorrectas + 1
		respuestasCorrectas +=1;
	}
}

document.write('Tuviste ' + respuestasCorrectas + ' respuestas correctas');

*/
