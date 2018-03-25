/* 12. Memfilter mana bilangan ganjil mana bilangan genap
dari hasil nilai array berikut
[2, 9, 10, 3, 7, 1]

Pastikan kita siapkan array kosong.
Untuk array ganjil dan genapnya */

var angka = [2, 9, 10, 3, 7, 1]
var ganjil = [],
		genap = []

for(var i = 0; i < angka.length; i++)
{
	var _data = angka[i]
	if(_data % 2 == 0)
	{
		genap.push(_data)
	} else {
		ganjil.push(_data)
	}
}

console.log(ganjil)
console.log(genap)

/* --------- Mendapatkan 10 Point untuk yg bisa mengerjakan. --------- */