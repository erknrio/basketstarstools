/**
 * changeStat: cambia los valores del stat, entrenos y puntos en la web
 * @param  {[int]} indiceP [indica el tipo de potencial a emplear (fisico, defensivo u ofensivo)]
 * @param  {[int]} posIni [indica la posicion en la que se encontraba la stat antes de aumentar o disminuir los puntos de entrenamiento]
 * @param  {[int]} mode    [indica el modo de calculo, 0 aumeta los stats y 1 los disminuye]
  @return {[boolean]} [devuelve false si encuentra algun error]
 */
function changeStat(indice, posIni, mode) {
	var objStats = document.getElementById("txt_"+indice), objEntrenos = document.getElementById("entrenos_"+indice), objPuntos = document.getElementById("puntos_"+indice), posFinal = 0, suma = 0;
	while(puntos[indice] >= PE[posFinal])
			posFinal++;
	if (mode === 0) {
		if (puntos[indice] < 7493 && entrenos[indice] < 144)
			entrenos[indice]++;
		stats[indice] += parseInt(posFinal - posIni);
	} else {
		if ((entrenos[indice]-1) < 0)
			entrenos[indice] = 0;
		else
			entrenos[indice]--;
		stats[indice] -= parseInt(posIni - posFinal);

	}
	objPuntos.value = puntos[indice];
	objEntrenos.value = entrenos[indice];
	objStats.value = stats[indice];
    
	for (var i = 0; i < entrenos.length; i++) {
		suma += entrenos[i];
	}
    if (suma > 144)
        entrenosTotales = 144;
    else
        entrenosTotales = suma;
	document.getElementById("totEntrenos").innerHTML = entrenosTotales;
	document.getElementById("totTemporadas").innerHTML = parseInt(suma/36, 10);
}
/**
 * setCalc: funcion encargada de cambiar los puntos de entrenamiento
 * @param  {[int]} indice  [indica el tipo de stat del jugador (vel, sal, res, etc.)]
 * @param {[int]} posIni [posicion en la que estaba el jugador]
 * @param {[float]} power  [aumento de mejora de los puntos de entrenamiento en base a las habilidades y carencias]
 * @param {[int]} pm     [indica la posicion en la que se encontraba el jugador en los Puntos de Entrenamiento antes de realizar el entrenamiento actual]
 * @param  {[int]} mode    [indica el modo de calculo, 0 aumeta los stats y 1 los disminuye]
 */
function setCalc(indice, posIni, power, pm, mode) {
    var temp = 0;
	if (mode === 0) {
		temp = puntos[indice]+parseInt(PM[pm]*power, 10);
		if (temp > 7493)
			puntos[indice] = 7493;
		else
			puntos[indice] += parseInt(PM[pm]*power, 10);
		changeStat(indice, posIni, mode);
	} else {
		temp = puntos[indice] - parseInt(PM[pm]*power, 10);
		if (temp < 0)
			puntos[indice] = 0;
		else
			puntos[indice] -= parseInt(PM[pm]*power, 10);
		changeStat(indice, posIni, mode);
	}
}
/**
 * calc: funcion encargada de procesar los calculos
 * @param  {[int]} indice  [indica el tipo de stat del jugador (vel, sal, res, etc.)]
 * @param  {[int]} indiceP [indica el tipo de potencial a emplear (fisico, defensivo u ofensivo)]
 * @param  {[int]} mode    [indica el modo de calculo, 0 aumeta los stats y 1 los disminuye]
 */
function calc(indice, indiceP, mode) {
	var posIni = 0, power = 0.0;
	if (hab_car[indice] === "h")
		power = 1.5;
	else if (hab_car[indice] === "c")
		power = 0.5
	else
		power = 1;

	while(puntos[indice] >= PE[posIni])
		posIni++;

	switch(potencial[indiceP]) {
		case 1:
			setCalc(indice, posIni, power, 0, mode);
		break;
		case 2:
			setCalc(indice, posIni, power, 1, mode);
		break;
		case 3:
			setCalc(indice, posIni, power, 2, mode);
		break;
		case 4:
			setCalc(indice, posIni, power, 3, mode);
		break;
		case 5:
			setCalc(indice, posIni, power, 4, mode);
		break;
	}
}
/**
 * plusStats: aumentalos stats del jugador
 * @param  {[event]} evento [hace referencia al objeto event que disparo el evento change]
 */
function plusStats(e) {
	var obj = e.target, indice = parseInt(obj.getAttribute("id").split("_")[1], 10);
	/* Obtenemos el indice para el potencial.
	* Este cambia segun el tipo de stat que se aumente
	* 0: Fisico
	* 1: Ataque
	* 2: Defensa
	*/
	if (indice >= 0 && indice <= 2)
		indiceP = 0;
	else if (indice >= 8 && indice <= 10)
		indiceP = 2;
	else
		indiceP = 1;
	switch(indice) {
		// vel
		case 0:
		  calc(indice, indiceP, 0);
		break;
		// sal
		case 1:
		  calc(indice, indiceP, 0);
		break;
		// res
		case 2:
		  calc(indice, indiceP, 0);
		break;
		// pas
		case 3:
		  calc(indice, indiceP, 0);
		break;
		// t1
		case 4:
		  calc(indice, indiceP, 0);
		break;
		// t2
		case 5:
		  calc(indice, indiceP, 0);
		break;
		// t3
		case 6:
		  calc(indice, indiceP, 0);
		break;
		// mat
		case 7:
		  calc(indice, indiceP, 0);
		break;
		// rob
		case 8:
		  calc(indice, indiceP, 0);
		break;
		// reb
		case 9:
		  calc(indice, indiceP, 0);
		break;
		// tap
		case 10:
		  calc(indice, indiceP, 0);
		break;
	}
}
/**
 * minusStats: reduce los stats del jugador]
 * @param  {[event]} evento [hace referencia al objeto event que disparo el evento change]
 */
function minusStats(e) {
	var obj = e.target, indice = parseInt(obj.getAttribute("id").split("_")[1], 10);
	/* Obtenemos el indice para el potencial.
	* Este cambia segun el tipo de stat que se aumente
	* 0: Fisico
	* 1: Ataque
	* 2: Defensa
	*/
	if (indice >= 0 && indice <= 2)
		indiceP = 0;
	else if (indice >= 8 && indice <= 10)
		indiceP = 2;
	else
		indiceP = 1;
	switch(indice) {
		// vel
		case 0:
		  calc(indice, indiceP, 1);
		break;
		// sal
		case 1:
		  calc(indice, indiceP, 1);
		break;
		// res
		case 2:
		  calc(indice, indiceP, 1);
		break;
		// pas
		case 3:
		  calc(indice, indiceP, 1);
		break;
		// t1
		case 4:
		  calc(indice, indiceP, 1);
		break;
		// t2
		case 5:
		  calc(indice, indiceP, 1);
		break;
		// t3
		case 6:
		  calc(indice, indiceP, 1);
		break;
		// mat
		case 7:
		  calc(indice, indiceP, 1);
		break;
		// rob
		case 8:
		  calc(indice, indiceP, 1);
		break;
		// reb
		case 9:
		  calc(indice, indiceP, 1);
		break;
		// tap
		case 10:
		  calc(indice, indiceP, 1);
		break;
	}
}
// Ajustamos la altura segun parametros obtenidos del formulario
function setAltura(edad, alturaIni) {
	var altMin = document.getElementById("txtAlturaMin"), altMax = document.getElementById("txtAlturaMax"), alturaMinima = 0, alturaMaxima = 0;

	switch(potencial[0]) {
		case 1:
			alturaMinima = (18 - edad)*ALTURA1[0];
			alturaMaxima = (18 - edad)*ALTURA1[1];
		break;
		case 2:
			alturaMinima = (18 - edad)*ALTURA2[0];
			alturaMaxima = (18 - edad)*ALTURA2[1];
		break;
		case 3:
			alturaMinima = (18 - edad)*ALTURA3[0];
			alturaMaxima = (18 - edad)*ALTURA3[1];
		break;
		case 4:
			alturaMinima = (18 - edad)*ALTURA4[0];
			alturaMaxima = (18 - edad)*ALTURA4[1];
		break;
		case 5:
			alturaMinima = (18 - edad)*ALTURA5[0];
			alturaMaxima = (18 - edad)*ALTURA5[1];
		break;
	}
	altMin.value = alturaIni + alturaMinima;
	altMax.value = alturaIni + alturaMaxima;
}
// getAltura: Obtenemos la edad y altura del jugador
function getAltura() {
	var objEdad = document.getElementById("txtEdad"), objAlturaIni = document.getElementById("txtAltura"), error = '';
	edad = parseInt(objEdad.value, 10);
	alturaIni = parseInt(objAlturaIni.value, 10);

	// Comprobamos si la edad y altura son numeros
	if (isNaN(edad)) {
		error = 'La edad debe ser un número';
		setPopover(objEdad, error, "Error: edad letra", 0, 'left', false);
		objEdad.value = "";
		return false;
	}
	else if (isNaN(alturaIni)) {
		error = 'La altura debe ser un número';
		setPopover(objAlturaIni, error, "Error: altura letra", 0, "left", false);
		objAlturaIni.value = "";
		return false;
	}
	else {
		// Si son numeros comprobamos sus valores
		if (edad < 13 || edad > 18) {
			error = 'La edad debe estar comprendida entre:<br/>13 y 18 años';
			setPopover(objEdad, error, "Límite edad erróneo", 0, 'left');
			objEdad.value = "";
			return false;
		}
		if (alturaIni < 165 || alturaIni > 235) {
			error = 'La altura inicial debe estar comprendida entre:<br/>165 y 235 centímetros';
			setPopover(objAlturaIni, error, "Límite altura erróneo", 0, 'left');
			objAlturaIni.value = "";
			return false;
		}
		setAltura(edad, alturaIni);
		switch(potencial[0]) {
			case 1:
				setAltura(edad, alturaIni);
			break;
			case 2:
				setAltura(edad, alturaIni);
			break;
			case 3:
				setAltura(edad, alturaIni);
			break;
			case 4:
				setAltura(edad, alturaIni);
			break;
			case 5:
				setAltura(edad, alturaIni);
			break;
		}
	}
}
/**
 * [getPotencial: Obtenemos el tipo de potencial.
 * 0: Fisico
 * 1: Ataque
 * 2: Defensa]
 * @param  {[type]} e [event]
 */
function getPotencial(e) {
	var obj = e.target;
	// Cambiamos el potencial correspondiente del array 'potencial'
	potencial[parseInt(obj.getAttribute("id").split("_")[1], 10)]=parseInt(e.target.value, 10);
}
/**
 * [changehab_car: Cambia el valor de habilidad, carencia o no en el array 'hab_car' segun convenga]
 * @param  {[html object]} objeto [hace referencia al select que activo el evento]
 * @param  {[event]} evento [hace referencia al objeto event que disparo el evento change]
 * @param  {[int]} mode   [permite saber si se ha agregado una habilidad/carencia y esta se debe reflejar en el array.
 * Y tambien permite comprobar si hemos cambiado una h/c a 'no' para quitar dicho valor del array]
 */
function changehab_car(objeto, evento, mode) {
	if (mode === 1) {
		hab_car[parseInt(objeto.getAttribute("id").split("_")[1], 10)] = evento.target.value;
	} else {
		var temp = hab_car[parseInt(objeto.getAttribute("id").split("_")[1], 10)];
		if (temp === "h") {
			contH--;
			hab_car[parseInt(objeto.getAttribute("id").split("_")[1], 10)] = evento.target.value;
		} else {
			contC--;
			hab_car[parseInt(objeto.getAttribute("id").split("_")[1], 10)] = evento.target.value;
		}
	}
}
/**
 * changeHC: comprueba si el cambio de valor de habilidad o carencia de una stat es correcto.
 * Por defecto no pueden haber mas de dos habilidades o carencias por jugador.
 * Usa la funcion secundaria changehab_car para cambiar el valor de h/c en el array 'hab_car'
 * @param  {[event]} e [Evento, empleado para obtener la referencia al select que lo disparo]
 */
function changeHC(e) {
	// Comprueba si el evento es cancelable
	//alert(e.cancelable);
	var obj = e.target, error = '';
	switch(e.target.value) {
		case "h":
		  if (contH < 2) {
		  	changehab_car(obj, e, 1);
		  	contH++;
		  } else {
		  	error = 'No puede seleccionar más habilidades';
			setPopover(obj, error, "Error: límite habilidades");
		  	obj.selectedIndex = "0";
		  }
		  break;
		case "c":
		  if (contC < 2) {
		  	changehab_car(obj, e, 1);
		  	contC++;
		  } else {
		  	error = 'No puede seleccionar más carencias';
			setPopover(obj, error, "Error: límite carencias");
		  	obj.selectedIndex = "0";
		  }
		  break;
		  default:
		      changehab_car(obj, e, 2);
		  break;
	}
}

/**
 * [getStats: obtenemos las stats del jugador]
 * @param  {[event]} e [evento]
 */
function getStats(e) {
	var obj = e.target, valor = obj.value, error = '';
	if (isNaN(valor)) {
		error = 'El valor del stat que acaba de introducir no es correcto.<br/>Debe ser numérico no una letra';
		setPopover(obj, error, "Error al introducir el valor");
		obj.value = "";
	} else if (valor < 1 || valor > 99) {
		error = 'El valor del stat que acaba de introducir no es correcto.<br/>Debe contener un número entre: 1 y 99';
		setPopover(obj, error, "Error número 1-99", 5000);
		obj.value = "";
	} else {
		stats[parseInt(obj.getAttribute("id").split("_")[1], 10)]=parseInt(obj.value, 10);
	}
}

/**
 * setPopover: funciona que muestra un error en base a los parametros establecidos
 * @param {[object html]} obj   [elemento disparador del evento original]
 * @param {[string]} cont  [contenido del error]
 * @param {[string]} tit   [titulo del popover, error por defecto]
 * @param {[int]} time  [tiempo en el que desaparecera el popover, 3000 milisegundos por defecto]
 * @param {[string]} place [posicion en la que se mostrara el popover, bottom por defecto]
 * @param {[boolean]} control  [especifica si acepta contenido html en el popover o no]
 */
function setPopover(obj, cont, tit, time, place, control){
	// Asignamos valores por defecto a la funcion
	if (typeof cont === 'undefined' || cont === '') {
		cont = 'Error Desconocido';
	}

	if (typeof tit === 'undefined' || tit === '') {
		tit = 'Error';
	}

	if (typeof time === 'undefined' || time === 0) {
		time = 3000;
	}

	if (typeof place === 'undefined' || place === '') {
		place = 'right';
	}

	control = typeof control !== 'undefined' ? control : true;
	// Obtenemos atributo id
	var element = $("#"+obj.getAttribute("id"));
	// Preparamos el popover para el objeto html
	element.popover({
		html: control,
		placement: place,
		trigger: 'manual',
		title: tit,
		content: cont
	});
	// Mostramos popover
	element.popover('show');
	// Asignamos el tiempo que tardara en ocultarse el popover
	setTimeout(function(){
		element.popover('hide');
	}, time);
    // Deshabilitamos los popovers en esta casilla
    element.popover('disable');
}

function inicializar() {
	// EVENTOS
	// Obtenemos todas las stats
	var inputs = document.querySelectorAll("input[type=text]");
	for (var i = 0; i < inputs.length; i++) {
		if(inputs[i].getAttribute("id").indexOf("txt_") === 0){
			inputs[i].addEventListener("change", getStats, false);
		}
	}
	// Obtenemos todos los select de habilidad/carencia
	// (permite usar el selector de clase css '.' y el de id '#', como jquery)
	var selects = document.getElementsByTagName("select");
	for (var i = 0; i < selects.length; i++) {
		/* Obetenemos el atributo id y buscamos dentro de este la cadena 'hc_'.
		* Al ser la primera parte del valor del atributo id deberia devolver la posicion de la primera ocurrencia, osea, un cero.
		*/
		if(selects[i].getAttribute("id").indexOf("hc_") === 0){
			selects[i].addEventListener("change", changeHC, false);
		}
	}

	// Obtenemos el potencial del jugador
	selects = document.querySelectorAll("select.potencial-select");
	for (var i = 0; i < selects.length; i++) {
		/* Obetenemos el atributo id y buscamos dentro de este la cadena 'hc_'.
		* Al ser la primera parte del valor del atributo id deberia devolver la posicion de la primera ocurrencia, osea, un cero.
		*/
		if(selects[i].getAttribute("id").indexOf("potencial_") === 0){
			selects[i].addEventListener("change", getPotencial, false);
		}
	}
	// Obtenemos los valores para calcular la altura
	document.getElementById("btnAltura").addEventListener("click", getAltura, false);

	inputs = document.querySelectorAll("input[type=button]");
	for (var i = 0; i < inputs.length; i++) {
		if (inputs[i].getAttribute("id").indexOf("mas_") === 0)
			inputs[i].addEventListener("click", plusStats, false);
		else if(inputs[i].getAttribute("id").indexOf("menos_") === 0)
			inputs[i].addEventListener("click", minusStats, false);
	}
// /EVENTOS
}

// Reseteamos todo el formulario
function reset(){
	document.getElementById("formAltura").reset();
}

window.addEventListener("load",inicializar,false);