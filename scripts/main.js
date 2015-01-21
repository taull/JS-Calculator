var operation;
var calculatedValue="displayedNumber";

function plusPressed(){
  operation = '+';
}

function minusPressed(){
  operation = '-';
}

function multiplyPressed(){
  operation = '*';
}

function dividePressed(){
  operation = '÷';
}

function equalsPressed(){
  operation = '=';
}

function numberPressed(number){
  var displayedNumber = Number(document.getElementById('display').textContent);

  if(operation == '+') {
      displayedNumber = displayedNumber + number;
  } else if(operation == '-') {
      displayedNumber = displayedNumber - number;
  } else if(operation == "*") {
      displayedNumber = displayedNumber * number;
  } else if(operation == "÷") {
      displayedNumber = displayedNumber / number;
  } else {
      displayedNumber = displayedNumber + '' + number;
  }

  document.getElementById('display').textContent = displayedNumber;
}

function ninePressed(event) {
  event.preventDefault();
  numberPressed(Number(9));
}

function eightPressed(event) {
  event.preventDefault();
  numberPressed(Number(8));
}

function sevenPressed(event) {
  event.preventDefault();
  numberPressed(Number(7));
}

function sixPressed(event) {
  event.preventDefault();
  numberPressed(Number(6));
}

function fivePressed(event) {
  event.preventDefault();
  numberPressed(Number(5));
}

function fourPressed(event) {
  event.preventDefault();
  numberPressed(Number(4));
}

function threePressed(event) {
  event.preventDefault();
  numberPressed(Number(3));
}

function twoPressed(event) {
  event.preventDefault();
  numberPressed(Number(2));
}

function onePressed(event) {
  event.preventDefault();
  numberPressed(Number(1));
}

function zeroPressed(event) {
  event.preventDefault();
  numberPressed(Number(0));
}




document.getElementById('nine').addEventListener('click', ninePressed);
document.getElementById('eight').addEventListener('click', eightPressed);
document.getElementById('seven').addEventListener('click', sevenPressed);
document.getElementById('six').addEventListener('click', sixPressed);
document.getElementById('five').addEventListener('click', fivePressed);
document.getElementById('four').addEventListener('click', fourPressed);
document.getElementById('three').addEventListener('click', threePressed);
document.getElementById('two').addEventListener('click', twoPressed);
document.getElementById('one').addEventListener('click', onePressed);
document.getElementById('zero').addEventListener('click', zeroPressed);

document.getElementById('plus').addEventListener('click', plusPressed);
document.getElementById('minus').addEventListener('click', minusPressed);
document.getElementById('divide').addEventListener('click', dividePressed);
document.getElementById('multiply').addEventListener('click', multiplyPressed);
document.getElementById('equals').addEventListener('click', equalsPressed);
