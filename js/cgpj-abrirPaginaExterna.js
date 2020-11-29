		var br = '<br />';
		
		function abreVentana(url)
		{
			window.open(url);
			
		};
		
		
		function abrirVentanaOnClick (e,url)
		{
			var key = 0;
			try {
				var key = e.charCode ? e.charCode : e.keyCode ? e.keyCode : 13;
			}catch(excep){
				//alert(excep);
				key=13;
			}	
			if(key == 13 ){
				//Identificamos si es internet explorer 6
			    var isMSIE6 = /*@cc_on!@*/false;			    			    
			    if (isMSIE6){
			      //Buscamos los % que no correspondan a carácteres codificados
			      match = url.match(/%[0-9a-fA-F][^0-9a-fA-F]|%[^0-9a-fA-F]/g);
			      if (match){			       
			       for(i=0;i<match.length;i++){	
			        replace = match[i].replace('%','%25');		        
			      	url=url.replace(match[i],replace);			      	
			       }
			      }			      			      			      			      			     
			    }
				window.open(url);
				return false;
			}
			return true;
		}
		
		function abrirEnlace(event){
			var evt=window.event || event;		
			/*checkear precondiciones*/
			var popClass="popuplink";
			/*coger el target original del evento*/
			var target=(evt.originalTarget) ? evt.originalTarget : evt.srcElement;
			if (!target) return;
			
			if (target.nodeName == 'IMG') {
				var padre = target.parentNode;
				if ((padre.className.indexOf(popClass)!=-1) && (padre.nodeName == 'A')) {
					window.open(padre.href);
					return false;
				} else {
					return;
				}				
			} else {
				/*si el evento se origina en un popup class*/
				var className=target.className;
				if (className=="") return;
				if (className.indexOf(popClass)==-1) return;		
				/*hacer tareas*/
				window.open(target.href);
				return false;
			}
		}

		function checkLinksPopup (){
			document.onclick = abrirEnlace;
			if (document.captureEvents) document.captureEvents(Event.CLICK);
		}
		
		function isPopup( objLink ){
			try{
				var linkhref = objLink.href;
				var dominio = document.domain;
				if (objLink.className.indexOf("popup")!=-1) return true;
								
				return false;
			}catch (ex){
				return false;
			}	
		}
		
		function checkPrint (){
			try{
				var lang = document.getElementsByTagName('html')[0].attributes.getNamedItem("xml:lang").value;
				
				var literal_print = " Imprimir";
				switch(lang){
					case 'en': literal_print = " Print"; break;
					case 'ast': literal_print = " Imprimir"; break; 
				}
				
				var btn_print_1 = document.getElementById('parrafoImprimir');
				if (btn_print_1) btn_print_1.innerHTML = '<a onclick="self.print();return false" class="imprimir" href="#"> '+literal_print+'</a>';
				
				var btn_print_2 = document.getElementById('parrafoImprimirInferior');
				if (btn_print_2) btn_print_2.innerHTML = '<a onclick="self.print();return false" class="imprimir" href="#"> '+literal_print+'</a>';
			}catch (ex){
			}	
		}
		
		function eprint(){
			var key = 0;
			try {
				var key = e.charCode ? e.charCode : e.keyCode ? e.keyCode : 0;
			}catch(excep){
				//
			}	
			if(key != 9 ){
				self.print();
			}
		}
		
		function addLoadEvent(func) {
		  var oldonload = window.onload;
		  if (typeof window.onload != 'function') {
		    window.onload = func;
		  } else {
		    window.onload = function() {
		      if (oldonload) {
		        oldonload();
		      }
		      func();
		    }
		  }
		}
		
		addLoadEvent(checkLinksPopup);
		addLoadEvent(checkPrint);
