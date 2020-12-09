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

const caso = words.get('caso');
const hechos = words.get('hechos');

const prueba = words.get('prueba');
const canttotal = words.get('canttotal');
const numero = words.get('numero');
const ano = words.get('ano');

function limpiar(dinero) {
    return dinero.replace(".","");}

function convert(dinero){
    return dinero.replace(",",".");}

let recurso;
let pierecurso;

if (convert(limpiar(canttotal)) > 3000){
    recurso= 'A tenor de lo dispuesto en el art. 97.4 de la LRJS se debe indicar a las partes procesales si la presente sentencia es firme o no, y en su caso los recursos que contra ella proceden, así como las circunstancias de su interposición. En cumplimiento de ello se advierte a las partes que la presente resolución no es firme y que contra ella puede interponerse recurso de suplicación con todos los requisitos que en el fallo se señalan, al superar la cuantía reclamada la cantidad de 3.000 euros según se desprende del art. 191.2.g) de la LRJS.';
    pierecurso= 'Contra la presente sentencia cabe interponer recurso de suplicación ante la Sala de lo Social del Tribunal Superior de Justicia, que deberá prepararse ante este mismo Juzgado mediante escrito o comparecencia de acuerdo con lo dispuesto en el Texto Refundido de la Ley Reguladora de la Jurisdicción Social, dentro de los cinco días siguientes al en que se produzca su notificación; debiendo la empresa condenada si fuere ésta la que recurriere, presentar resguardo acreditativo de haber ingresado tanto el importe de la condena como el depósito de 300 euros previsto en el artículo 229 de la Ley Reguladora de la Jurisdicción Social en la Cuenta de Depósitos y Consignaciones de este Juzgado.';
} else {
    recurso= 'A tenor de lo dispuesto en el art. 97.4 de la LRJS se debe indicar a las partes procesales si la presente sentencia es firme o no, y en su caso los recursos que contra ella proceden, así como las circunstancias de su interposición. En cumplimiento de ello se advierte a las partes que la presente resolución es firme y que contra ella no puede interponerse recurso de suplicación, al no superar la cuantía reclamada la cantidad de 3.000 euros según se desprende del art. 191.2.g) de la LRJS.';
    pierecurso= 'Contra la presente sentencia no cabe interponer recurso de suplicación.';
}

// La frase contiene HTML y texto que se pondrá en la página del resultado
const sentencia = `<p>Visto por m&iacute;, D. Javier Ercilla Garc&iacute;a, Magistrado del Juzgado de lo Social N&ordm; 10 de los de Las Palmas de Gran Canaria y su provincia, en audiencia p&uacute;blica, el juicio sobre Reclamación de Cantidad, seguido ante este Juzgado bajo n&ordm; 000000000<span class="word" title="id: numero">${numero}</span>/<span class="word" title="id: ano">${ano}</span>, promovido a instancia de <span class="word" title="id: actor">${actor}</span>, contra <span class="word" title="id: demandado">${demandado}</span>, atendiendo a los siguientes.</p>
<h4 class="sent">ANTECEDENTES DE HECHO</h4>
<p><strong>PRIMERO.- </strong>La parte actora arriba indicada present&oacute; en el Decanato una demanda que fue repartida a este Juzgado y en la que, previa alegaci&oacute;n de los hechos y fundamentos de derecho que estim&oacute; procedentes, termin&oacute; suplicando que se dictara una sentencia de conformidad con sus pretensiones.</p>
<p></p>
<p><strong>SEGUNDO.- </strong>Admitida a trámite la demanda, se citó a las partes para el acto de conciliación y juicio, que se celebró con la comparecencia exclusiva de la parte actora. En la vista, la parte actora ratificó la demanda. Efectuado el oportuno traslado a la parte actora para alegaciones y recibido el pleito a prueba, se procedió a la práctica de la prueba propuesta, con el resultado que obra en las actuaciones. Finalizado el periodo probatorio, se concedió la palabra a la parte presente para formular conclusiones e informe final, manteniendo sus pretensiones iniciales y quedando los autos conclusos para sentencia.</p>
<p><strong>TERCERO.- </strong>En la sustanciaci&oacute;n de estos autos se han observado todas las prescripciones legales aplicables salvo el sistema de plazos.</p>
<h4 class="sent">HECHOS PROBADOS</h4>
<p><strong>PRIMERO.-</strong> <span class="word" title="id: actor">${actor}</span> ha venido prestando servicios laborales para la empresa <span class=""word" title="id: demandado">${demandado}</span> dedicada a la actividad de <span class="word" title="id: actividad">${actividad}</span>, con antig&uuml;edad desde el d&iacute;a <span class="word" title="id: antig">${antig}</span>, categor&iacute;a profesional de <span class="word" title="id: categoria">${categoria}</span> y un salario mensual/diario bruto de <span class="word" title="id: salario">${salario}</span> euros, incluidas las partes proporcionales de las pagas extraordinarias, en virtud de un contrato de trabajo de duraci&oacute;n indefinida a tiempo completo.</p>
<p><strong>SEGUNDO.-</strong> La parte demandante no ostenta ni ha ostentado en el a&ntilde;o anterior al despido la condici&oacute;n de representante legal o sindical de las personas trabajadoras.</p>
<p><strong>TERCERO.-</strong> A la persona trabajadora no se le han abonado las siguientes cantidades:</p>
<p><em><span class="word" title="id: hechos">${hechos}</span></em></p>
<p><strong>CUARTO.-</strong> La parte demandante promovi&oacute; la conciliaci&oacute;n previa al proceso, que se celebr&oacute; el d&iacute;a <span class="word" title="id: fechsemac">${fechsemac}</span> con el resultado de <span class="word" title="id: semac">${semac}</span>, presentando posteriormente demanda de extinción.</p>
<h4 class="sent">FUNDAMENTOS DE DERECHO</h4>
<p><strong>PRIMERO.- </strong>En cumplimiento de lo dispuesto en el art. 97.2 de la LRJS este &oacute;rgano judicial debe explicitar el razonamiento probatorio. Los hechos probados primero, segundo, y tercero tienen la naturaleza de hechos admitidos o conformes. Se trata de hechos que son alegados por una de las partes en el proceso y son admitidos por la contraria, los cuales no son objeto de prueba, ya que la afirmaci&oacute;n f&aacute;ctica de las partes vincula al juez (arts. 87.1 LRJS y 281.3 LEC).</p>
<p>Los hechos probados tercero y cuarto resultan del an&aacute;lisis del conjunto de la prueba practicada conforme a las reglas de la sana cr&iacute;tica, habi&eacute;ndose acreditado por la prueba practicada en el acto del juicio oral, a saber la documental y la <span class="word" title="id: prueba">${prueba}</span>.</p>
<p></p>
<p><strong>SEGUNDO.- </strong>Por la parte actora se solicita que se condene a la empresa a abonar las siguientes cantidades cantidades reclamadas en la demanda. Solicita además los intereses de demora del art. 29.3 ET.</p>
<p></p>
<p><strong>TERCERO.- </strong>La aplicación de principio regulador de la carga de la prueba a los supuestos de reclamaciones de cantidad por salarios devengados y no percibidos, determina que el reclamante venga obligado a demostrar la prestación de los servicios cuyo pago reclama y, en consecuencia, el devengo, no satisfecho, del salario correspondiente a los mismos. Es a la parte demandada, quien excepciona el pago, al que incumbirá la carga de su prueba, debiendo considerarse debidamente justificada la extinción de la obligación salarial cuando conforme a lo dispuesto en el art. 2 de la Orden de 27 de diciembre de 1994 por la que se aprueba el modelo de recibo individual de salarios, el trabajador reconoce como suya la firma estampada en el recibo correspondiente, que al dar fe de la percepción de las cantidades así consignadas, desplaza a quien alega su inefectividad la carga de justificar el impago que invoca.</p>
<p>Así la STS de 2-3-1992, recurso 177/1991, señala que: <em>“el art. 1214 del Código Civil impone al actor la carga de la prueba de los hechos constitutivos de su pretensión y al demandado la de los impeditivos o extintivos de la misma; que la aplicación de este principio a la reclamación de pago de cantidad por salarios devengados y no percibidos determina que el reclamante venga obligado a demostrar la prestación de los servicios cuyo pago reclama y, en consecuencia, el devengo del salario correspondiente a los mismos, y que es al demandado, que excepciona el pago, al que incumbirá la carga de probar dicho pago”.</em></p>
<p></p>
<p><strong>CUARTO.-</strong> En el supuesto enjuiciado, se ha acreditado la antigüedad, categoría y salario de la parte actora, unido al hecho de la incomparecencia de la empresa demandada al acto del juicio, a pesar de haber sido citada en forma y con los apercibimientos legales, por lo que se la tiene por confesa con los hechos de la demanda en virtud de lo dispuesto en el art. 91.2 de la LRJS, se desprende que han quedado acreditadas tanto las circunstancias concurrentes en la parte actora, como la existencia de la deuda, habiendo incumplido la empresa con sus obligaciones, infringiendo de ese modo lo dispuesto en los arts. 4.2 f), 26, 29, 31 y concordantes del ET, que amparan la demanda. Así, en el caso presente, <span class="word" title="id: caso">${caso}<span>.</p>
<p>Sumados los conceptos expuestos en el hecho probado tercero, no le ha sido abonada a la persona trabajadora la cantidad de ${canttotal} euros. La cantidad adeudada generará los intereses del 10% del art. 29.3 ET.</p>
<p><strong>QUINTO.- </strong>Habi&eacute;ndose citado al Fondo de Garant&iacute;a Salarial, conforme a lo dispuesto en el art&iacute;culo 23.1 de la LRJS, &uacute;nicamente puede ser condenado a estar y pasar por este pronunciamiento, sin perjuicio de resultar ulteriormente la insolvencia de la empresa, deba asumir su responsabilidad legal.</p>
<p><strong>SEXTO.- </strong>${recurso}</p>
<p>Vistos los preceptos citados y dem&aacute;s de general y pertinente aplicaci&oacute;n.</p>
<h4 class="sent">FALLO</h4>
<p>Estimo la demanda de reclamación de cantidad interpuesta por <span class="word" title="id: actor">${actor}</span> frente a la empresa <span class="word" title="id: demandado">${demandado}</span>, condenando a esta a abonar la cantidad de ${canttotal} euros, con el interés de demora del 10%.</p>
<p>Notif&iacute;quese a las partes en legal forma.</p>
<p>${pierecurso}</p>
<p>As&iacute; por esta mi sentencia lo pronuncio, mando y firmo.</p>`;

// Grabar el valor del contenido de la sentencia
const storyEl = document.getElementById('sentencia');
// Progar el elemento sentencia con el valor de las variables
storyEl.innerHTML = sentencia;
