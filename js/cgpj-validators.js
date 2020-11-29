	var hasErrors = new Array();
	var erroresWrapper = "";

	/*********************************************************************************************************
				Validador de Campo Requerido
	**********************************************************************************************************/
	function isRequired(id, language){

		if($('#' + id).is('select')){
			var value = getInputValue(id);
			var idDiv="div"+id;
			if(document.getElementById(idDiv) && document.getElementById(idDiv).className=='validatorErrorselect'){
				document.getElementById(idDiv).className = document.getElementById(idDiv).className+ " field";
			}
			if (getInputValue(id) == parseInt('0')){
				showMessage(id, messages[language + '-required'], 'required');
				if($('#' + idDiv).size() == 0){
					var newCss = cssClass + 'select';
					$('#' + id).wrap('<div id="'+idDiv+'" class="'+newCss+'""></div>');
				}
				return false;
			}else{
				var cont = $('#' + idDiv).contents();
				$('#' + idDiv).replaceWith(cont);
				hiddenMessage(id, 'required');
				return true;
			}
		}
		if ($('input[name='+id+']').attr('type')=='checkbox' || $('input[name='+id+']').attr('type')=='radio'){
			var value = $('input[name='+id+']:checked').val(); 	
			if (value == null || value=="")	{
				showMessage(id, messages[language + '-required'], 'required');
				return false;
			} else{
				hiddenMessage(id, 'required');
				return true;
			}
		} else{
	
		var value = getInputValue(id);
		
		if (value == null || value=="")	{
			showMessage(id, messages[language + '-required'], 'required');
			return false;
		}
		else{

			hiddenMessage(id, 'required');
			return true;
		}
	}
	}	

	/*********************************************************************************************************
				Funcion que valida que un string tenga un determinado n??mero de caracteres
	**********************************************************************************************************/
	function hasLength(id, language, validLength){
		if (notRequired(id)){
			return true;			
		}
		
		var value = getInputValue(id);
		
		if (value.length == validLength){			
			return true;
		} else {
			/*showMessage(id, messages[language + '-phoneNumber'], 'phone');*/
			return false;
		}	
	}	
	
	function isLengthInRange(id, language, minLength, maxLength){
		if (notRequired(id)){
			hiddenMessage(id, 'lengthInRange');
			return true;
		}

		var value = getInputValue(id);

		if (value.length < minLength || value.length > maxLength){
			showMessage(id, messages[language + '-lengthInRange'], 'lengthInRange');
			return false;
		}
		
		else{
			hiddenMessage(id, 'lengthInRange');
			return true;
		}
	
	}

	/*********************************************************************************************************
				Validador de Campo Entero
	**********************************************************************************************************/
	function isInteger(id, language){
		if (notRequired(id)){
			hiddenMessage(id, 'integer');
			return true;
		}

		var value = getInputValue(id);

		if (language==spanishLanguage){
			value=value.replace(",",".");						
		}
		if (value.replace(" ", "").lastIndexOf(".") != parseInt(-1)){
			showMessage(id, messages[language + '-integer'], 'integer');
			return false;
		}
		

		if ( isNaN(value.replace(" ", "")) ) {
			showMessage(id, messages[language + '-integer'], 'integer');
			return false;
		}
		else{
			hiddenMessage(id, 'integer');
			/*return true;*/
		}
	}

	/*********************************************************************************************************
				Validador de Campo Entero con minimo y m?ximo
	**********************************************************************************************************/
	function isInteger(id, language,min,max){
		if (notRequired(id)){
			hiddenMessage(id, 'integer');
			return true;
		}

		var value = getInputValue(id);

		if (language==spanishLanguage){
			value=value.replace(",",".");						
		}
		if (value.replace(" ", "").lastIndexOf(".") != parseInt(-1)){
			showMessage(id, messages[language + '-integer'], 'integer');
			return false;
		}
		

		if ( isNaN(value.replace(" ", "")) || value<min || value>max) {
			showMessage(id, messages[language + '-integer'], 'integer');
			return false;
		}
		else{
			hiddenMessage(id, 'integer');
			/*return true;*/
		}
	}
		/*********************************************************************************************************
				Validador de Campo Entero con valor maximo
	**********************************************************************************************************/
	function isIntegerMax(id, language,max){
		if (notRequired(id)){
			hiddenMessage(id, 'integer');
			return true;
		}

		var value = getInputValue(id);

		if (language==spanishLanguage){
			value=value.replace(",",".");						
		}
		if (value.replace(" ", "").lastIndexOf(".") != parseInt(-1)){
			showMessage(id, messages[language + '-integer'], 'integer');
			return false;
		}
		

		if ( isNaN(value.replace(" ", "")) || value>max) {
			showMessage(id, messages[language + '-integer'], 'integer');
			return false;
		}
		else{
			hiddenMessage(id, 'integer');
			/*return true;*/
		}
	}
		/*********************************************************************************************************
				Validador de Campo Entero con valor minimo
	**********************************************************************************************************/
	function isIntegerMin(id, language,min){
		if (notRequired(id)){
			hiddenMessage(id, 'integer');
			return true;
		}

		var value = getInputValue(id);

		if (language==spanishLanguage){
			value=value.replace(",",".");						
		}
		if (value.replace(" ", "").lastIndexOf(".") != parseInt(-1)){
			showMessage(id, messages[language + '-integer'], 'integer');
			return false;
		}
		

		if ( isNaN(value.replace(" ", "")) || value<min) {
			showMessage(id, messages[language + '-integer'], 'integer');
			return false;
		}
		else{
			hiddenMessage(id, 'integer');
			/*return true;*/
		}
	}
	/*********************************************************************************************************
				Validador de Valor Positivo
	**********************************************************************************************************/
	function isPositive(id,language){
		if (notRequired(id)){
			hiddenMessage(id, 'positive');
			return true;
		}

		var value = parseDecimalSeparator(getInputValue(id));
		if (! isNaN(value)){
			if ( value < parseInt(0)){
				showMessage(id, messages[language + '-positive'], 'positive');
				return false;
			}
			else{
				hiddenMessage(id, 'positive');
				return true;
			}
		}
		else {
			showMessage(id, messages[language + '-positive'], 'positive');
			return false;
		}
	}

	/*********************************************************************************************************
				Funcion  para la validaci??n de c??digos postales
	**********************************************************************************************************/
	function isPostalCode(id, language){
		var value = getInputValue(id);
		if (value.length == 4){
			value = '0' + value;
		}
		if (notRequired(id)){
			hiddenMessage(id, 'postalCode');
			hiddenMessage(id, 'intRange');
			return true;
		} else if (!isInRange(id, language, 1000, 59999)){
			showMessage(id, messages[language + '-phoneNumber'], 'postalCode');
			return false;					
		} else if (value.length != 5){
			showMessage(id, messages[language + '-phoneNumber'], 'postalCode');
			return false;
		} else{
			hiddenMessage(id, 'postalCode');
			return true;
		}	
	}
	
	
	/*********************************************************************************************************
				Funcion Auxiliar para la validaci??n de n??meros de telefono
	**********************************************************************************************************/
	function isPhone(id, language, startNumber){
		if (startNumber == null){
			return isPhone(id,language, 9) || isPhone(id,language, 6)|| isPhone(id,language, 7)|| isPhone(id,language, 8);
		}	

		if (! isPositive(id)){
			showMessage(id, messages[language + '-phoneNumber'], 'phone');
			return false;
		}
		if (! hasLength(id,messages[language + '-phoneNumber'],'9')){
			showMessage(id, messages[language + '-phoneNumber'], 'phone');
			return false;
		}
		if (notRequired(id)){
			hiddenMessage(id, 'phone');
			return true;
		}	
		var value = getInputValue(id);
		if (value.substring(0,1) != startNumber){
			showMessage(id, messages[language + '-phoneNumber'], 'phone');
			return false;
		}
		
		hiddenMessage(id, 'phone');
		return true;
		
	}

	/*********************************************************************************************************
				Validador de un numero de telefono fijo
	**********************************************************************************************************/
	function isPhoneNumber(id, language){	
		if ((isPhone(id,messages[language + '-phoneNumber'], 9) || isPhone(id,messages[language + '-phoneNumber'], 8) )&& hasLength(id, language, '9')){
			return true;
		} else {
			return false;
		}
	}

	/*********************************************************************************************************
				Validador de un numero de telefono movil
	**********************************************************************************************************/
	function isMovilNumber(id, language){
		if ((isPhone(id, messages[language + '-movilNumber'], 6) || isPhone(id, messages[language + '-movilNumber'], 7) ) && hasLength(id, language, '9')){
			return true;
		} else {
			return false;
		}
	}

	/*********************************************************************************************************
				Validador de un numero dentro de un rango de valores
	**********************************************************************************************************/
	function isInRange(id, language, minValue, maxValue){
		if (notRequired(id)){
			hiddenMessage(id, 'intRange');
			return true;
		}

		var value = parseDecimalSeparator(getInputValue(id));
		
		if ( isNaN(value.replace(" ", "")) ) {
			showMessage(id, messages[language + '-number'], 'intRange');
			return false;
		}

		if ( minValue != "" && value < parseInt(minValue) ) {
			showMessage(id, messages[language + '-range'] + '[' + minValue + ' , ' + maxValue + ']', 'intRange');
			return false;
		}

		if ( maxValue != "" && value > parseInt(maxValue) ) {
			showMessage(id, messages[language + '-range'] + '[' + minValue + ' , ' + maxValue + ']', 'intRange');
			return false;
		}

		hiddenMessage(id, 'intRange');
		return true;			
	}

	/*********************************************************************************************************
				Validador del NIF
	**********************************************************************************************************/
	function isNif(id, language){
		if (notRequired(id)){
			hiddenMessage(id, 'fiscalid');
			return true;
		}
		var value = getInputValue(id);
		if (value.length == 8){
			value = '0' + value;
		}
		value = value.replace(/ /g, "");
		value = value.replace("-", "");
		value = value.toUpperCase();
		
		if (value.length != 9){
			showMessage(id, messages[language + '-missingLetter'], 'fiscalid');
			return false;
		}

		var dni = value.substring(0,value.length-1);
		var letter = value.charAt(value.length-1);

		if (! isNaN(letter)){
			showMessage(id, messages[language + '-missingLetter'], 'fiscalid');
			return false;
		}
		else{
			var validationArray = "TRWAGMYFPDXBNJZSQVHLCKET";
			var position = dni % 23;
			var calculatedLetter = validationArray.substring(position,position+1);
			if (letter.toUpperCase() != calculatedLetter){
				showMessage(id, messages[language + '-invalidNif'], 'fiscalid');
				return false;
			}
			updateValue(id, value);
			hiddenMessage(id, 'fiscalid');
			return true;
		}
	}
	/*********************************************************************************************************
				Validador del NIF
	**********************************************************************************************************/
function rellenarCampo(elemento) {
	if(elemento){
	var nuevoDNI = "";
	var cadCero = "";
	var i = 0;
	var dni=elemento;
	for (i = 0; i < (9 - dni.length); i++) {
		if(i==0){
			 var nieRexp = /^[XYZ]$/i;
				 if (!nieRexp.test(dni[0])){
				 cadCero += '0';
			 }
		}else{
			cadCero += '0';
		}
	}
	nuevoDNI = cadCero + dni.toUpperCase();
	if(elemento){
		elemento.value=nuevoDNI;
	}
	return nuevoDNI;
	}
	}


	function isNie(id, language){
		if (notRequired(id)){
			hiddenMessage(id, 'fiscalid');
			return true;
		}
		var value = getInputValue(id);
value=rellenarCampo(value);
var validChars = 'TRWAGMYFPDXBNJZSQVHLCKET';
  var nifRexp = /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKET]{1}$/i;
  var nieRexp = /^[XYZ]{1}[0-9]{7}[TRWAGMYFPDXBNJZSQVHLCKET]{1}$/i;
  var str = value.toString().toUpperCase();

  if (!nifRexp.test(str) && !nieRexp.test(str)){
   showMessage(id, messages[language + '-invalidNif'], 'fiscalid');
   return false;

}
  var nie = str
      .replace(/^[X]/, '0')
      .replace(/^[Y]/, '1')
      .replace(/^[Z]/, '2');

  var letter = str.substr(-1);
  var charIndex = parseInt(nie.substr(0, 8)) % 23;

  if (validChars.charAt(charIndex) === letter){
         updateValue(id, value);
			hiddenMessage(id, 'fiscalid');
			return true;

}
showMessage(id, messages[language + '-invalidNif'], 'fiscalid');

  return false;

		
		
		
	}


/*********************************************************************************************************
				Validador del CIF
	**********************************************************************************************************/
/*	function isCif(id, language){
		if (notRequired(id)){
			hiddenMessage(id, 'fiscalid');
			return true;
		}
		var value = getInputValue(id);
		if (value.length == 8){
			value = '0' + value;
		}
		value = value.replace(" ", "");
		value = value.replace("-", "");
		value = value.toUpperCase();

		var par = 0;
		var non = 0;
		var validationArray ="ABCDEFGHKLMNPQS";
		var letter = value.charAt(0);

		if (value.length != 9){
			showMessage(id, messages[language + '-invalidCifLength'], 'fiscalid');
			return false;
		}

		if (validationArray.indexOf(letter.toUpperCase()) == -1){
			showMessage(id, messages[language + '-missingCifLetter'], 'fiscalid');
			return false;
		}

		for (zz=2;zz<8;zz+=2){
			par = par + parseInt(value.charAt(zz));
		}

		for (zz=1;zz<9;zz+=2){
			nn = 2*parseInt(value.charAt(zz));
			if (nn > 9){ 
				nn = 1+(nn-10);
				}
			non = non+nn;
			
		}

		var parcial = par + non;

		control = (10 - ( parcial % 10));

		if (control != value.charAt(8)){
		  showMessage(id, messages[language + '-invalidCifValue'], 'fiscalid');
		  return false;
		}
		updateValue(id, value);
		hiddenMessage(id, 'fiscalid');
		return true;		
	}
*/
	/*********************************************************************************************************
				Validador del NIPC
	**********************************************************************************************************/
	function isNIPC(id, language){
		if (notRequired(id)){
			hiddenMessage(id, 'fiscalid');
			return true;
		}

		if (! isInteger(id, language) ){
			showMessage(id, messages[language + '-invalidCifValue'],'fiscalid');
			return false;
		}
		
		var value = getInputValue(id);
		if ( id.length != parseInt("9") ){
			showMessage(id, messages[language + '-invalidCifValue'], 'fiscalid');
			return false;
		}
		
		hiddenMessage(id, 'fiscalid');
		return true;
	}

	/*********************************************************************************************************
				Validador del NIF y el CIF simultaneamente
	**********************************************************************************************************/
	function isValidFiscalId(id, language){
		if (notRequired(id)){
			hiddenMessage(id, 'fiscalid');
			return true;
		}
		if (isNif(id, language)){
			hiddenMessage(id, 'fiscalid');
			return true;
		}

		if(isCif(id, language)){
			hiddenMessage(id, 'fiscalid');
			return true;
		}
		return false;
	}

	/*********************************************************************************************************
				Validador del email
	**********************************************************************************************************/
	function isValidEmail(id, language){
		if (notRequired(id)){
			hiddenMessage(id, 'email');
			return true;
		}
		var value = getInputValue(id);

		if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)){
			hiddenMessage(id, 'email');
			return true;
		}
		showMessage(id, messages[language + '-email'], 'email');
		return false;
	}

	/*********************************************************************************************************
				Funcion auxiliar que valida una fecha dado un formato
	**********************************************************************************************************/
	function validateDate(value, language, dateFormat){
		dateFormat = dateFormat.toUpperCase();

		var dateComponents = dateFormat.split('/');
		var valueComponents = value.split('/');

		if (dateComponents[0].length != valueComponents[0].length || dateComponents[1].length != valueComponents[1].length ||
			dateComponents[2].length != valueComponents[2].length ){
			return false;
		}

		var day = parseInt( value.substring(dateFormat.indexOf('D'), dateFormat.lastIndexOf('D') +1) ,10);
		var month = parseInt(value.substring(dateFormat.indexOf('M'), dateFormat.lastIndexOf('M') + 1) ,10);
		var year = parseInt(value.substring(dateFormat.indexOf('Y'), dateFormat.lastIndexOf('Y') +1) ,10);

		switch(month){  
			case 1: case 3: case 5: case 7: case 8: case 10: case 12:  
				numberDays=31;
				break;

			case 4: case 6: case 9: case 11:
				numberDays=30;
				break;

			case 2:
				if (isLeap(year)){ 
					numberDays=29;
				}else{ 
					numberDays=28;
				}	
				break;

			default:
				return false;

		}

		if (day > numberDays || day == 0){
			return false;
		}
		return true;
	}   

	/*********************************************************************************************************
				Funcion auxiliar que comprueba que un a??o sea o no bisiesto
	**********************************************************************************************************/
	function isLeap(year){
		if ( ( year % 100 != 0) && ((year % 4 == 0) || (year % 400 == 0)) ) {
			return true;
		}
		else {
			return false;
		}
	}

	/*********************************************************************************************************
				Validador de una fecha
	**********************************************************************************************************/
	function isValidDate(id, language, dateFormat){
		if (notRequired(id)){
			hiddenMessage(id, 'date');
			return true;
		}
		if( ! validateDate(getInputValue(id), language, dateFormat) ){
			showMessage(id, messages[language + '-dateFormat'], 'date');
			return false;
		}
		hiddenMessage(id, 'date');
	}
	
	function isGreaterThan(id, comparatorValue, language){
	
		if($('#' + id).is('select')){
			var value = getInputValue(id);
			var idDiv="div"+id;
			if (getInputValue(id) > comparatorValue){
				var cont = $('#' + idDiv).contents();
				$('#' + idDiv).replaceWith(cont);
				hiddenMessage(id, 'greaterThan');
				return true;
			}else{
				showMessage(id, messages[language + '-greaterThan'], 'greaterThan');
				if($('#' + idDiv).size() == 0){
					var newCss = cssClass + 'select';
					$('#' + id).wrap('<div id="'+idDiv+'" class="'+newCss+'""></div>');
				}
				return false;
			}
		}else{
			if (notRequired(id)){
				hiddenMessage(id, 'greaterThan');
				return true;
			}
			var inputValue = $('#' + id).val();
		
			if (inputValue > comparatorValue){
				hiddenMessage(id, 'greaterThan');
				return true;
			}else{
				showMessage(id, messages[language + '-dateFormat'], 'greaterThan');
				return false;
			}
		}		
	}
	
	function isMinorThan(id, comparatorValue, language){
		
		if($('#' + id).is('select')){
			var value = getInputValue(id);
			var idDiv="div"+id;
			if (getInputValue(id) < comparatorValue){
				var cont = $('#' + idDiv).contents();
				$('#' + idDiv).replaceWith(cont);
				hiddenMessage(id, 'minorThan');
				return true;
			}else{
				showMessage(id, messages[language + '-minorThan'], 'minorThan');
				if($('#' + idDiv).size() == 0){
					var newCss = cssClass + 'select';
					$('#' + id).wrap('<div id="'+idDiv+'" class="'+newCss+'""></div>');
				}
				return false;
			}
		}else{
			if (notRequired(id)){
				hiddenMessage(id, 'minorThan');
				return true;
			}
			var inputValue = $('#' + id).val();
		
			if (inputValue < comparatorValue){
				hiddenMessage(id, 'minorThan');
				return true;
			}else{
				showMessage(id, messages[language + '-dateFormat'], 'minorThan');
				return false;
			}	
		}	
	}

	/*********************************************************************************************************
				Validador de una fecha dentro de un determinado rango
	**********************************************************************************************************/		
	function isDateInRange(id, language, minDateString, maxDateString, dateFormat){
		if (notRequired(id)){
			hiddenMessage(id, 'range');	
			return true;
		}
		dateFormat = dateFormat.toUpperCase();

		if(minDateString != "" && ! validateDate(minDateString, language, dateFormat)){
			showMessage(id, messages[language + '-dateFormat'], 'range');
			return false;
		}
		if(maxDateString != "" && ! validateDate(maxDateString, language, dateFormat)){
			showMessage(id, messages[language + '-dateFormat'], 'range');
			return false;
		}

		var value = getInputValue(id);	
		if(! validateDate(value, language, dateFormat)){
			showMessage(id, messages[language + '-dateFormat'], 'range');
			return false;
		}	

		var day   = parseInt(value.substring(dateFormat.indexOf('D'), dateFormat.lastIndexOf('D') + 1) ,10);
		var month = parseInt(value.substring(dateFormat.indexOf('M'), dateFormat.lastIndexOf('M') + 1) ,10);
		var year  = parseInt(value.substring(dateFormat.indexOf('Y'), dateFormat.lastIndexOf('Y') +1) ,10);

		var minDay   = parseInt(minDateString.substring(dateFormat.indexOf('D'), dateFormat.lastIndexOf('D') + 1) ,10);
		var minMonth = parseInt(minDateString.substring(dateFormat.indexOf('M'), dateFormat.lastIndexOf('M') + 1) ,10);
		var minYear  = parseInt(minDateString.substring(dateFormat.indexOf('Y'), dateFormat.lastIndexOf('Y') +1) ,10);

		var maxDay   = parseInt(maxDateString.substring(dateFormat.indexOf('D'), dateFormat.lastIndexOf('D') + 1) ,10);
		var maxMonth = parseInt(maxDateString.substring(dateFormat.indexOf('M'), dateFormat.lastIndexOf('M') + 1) ,10);
		var maxYear  = parseInt(maxDateString.substring(dateFormat.indexOf('Y'), dateFormat.lastIndexOf('Y') +1) ,10);

		date	= new Date(year, month, day);
		minDate = new Date(minYear, minMonth, minDay);
		maxDate = new Date(maxYear, maxMonth, maxDay);

		if ( !isNaN(minDate.getDate()) && !isNaN(maxDate.getDate()) && (date < minDate || date > maxDate) ){
			showMessage(id, messages[language + '-dateOutOfRange'], 'range');
			return false;
		}

		if ( !isNaN(minDate.getDate()) && date < minDate){
			showMessage(id, messages[language + '-minorDate'], 'range');
			return false;
		}

		if ( !isNaN(maxDate.getDate()) && date > maxDate){
			showMessage(id, messages[language + '-greaterDate'], 'range');
			return false;
		}

		hiddenMessage(id, 'range');	

	}

	/*********************************************************************************************************
		Funciones comunes a todos los validadores
	**********************************************************************************************************/

	/*********************************************************************************************************
		Funciones que recarga el valor del input
	**********************************************************************************************************/
	function updateValue(id, value){
		 $('#' + id).val(value);
	}

	/*********************************************************************************************************
		Funcion que muestra un mensaje de error
	**********************************************************************************************************/
	function showMessage(messageId, message, type){
		addError(messageId, type);

		var miLabel = "";
		
		
		if (document.getElementById(messageId)!=null) 
		{
			if (document.getElementById(messageId).previousSibling!=null)
				miLabel = document.getElementById(messageId).previousSibling.innerHTML;
			else // Suele ser un select con el focus que entra a un nivel mas bajo
				miLabel = document.getElementById(messageId).parentElement.previousSibling.innerHTML;
		}
			
		
		if (miLabel!= undefined){

			var num = miLabel.indexOf("<");
			if (num>=0)
				miLabel = miLabel.substring(0, num);

			num = miLabel.indexOf(":");

			if (num>=0)
				miLabel = miLabel.substring(0, num);
			if (miLabel.length<=0)
				miLabel = messageId;
		}else
			miLabel = messageId;

		if (message!= undefined)
		{
			var exiteCampoPersonalizado = (message.indexOf("@fieldName@")>=0);
			message = message.replace("@fieldName@", miLabel);
			if (! exiteCampoPersonalizado)
				message = miLabel +": "+message;
		}
		else
			message = miLabel;
	
			
		if (erroresWrapper.indexOf(message)<0)
			erroresWrapper = erroresWrapper + "<p>"+message+"</p>";

		
		$('input[name="' + messageId+'"] ' + ', select[name="' + messageId+'"] ' + ', textarea[name="' + messageId+'"]').each(function(index){
					var oldCss = $(this).attr('class');
					if (oldCss == null){
						oldCss = "";
					}
					if (oldCss.lastIndexOf(cssClass) == -1){
							$(this).attr('class', oldCss + ' ' + cssClass);
					}
					
					
				
				});	
				

				
		

			
		/*
		var oldCss = $('#' + messageId).attr('class');
		if (oldCss == null){
			oldCss = "";
		}
		if (oldCss.lastIndexOf(cssClass) == -1){
				$('#' + messageId).attr('class', oldCss + ' ' + cssClass);
		}
		*/
				
	}

	function generateErrorWrapper(errorWrapper, cssClass, messageId, message){
		errorWrapper = errorWrapper.replace("@cssClass@", cssClass);
		errorWrapper = errorWrapper.replace("@errorId@", messageId);
		errorWrapper = errorWrapper.replace("@errorMesage@", message);

		return errorWrapper;
	}

	/*********************************************************************************************************
		Funcion que se encarga de ocultar el mensaje de error
	**********************************************************************************************************/
	function hiddenMessage(messageId, type){
		removeError(messageId, type);

		if (hasErrors[messageId] == "" || hasErrors[messageId] == "undefined"){
			
			/*
			var oldCss = $('#' + messageId).attr('class');
			if (oldCss == null){
				oldCss = "";
			}
			$('#' + messageId).attr('class', oldCss.replace(cssClass, ""));
			*/
			$('input[name="' + messageId+'"] ' + ', select[name="' + messageId+'"] ' + ', textarea[name="' + messageId+'"]').each(function(index){

				/*Borra el div que muestra el error de lo select*/
				if($('#' + messageId).is('select')){
			
					var idDiv="div"+messageId;
			
					var cont = $('#' + idDiv).contents();
					$('#' + idDiv).replaceWith(cont);
				}	

				var oldCss = $(this).attr('class');
				if (oldCss == null){
					oldCss = "";
				}
				$(this).attr('class', oldCss.replace(cssClass, ""));
		
				});		
		}
	}

	function hiddenMessageNotRemoveError(messageId){
	 /*if ($('input:text[id=' + messageId + ']').val() == ''){	*/
	 /*
		if ($('input[id=' + messageId + ']').val() == ''){			
			removeError(messageId,'');
		}
		*/
		if ( isNaN(hasErrors[messageId]) || hasErrors[messageId] == parseInt('0',10) ){
			$('#' + messageId + "Span").css("visibility", "hidden");
		}
					
	}


	/*********************************************************************************************************
		Funcion que recupera el valor de un input
	**********************************************************************************************************/
	function getInputValue(id){
		
		return  $('#' + id).val();
	}

	/*********************************************************************************************************
		Funcion que comprueba si se introducido un valor en un campo
	**********************************************************************************************************/
	function notRequired(id){
		var value = getInputValue(id);
		if (value == null || value=="")	{		
			hiddenMessageNotRemoveError(id);
			return true;
		}
	}

	/*********************************************************************************************************
		Funcion que convierte los separadores decimales al formato adecuado
	**********************************************************************************************************/
	function parseDecimalSeparator(parseValue){
		return parseValue.replace(",",".");
	}

	/*********************************************************************************************************
		Funcion que a??ade un error al formulario
	**********************************************************************************************************/	
	function addError(id, type){
		if (type == ''){
			return false;
		}
		var error = hasErrors[id];
		if (error == null){
			error = "";
		}
		if (error.lastIndexOf(type) == parseInt('-1')){
			error = error + '/' + type + '/' ;
		}

		hasErrors[id] = error;
	}

	/*********************************************************************************************************
		Funcion que elimina un error al formulario
	**********************************************************************************************************/	
	function removeError(id, type){
		var error = hasErrors[id];
		if (error == null){
			error = "";
		}
		
		error = error.replace('/' + type + '/');

		error = error.replace(/undefined/g, "");
		
		if (type == ""){
			error = "";
		}

		hasErrors[id] = error;
	}

	/*********************************************************************************************************
		Funcion que comprueba que no existan errores antes de enviar el formulario
	**********************************************************************************************************/	
	function checkForm(id, language){
	
		erroresWrapper = "";
		if ($('#error-message-2').length)
			$('#error-message-2').remove();
		if ($('#error-message-2').length )
		{
			$('#error-message-2').remove();
		}
		if ($('#error-message').length )
			$('#error-message').remove();
		if ($('#error-message').length )
			$('#error-message').remove();
		
		$('form[id='+ id +'] input[onblur*="isRequired"]').each(function(index){
										isRequiredNotRemove(this.id, language);
							});
		
		$('form[id='+ id +'] input').trigger('blur');
	
		$('form[id='+ id +'] select[onblur*="isRequired"]').each(function(index){
									isRequiredNotRemove(this.id, language);
							});
	
		$('form[id='+ id +'] select').trigger('blur');
		
		$('form[id='+ id +'] textarea[onblur*="isRequired"]').each(function(index){
									isRequiredNotRemove(this.id, language);
							});

		$('form[id='+ id +'] textarea').trigger('blur');


		var inputs = $('form[id='+ id +'] input');
		for (index = 0; index < inputs.length; index++){			
			if (inputs[index].type == 'checkbox' || inputs[index].type =='radio'){
				var inputName = inputs[index].name;

				if ( hasErrors[inputName] != null &&  hasErrors[inputName] != ""){

					if($('#error-message').length == parseInt('0')){
						errorDiv = errorWrapper+ "<div id='error-message-2' class='mensaje error'>"+erroresWrapper+"</div>";
						errorDiv = errorDiv.replace("@cssClass@", cssDivError);
						errorDiv = errorDiv.replace("@errorMesage@", messages[language+'-formError']);
						
						$('form[id='+ id +']').before(errorDiv);
$('form[id='+ id +']').after(errorDiv);

					}
				return false;
				}
			}else{
			if ( hasErrors[inputs[index].id] != null &&  hasErrors[inputs[index].id] != ""){
					
				if($('#error-message').length == parseInt('0')){
					errorDiv = errorWrapper+ "<div id='error-message-2' class='mensaje error'>"+erroresWrapper+"</div>";
					errorDiv = errorDiv.replace("@cssClass@", cssDivError);
					errorDiv = errorDiv.replace("@errorMesage@", messages[language+'-formError']);
					$('form[id='+ id +']').before(errorDiv);
$('form[id='+ id +']').after(errorDiv);

				}
				return false;
			}
			}
		}

		inputs = $('form[id='+ id +'] select');
		/*alert("SL " + inputs.length);*/
		for (index = 0; index < inputs.length; index++){
			if ( hasErrors[inputs[index].id] != null &&  hasErrors[inputs[index].id] != ""){

				if($('#error-message').length == parseInt('0')){
					errorDiv = errorWrapper+ "<div id='error-message-2' class='mensaje error'>"+erroresWrapper+"</div>";
					errorDiv = errorDiv.replace("@cssClass@", cssDivError);
					errorDiv = errorDiv.replace("@errorMesage@", messages[language+'-formError']);
					$('form[id='+ id +']').before(errorDiv);
$('form[id='+ id +']').after(errorDiv);

				}
				return false;
			}
		}
		inputs = $('form[id='+ id +'] textarea');
		/*alert("SL " + inputs.length);*/
		for (index = 0; index < inputs.length; index++){
			if ( hasErrors[inputs[index].id] != null &&  hasErrors[inputs[index].id] != ""){

				if($('#error-message').length == parseInt('0')){
					errorDiv = errorWrapper+ "<div id='error-message-2' class='mensaje error'>"+erroresWrapper+"</div>";
					errorDiv = errorDiv.replace("@cssClass@", cssDivError);
					errorDiv = errorDiv.replace("@errorMesage@", messages[language+'-formError']);
					$('form[id='+ id +']').before(errorDiv);
$('form[id='+ id +']').after(errorDiv);

				}
				return false;
			}
		}
		return true;
	}

	/*********************************************************************************************************
		Funcion que comprueba los campos requeridos sin eliminar mensajes de error
	**********************************************************************************************************/	
	function isRequiredNotRemove(id, language){
		var value = getInputValue(id);
		var idDiv="div"+id;

		if($('#' + id).is('select')){
			if (value == parseInt('0') || value == null || value==""){
				showMessage(id, messages[language + '-required'], 'required');
				if($('#' + idDiv).size() == 0){
					var newCss = cssClass + 'select';
					$('#' + id).wrap('<div id="'+idDiv+'" class="'+newCss+'""></div>');
				}

				return false;
			}else{
				var cont = $('#' + idDiv).contents();
				$('#' + idDiv).replaceWith(cont);
			}
		}
		
		if($('#' + id).attr('type')=='checkbox' || $('#' + id).attr('type')=='radio'){
		
			var inputName = $('#' + id).attr('name');
					
			var value = $('input[name='+inputName+']:checked').val(); 	
			
			
				if (value==undefined ||value == null || value=="" )	{
					showMessage(inputName, messages[language + '-required'], 'required');
					return false;
				} else{
					hiddenMessage(inputName, 'required');
					return true;
				}
			
		} 

		if (value == null || value=="")	{
			showMessage(id, messages[language + '-required'], 'required');
			return false;
		}
		else{
			return true;
		}
	}

/*********************************************************************************************************
				Validador de tarjeta residencia
	**********************************************************************************************************/
	function isResidentCard(id, language){

		var regExp1 = /^[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][A-Z]$/ig;
		var regExp2 = /^[XYZ][0-9][0-9][0-9][0-9][0-9][0-9][0-9][A-Z]$/ig;
		
		var regExp_1 = new RegExp("^" + "[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][A-Z]" + "$", "ig");
		var regExp_2 = new RegExp("^" + "[XYZ][0-9][0-9][0-9][0-9][0-9][0-9][0-9][A-Z]" + "$", "ig");
		var aLetra = ["T","R","W","A","G","M","Y","F","P","D","X","B",
                  "N","J","Z","S","Q","V","H","L","C","K","E"];

		var nif = getInputValue(id);
		nif = nif.replace(" ", "");
		nif = nif.replace("-", "");

		var cadena = new String(nif).toUpperCase();
		
		if (notRequired(id)){
			hiddenMessage(id, 'residentcard');
			return true;
		}
		if ( (nif== null || nif == "" || nif.length >9) && !regExp_1.test(cadena) && !regExp_2.test(cadena) ) {
				showMessage(id, messages[language + '-invalidNif'], 'residentcard');
				return false;
		}
		else {
			    var caracteresPermitidos = /[^0-9]/g;
				var numero;
				var letra;
		        var posicion;
			    // Comprobar si el primer caracter es una letra v????lida de NIE.
		        if (cadena.match("^[XYZxyz]")) {
			        var letraNIE = cadena.substr(0, 1);
				    var numeroNIE = cadena.substr(1, 8);
					var controlNIE = cadena.substr(8, 9);
            
		            if (letraNIE == 'Y') {
			            numeroNIE = '1' + numeroNIE;
				    }
					else if (letraNIE == 'Z') {
				        numeroNIE = '2' + numeroNIE;
					}
			        else if (letraNIE == 'X') {
				        numeroNIE = '0' + numeroNIE;
					}

					numero = parseInt(numeroNIE,10);
		            letra = controlNIE;
			    }
				else if (cadena.substr(0,1).match(caracteresPermitidos)) {
					// Obtenemos la parte num????rica y la letra
		            numero = parseInt(cadena.substr(1,8), 10);
		            letra = cadena.substr(8,1);
			    }
		        else {
		            // Obtenemos la parte num????rica y la letra
			        numero = parseInt(cadena.substr(0,8), 10);
				    letra = cadena.substr(8,1);
		        }

			    // Calculamos si la letra est???? bien
			    posicion = numero % 23;
			    if (letra != aLetra[posicion]) {
					showMessage(id, messages[language + '-invalidNif'], 'residentcard');
				    return false;
				}
			}
			hiddenMessage(id, 'residentcard');
			updateValue(id, cadena);

			return true;
		}

/*********************************************************************************************************
				Validador de expresiones regulares
	**********************************************************************************************************/

	function isValidExpression(id, language, pattern ) {

		var exp = getInputValue(id);
		var regExp = new RegExp("^" + pattern + "$", "ig");
		var regExp2 = new RegExp( pattern, "ig");
   	if ((regExp.test(exp))) {
			hiddenMessage(id, 'expression');
	        return true; 
		} else {
			showMessage(id, messages[language + '-invalidExpression'], 'expression');
			return false;
		} 
	}


/*******************************************************************************************
			Funci?n para capitalizar el primer caracter de un string

***********************************************************************************************/
		function capitalizeFirstCharacter(value) {

			var firstCharacter = value.charAt(0);
			var upperCharacter = firstCharacter.toUpperCase();
			var newValue = upperCharacter.concat(value.substr(1,value.length-1));
			return newValue;
		
		}

	/*********************************************************************************************************
				Validador de NIFs  (Nueva Version CEPSA)
	**********************************************************************************************************/
/*
function isNif(id, language) {
	if (notRequired(id)){
		hiddenMessage(id, 'fiscalid');
		return true;
	}
	var nif = getInputValue(id);
    var regExp1 = /^[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][A-Z]$/ig;
    var regExp2 = /^[XYZ][0-9][0-9][0-9][0-9][0-9][0-9][0-9][A-Z]$/ig;
    var aLetra = ["T","R","W","A","G","M","Y","F","P","D","X","B",
                  "N","J","Z","S","Q","V","H","L","C","K","E"];
 
    var cadena = new String(nif).toUpperCase();
    if (!regExp1.test(cadena) && !regExp2.test(cadena)) {
		showMessage(id, messages[language + '-invalidNif'], 'fiscalid');
		return false;
	}
    else {
        var caracteresPermitidos = /[^0-9]/g;
        var numero;
        var letra;
        var posicion;
 
        // Comprobar si el primer caracter es una letra v??lida de NIE.
        if (cadena.match("^[XYZxyz]")) {
            var letraNIE = cadena.substr(0, 1);
            var numeroNIE = cadena.substr(1, 8);
            var controlNIE = cadena.substr(8, 9);
            
            if (letraNIE == 'Y') {
                        numeroNIE = '1' + numeroNIE;
            }
            else if (letraNIE == 'Z') {
                        numeroNIE = '2' + numeroNIE;
            }
            else if (letraNIE == 'X') {
                        numeroNIE = '0' + numeroNIE;
            }
 
            numero = parseInt(numeroNIE,10);
            letra = controlNIE;
        }
        else if (cadena.substr(0,1).match(caracteresPermitidos)) {
            // Obtenemos la parte num??rica y la letra
            numero = parseInt(cadena.substr(1,8), 10);
            letra = cadena.substr(8,1);
        }
        else {
            // Obtenemos la parte num??rica y la letra
            numero = parseInt(cadena.substr(0,8), 10);
            letra = cadena.substr(8,1);
        }
 
        // Calculamos si la letra est?? bien
        posicion = numero % 23;
        if (letra != aLetra[posicion]) {
			showMessage(id, messages[language + '-invalidNif'], 'fiscalid');
            return false;
        }
    }
 
    return true;
}
 */
/**
 * Verifica que el par??metro cif sea un CIF valido (Nueva Version CEPSA)
 *
 * @param cif (String)  C??digo de identificaci??n fiscal (espa??ol) para las empresas. Consta de 7 cifras
 *                          m??s una letra de control que le precede y un d??gito de control que le sucede,
 *                          obteniendo as?? una cadena de 9 caracteres
 *
 * @return true si el CIF introducido es v??lido o false en caso contrario
 */
function isCif(id, language) {
	if (notRequired(id)){
		hiddenMessage(id, 'fiscalid');
		return true;
	}
	var cif = getInputValue(id);
    // pasar a may??sculas
    var tmp = cif.toUpperCase();
 
    if (!/^[A-Za-z0-9]{9}$/.test(tmp)) {
        // No son 9 d??gitos
    	showMessage(id, messages[language + '-invalidCifValue'], 'fiscalid');
        return false;
    } else if (!/^[ABCDEFGHKLMNPQSJUVWR]/.test(tmp)) {
        // No es una letra de las admitidas
    	showMessage(id, messages[language + '-invalidCifValue'], 'fiscalid');
        return false;
    } else {
        var v1 = new Array(0,2,4,6,8,1,3,5,7,9);
        var temp = 0;
 
        for (i = 2; i <= 6; i += 2) {
          temp = temp + v1[ parseInt(cif.substr(i-1,1)) ];
          temp = temp + parseInt(cif.substr(i,1));
        }
 
        temp = temp + v1[ parseInt(cif.substr(7,1)) ];
        temp = (10 - ( temp % 10));
 
        if (temp == 10) {
          temp = 0;
        }
 
        var ultimo = cif.substr(8,1);
        var introducido;
 
        if (ultimo == 'A') {
            introducido = 1;
        } else if (ultimo == 'B') {
            introducido = 2;
        } else if (ultimo == 'C') {
            introducido = 3;
        } else if (ultimo == 'D') {
            introducido = 4;
        } else if (ultimo == 'E') {
            introducido = 5;
        } else if (ultimo == 'F') {
            introducido = 6;
        } else if (ultimo == 'G') {
            introducido = 7;
        } else if (ultimo == 'H') {
            introducido = 8;
        } else if (ultimo == 'I') {
            introducido = 9;
        } else if (ultimo == 'J') {
            introducido = 0;
        } else {
            introducido = parseInt(ultimo);
        }
 
        if (introducido == temp) {
            return true;
        } else {
			showMessage(id, messages[language + '-invalidCifValue'], 'fiscalid');
            return false;
        }
    }
}

/*********************************************************************************************************
				Funcion  para la validaci??n de captcha
	**********************************************************************************************************/
	function isCaptcha(id, language){
		aux=isRequired(id, language);
		var value = getInputValue('g-recaptcha-response');
		if(aux){
			$('#divCaptcha').removeClass('validatorError');
		}else{
			$('#divCaptcha').addClass('validatorError');
		}

		return aux;
	}


