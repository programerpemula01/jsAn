/* 7. Latihan for berdasarkan inputan promptnya
dan diberi batas maximalnya 10 point

dan menguji if bersarang
1 = Premium
5 = Pro
10 = Ultimate 

*/

var max = prompt("Batas Perulangan? ")
if(max < 10) {
	for (var i = 0; i <= max; i++) 
	{
		if(i == 1) {
			console.log(i + " - Premium")
		} else if(i == 5) {
			console.log(i + " - Pro")
		} else if(i == 10) {
			console.log(i + " - Ultimate")
		} else {
			console.log(i)
		}
	}
}

/* --------- Mendapatkan 5 Point untuk yg bisa mengerjakan. --------- */