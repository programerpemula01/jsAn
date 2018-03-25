/* 14. Beginner Intermediate Advanced
"I Am <strong>Beginner</strong>"
Order ? Iya
maka point bertambah 2
Jika 'Tidak' maka tidak mendapatkan point

Rule:
	0 - 5 Beginner
	5 - 10 Intermediate
	10 - 15 Advanced
*/

var _point = 0
var _order = confirm('Order?')
var text = document.getElementById('text')
var level

while(_order)
{
	_point += 2
	alert('Point anda ' +_point)
	var _order = confirm('Order Lagi?')
}

if(_point >= 10 && _point <= 15)
{
	level = "Advanced"
} else if(_point >= 5 && _point < 10) {
	level = "Intermediate"
} else {
	level = "Beginner"
}

text.innerHTML = 'I am <u>'+level+'</u>'

/* --------- Mendapatkan 13 Point untuk yg bisa mengerjakan. --------- */