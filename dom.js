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