function fun(bbi) {
  bbi.nextElementSibling.value = "!!!";
}
function funid() {
  let inputa = document.getElementById('in');
  inputa.value = "!!!"
}
function ho() {
  // let say = document.getElementById("hi");
  alert(hi.value);
}
function quadre(as) {
  let num = Number(as.nextElementSibling.value);
  // alert(num * num);
  as.nextElementSibling.value = num * num;
}
function obmen() {
  let input_1 = document.getElementById('in1');
  let input_2 = document.getElementById('in2');
  let woz = input_1.value;
  input_1.value = input_2.value;
  input_2.value = woz;
}
function pis(q) {
  q.value = "Новая надпись";
}
function funColor(th) {
  let text = th.nextElementSibling;
  text.style.color = "red";
}
function funBlock() {
  document.getElementById('inBlock').disabled = true;
}
function funNoBlock() {
  document.getElementById('inBlock').disabled = false;
}
function monkey(it) {
  it.previousElementSibling.src = "http://old.code.mu/exercises/javascript/dom/osnovy-raboty-s-dom-v-javascript/2/3/2.jpg";
}
function blo(j) {
  j.value = "two";
}

function typeRef(i) {
  i.value = "Теперь не нажать";
  i.disabled = true;
}
function noRef(o) {
  o.value = "Нажми на меня!"
  o.disabled = false;
}

function Monkey1(m) {
  m.src = "/img/2monkey.bmp"
}
function Monkey2(m) {
  m.src = "/img/1monkey.bmp"
}

function  disp(b) {
  let show = document.getElementById('di');
  if (b) {
    show.style.display = "inline-block";
  }
  else {
    show.style.display = "none";
  }
}

function calc(but) {
  but.value = Number(but.value) + 1;
}

function gen(ob){
  let num = Math.random();
  ob.value = num;
  console.log(num);
}

function mc(element) {
  element.value = element.className;
}

function sp() {
  let sp = document.querySelector('span');
  sp.innerHTML = "!!!";
}

function bold() {
  let sp = document.getElementById('bld');
  sp.outerHTML = '<b>' + sp.innerHTML + '</b>';
}

// function go(it) {
//   let ps = it.getElementsByTagName('p');
//   for (i=0; i < ps.length; ++i) {
//     ps[i].innerHTML = i+1;
//   }
// }

function clName() {
  let collection = document.getElementsByClassName('zzz');
  for (i = 0; i < collection.length; i++) {
    collection[i].innerHTML = i +1;
  }
}

function go2() {
  let pz = document.querySelectorAll('p.zzzp');
  for (i = 0; i < pz.length; i++) {
    pz[i].innerHTML = i + 1;
  }
}

function fun1ho(jo) {
  let po = jo.previousElementSibling;
  po.innerHTML = "Ку-ку! А я <b>жирный!</b>"
}

function go2(th) {
  let text = th.previousElementSibling;
  text.outerHTML = '<h3>' + 'Абзац превратился в h3!' + '</h3>';
}

function go3(t) {
  let text = t.previousElementSibling;
  text.outerHTML = '<h3>' + text.innerHTML + '</h3>';
}

function calco() {
  // let forma = document.calc;
  // let a = forma.a.value;
  // let b = forma.b.value;
  // let summa = forma.getElementsByClassName('sum');
  // summa[0].innerHTML = Number(a) + Number(b);
  let a = +document.getElementById('a').value;
  let b = +document.getElementById('b').value;
  let summa = document.getElementById('sum');
  summa.innerHTML = a + b;
}
//+ здесь самый удобный вариант - так как числа могут быть как int так и float.
function go(){
  var input1 = +document.getElementById('input1').value;
  var input2 = +document.getElementById('input2').value;
  var result = document.getElementById('result');
  let summ = document.getElementById('summka');
  result.innerHTML = input1 + input2;
  summ.value = input1 + input2;
}

let n = prompt("Введите число", [0]);
n = Math.abs(n) % 100; var n1 = n % 10;
console.log(n);
console.log(n1);