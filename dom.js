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