//Botones de seleccion de clases de modelos
document.getElementById('c1').addEventListener('click', () => {
  document.getElementById('c2').style.display = 'none';
  document.getElementById('c3').style.display = 'block';
  document.getElementById('f2').style.display = 'block';
  document.getElementById('f3').style.display = 'block';
  document.getElementById('f1').style.display = 'block';
})

document.getElementById('c2').addEventListener('click', () => {
  document.getElementById('c1').style.display = 'none';
  document.getElementById('c3').style.display = 'block';
  document.getElementById('f4').style.display = 'block';
  document.getElementById('f5').style.display = 'block';
  document.getElementById('f6').style.display = 'block';
})

document.getElementById('c3').addEventListener('click', () => {
  document.getElementById('c1').style.display = 'block';
  document.getElementById('c2').style.display = 'block';
  document.getElementById('c3').style.display = 'none';
  document.getElementById('f2').style.display = 'none';
  document.getElementById('f3').style.display = 'none';
  document.getElementById('f1').style.display = 'none';
  document.getElementById('f4').style.display = 'none';
  document.getElementById('f5').style.display = 'none';
  document.getElementById('f6').style.display = 'none';
  document.getElementById('form1').style.display = 'none';
  document.getElementById('form2').style.display = 'none';
  document.getElementById('form3').style.display = 'none';
  document.getElementById('form4').style.display = 'none';
  document.getElementById('form5').style.display = 'none';
  document.getElementById('form6').style.display = 'none';
})

//Botones de seleccion de los tipos de cada clase de modelos

document.getElementById('f1').addEventListener('click', () => {
  document.getElementById('c1').style.display = 'none';
  document.getElementById('c2').style.display = 'none';
  document.getElementById('form2').style.display = 'none';
  document.getElementById('form3').style.display = 'none';
  document.getElementById('form4').style.display = 'none';
  document.getElementById('form5').style.display = 'none';
  document.getElementById('form6').style.display = 'none';
  document.getElementById('form1').style.display = 'block';
})
document.getElementById('f2').addEventListener('click', () => {
  document.getElementById('c1').style.display = 'none';
  document.getElementById('c2').style.display = 'none';
  document.getElementById('form1').style.display = 'none';
  document.getElementById('form3').style.display = 'none';
  document.getElementById('form4').style.display = 'none';
  document.getElementById('form5').style.display = 'none';
  document.getElementById('form6').style.display = 'none';
  document.getElementById('form2').style.display = 'block';
})
document.getElementById('f3').addEventListener('click', () => {
  document.getElementById('c1').style.display = 'none';
  document.getElementById('c2').style.display = 'none';
  document.getElementById('form2').style.display = 'none';
  document.getElementById('form1').style.display = 'none';
  document.getElementById('form4').style.display = 'none';
  document.getElementById('form5').style.display = 'none';
  document.getElementById('form6').style.display = 'none';
  document.getElementById('form3').style.display = 'block';
})

document.getElementById('f4').addEventListener('click', () => {
  document.getElementById('c1').style.display = 'none';
  document.getElementById('c2').style.display = 'none';
  document.getElementById('form2').style.display = 'none';
  document.getElementById('form1').style.display = 'none';
  document.getElementById('form3').style.display = 'none';
  document.getElementById('form5').style.display = 'none';
  document.getElementById('form6').style.display = 'none';
  document.getElementById('form4').style.display = 'block';
})

document.getElementById('f5').addEventListener('click', () => {
  document.getElementById('c1').style.display = 'none';
  document.getElementById('c2').style.display = 'none';
  document.getElementById('form2').style.display = 'none';
  document.getElementById('form1').style.display = 'none';
  document.getElementById('form3').style.display = 'none';
  document.getElementById('form4').style.display = 'none';
  document.getElementById('form6').style.display = 'none';
  document.getElementById('form5').style.display = 'block';
})

document.getElementById('f6').addEventListener('click', () => {
  document.getElementById('c1').style.display = 'none';
  document.getElementById('c2').style.display = 'none';
  document.getElementById('form2').style.display = 'none';
  document.getElementById('form1').style.display = 'none';
  document.getElementById('form3').style.display = 'none';
  document.getElementById('form5').style.display = 'none';
  document.getElementById('form4').style.display = 'none';
  document.getElementById('form6').style.display = 'block';
})

