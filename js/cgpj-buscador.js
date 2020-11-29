function borrarCapa(capa, elemento) {
	capaLimpiar=document.getElementById(capa);

	elem_capaLimpiar=capaLimpiar.getElementsByTagName(elemento);
	longitud=elem_capaLimpiar.length;

	for (indice=longitud-1;indice >= 0;capaLimpiar.removeChild(elem_capaLimpiar[indice]),indice--);
}

function cargaSeleccion(nivel, alias, id) { 
	eliminaCapa('catSubSelect');
		
	var hijos = buscaHijos(nivel, id, '');
	
	asignaSeleccion(nivel, alias, id);
	muestraCabecera('catSelect', document.cgpjForm.i18n_cat_tit_subcategoria.value + ':');
	muestraCategorias('catSelect', hijos);
	
	if (nivel == 1) {
		var padres = buscaPadres(id);
		muestraCabecera('catPadres', document.cgpjForm.i18n_cat_tit_otras.value + ':');
		muestraCategorias('catPadres', padres);
	} else if (nivel >= 2) {
		var categorias = document.cgpjForm.categoria.value.split(";");
		var categoria = categorias[0];
		var seleccionado = categorias[1];

		categoria = categoria.split(",");
		seleccionado = seleccionado.split(",");
		
		hijos = buscaHijos(categoria[0], categoria[2], seleccionado[2]);
		
		muestraCabecera('catSubSelect', document.cgpjForm.i18n_cat_tit_otras2.value + " '" + categoria[1] + "':");
		muestraCategorias('catSubSelect', hijos);
	}
}

function generaElementoLi(categoria, marca, negrita, seleccionado, separador) {
		var elementoLi = document.createElement('li');
		var elementoA = document.createElement('a');
		var elementoTexto = document.createTextNode(categoria[1]);
		var elemSeparador;

		elementoA.setAttribute('href','javascript:cargaSeleccion(' + categoria[0] + ',"' + categoria[1] + '","' + categoria[2] + '")');

		if (negrita) {
			if (navigator.appName == "Microsoft Internet Explorer") {
				elementoA.style.setAttribute('cssText', 'font-weight:bold');
			} else {
				elementoA.setAttribute('style', 'font-weight:bold');
			}
		}
		
		if (seleccionado) {
			elementoLi.setAttribute('className','filtroActivo');
			elementoLi.setAttribute('class','filtroActivo');
		}

		elementoA.appendChild(elementoTexto);
		elementoLi.appendChild(elementoA);
		
		if (separador) {
			if (marca == ',') {
				elemSeparador = document.createTextNode(', ');
			} else if (marca == '|') {
				elemSeparador = document.createTextNode(' | ');
			}
			
			elementoLi.appendChild(elemSeparador);
		}
		
		return elementoLi;
}

function muestraCategorias(capa, datos) {
	var padre = document.getElementById(capa);
	var separador = false;
	
	if (datos != '') {
		var categorias = datos.split(";");
		
		for (indice=0; indice < categorias.length; indice++) {
			categoria = categorias[indice].split(",");
			separador = false;
			
			if (categorias.length-1 != indice) {
				separador = true;
			}
			
			var elementoLi = generaElementoLi(categoria, ',', false, false, separador);
			
			padre.appendChild(elementoLi);
		}

		var elementoBr = document.createElement('br');
		padre.appendChild(elementoBr);
	}
}

function muestraCabecera(capa, cabecera) {
	eliminaCapa(capa);
	
	var elementoH = document.createElement('h4');
	var elementoTexto = document.createTextNode(cabecera);
	var padre = document.getElementById(capa);
			
	elementoH.appendChild(elementoTexto);
	padre.appendChild(elementoH);
}

function buscaHijos(nivel, id, seleccionado) {
	var categorias = '';
	
	if (nivel < listaCategorias.length) { 
		var datos = listaCategorias[nivel];
		var elementos = datos.split(";"); 
		nivel++; //Incrementamos el nivel para los nuevos hipervinculos que vamos a mostrar
		
		for (indice=0;indice < elementos.length; indice++) { 
			var categoria = elementos[indice].split(",");
			
			if (categoria[3] == id && categoria[2] != seleccionado) {
				categorias = parseCategoria(categorias, nivel, categoria);
			}
		}
	}
	
	return categorias;
}

function buscaPadres(seleccionado) {
	var datos = listaCategorias[0];
	var elementos = datos.split(";");
	var categorias = '';
	
	for (indice=0;indice < elementos.length; indice++) {
		var categoria = elementos[indice].split(",");
		
		if (seleccionado != 'undefined') {
			if (categoria[2] != seleccionado) {
				categorias = parseCategoria(categorias, 1, categoria);
			}
		} else {
			categorias = parseCategoria(categorias, 1, categoria);
		}
	}
	
	return categorias;
}

function actualizaSeleccion(nivel, alias, id) {
	var existe = false;
	var categorias = document.cgpjForm.categoria.value.split(";");
	var auxiliar = new Array();
	
	for (var indice=0;indice < categorias.length && !existe; indice++) {
		if (categorias[indice].indexOf(id) != -1) {
			existe = true;
		}
	}
	
	if (!existe) {
		if (nivel <= categorias.length) {
			existe = true;
		}
	}
	
	if (document.cgpjForm.categoria.value == '') {
		document.cgpjForm.categoria.value = nivel + ',' + alias + ',' + id;
	} else {
		if (existe) {
			for (var indice=0;indice < categorias.length && indice < (nivel-1); indice++) {
				auxiliar[indice]=categorias[indice];
			}
			
			auxiliar[indice] = nivel + ',' + alias + ',' + id;
		} else {
			document.cgpjForm.categoria.value += ';' + nivel + ',' + alias + ',' + id;
		}
	}
	
	if (auxiliar.length > 0) {
		document.cgpjForm.categoria.value = '';
		
		for (var indice=0;indice < auxiliar.length; indice++) {
			if (document.cgpjForm.categoria.value != '') {
				document.cgpjForm.categoria.value += ';' + auxiliar[indice];
			} else {
				document.cgpjForm.categoria.value = auxiliar[indice];
			}
		}
	}
}

function asignaSeleccion(nivel, alias, id) {
	eliminaCapa('temaSelect');
	actualizaSeleccion(nivel, alias, id);
	muestraCabecera('temaSelect', document.cgpjForm.i18n_cat_tit_sel.value + ':');

	var padre=document.getElementById('temaSelect');
	var categorias = document.cgpjForm.categoria.value.split(";");
	var seleccionado = false;
	var separador = false;
	
	for (indice=0;indice < categorias.length; indice++) {
		categoria = categorias[indice].split(",");
		seleccionado = false;
		separador = false;
		
		if (categorias.length-1 != indice) {
			separador = true;
		} else {
			seleccionado = true;
		}
		
		var elementoLi = generaElementoLi(categoria, '|', seleccionado, seleccionado, separador);
		
		padre.appendChild(elementoLi);
	} 

	var elementoBr = document.createElement('br');
	padre.appendChild(elementoBr);
}

function parseCategoria(cadena, nivel, categoria) {
	if (cadena != '') {
		cadena += ';' + nivel + ',' + categoria[1] + ',' + categoria[2];
	} else {
		cadena = nivel + ',' + categoria[1] + ',' + categoria[2];
	}
	
	return cadena;
}

function inicio() {
	if (document.cgpjForm.categoria.value == '') {
		var padres = buscaPadres();
		eliminaCapa('temaSelect');
		muestraCategorias('temaSelect',padres);
	} else {
		categorias = document.cgpjForm.categoria.value.split(";");
		
		for(var indice=0;indice < categorias.length; indice++) {
			var categoria = categorias[indice].split(",");
			cargaSeleccion(categoria[0], categoria[1], categoria[2]);
			generaFiltro(categoria);
		}
	}
}

function inicioG() {
        if (document.cgpjForm.categoria.value != '') {
                categorias = document.cgpjForm.categoria.value.split(";");
                for(var indice=0;indice < categorias.length; indice++) {
                        var categoria = categorias[indice].split(",");
                        generaFiltro(categoria);
                }
        }
}

function generaFiltro(categoria) {
	var padre = document.getElementById("filtradoEtiquetas");
	
	if (padre != null) {
		var elementoLi = document.createElement('li');
		var elementoA = document.createElement('a');
		var elementoImg = document.createElement('img');
		var elementoTexto = document.createTextNode(' ' + categoria[1]);
		
		elementoA.setAttribute('href','javascript:eliminarFiltro("' + categoria[2] + '")');

		elementoImg.setAttribute('src','/recursos_web/img/iconos/aspa_eliminar.gif');
		elementoImg.setAttribute('alt','Eliminar filtro');
		
		elementoA.appendChild(elementoImg);
		elementoLi.appendChild(elementoA);
		elementoLi.appendChild(elementoTexto);
		
		padre.appendChild(elementoLi);
	}
}

function quitarFiltro(campo) {
	if (campo == 'fecha') {
		document.cgpjForm.fechaIni.value='';
		document.cgpjForm.fechaFin.value='';
		document.cgpjForm.periodo.value='-1';
		controlFecha();
	} else if (campo == 'categoria') {
		document.cgpjForm.categoria.value='';
		eliminaCapa('temaSelect');
		eliminaCapa('catSelect');
		eliminaCapa('catSubSelect');
		eliminaCapa('catPadres');

		inicio();
	} else if (campo == 'contenido') {
		var contenido = document.cgpjForm.contenido;
		for (i=0;i<contenido.length;i++) {
			contenido[i].checked = false;
		}
	}
}

function eliminaCapa(capa) {
	borrarCapa(capa,'h4');
	borrarCapa(capa,'br');
	borrarCapa(capa,'li');
}

function eliminarFiltro(id) {
	var categorias = document.cgpjForm.categoria.value.split(";");
	var auxiliar = new Array();
	
	for (var indice=0;indice < categorias.length; indice++) {
		if (categorias[indice].indexOf(id) != -1) {
			indice = categorias.length;
		} else {
			auxiliar[indice]=categorias[indice];
		}
	}
	
	document.cgpjForm.categoria.value = '';
	
	for (var indice=0;indice < auxiliar.length; indice++) {
		if (document.cgpjForm.categoria.value == '') {
			document.cgpjForm.categoria.value = auxiliar[indice];
		} else {
			document.cgpjForm.categoria.value += ';' + auxiliar[indice];
		}
	}
	
	document.cgpjForm.submit();
}

function redireccion(url) {
	document.location.href=url;
}

function muestraAyuda() {
		document.getElementById('busqueda').style.display='none';
		document.getElementById('informacion').style.display='block';
}

function controlFecha() {
	if (document.cgpjForm.fechaIni.value != '' || document.cgpjForm.fechaFin.value != '') {
		document.cgpjForm.periodo.disabled=true;
		document.cgpjForm.fechaIni.disabled=false;
		document.cgpjForm.fechaFin.disabled=false;
	} else if (document.cgpjForm.periodo.value != -1) {
		document.cgpjForm.periodo.disabled=false;
		document.cgpjForm.fechaIni.disabled=true;
		document.cgpjForm.fechaFin.disabled=true;
		document.getElementById('fechaIni').onclick=function(){ return false;};
		document.getElementById('fechaFin').onclick=function(){ return false;};
	} else {
		document.getElementById('fechaIni').onclick=function(){ return true;};
		document.getElementById('fechaFin').onclick=function(){ return true;};
		document.cgpjForm.periodo.disabled=false;
		document.cgpjForm.fechaIni.disabled=false;
		document.cgpjForm.fechaFin.disabled=false;
	}
}

function muestraBusqueda(capa, datos) {
	var padre = document.getElementById(capa);
	
	if (datos != '') {
		var categorias = datos.split(";");
		
		for (indice=0; indice < categorias.length; indice++) {
			categoria = categorias[indice].split(",");
			
			var elementoLi = document.createElement('li');
			var elementoA = document.createElement('a');
			var elementoTexto = document.createTextNode(categoria[1]);
			var elementoBr = document.createElement('br');
			var ref = "javascript:actualizaBusqueda(" + categoria[0] + ",'" + categoria[1] + "','" + categoria[2] + "','" + categoria[3] + "')";
			ref += ", cargaSeleccion(" + categoria[0] + ",'" + categoria[1] + "','" + categoria[2] + "');";
			
			elementoA.setAttribute('href',ref);
			elementoA.appendChild(elementoTexto);
			elementoLi.appendChild(elementoA);
			
			if (indice > 0) {
				padre.appendChild(elementoBr);
			}
						
			padre.appendChild(elementoLi);
		}
	}
	
	var elementoDiv = document.createElement('div');
	var elementoLi = document.createElement('li');
	elementoDiv.setAttribute('className','paginacionBus');
	elementoDiv.setAttribute('class','paginacionBus');
	elementoLi.appendChild(elementoDiv);
	padre.appendChild(elementoLi);
}

function actualizaBusqueda(nivel, alias, id, padre) {
	var cadena = '';
	
	if (nivel > 1) {
		do {
			nivel--;
			
			var datos = listaCategorias[nivel];
			var categorias = datos.split(";");
						
			for (var indice=0;indice<categorias.length;indice++) {
				if (categorias[indice].indexOf(padre) != -1) {
					var categoria = categorias[indice].split(",");
					padre=categoria[3];
					cadena = categorias[indice] + ";" + cadena;
					indice = categorias.length;
				}
			}
		} while (nivel > 0);
		
		document.cgpjForm.categoria.value = cadena;
	}
}
