/* 16. Misalnya kita punya array angka 
Lalu hitung total keseluruhan dari isi array angka tersebut 
tidak boleh menggunakan method dari javascript */

var _sum = 0;

var angka = [5, 2, 4, 6, 10]
for(var i = 0; i < angka.length; i++) {
	_sum += angka[i]
}

console.log('Total ' +_sum)