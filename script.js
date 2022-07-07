let moneyEle = document.getElementById('money');
let selectEle = document.getElementById('select');

//1.swapping with using 3rd variable
let a = 6;
let b = 8;
let c = b;
b = a;
a = c;
console.log(a);
console.log(b);

//1.swapping without using 3rd variable
let fstNum = 10;
let secNum = 20;
secNum = fstNum + secNum;
fstNum = secNum - fstNum; //20
secNum = secNum - fstNum;
console.log(fstNum);
console.log(secNum);

//2. check the number is integer or not
let num = 6.8;
function checkInteger(num) {
  let floorVal = Math.floor(num);
  let result = num - floorVal;
  console.log(result);
  if (result === 0) {
    console.log('true');
  } else {
    console.log('false');
  }
}
checkInteger(num);

//3.predict the output
console.log(0.1 + 0.2 === 0.3); //false
console.log(0.1 + 0.2);

//4.show currency type

let value = 10000;
function showCurrencyIn(value, currency) {
  let output = value.toLocaleString();
  console.log(`${currency}${output}`);
}
showCurrencyIn(value, '$');

//4.to display in UI
function getCurrency() {
  money.textContent = `${selectEle.value}${value.toLocaleString()}`;
}
