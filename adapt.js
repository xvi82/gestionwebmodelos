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
    fundamento = 'Por ello, ponderándose las circunstancias concurrentes en el presente caso, se considera injustificada la decisión de la empresa en los términos del art. 34.8 ET, debiéndose reconocer el derecho de la parte actora a la adaptación de jornada solicitada.';
    iniciofallo = 'Estimo la demanda sobre conciliación de vida familiar y laboral interpuesta por ';
    finfallo = 'reconociendo la adaptación de jornada solicitada con el siguiente horario: ' + horario + '.';
} else {
    fundamento = 'Por ello, ponderándose las circunstancias concurrentes en el presente caso, se considera justificada la decisión de la empresa en los términos del art. 34.8 ET.';
    iniciofallo = 'Desestimo la demanda sobre conciliación de vida familiar y laboral interpuesta por ';
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
<p><strong>SEGUNDO.- </strong>Solicita la parte actora que le sea adaptada su jornada por razón de conciliación de vida familiar y profesional de conformidad con el siguiente horario: ${horario}.</p>
<p>La empresa demanda se remite a la carta de denegación, señalando que por motivos organizativos/productivos no es posible, admitiendo la voluntad de la empresa de negociar y habiendo ofrecido alternativas.</p>
<p></p>
<p><strong>TERCERO.- </strong>El art. 34.8 ET establece:</p>
<p><em>“Las personas trabajadoras tienen derecho a solicitar las adaptaciones de la duración y distribución de la jornada de trabajo, en la ordenación del tiempo de trabajo y en la forma de prestación, incluida la prestación de su trabajo a distancia, para hacer efectivo su derecho a la conciliación de la vida familiar y laboral. Dichas adaptaciones deberán ser razonables y proporcionadas en relación con las necesidades de la persona trabajadora y con las necesidades organizativas o productivas de la empresa.</em></p>
<p><em>En el caso de que tengan hijos o hijas, las personas trabajadoras tienen derecho a efectuar dicha solicitud hasta que los hijos o hijas cumplan doce años.</em></p>
<p><em>En la negociación colectiva se pactarán los términos de su ejercicio, que se acomodarán a criterios y sistemas que garanticen la ausencia de discriminación, tanto directa como indirecta, entre personas trabajadoras de uno y otro sexo. En su ausencia, la empresa, ante la solicitud de adaptación de jornada, abrirá un proceso de negociación con la persona trabajadora durante un periodo máximo de treinta días. Finalizado el mismo, la empresa, por escrito, comunicará la aceptación de la petición, planteará una propuesta alternativa que posibilite las necesidades de conciliación de la persona trabajadora o bien manifestará la negativa a su ejercicio. En este último caso, se indicarán las razones objetivas en las que se sustenta la decisión.</em></p>
<p><em>La persona trabajadora tendrá derecho a solicitar el regreso a su jornada o modalidad contractual anterior una vez concluido el periodo acordado o cuando el cambio de las circunstancias así lo justifique, aun cuando no hubiese transcurrido el periodo previsto.</em></p>
<p><em>Lo dispuesto en los párrafos anteriores se entiende, en todo caso, sin perjuicio de los permisos a los que tenga derecho la persona trabajadora de acuerdo con lo establecido en el artículo 37.</em></p>
<p><em>Las discrepancias surgidas entre la dirección de la empresa y la persona trabajadora serán resueltas por la jurisdicción social a través del procedimiento establecido en el artículo 139 de la Ley 36/2011, de 10 de octubre, Reguladora de la Jurisdicción Social”.</em></p>
<p></p>
<p><strong>CUARTO.-</strong> Es preciso distingir: </p>
<p>1) El art. 37 del ET regula la reducción de jornada y la concreción dentro de la jornada ordinaria.</p>
<p>2) El art. 34.8 del ET se ocupa de la adaptación y distribución de la jornada para hacer efectivo el derecho de conciliación.</p>
<p>La STC núm. 24/2011, de 14 marzo señala que <em>“nos encontramos con una doble regulación jurídica que no se puede confundir, pues ha de distinguirse entre la posibilidad de solicitar una reducción de jornada para el cuidado de hijos con la consiguiente reducción de salario (que fue la opción elegida por la trabajadora en el caso resuelto en nuestra STC 3/2007), que supone el reconocimiento de un derecho exigible al amparo del art. 37.5 LET, de aquellos otros supuestos (como es el caso que ahora se nos plantea) en los que se pretende una adaptación de la duración y distribución de la jornada a las concretas necesidades del trabajador con el objeto de conciliar vida privada, familiar y laboral y que tiene apoyo en un precepto diverso, esto es, el art. 34.8 LET”.</em></p>
<p>En el supuesto enjuiciado se ejercita la acción del art. 34.8 ET de adaptación de jornada. El derecho reconocido en el art. 34.8 ET no es un derecho absoluto de la persona trabajadora. Lo que se reconoce en dicho precepto es más bien una expectativa, donde el derecho absoluto del trabajador se refiere a formular la solicitud de las adaptaciones de la duración y distribución de la jornada de trabajo “para hacer efectivo su derecho a la conciliación de la vida familiar y laboral”. Ello no implica que la solicitud tenga porque ser reconocida siempre y en todo caso. Así cabe la posibilidad de que sea reconocida por la empresa, que se ofrezca otra solución alternativa, o bien que sea denegada.</p>
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
