/*********************************************************************************************************
	Funcion que carga un campo con un valor seleccionado mediante un radiobutton
**********************************************************************************************************/	
	function loadValue(source, destination){

		var sources = source.split('-');
		var value = ""; 
			for (index = 0; index < sources.length; index++){
			value = value + $('#' + sources[index]).val();
			if (index >= parseInt('0') ){
				value = value + ' ' ;
			}
		}
		$('#' + destination).val(value);
	}

/*********************************************************************************************************
	Funcion que carga un campo con un valor seleccionado mediante un radiobutton con varias opciones
**********************************************************************************************************/	
	function getValue(radioName, source, destination){
		var sources = source.split('-');
		var value = "";
		var option = $("input[name=" + radioName + "]:checked").val(); 
		if (option <= sources.length){
			
			loadValue(sources[option - 1], destination);
		}
	}


/*********************************************************************************************************
	Funcion que habilita/desahibilita inputs en función de un check
**********************************************************************************************************/	
	function enableInput(source, cssClass){
		if ($('#' + source).is(':checked')){

			$('input[class*=' + cssClass + ']').each(function(index){
								this.disabled=false;
							});
		}			
		else{			

			$('input[class*=' + cssClass + ']').each(function(index){
								this.disabled=true;
							});
		}
	}

/*********************************************************************************************************
	Funcion que calcula el sumatorio de varios inputs
**********************************************************************************************************/	
	function sumatory(destination, cssClass, lang){
	
		if (typeof lang == 'undefined' || null==lang){
			lang = globalLanguage;
		}
		var total = 0;
		$('input[class*=' + cssClass + ']').each(function(index){
			if ((this.value != '')){
				if (lang == spanishLanguage){
					value=this.value.replace(".","");
					value=value.replace(",",".");							
				}else{							
					value=this.value.replace(",","");
				}
				if (!isNaN(value)){
					total = total + parseInt(value);
				}
				
			}
		});
		$('#' + destination).val(total);
	}

/*********************************************************************************************************
	Funcion que calcula el producto de varios inputs
**********************************************************************************************************/	
	function product(destination, cssClass, lang){
	
		if (typeof lang == 'undefined' || null==lang){
			lang = globalLanguage;
		}
		var total = 1;
		var count = 0;
		if (typeof lang == 'undefined' || null==lang){
			lang = globalLanguage;
		}
		$('input[class*=' + cssClass + ']').each(function(index){
			if ((this.value != '')){
				count = count + 1;
				if (lang == spanishLanguage){
					value=this.value.replace(".","");
					value=value.replace(",",".");							
				}else{						
					value=this.value.replace(",","");
				}
				if (!isNaN(value)){
					total = total * parseInt(value,10);
				}
			}
		});
		if (count < 2){
			$('#' + destination).val(0);
		}else {
			$('#' + destination).val(total);
		}
	}
	
/*********************************************************************************************************
	Funcion que añade un nuevo input al formulario
**********************************************************************************************************/	
	function showInputProducto(cssClass){
		
		if ($('select[class*=' + cssClass + ']:first').parent().parent().length > parseInt('0')){
			
			$('select[class*=' + cssClass + ']:first').parent().parent().show();
			var oldCssClass = $('select[class*=' + cssClass + ']:first').attr('class');
			$('select[class*=' + cssClass + ']:first').attr('class', oldCssClass.replace(cssClass, ''));
		}
	
		if ($('input[class*=' + cssClass + ']:first').parent().length > parseInt('0')){			
			$('input[class*=' + cssClass + ']:first').parent().show();
			oldCssClass = $('input[class*=' + cssClass + ']:first').attr('class');
			$('input[class*=' + cssClass + ']:first').attr('class', oldCssClass.replace(cssClass, ''));
		}	
		

	}	
	
	function deshabilitarElementos(idForm){
			
		if(!$('#' + 'acepto').is(':checked')){
			
		var forma = document.getElementById(idForm);
		if(forma!=null){
		var elementos = forma.getElementsByTagName("input");
		var combos = forma.getElementsByTagName("select");
		var textareas = forma.getElementsByTagName("textarea");
		var hiddenInput = forma.getElementsByTagName("hidden");
		var buttons = forma.getElementsByTagName("button");
		
		for (i=1;i<elementos.length;i++){
		elementos[i].disabled = true;
	}
		for (j=0;j<combos.length;j++){
		combos[j].disabled = true;
	}
		for (k=0;k<textareas.length;k++){
		textareas[k].disabled = true;
	}
		for (l=0;l<hiddenInput.length;l++){
		textareas[l].disabled = true;
	}
		for (m=0;m<buttons.length;m++){
		buttons[m].disabled = true;
	}
		//excluimos el boton borrar
		$("#"+'borrar').attr('disabled',false);
}
	
}
	}
function habilitarElementos(idForm){

 if($('#' + 'acepto').is(':checked')){
	
	var forma = document.getElementById(idForm);
		var elementos = forma.getElementsByTagName("input");
		var combos = forma.getElementsByTagName("select");
		var textareas = forma.getElementsByTagName("textarea");
		var hiddenInput = forma.getElementsByTagName("hidden");
		var buttons = forma.getElementsByTagName("button");
		
		for (i=1;i<elementos.length;i++){
		elementos[i].disabled = false;
	}
		for (j=0;j<combos.length;j++){
		combos[j].disabled = false;
	}
		for (k=0;k<textareas.length;k++){
		textareas[k].disabled = false;
	}
		for (l=0;l<hiddenInput.length;l++){
		textareas[l].disabled = false;
	}
		for (m=0;m<buttons.length;m++){
		buttons[m].disabled = false;
	}
	var hayErrores=$('*[class*="validatorError"]');
	if(hayErrores.size()>0){

		seleccionPrimerElementoConError(idForm);
	}

}else{
	deshabilitarElementos(idForm);	
}

}

function tratarElementosDatosRadio(){
	  $('div[class*="datosradio"]').each(function(index){
	 						  var childNodes =this.childNodes; 
							  var radioId = "";
								for (var i = 0; i < childNodes.length; i++)
								{	
									var grandChildren = childNodes[i].childNodes;
									
									for (var j = 0; j < grandChildren.length; j++)
									{
										if (grandChildren[j].type == 'radio'){
											radioId = grandChildren[j].getAttribute('id');
											break;
										}
									}
								}
								$('#' + radioId).bind('blur', $('#' + radioId).attr('onchange'));
								$('#' + radioId).trigger('blur');
							});



}
window.onload = function () {
					
			  $('select[class*="hiddenInput"]').parent().parent().css('display', 'none');

			  /*Desactivar  los input*/
			
			  $('input[class*="otro"]').each(function(index){
								this.disabled=true;
					});
			  
			  $('div[class*="datosradio"]').each(function(index){
					  var childNodes =this.childNodes; 
					  var radioId = "";
						for (var i = 0; i < childNodes.length; i++)
						{
							var grandChildren = childNodes[i].childNodes;
							
							for (var j = 0; j < grandChildren.length; j++)
							{
								if (grandChildren[j].type == 'radio'){
									radioId = grandChildren[j].getAttribute('id');
									break;
								}
							}
						}
						$('#' + radioId).bind('blur', $('#' + radioId).attr('onchange'));
						$('#' + radioId).trigger('blur');
					});
			/*  var fecha = new Date();
			  if ( $('#fechaActual') != null){
				  $('#fechaActual').val(fecha.getDate() +'/'  + (fecha.getMonth() + 1) + '/' + fecha.getFullYear());
				  $('#fechaActual').readonly(true);
			  }
			*/
			/* deshabilitarElementos();*/
			 $('input[class*="hiddenInput"]').parent().css('display', 'none');
			 $('input[class*="hiddenInput"]').parent().children("label").attr('class', 'aniade_campo');
			 
			 $('input[class*="hiddenInput"]').each(function(index){
					$(this).parent().children("label").attr('class', 'aniade_campo');
				});	
		
			};
				




/*********************************************************************************************************
	Funcion que modifica la validación de número fiscal de un campo
**********************************************************************************************************/
	function changeFiscalIdValidation(fiscalIdRadio, inputValidationId, language){

		if (language=='' || language=='undefined'){
			language=globalLanguage;
		}
		var fNif = function() { isRequired(inputValidationId , language); isNif(inputValidationId, language);};
		var fCif = function() { isRequired(inputValidationId , language); isCif(inputValidationId, language);};
		var fMandatory = function() { isRequired(inputValidationId , language);};

		var fiscalType = '';
		if (fiscalIdRadio != '' && inputValidationId != ''){
			$('#'+inputValidationId).unbind('blur');
			hiddenMessage(inputValidationId, '');
			fiscalType = $("input[name="+fiscalIdRadio+"]:checked").val(); 

			if (fiscalType == 'NIF'){
				$('#'+inputValidationId).bind('blur',fNif);
			}
			else if (fiscalType == 'CIF'){
				$('#'+inputValidationId).bind('blur',fCif);
			}
			else if (fiscalType == 'PJE'){
				$('#'+inputValidationId).bind('blur',fMandatory);		
			}
			else if (fiscalType == 'Pasaporte'){
				$('#'+inputValidationId).bind('blur',fMandatory);
			}
			$('#'+inputValidationId).blur();
		}
	}

/*********************************************************************************************************
	Funcion que hace requerido un campo
**********************************************************************************************************/
	function contactRequired(id, phoneId, mailId, faxId, countryId, cityId, postalCodeId, addressId, language){

		/* EDD: Remove isRequired validation */
		$('#' + mailId).unbind('blur', fMail);
		$('#' + phoneId).unbind('blur', fPhone);
		$('#' + faxId).unbind('blur', fFax);
		$('#' + countryId).unbind('blur', fCountry);
		$('#' + cityId).unbind('blur', fCity);
		/*$('#' + postalCodeId).unbind('blur', fPostalCode);*/
		$('#' + addressId).unbind('blur', fAddress);

		/* EDD: Reset error message */
		hiddenMessage(mailId, 'required');
		hiddenMessage(phoneId, 'required');
		hiddenMessage(faxId, 'required');
		hiddenMessage(countryId, 'required');
		hiddenMessage(cityId, 'required');
		/*hiddenMessage(postalCodeId, 'required');*/
		hiddenMessage(addressId, 'required');

		var fMail = function() { isRequired(mailId , language); };
		var fPhone = function() { isRequired(phoneId , language); };
		var fFax = function() { isRequired(faxId , language); };
		var fCountry = function() { isRequired(countryId , language); };
		var fCity = function(){isRequired(cityId , language); }
		/*var fPostalCode = function(){isRequired(postalCodeId , language);}*/
		var fAddress = function(){isRequired(addressId , language);}

		$('input[name=' + id + ']').each(function(index){
				if ($(this).is(':checked')){
					switch(parseInt(index)){
						case 0:
							$('#' + mailId).bind('blur', fMail);
							$('#' + mailId).trigger('blur');
							break;

						case 1:
							$('#' + phoneId).bind('blur', fPhone);
							$('#' + phoneId).trigger('blur');
							break;

						case 2:
							$('#' + faxId).bind('blur', fFax);
							$('#' + faxId).trigger('blur');
							break;	
							
						case 3:
							$('#' + countryId).bind('blur', fCountry);			
							$('#' + countryId).trigger('blur');
							$('#' + cityId).bind('blur', fCity);			
							$('#' + cityId).trigger('blur');
							/*$('#' + postalCodeId).bind('blur', fPostalCode);			
							$('#' + postalCodeId).trigger('blur');*/
							$('#' + addressId).bind('blur', fAddress);			
							$('#' + addressId).trigger('blur');
							break;
					}
				}
			});
		}

/*********************************************************************************************************
	Funcion que muestra/oculta un conjunto de inputs
**********************************************************************************************************/
	function updateVisibleInputs(radioName, cssClass){
		var option = $("input[name=" + radioName + "]:checked").val();

		if (option == parseInt('1')){
			$('div[class*=' + cssClass + ']').each(function(index){
								$(this).css('display', 'none');
							});
		}

		if(option == parseInt('2')){
			$('div[class*=' + cssClass + ']').each(function(index){
								$(this).css('display', 'inherit');
							});
		}
	}

/*********************************************************************************************************
	Funcion que muestra/oculta los paises de un select
**********************************************************************************************************/
	function updateCountries(radioName, select, value){
		var option = $("input[name=" + radioName + "]:checked").val(); 
		if (option == parseInt('1')){
			$("#" + select + ":selected").attr('selected', false);
			$("#" + select + " option[value='" + value + "']").attr('selected', 'selected');
			$("#" + select ).attr('disabled', true);
		}

		if (option == parseInt('2')){
			$('#' + select).attr('disabled', false);
		}
	}
	

/****************************************************************************************
	Funcion que cambia el valor seleccionado de un select y además lo bloquea
*****************************************************************************************/
	function changeAndDisableComboValue(radioId, comboId, value){
		
		var option = $("input[name=" + radioId.name + "]:checked").val(); 
		if (option != null && 'Si'== option){
			$("#"+comboId+ " option[value='" + value + "']").attr('selected','selected');
			/*
			$("#"+comboId).focus(function(){$("#"+comboId).blur();}); 
			*/
			$("#"+comboId).readonly(true);
			
		} else {
			$("#"+comboId+ " option[value='']").attr('selected','selected');
			/*$("#"+comboId).focus(null); */
			$("#"+comboId).readonly(false);
		}		
	}


/****************************************************************************************
	Funcion que hace un campo obligatorio o no en funcin del valor de un radio
*****************************************************************************************/
	function requiredInputRadioValue(radioId, inputId, language, valueSelect){
		
		hiddenMessage(inputId, 'required');

		var optionRadio = $("input[name=" + radioId.name + "]:checked").val(); 

		if (optionRadio != null && 'Si'== optionRadio){

			hiddenMessage(inputId, 'required');
			
			$("#" + inputId + " option[value='" + valueSelect + "']").attr('selected', 'selected');

			var fInput = function() { notRequired(inputId); };

			$('#' + inputId).bind('blur');
			$('#' + inputId).trigger('blur');	
		} else {
			var fInput = function() { isRequired(inputId, language); };

			$("#" + inputId + " option[value='']").attr('selected', 'selected');

			$('#' + inputId).bind('blur', fInput);
			$('#' + inputId).trigger('blur');
		}		
	}	
	
/****************************************************************************************
	Funcion que comprueba que día de un campo es válido para el día de otro campo
*****************************************************************************************/
	
	function isValidDayOfMonth(dayId, monthId, language){
		
		var day = getInputValue(dayId);
		var month = getInputValue(monthId);
		
		if (language == null || language == ""){
			language = spanishLanguage;
		}
		
		if (day == null || day == "" || month == null|| month ==""){
			hiddenMessage(dayId, 'dayOfMonth');
			return true;
		}
		
		switch(parseInt(month)){  
		case 1: case 3: case 5: case 7: case 8: case 10: case 12:  
			numberDays=31;
			break;

		case 4: case 6: case 9: case 11:
			numberDays=30;
			break;

		case 2:
				
				numberDays=29;
			break;

		default:{
			showMessage(dayId, messages[language + '-dayOfMonth'], 'dayOfMonth');
			return false;
		}
	}

	if (day > numberDays || day == 0){
		showMessage(dayId, messages[language + '-dayOfMonth'], 'dayOfMonth');
		return false;
	}
	hiddenMessage(dayId, 'dayOfMonth');
	return true;
		
	}

	
	/****************************************************************************************
		Funcion que añade en el onblur la función de validación isValidDayOfMonth
	*****************************************************************************************/
function validateDayOfMonth (dayId, monthId, language){
	
	isValidDayOfMonth(dayId, monthId, language);
	$(dayId).bind("blur",isValidDayOfMonth(dayId,monthId, language));
	
}

	/****************************************************************************************
		Funcion que habilita o deshabilita un campo dependiendo del valor de otro campo
	*****************************************************************************************/
	
function enableOrDisableField (sourceFieldId, fieldToChangeId, value){
	/*
	Hay que coger el valor del campo del sourceFieldId.
	Si no existe sourceFieldId no hacer nada.
	Si es igual a value entonces hay que habilitar el campo con el id fieldToChangeId.
	Si es diferente entonces hay que deshabilitarlo.
	*/

	
	var seleccion = getInputValue(sourceFieldId);
	if(seleccion != null){
		if (seleccion == value){
			 $("#"+fieldToChangeId).attr('disabled',false); 
				
		}else{	  
			 removeError(fieldToChangeId,'');
			 $("#"+fieldToChangeId).removeClass('validatorError');
			 $("#"+fieldToChangeId+ " option[value='']").attr('selected','selected');
			 $("#"+fieldToChangeId).val('');
			 $("#"+fieldToChangeId).attr('disabled',true);
			 $("#"+fieldToChangeId).blur();

			}
	}

}


function changeCountryEvent (countryFieldId, provinceId, postalCodeId, value, locale){

	var seleccion = getInputValue(countryFieldId);
	if(seleccion != null){
		var fProvince = function() { isRequired(provinceId , locale); };
		var fPostalCode = function() { isRequired(postalCodeId , locale); isPostalCode(postalCodeId,locale);};
		if (seleccion == value){
			$('#'+provinceId).attr('disabled',false);
			$('#'+provinceId).bind('blur','',fProvince);
			$('#'+postalCodeId).bind('blur','',fPostalCode);
			$('#'+postalCodeId).attr('maxlength','5');
			
		}else{	  
			 $('#'+provinceId).unbind('blur');
			 $('#'+postalCodeId).unbind('blur');			 
			 hiddenMessage(provinceId,'');
			 hiddenMessage(postalCodeId,'');
			 $("#"+provinceId).removeClass('validatorError');
			 $("#"+provinceId+ " option[value='']").attr('selected','selected');
			 $("#"+provinceId).val('');
			 $("#"+provinceId).attr('disabled',true);
			 $("#"+postalCodeId).removeClass('validatorError');	
			 $('#'+postalCodeId).attr('maxlength','25');			 
			}
	
	}
}

function emailRequired(id,mailId,language){
			
			hiddenMessage(mailId, 'required');
			$('#' + mailId).unbind('blur', fMail);
			$("#"+mailId).removeClass('validatorError');

			var option = $("input[name=" + id + "]:checked").val(); 
		
			if (option=="baja")
				 { 
					var fMail = function() { isRequired(mailId , language); };
					$('#' + mailId).bind('blur', fMail);
					$('#' + mailId).trigger('blur');
								
			}else{
				
				$('#' + id).unbind('blur', mailId);
 				notRequired(mailId);
					

				}
		
		}
function contactRequired2(id, phoneId, mailId, faxId,language){
		
		/* EDD: Remove isRequired validation */
		$('#' + mailId).unbind('blur', fMail);
		$('#' + phoneId).unbind('blur', fPhone);
		$('#' + faxId).unbind('blur', fFax);


		/* EDD: Reset error message */
		hiddenMessage(mailId, 'required');
		hiddenMessage(phoneId, 'required');
		hiddenMessage(faxId, 'required');


		var fMail = function() { isRequired(mailId , language); };
		var fPhone = function() { isRequired(phoneId , language); };
		var fFax = function() { isRequired(faxId , language); };

		$('input[name=' + id + ']').each(function(index){
				if ($(this).is(':checked')){
					switch(parseInt(index)){
						case 0:
							$('#' + phoneId).bind('blur', fPhone);
							$('#' + phoneId).trigger('blur');
							
							break;

						case 1:
							$('#' + mailId).bind('blur', fMail);
							$('#' + mailId).trigger('blur');
							break;

						case 2:
							$('#' + faxId).bind('blur', fFax);
							$('#' + faxId).trigger('blur');
							break;	
							
					}
				}
			});
		}
/*********************************************************************************************************
	Funcion que hacer requerido un input en función de un check
**********************************************************************************************************/	
	function requiredInput(idCheck, idCopiasEsp, idCopiasIng,language){

		
		/* EDD: Remove isRequired validation */
		$('#' + idCopiasEsp).unbind('blur', fSpanish);
		$('#' + idCopiasIng).unbind('blur', fEnglish);
		
		/* EDD: Reset error message */
		hiddenMessage(idCopiasEsp, 'required');
		hiddenMessage(idCopiasIng, 'required');
		
		var fSpanish= function() { isRequired(idCopiasEsp, language); };
		var fEnglish= function() { isRequired(idCopiasIng, language); };
		

		$('input[name=' + idCheck + ']').each(function(index){
				if ($(this).is(':checked')){
					switch(parseInt(index)){
						case 0:
							$('#' + idCopiasEsp).bind('blur',  fSpanish);
							$('#' + idCopiasEsp).trigger('blur');
							
							break;

						case 1:
							$('#' + idCopiasIng).bind('blur', fEnglish);
							$('#' + idCopiasIng).trigger('blur');
							break;

													
					}
				}
			});

	}
	
	function compareValues(idInput1, idInput2, language){
	
		var value1 = $('#' + idInput1).val();
		var value2 = $('#' + idInput2).val();
		
		var fGreaterThan= function() { isGreaterThan(idInput2, value1, language); };
		var fMinorThan= function() { isMinorThan(idInput1, value2, language); };
	
		$('#'+idInput1).unbind('blur',fMinorThan);
		$('#'+idInput2).unbind('blur',fGreaterThan);
		
		$('#'+idInput1).bind('blur',fMinorThan);
		$('#'+idInput2).bind('blur',fGreaterThan);
		
		$('#'+idInput1).blur();
		$('#'+idInput2).blur();
		
	}
	
	

	function compareEmails(idInput1, idInput2, language){
		var value1 = $('#' + idInput1).val();
		var value2 = $('#' + idInput2).val();
	
		if(value1!=value2){
			showMessage(idInput2, messages[language + '-repEmail'], 'repEmail');

		}else{
			hiddenMessage(idInput2, 'repEmail');

			}
	}
	
	function selectProduct(productId, quantityId, measureId, language){
		var productValue = getInputValue(productId);
		var fQuantity= function() { isRequired(quantityId, language); isInteger(quantityId, language);isPositive(quantityId, language);};
		var fMeasure= function() { isRequired(measureId, language); };
		hiddenMessage(measureId, '');
		hiddenMessage(quantityId, '');
		
		if (productValue != 'undefined' && productValue != ''){
			$('#'+quantityId).bind('blur',fQuantity);
			$('#'+measureId).bind('blur',fMeasure);
		}else {
			$('#'+quantityId).unbind('blur');
			$('#'+measureId).unbind('blur');
		}
	
	}

/*********************************************************************************************************
	Funcion que muestra/oculta un input en funcin del valor de un select
**********************************************************************************************************/
	
	function showInputSelectValue(selectName, valueSelect, cssClass){

var option = $('#' + selectName+ " option:selected").val();

		if (option == valueSelect){
			$('div[class*=' + cssClass + ']').each(function(index){
							//	$(this).css('display', 'block');
$(this).css('visibility', 'visible');

							});
		}else{
			$('div[class*=' + cssClass + ']').each(function(index){
							//	$(this).css('display', 'none');
$(this).css('visibility', 'hidden');
							});
		}
	}


/*************************************************************************************************************
	Funcion para habilitar un radio en funci�n del valor positivo del otro radio
*************************************************************************************************************/


function enabledInputsRadio(idRadio, idOtro){

	  var elementos = document.getElementsByName(idRadio);

        var tam = elementos.length;

    for (i=0;i<tam;i++){
        if('si'==elementos[i].value){
			if(elementos[i].checked == true){
				var elementosRad = document.getElementsByName(idOtro);
				var tam2 = elementosRad.length;
				for(j=0;j<tam2;j++){
					elementosRad[j].disabled = false;
					
				}
			}
        }else{
			if(elementos[i].checked == true){
				var elementosOtroRad = document.getElementsByName(idOtro);
				var tam3 = elementosOtroRad.length;
				for(k=0;k<tam3;k++){
					if(elementosOtroRad[k].checked == true){
						elementosOtroRad[k].checked=false;
					}
					elementosOtroRad[k].disabled = true;
				}
			}
		}
    }
}
  