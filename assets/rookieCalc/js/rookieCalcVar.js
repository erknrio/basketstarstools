// VARIABLES
// Variables empleadas para calcular las stats del jugador

// Puntos de Mejora: estos son los puntos que se mejora en cada entrenamiento segun el potencial
const PM=[14,27,41,55,68];

// Puntos de Entrenamiento que equivalen a un aumento en las stats
const PE=[38,38,40,45,53,65,83,108,140,180,230,291,363,447,545,658,786,930,1092,1273,1473,1693,1935,2200,2488,2800,3138,3503,3895,4315,4765,5246,5758,6302,6880,7493];
// Inicializamos el aumento de las stats con valores del 1 al 36
const PE_AUMENTO= new Array(PE.length); 
for (var i = 0; i < PE.length; i++) {
	PE_AUMENTO[i] = i+1;
}
// Habilidad: aumenta los Puntos de Mejora un 50%
const HAB=1.5;

// Carencia: disminuye los Puntos de Mejora en un 50%
const CAR=0.5;
/**
 * Potencial: Indica la capacidad de mejora de un jugador segun un apartado del juego.
 * 1.- Fisico.
 * 2.- Ataque.
 * 3.- Defensa.
 */
var potencial=[1,1,1];

// Stats: Estadisticas del jugador. Mejoran segun vayan aumentando el numero de entrenamientos
var stats=new Array(11);
for (var i = 0; i < stats.length; i++) {
	stats[i]=0;
}
/**
 * habilidades y carencias: indica si el jugador posee una habilidad o carencia en un stat especifico.
 * Un 1 indica que posee una habilidad mientras que -1 indica carencia. El cero indica que no posee ninguna
 */
var hab_car=new Array(11);
for (var i = 0; i < hab_car.length; i++) {
	hab_car[i]="no";
}
// Entrenos: cuenta la cantidad de entrenamientos asignados a la stat de un jugador
var entrenos=new Array(11);
for (var i = 0; i < entrenos.length; i++) {
	entrenos[i]=0;
}
var entrenosTotales=0;
// Puntos: Cantidad de Puntos de Entrenamiento que posee la stat de un jugador
var puntos=new Array(11);
for (var i = 0; i < puntos.length; i++) {
	puntos[i]=0;
}

// Variables empleadas para calcular la altura del jugador
// Mejora de altura (cm). Relacionado el potencial fisico
const ALTURA1=[0,1];
const ALTURA2=[1,2];
const ALTURA3=[1,3];
const ALTURA4=[2,4];
const ALTURA5=[3,5];
// Edad: edad del jugador
var edad=14;

// Altura Inicial: Altura del jugador
var alturaIni=165;

// Altura Minima: Altura minima que tendra el jugador cuando llegue a los 18 años
var alturaMinima=0;

// Altura Maxima: Altura maxima que tendra el jugador cuando llegue a los 18 años
var alturaMaxima=0;

// contH: Contador de habilidades
var contH=0;

// contC: Contador de Carencias
var contC=0;
// /VARIABLES