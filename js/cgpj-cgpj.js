function actualizaNavegacion(objeto) {
	var elementos = document.getElementsByName(objeto.name);
	
	for (var indice=0;indice < elementos.length;indice++) {
		elementos[indice].value=objeto.value;
	}
}

function actualizaNavegacion2(objeto, capa, id) {
	var elemento = getElemento(capa, 'input', 'noValidoNull', id);
	
	if (elemento != null) {
		elemento.value=objeto.value;
	}
}

function getElemento(nombreCapa, tipo, nombre, id) {
	var capa = document.getElementById(nombreCapa);
	var elementos = capa.getElementsByTagName(tipo);
	var elemento = null;

	for(var indice=0;indice<elementos.length;indice++) {
		elemento = elementos[indice];
		if (elemento.name == nombre || elemento.id == id) {
			indice = elementos.length;
		} else if (indice+1 == elementos.length) {
			elemento = null;
		}
	}

	return elemento;
}

function conexion() {
	var request=null;
	try {
		request=new ActiveXObject("Microsoft.XMLHTTP");
	} catch(e) {
		try {
			request=new ActiveXObject("Msxml2.XMLHTTP");            
		} catch(oc) {
			request=false;
		}
	}
	
	if(!request&&typeof(XMLHttpRequest)!="undefined") {
		request=new XMLHttpRequest();
	}
  
  return request;
}
				
function sendAjax(accion,tipoLlamada) {
	var request = conexion();

	request.open("POST","/cgpjUtilities/ajax.action",tipoLlamada);
	request.setRequestHeader("Cache-Control","no-cache"); 
	request.setRequestHeader("Cache-Control","must-revalidate"); 
	request.setRequestHeader("Cache-Control","no-store"); 
	request.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
	request.send(accion);
	
	var xmlResponse=request.responseXML;
	
	return xmlResponse;
}

function setVisitas(id) {
	var accion="ajax=AjaxAnalyticsMgr&accion=setVisitas&idVisitas=" + id;
	sendAjax(accion,"true");
}
function setVisitasBBDD(userCode,address,jsession,area,ip) {
	var accion="ajax=AjaxAnalyticsMgr&accion=setVisitasBBDD&userCode=" + userCode+"&address=" +address+"&jsession=" +jsession+"&area=" + area+"&ip=" + ip;
	sendAjax(accion,"true");
} 
function setVisitasUsuario(id,userName,nombreBBDD,url) {
	var accion="ajax=AjaxAnalyticsMgr&accion=setVisitasUsuario&idVisitas=" + id+"&userName=" + userName+"&nombreBBDD=" +nombreBBDD+"&url=" +url;
	sendAjax(accion,"true");
} 
function cargaBuscador(id, categoria) {
	var elemento = document.getElementById(id);
	elemento.value='null,null,' + categoria;
	document.preBuscadorForm.submit();
}