/* 6. Melakukan operator aritmatika
dari dua bilangan yakni 10 dan 18

tentu menentukan operasinya melalui inputan prompt
bisa berupa operator ( + - * / )

*/

var _simbol = prompt('Pilih Operatornya: (+, -, /, *, %)')
var bil1 = 10;
var bil2 = 18;
var total;

if(_simbol == "+") {
	total = bil1 + bil2;
} else if(_simbol == "-") {
	total = bil1 - bil2;
} else if(_simbol == "*") {
	total = bil1 * bil2;
} else if(_simbol == "/") {
	total = bil1 / bil2;
} else {
	total = "Silahkan pilih operatornya yang benar."
}

console.log('Total: ' +total)

/* --------- Mendapatkan 5 Point untuk yg bisa mengerjakan. --------- */