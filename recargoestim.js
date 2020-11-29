// Graba los valores del formulario a la url
const words = new URLSearchParams(window.location.search);

// Limpia y capitaliza los nombres de las partes
function cleanAndCap (str){
  if(!str) return null
  let temp = str.trim()
  return temp[0].toUpperCase() + temp.substring(1)
}

function cleanAndCapall (str){
  if(!str) return null
  let temp = str.trim()
  return temp.toUpperCase()
}

// Asigna variables a los nombres usados en el formulario
const actor= cleanAndCapall(words.get('actor'));
const demandado = cleanAndCap(words.get('demandado'));

const fechaactainspeccion = words.get('fechaactainspeccion');
const fecharesolucionrecargo = cleanAndCap(words.get('fecharesolucionrecargo'));

const porcentajerecargo = words.get('porcentajerecargo');

const articulosinfringidos = words.get('articulosinfringidos');
const fechareclamacionprevia = words.get('fechareclamacionprevia');
const razonestim = words.get('razonestim');

const caso = words.get('caso');
const hechos = words.get('hechos');

const prueba = words.get('prueba');
const fecharesolucionreclamacionprevia = words.get('fecharesolucionreclamacionprevia');
const numero = words.get('numero');
const ano = words.get('ano');

// La frase contiene HTML y texto que se pondrá en la página del resultado
const sentencia = `<p>Visto por m&iacute;, D. Javier Ercilla Garc&iacute;a, Magistrado del Juzgado de lo Social N&ordm; 10 de los de Las Palmas de Gran Canaria y su provincia, en audiencia p&uacute;blica, el juicio sobre Recargo de Prestaciones, seguido ante este Juzgado bajo n&ordm; 000000000<span class="word" title="id: numero">${numero}</span>/<span class="word" title="id: ano">${ano}</span>, promovido a instancia de <span class="word" title="id: actor">${actor}</span>, contra&nbsp;el Instituto Nacional de la Seguridad Social, la Tesorer&iacute;a General de la Seguridad Social y&nbsp;<span class="word" title="id: demandado">${demandado}</span>, atendiendo a los siguientes.</p>
<h4 class="sent"><strong>ANTECEDENTES DE HECHO</strong></h4>
<p><strong>PRIMERO.- </strong>La parte actora arriba indicada present&oacute; en el Decanato una demanda que fue repartida a este Juzgado y en la que, previa alegaci&oacute;n de los hechos y fundamentos de derecho que estim&oacute; procedentes, termin&oacute; suplicando que se dictara una sentencia de conformidad con sus pretensiones.</p>
<p><strong>SEGUNDO.- </strong>Admitida a tr&aacute;mite la demanda, las partes fueron citadas al acto de juicio. Comparecidas las partes, asistidas en la forma que consta en acta, se pas&oacute; al acto de juicio. En &eacute;l, y una vez que se hubo efectuado la daci&oacute;n de cuenta de los antecedentes, la parte actora se ratific&oacute; en su demanda. La parte demandada se opuso a la demanda y la contest&oacute; formulando las alegaciones que constan en acta. Seguidamente, fue abierta la fase probatoria, en la que se practicaron las pruebas que, propuestas por las partes, fueron declaradas pertinentes y constan documentadas en autos. Practicada la prueba, las partes informaron sobre sus pretensiones y el juicio qued&oacute; visto para sentencia.</p>
<p><strong>TERCERO.- </strong>En la sustanciaci&oacute;n de estos autos se han observado todas las prescripciones legales aplicables salvo el sistema de plazos.</p>
<h4 class="sent">HECHOS PROBADOS</h4>

<p><strong>PRIMERO.- </strong>La Inspecci&oacute;n Provincial de Trabajo y Seguridad Social extendi&oacute; el acta de infracci&oacute;n en fecha <span class="word" title="id: fechaactainspeccion">${fechaactainspeccion}</span>. Igualmente promovi&oacute; un expediente de Recargo de Prestaciones, tramitado ante el Instituto Nacional de la Seguridad Social con audiencia de las partes.</p>
<p><strong>SEGUNDO.-</strong> Por Resoluci&oacute;n del Instituto Nacional de la Seguridad Social de <span class="word" title="id: fecharesolucionrecargo">${fecharesolucionrecargo}</span>, se acord&oacute; declarar la existencia de responsabilidad por falta de medidas de seguridad y salud en el trabajo, en el accidente de trabajo sufrido por <span class="word" title="id: demandado">${demandado}</span>, as&iacute; como la procedencia de que las prestaciones de Seguridad Social derivadas del accidente antedicho fuesen incrementadas en el <span class="word" title="id: porcentajerecargo">${porcentajerecargo}</span>% con cargo exclusivo a la empresa, como responsable del accidente.</p>
<p>Se especifica que la omisi&oacute;n de medidas de seguridad que determinaron el accidente fueron las establecidas en los arts. <span class="word" title="id: articulosinfringidos">${articulosinfringidos}</span> de la LRJS.</p>
<p><strong>TERCERO.- </strong>Contra dicha Resoluci&oacute;n la empresa interpuso la oportuna reclamaci&oacute;n previa, en fecha <span class="word" title="id: fechareclamacionprevia">${fechareclamacionprevia}</span>, que fue expresamente desestimada por Resoluci&oacute;n de la Direcci&oacute;n Provincial del Instituto Nacional de la Seguridad Social de fecha <span class="word" title="id: fecharesolucionreclamacionprevia">${fecharesolucionreclamacionprevia}</span>.</p>
<p><strong>CUARTO.- </strong>[&hellip;]</p>
<p><strong>QUINTO.- </strong>[&hellip;]</p>

<h4 class="sent">FUNDAMENTOS DE DERECHO</h4>

<p><strong>PRIMERO.- </strong>En cumplimiento de lo dispuesto en el art. 97.2 de la LRJS este &oacute;rgano judicial debe explicitar el razonamiento probatorio. Los hechos probados primero, segundo, y tercero tienen la naturaleza de hechos admitidos o conformes. Se trata de hechos que son alegados por una de las partes en el proceso y son admitidos por la contraria, los cuales no son objeto de prueba, ya que la afirmaci&oacute;n f&aacute;ctica de las partes vincula al juez (arts. 87.1 LRJS y 281.3 LEC).</p>
<p>Los hechos probados cuarto y quinto resultan del an&aacute;lisis del conjunto de la prueba practicada conforme a las reglas de la sana cr&iacute;tica, habi&eacute;ndose acreditado por la prueba practicada en el acto del juicio oral, a saber <span class="word" title="id: prueba">${prueba}</span>.</p>
<p>&nbsp;</p>
<p><strong>SEGUNDO.- </strong>La parte actora interpone demanda en la que tras las alegaciones de hecho y de derecho que estimaba de aplicaci&oacute;n, terminaba solicitando que se declarase que la resoluci&oacute;n dictada en v&iacute;a administrativa mediante la cual se ampliaba la responsabilidades derivadas de un recargo de prestaciones a la empresa demandante, por no ser ajustaba a derecho, y que en consecuencia se dejase sin efecto.</p>
<p>El Instituto Nacional de la Seguridad Social y a la Tesorer&iacute;a General del Seguridad Social se oponen a la demanda sobre la base de los fundamentos propios de la Resoluci&oacute;n Administrativa impugnada, interesando la desestimaci&oacute;n.</p>
<p>La persona trabajadora <span class="word" title="id: demandado">${demandado}</span>, se adhiere a la oposici&oacute;n formulada por el Instituto Nacional de la Seguridad Social y a la Tesorer&iacute;a General del Seguridad Social, interesando la desestimaci&oacute;n.</p>
<p>&nbsp;</p>
<p><strong>TERCERO.- </strong>Seg&uacute;n reiterada Jurisprudencia, dado su car&aacute;cter punitivo, el&nbsp; art&iacute;culo 123.1 de la LGSS debe interpretarse restrictivamente, lo que no ha de impedir la aplicaci&oacute;n estricta de la norma ni permitir la impunidad de la conducta negligente de la empresa.</p>
<p>Para que opere dicha norma, se requiere:</p>
<ol>
<li>La lesi&oacute;n producida debe haber sido precedida por el incumplimiento de alguna obligaci&oacute;n de seguridad e higiene en el trabajo (STSJ de Andaluc&iacute;a 14-1-98, recurso 816/1997), tiene que existir culpa o negligencia por parte del empresario -exclusiva o compartida- (STSJ Galicia 11-7-00, recurso 2397/1997), pudiendo afectar la omisi&oacute;n tanto a las medidas generales como a las particulares de seguridad e higiene exigibles, atendidas las caracter&iacute;sticas espec&iacute;ficas de cada actividad laboral en concreto puesta en relaci&oacute;n con la edad, sexo y dem&aacute;s condiciones del trabajador; no bastando con poner a disposici&oacute;n de los operarios los distintos medios o instrumentos que puedan evitar el riesgo, dejando a su arbitrio la utilizaci&oacute;n de los mismos, sino que tal obligaci&oacute;n implica la de dar las &oacute;rdenes e instrucciones concretas y oportunas para su utilizaci&oacute;n, vigilando y controlando que por los operarios se pongan en pr&aacute;ctica, ya "no basta la sola prohibici&oacute;n de las pr&aacute;cticas peligrosas si no se adoptan las medidas necesarias para hacer efectiva la prohibici&oacute;n"(STS Sala 3&ordf;, Secc.4&ordf;, 03-03-98, recurso 8809/1992).</li>
<li>Debe existir relaci&oacute;n de causalidad entre la infracci&oacute;n cometida y la lesi&oacute;n sufrida (TS 08-06-87, TSJ de La Rioja 03-02-00, recurso 286/1999). No se prev&eacute; la imposici&oacute;n del recargo por el mero hecho de omitirse los dispositivos de precauci&oacute;n reglamentarios o de inobservarse las medidas generales o particulares de seguridad e higiene en el trabajo, o las elementales de salubridad o las de adecuaci&oacute;n personal a cada trabajo, sino que exige que la lesi&oacute;n se produzca por tales incumplimientos (STSJ Pa&iacute;s Vasco 26-01-99, recurso 2608/1998). Que exista una adecuada relaci&oacute;n causal entre el siniestro productor del resultado lesivo para la vida o la integridad f&iacute;sica del trabajador, generador de prestaciones econ&oacute;micas de la Seguridad Social, y la conducta del empleador.</li>
<li>Para determinar la responsabilidad de la empresa, es preciso un elemento de voluntariedad a t&iacute;tulo de dolo, culpa o al menos negligencia , responsabilidad que recae directamente sobre el empresario infractor, como advierte el n&uacute;mero 2 del citado art&iacute;culo 123, alcanzando a la empresa como responsable en esta materia por los hechos cometidos por sus empleados en su actividad laboral. Se trata de responsabilidad empresarial cuasi-objetiva con escasa incidencia de la conducta del trabajador, como se afirm&oacute; con relaci&oacute;n a la intrascendencia de la falta de negativa a realizar los trabajos sin la protecci&oacute;n requerida en un supuesto de accidente laboral de un trabajador con cargo de colaboraci&oacute;n en materia de seguridad e higiene (STS 06-05-1998, recurso 2318/1997). Sin embargo, la relaci&oacute;n de causalidad se rompe y, en consecuencia, el recargo no procede, cuando el trabajador era consciente y conocedor de los peligros que supon&iacute;a su actuaci&oacute;n, as&iacute; como responsable de la adopci&oacute;n de las medidas adecuadas y de ponerlas en conocimiento de la empresa. Es decir, se excluye la responsabilidad empresarial cuando la producci&oacute;n del evento acontece de manera fortuita, de forma imprevista o imprevisible, sin constancia di&aacute;fana del incumplimiento por parte del empleador de alguna norma de prevenci&oacute;n, o por imprudencia (que ha ser temeraria) del propio trabajador accidentado (STSJ del Pa&iacute;s Vasco, 28-01-2020, recurso 21/2020). Ahora bien, no se exonera de responsabilidad al empresario, si la conducta imprudente del trabajador no rompe el nexo causal entre la infracci&oacute;n empresarial de la norma de seguridad y el accidente o da&ntilde;o sufrido (STS 06-05-1998, recurso 2318/1997); en estos casos s&oacute;lo puede disminuir el porcentaje, pero no exonerar de responsabilidad al empresario (STSJ de Madrid 11-06-99, recurso 1751/1999).</li>
</ol>
<p>&nbsp;</p>
<p><strong>CUARTO.- </strong> Trayendo la realidad descrita en los Hechos Probados a la norma legal citada y la doctrina jur&iacute;dica expresada pueden apreciarse todos los elementos necesarios para la exclusi&oacute;n de la responsabilidad empresarial en la producci&oacute;n del evento, <span class="word" title="id: razonestim">${razonestim}</span>.</p>
<p>La STS de 28-2-2019, recurso 508/2017, se&ntilde;ala que la culpa est&aacute; conectada con la diligencia que es exigible al deudor en cada supuesto. En esta materia es exigible la m&aacute;xima diligencia objetiva y t&eacute;cnicamente. Por ello, como se deriva del art. 5.&deg; de la Directiva 89/391, de la Comunidad Europea, s&oacute;lo impedir&aacute;n la existencia de culpa y el nacimiento de responsabilidad aquellos hechos extra&ntilde;os por completo al sujeto responsable, como son las situaciones de fuerza mayor, caso fortuito y situaci&oacute;n de necesidad. Sin embargo, el error o la imprevisi&oacute;n no liberar&aacute;n de culpa leve, porque el patrono debe conocer su industria y prever los diferentes riesgos.</p>
<p>Por ende, el empresario no incurre en responsabilidad alguna cuando el resultado lesivo se hubiese producido por fuerza mayor o caso fortuito, pero en estos casos es a la empresa a quien le corresponde acreditar la concurrencia de esa posible causa de exoneraci&oacute;n, en tanto que es la titular de la deuda de seguridad y habida cuenta de los t&eacute;rminos cuasiobjetivos en que la misma est&aacute; concebida legalmente. Esto es, deber&aacute; probar que cumpli&oacute; todas las normas de seguridad y que adopt&oacute; cuantas medidas de prevenci&oacute;n eran necesarias, as&iacute; como que el siniestro se debi&oacute; a fuerza mayor o caso fortuito (STS 30 junio 2003, recurso 2403/2002).</p>
<p>En el presente caso nos encontramos con que no se aprecia incumplimiento alguno de medidas de seguridad e higiene en el trabajo, tanto generales como espec&iacute;ficas, igualmente, no se observa en la producci&oacute;n del accidente un elemento de voluntariedad a t&iacute;tulo de dolo, culpa o al menos negligencia por parte de la empresa. A saber en la presente causa, </strong> <span class="word" title="id: caso">${caso}</span>.</p>
<p>Consecuentemente, procede la estimaci&oacute;n de la demanda.</p>
<p><strong>QUINTO.- </strong>A tenor de lo dispuesto en el art. 97.4 de la LRJS se debe indicar a las partes procesales si la presente sentencia es firme o no, y en su caso los recursos que contra ella proceden, as&iacute; como las circunstancias de su interposici&oacute;n. En cumplimiento de ello se advierte a las partes que la presente resoluci&oacute;n no es firme y que contra ella puede interponerse recurso de suplicaci&oacute;n con todos los requisitos que en el fallo se se&ntilde;alan, seg&uacute;n se desprende del art. 191.3.g) de la LRJS.</p>
<p>Vistos los preceptos citados y dem&aacute;s de general y pertinente aplicaci&oacute;n.</p>
<h4 class="sent">FALLO</h4>
<p>Estimo la demanda de recargo de prestaciones interpuesta por <span class="word" title="id: actor">${actor}</span> frente al Instituto Nacional de la Seguridad Social, la Tesorer&iacute;a General del Seguridad Social y la persona trabajadora &nbsp;<span class="word" title="id: demandado">${demandado}</span>, y por ende revoco la Resolución de fecha <span class="word" title="id: fecharesolucionrecargo">${fecharesolucionrecargo}</span> de la Dirección Provincial del Instituto Nacional de la Seguridad Social, dejándola sin efecto.</p>
<p>Notif&iacute;quese a las partes en legal forma.</p>
<p>Contra la presente sentencia cabe interponer recurso de suplicaci&oacute;n ante la Sala de lo Social del Tribunal Superior de Justicia, que deber&aacute; prepararse ante este mismo Juzgado mediante escrito o comparecencia de acuerdo con lo dispuesto en el Texto Refundido de la Ley Reguladora de la Jurisdicci&oacute;n Social, dentro de los cinco d&iacute;as siguientes al en que se produzca su notificaci&oacute;n; debiendo la empresa condenada si fuere &eacute;sta la que recurriere, presentar resguardo acreditativo de haber ingresado tanto el importe de la condena como el dep&oacute;sito de 300 euros previsto en el art&iacute;culo 229 de la Ley Reguladora de la Jurisdicci&oacute;n Social en la Cuenta de Dep&oacute;sitos y Consignaciones de este Juzgado.</p>
<p>As&iacute; por esta mi sentencia lo pronuncio, mando y firmo.</p>`;

// Grabar el valor del contenido de la sentencia
const storyEl = document.getElementById('sentencia');
// Progar el elemento sentencia con el valor de las variables
storyEl.innerHTML = sentencia;
