// Graba los valores del formulario a la url
const words = new URLSearchParams(window.location.search);

// Limpia y capitaliza los nombres de las partes
function cleanAndCap (str){
  if(!str) return null
  let temp = str.trim()
  return temp[0].toUpperCase() + temp.substring(1)
}

// Asigna variables a los nombres usados en el formulario
const actor= cleanAndCap(words.get('actor'));
const demandado = cleanAndCap(words.get('demandado'));

const salario = words.get('salario');
const categoria = cleanAndCap(words.get('categoria'));

const semac = words.get('semac');
const actividad = words.get('actividad');

const antig = words.get('antig');
const fechsemac = words.get('fechsemac');

const horario = words.get('horario');

const fechasolicitud = words.get('fechasolicitud');
const fechadenegacion = words.get('fechadenegacion');

const caso = words.get('caso');
const hechos = words.get('hechos');

const prueba = words.get('prueba');
const numero = words.get('numero');
const ano = words.get('ano');

const sentido = words.get('sentido');

let fundamento;
let iniciofallo;
let finfallo;

if (sentido === 'estimatoria'){
    fundamento = 'Por todo ello, habiéndose acreditado por la parte actora la situación protegida por la norma, no considerándose justificada la decisión empresarial por no obedecer a motivos de naturaleza organizativa o productiva, debe estimarse la demanda planteada.';
    iniciofallo = 'Estimo la demanda sobre reducción y concreción de jornada interpuesta por ';
    finfallo = 'reconociendo la reducción y concreción solicitada con el siguiente horario: ' + horario + '.';
} else {
    fundamento = 'Por otro lado, no existe acuerdo expreso con el empresario, ya que nada se ha acreditado al respecto. Únicamente quedaría por apreciar si la decisión del empresario es arbitraria o caprichosa, lo cual no tiene lugar habida cuenta de lo expuesto ut supra. Por todo ello, habiéndose reconocido la reducción de jornada, pero siendo la concreción pretendida fuera del horario de la persona trabajadora, sin que exista tampoco amparo convencional y no siendo la decisión de la empresa arbitraria o caprichosa, por existir impedimentos organizativo para que la misma sea viable, debe desestimarse la demanda planteada.';
    iniciofallo = 'Desestimo la demanda sobre reducción y concreción de jornada interpuesta por ';
    finfallo = 'absolviendo a esta de todos los pronunciamientos contra ella deducidos en el presente procedimiento.';
}

// La frase contiene HTML y texto que se pondrá en la página del resultado
const sentencia = `<p>Visto por m&iacute;, D. Javier Ercilla Garc&iacute;a, Magistrado del Juzgado de lo Social N&ordm; 10 de los de Las Palmas de Gran Canaria y su provincia, en audiencia p&uacute;blica, el juicio sobre Conciliación de la vida familiar, seguido ante este Juzgado bajo n&ordm; 000000000<span class="word" title="id: numero">${numero}</span>/<span class="word" title="id: ano">${ano}</span>, promovido a instancia de <span class="word" title="id: actor">${actor}</span>, contra <span class="word" title="id: demandado">${demandado}</span>, atendiendo a los siguientes.</p>
<h4 class="sent">ANTECEDENTES DE HECHO</h4>
<p><strong>PRIMERO.- </strong>La parte actora arriba indicada present&oacute; en el Decanato una demanda que fue repartida a este Juzgado y en la que, previa alegaci&oacute;n de los hechos y fundamentos de derecho que estim&oacute; procedentes, termin&oacute; suplicando que se dictara una sentencia de conformidad con sus pretensiones.</p>
<p></p>
<p><strong>SEGUNDO.- </strong>Admitida a trámite la demanda, se citó a las partes para el acto de conciliación y juicio, que se celebró con la comparecencia en forma de ambas partes procesales. En la vista, la parte actora ratificó la demanda. La demandada manifestó su oposición a la misma, solicitando su desestimación. Efectuado el oportuno traslado a la parte actora para alegaciones y recibido el pleito a prueba, se procedió a la práctica de la prueba propuesta, con el resultado que obra en las actuaciones. Finalizado el periodo probatorio, se concedió la palabra a las partes para formular conclusiones e informes finales, manteniendo sus pretensiones iniciales y quedando los autos conclusos para sentencia.</p>
<p><strong>TERCERO.- </strong>En la sustanciaci&oacute;n de estos autos se han observado todas las prescripciones legales aplicables salvo el sistema de plazos.</p>
<h4 class="sent">HECHOS PROBADOS</h4>
<p><strong>PRIMERO.-</strong> <span class="word" title="id: demandado">${demandado}</span> ha venido prestando servicios laborales para la empresa <span class=""word" title="id: demandado">${demandado}</span> dedicada a la actividad de <span class="word" title="id: actividad">${actividad}</span>, con antig&uuml;edad desde el d&iacute;a <span class="word" title="id: antig">${antig}</span>, categor&iacute;a profesional de <span class="word" title="id: categoria">${categoria}</span> y un salario mensual/diario bruto de <span class="word" title="id: salario">${salario}</span> euros, incluidas las partes proporcionales de las pagas extraordinarias, en virtud de un contrato de trabajo de duraci&oacute;n indefinida a tiempo completo.</p>
<p><strong>SEGUNDO.-</strong> El horario de trabajo de la parte actora es el siguiente: ${horario}.</p>
<p><strong>TERCERO.-</strong> En fecha ${fechasolicitud}, la parte actora presentó escrito de solicitud de adaptación de jornada para hacer efectivo su derecho a la conciliación de la vida familiar y laboral.</p>
<p></p>
<p><strong>CUARTO.-</strong> En fecha ${fechadenegacion}, la empresa comunicó a la persona trabajadora carta donde se denegaba la solicitud formulada, proponiendo una adaptación alternativa. Se da por reproducida dicha comunicación. </p>
<p></p>
<p><strong>QUINTO.-</strong> En el presente caso ${hechos}.</p>
<p></p>
<p><strong>SEXTO.-</strong> La parte demandante promovi&oacute; la conciliaci&oacute;n previa al proceso, que se celebr&oacute; el d&iacute;a <span class="word" title="id: fechsemac">${fechsemac}</span> con el resultado de <span class="word" title="id: semac">${semac}</span>, presentando posteriormente demanda de extinción.</p>
<h4 class="sent">FUNDAMENTOS DE DERECHO</h4>
<p><strong>PRIMERO.- </strong>En cumplimiento de lo dispuesto en el art. 97.2 de la LRJS este &oacute;rgano judicial debe explicitar el razonamiento probatorio. Los hechos probados primero, segundo, y tercero tienen la naturaleza de hechos admitidos o conformes. Se trata de hechos que son alegados por una de las partes en el proceso y son admitidos por la contraria, los cuales no son objeto de prueba, ya que la afirmaci&oacute;n f&aacute;ctica de las partes vincula al juez (arts. 87.1 LRJS y 281.3 LEC).</p>
<p>Los hechos probados tercero y cuarto resultan del an&aacute;lisis del conjunto de la prueba practicada conforme a las reglas de la sana cr&iacute;tica, habi&eacute;ndose acreditado por la prueba practicada en el acto del juicio oral, a saber la documental y la <span class="word" title="id: prueba">${prueba}</span>.</p>
<p></p>
<p><strong>SEGUNDO.- </strong>Solicita la parte actora que le sea reducida y concretada su jornada por razón de conciliación de vida familiar y profesional de conformidad con el siguiente horario: ${horario}.</p>
<p>La empresa demanda se remite a la carta de denegación, señalando que se ha admitido la reducción de jornada, pero no así la concreción horaria pretendida por estar fuera de la jornada ordinaria de la parte actora.</p>
<p></p>
<p><strong>TERCERO.- </strong>El art. 37 ET establece en sus apartados 6 y 7 que:</p>
<p><em>“6. Quien por razones de guarda legal tenga a su cuidado directo algún menor de doce años o una persona con discapacidad que no desempeñe una actividad retribuida tendrá derecho a una reducción de la jornada de trabajo diaria, con la disminución proporcional del salario entre, al menos, un octavo y un máximo de la mitad de la duración de aquella.</em></p>
<p><em>Tendrá el mismo derecho quien precise encargarse del cuidado directo de un familiar, hasta el segundo grado de consanguinidad o afinidad, que por razones de edad, accidente o enfermedad no pueda valerse por sí mismo, y que no desempeñe actividad retribuida.</em></p>
<p><em>El progenitor, adoptante, guardador con fines de adopción o acogedor permanente tendrá derecho a una reducción de la jornada de trabajo, con la disminución proporcional del salario de, al menos, la mitad de la duración de aquella, para el cuidado, durante la hospitalización y tratamiento continuado, del menor a su cargo afectado por cáncer (tumores malignos, melanomas y carcinomas), o por cualquier otra enfermedad grave, que implique un ingreso hospitalario de larga duración y requiera la necesidad de su cuidado directo, continuo y permanente, acreditado por el informe del servicio público de salud u órgano administrativo sanitario de la comunidad autónoma correspondiente y, como máximo, hasta que el menor cumpla los dieciocho años. Por convenio colectivo, se podrán establecer las condiciones y supuestos en los que esta reducción de jornada se podrá acumular en jornadas completas.</em></p>
<p><em>Las reducciones de jornada contempladas en este apartado constituyen un derecho individual de los trabajadores, hombres o mujeres. No obstante, si dos o más trabajadores de la misma empresa generasen este derecho por el mismo sujeto causante, el empresario podrá limitar su ejercicio simultáneo por razones justificadas de funcionamiento de la empresa.</em></p>
<p><em>7. La concreción horaria y la determinación de los permisos y reducciones de jornada, previstos en los apartados 4, 5 y 6, corresponderán a la persona trabajadora dentro de su jornada ordinaria. No obstante, los convenios colectivos podrán establecer criterios para la concreción horaria de la reducción de jornada a que se refiere el apartado 6, en atención a los derechos de conciliación de la vida personal, familiar y laboral de la persona trabajadora y las necesidades productivas y organizativas de las empresas. La persona trabajadora, salvo fuerza mayor, deberá preavisar al empresario con una antelación de quince días o la que se determine en el convenio colectivo aplicable, precisando la fecha en que iniciará y finalizará el permiso de cuidado del lactante o la reducción de jornada.</em></p>
<p><em>Las discrepancias surgidas entre empresario y trabajador sobre la concreción horaria y la determinación de los periodos de disfrute previstos en los apartados 4, 5 y 6 serán resueltas por la jurisdicción social a través del procedimiento establecido en el artículo 139 de la Ley 36/2011, de 10 de octubre, Reguladora de la Jurisdicción Social”.</em></p>
<p></p>
<p><strong>CUARTO.-</strong> Es preciso distingir: </p>
<p>1) El art. 37 del ET regula la reducción de jornada y la concreción dentro de la jornada ordinaria.</p>
<p>2) El art. 34.8 del ET se ocupa de la adaptación y distribución de la jornada para hacer efectivo el derecho de conciliación.</p>
<p>La STC núm. 24/2011, de 14 marzo señala que <em>“nos encontramos con una doble regulación jurídica que no se puede confundir, pues ha de distinguirse entre la posibilidad de solicitar una reducción de jornada para el cuidado de hijos con la consiguiente reducción de salario (que fue la opción elegida por la trabajadora en el caso resuelto en nuestra STC 3/2007), que supone el reconocimiento de un derecho exigible al amparo del art. 37.5 LET, de aquellos otros supuestos (como es el caso que ahora se nos plantea) en los que se pretende una adaptación de la duración y distribución de la jornada a las concretas necesidades del trabajador con el objeto de conciliar vida privada, familiar y laboral y que tiene apoyo en un precepto diverso, esto es, el art. 34.8 LET”.</em></p>
<p>En el supuesto enjuiciado se ejercita la acción del art. 37.6 y 7 ET sobre reducción de jornada y concreción horaria. Dicho precepto permite únicamente la concreción horaria dentro de la jornada ordinaria de la persona trabajadora.</p>
<p>En cualquier caso la norma, que exige que las peticiones sean razonables y proporcionadas, trata de conjugar los intereses conciliatorios de la persona trabajadora, con las necesidades organizativas o productivas de la empresa.</p>
<p></p>
<p><strong>QUINTO.-</strong> En el supuesto enjuiciado, <span class="word" title="id: caso">${caso}<span>.</p>
<p>${fundamento}</p>
<p></p>
<p><strong>SEXTO.- </strong>A tenor de lo dispuesto en el art. 97.4 de la LRJS se debe indicar a las partes procesales si la presente sentencia es firme o no, y en su caso los recursos que contra ella proceden, así como las circunstancias de su interposición. De acuerdo con lo dispuesto en el art. 139.1.b) de la LRJS, contra la presente sentencia no cabe interponer recurso alguno.</p>
<p>Vistos los preceptos citados y dem&aacute;s de general y pertinente aplicaci&oacute;n.</p>
<h4 class="sent">FALLO</h4>
<p>${iniciofallo}<span class="word" title="id: actor">${actor}</span> frente a la empresa <span class="word" title="id: demandado">${demandado}</span>, ${finfallo}</p>
<p>Notif&iacute;quese a las partes en legal forma.</p>
<p>Esta resolución es firme y contra ella no cabe interponer recurso alguno.</p>
<p>As&iacute; por esta mi sentencia lo pronuncio, mando y firmo.</p>`;

// Grabar el valor del contenido de la sentencia
const storyEl = document.getElementById('sentencia');
// Progar el elemento sentencia con el valor de las variables
storyEl.innerHTML = sentencia;
