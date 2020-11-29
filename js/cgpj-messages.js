/*********************************************************************************************************
	Variables globales
**********************************************************************************************************/	
var spanishLanguage = "es";
var englishLanguage = "en";
var gallegoLanguage = "gl";
var euskaraLanguage = "eu";
var francesLanguage = "fr";
var catalanLanguage = "ca";



var cssClass = "validatorError";

var cssDivError = "mensaje error";

var errorWrapper="<div id='error-message' class='@cssClass@'><a id='toError' href='#'>&nbsp;</a>@errorMesage@</div>";

var messages = new Array();

messages[spanishLanguage + '-required']			= 'El campo @fieldName@ es requerido';
messages[spanishLanguage + '-integer']			= 'El campo @fieldName@ debe de ser entero';
messages[spanishLanguage + '-positive']			= 'El campo @fieldName@ debe de ser positivo';
messages[spanishLanguage + '-phoneNumber']		= 'No es un numero de telefono valido';
messages[spanishLanguage + '-movilNumber']		= 'No es un numero de telefono movil valido';
messages[spanishLanguage + '-number']			= 'El campo @fieldName@ debe de ser numerico';
messages[spanishLanguage + '-range']				= 'El campo @fieldName@ debe de estar en el rango de valores ';
messages[spanishLanguage + '-fiscalId']			= 'No es identificador fiscal valido';
messages[spanishLanguage + '-email']				= 'No es un correo electronico valido';
messages[spanishLanguage + '-dateFormat']		= 'El formato de fecha no es el correcto';
messages[spanishLanguage + '-missingLetter']		= 'Falta la letra del nif';
messages[spanishLanguage + '-invalidNif']		= 'Nif incorrecto';
messages[spanishLanguage + '-invalidCifLength']	= 'Longitud invalida';
messages[spanishLanguage + '-missingCifLetter']	= 'Falta la letra del cif';
messages[spanishLanguage + '-invalidCifValue']	= 'El cif introducido es incorrecto';
messages[spanishLanguage + '-invalidExpression']	= 'El formato no es correcto';
messages[spanishLanguage + '-dateOutOfRange']	= 'Fecha fuera de rango';
messages[spanishLanguage + '-lessDate']			= 'La fecha es menor';
messages[spanishLanguage + '-greaterDate']		= 'La fecha es mayor';
messages[spanishLanguage + '-formError']			= 'Debe revisar los siguientes campos que aparecen resaltados en rojo';
messages[spanishLanguage + '-acceptLegal']			= 'Debe aceptar las condiciones legales';

messages[englishLanguage + '-required']			= 'Field required';
messages[englishLanguage + '-integer']			= 'The field must be integer';
messages[englishLanguage + '-positive']			= 'The field must be positive';
messages[englishLanguage + '-phoneNumber']		= 'It is not a valid telephone number';
messages[englishLanguage + '-movilNumber']		= 'It is not a valid celular telephone number';
messages[englishLanguage + '-number']			= 'The field must be numeric';
messages[englishLanguage + '-range']			= 'The field must be in the range of values';
messages[englishLanguage + '-fiscalId']			= 'It is not a valid fiscal id';
messages[englishLanguage + '-email']			= 'It is not a valid email address';
messages[englishLanguage + '-dateFormat']		= 'The format of date is not the correct one';
messages[englishLanguage + '-missingLetter']	= 'The letter of the nif is missing';
messages[englishLanguage + '-invalidNif']		= 'Invalid Nif';
messages[englishLanguage + '-invalidCifLength'] = 'Invalid Cif length';
messages[englishLanguage + '-invalidExpression']	= 'The format is wrong';
messages[englishLanguage + '-missingCifLetter'] = 'The letter of the cif is missing';
messages[englishLanguage + '-invalidCifValue']	= 'Invalid Cif';
messages[englishLanguage + '-dateOutOfRange']	= 'Date out of range';
messages[englishLanguage + '-lessDate']			= 'Date less';
messages[englishLanguage + '-greaterDate']		= 'Date greater';
messages[englishLanguage + '-formError']		= 'You must check the fields in red of the form';
messages[englishLanguage + '-acceptLegal']			= 'You must accept the terms of service';

messages[gallegoLanguage+ '-required']			= 'Field required';
messages[gallegoLanguage+ '-integer']			= 'The field must be integer';
messages[gallegoLanguage+ '-positive']			= 'The field must be positive';
messages[gallegoLanguage + '-phoneNumber']		= 'It is not a valid telephone number';
messages[gallegoLanguage + '-movilNumber']		= 'It is not a valid celular telephone number';
messages[gallegoLanguage + '-number']			= 'The field must be numeric';
messages[gallegoLanguage + '-range']			= 'The field must be in the range of values';
messages[gallegoLanguage + '-fiscalId']			= 'It is not a valid fiscal id';
messages[gallegoLanguage + '-email']			= 'It is not a valid email address';
messages[gallegoLanguage + '-dateFormat']		= 'The format of date is not the correct one';
messages[gallegoLanguage + '-missingLetter']	= 'The letter of the nif is missing';
messages[gallegoLanguage + '-invalidNif']		= 'Invalid Nif';
messages[gallegoLanguage + '-invalidCifLength'] = 'Invalid Cif length';
messages[gallegoLanguage + '-invalidExpression']	= 'The format is wrong';
messages[gallegoLanguage + '-missingCifLetter'] = 'The letter of the cif is missing';
messages[gallegoLanguage + '-invalidCifValue']	= 'Invalid Cif';
messages[gallegoLanguage + '-dateOutOfRange']	= 'Date out of range';
messages[gallegoLanguage + '-lessDate']			= 'Date less';
messages[gallegoLanguage + '-greaterDate']		= 'Date greater';
messages[gallegoLanguage + '-formError']		= 'Ten que comprobar os campos en vermello de forma';
messages[gallegoLanguage + '-acceptLegal']			= 'You must accept the terms of service';

messages[euskaraLanguage+ '-required']			= 'Field required';
messages[euskaraLanguage+ '-integer']			= 'The field must be integer';
messages[euskaraLanguage+ '-positive']			= 'The field must be positive';
messages[euskaraLanguage + '-phoneNumber']		= 'It is not a valid telephone number';
messages[euskaraLanguage + '-movilNumber']		= 'It is not a valid celular telephone number';
messages[euskaraLanguage + '-number']			= 'The field must be numeric';
messages[euskaraLanguage + '-range']			= 'The field must be in the range of values';
messages[euskaraLanguage + '-fiscalId']			= 'It is not a valid fiscal id';
messages[euskaraLanguage + '-email']			= 'It is not a valid email address';
messages[euskaraLanguage + '-dateFormat']		= 'The format of date is not the correct one';
messages[euskaraLanguage + '-missingLetter']	= 'The letter of the nif is missing';
messages[euskaraLanguage + '-invalidNif']		= 'Invalid Nif';
messages[euskaraLanguage + '-invalidCifLength'] = 'Invalid Cif length';
messages[euskaraLanguage + '-invalidExpression']	= 'The format is wrong';
messages[euskaraLanguage + '-missingCifLetter'] = 'The letter of the cif is missing';
messages[euskaraLanguage + '-invalidCifValue']	= 'Invalid Cif';
messages[euskaraLanguage + '-dateOutOfRange']	= 'Date out of range';
messages[euskaraLanguage + '-lessDate']			= 'Date less';
messages[euskaraLanguage + '-greaterDate']		= 'Date greater';
messages[euskaraLanguage + '-formError']		= 'Inprimakiaren datu gorria egiaztatu beharko duzu';
messages[euskaraLanguage + '-acceptLegal']			= 'You must accept the terms of service';

messages[francesLanguage+ '-required']			= 'Field required';
messages[francesLanguage+ '-integer']			= 'The field must be integer';
messages[francesLanguage+ '-positive']			= 'The field must be positive';
messages[francesLanguage + '-phoneNumber']		= 'It is not a valid telephone number';
messages[francesLanguage + '-movilNumber']		= 'It is not a valid celular telephone number';
messages[francesLanguage + '-number']			= 'The field must be numeric';
messages[francesLanguage + '-range']			= 'The field must be in the range of values';
messages[francesLanguage + '-fiscalId']			= 'It is not a valid fiscal id';
messages[francesLanguage + '-email']			= 'It is not a valid email address';
messages[francesLanguage + '-dateFormat']		= 'The format of date is not the correct one';
messages[francesLanguage + '-missingLetter']	= 'The letter of the nif is missing';
messages[francesLanguage + '-invalidNif']		= 'Invalid Nif';
messages[francesLanguage + '-invalidCifLength'] = 'Invalid Cif length';
messages[francesLanguage + '-invalidExpression']	= 'The format is wrong';
messages[francesLanguage + '-missingCifLetter'] = 'The letter of the cif is missing';
messages[francesLanguage + '-invalidCifValue']	= 'Invalid Cif';
messages[francesLanguage + '-dateOutOfRange']	= 'Date out of range';
messages[francesLanguage + '-lessDate']			= 'Date less';
messages[francesLanguage + '-greaterDate']		= 'Date greater';
messages[francesLanguage + '-formError']		= 'Vous devez v?rifier les champs en rouge de la forme';
messages[francesLanguage + '-acceptLegal']			= 'You must accept the terms of service';

messages[catalanLanguage+ '-required']			= 'Field required';
messages[catalanLanguage+ '-integer']			= 'The field must be integer';
messages[catalanLanguage+ '-positive']			= 'The field must be positive';
messages[catalanLanguage + '-phoneNumber']		= 'It is not a valid telephone number';
messages[catalanLanguage + '-movilNumber']		= 'It is not a valid celular telephone number';
messages[catalanLanguage + '-number']			= 'The field must be numeric';
messages[catalanLanguage + '-range']			= 'The field must be in the range of values';
messages[catalanLanguage + '-fiscalId']			= 'It is not a valid fiscal id';
messages[catalanLanguage + '-email']			= 'It is not a valid email address';
messages[catalanLanguage + '-dateFormat']		= 'The format of date is not the correct one';
messages[catalanLanguage + '-missingLetter']	= 'The letter of the nif is missing';
messages[catalanLanguage + '-invalidNif']		= 'Invalid Nif';
messages[catalanLanguage + '-invalidCifLength'] = 'Invalid Cif length';
messages[catalanLanguage + '-invalidExpression']	= 'The format is wrong';
messages[catalanLanguage + '-missingCifLetter'] = 'The letter of the cif is missing';
messages[catalanLanguage + '-invalidCifValue']	= 'Invalid Cif';
messages[catalanLanguage + '-dateOutOfRange']	= 'Date out of range';
messages[catalanLanguage + '-lessDate']			= 'Date less';
messages[catalanLanguage + '-greaterDate']		= 'Date greater';
messages[catalanLanguage + '-formError']		= 'Ha de revisar els camps en vermell del formulari';
messages[catalanLanguage + '-acceptLegal']			= 'You must accept the terms of service';
