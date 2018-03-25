/*
faktorial: Pelajaran matematika.

MEMBUAT sebuah fungsi faktorial: 
yakni ketika saya masukkan angka 5 kedalam sebuah fungsi faktorial()
maka dia akan menghitung seperti ini
5*4*3*2*1 = 120

Begitu saya masukkan 10:
Maka teman teman bisa tebak hasil jumlah dari faktorial 10?
*/

function faktorial(n) {
	if(n === 0) return 1
	return n * faktorial(n-1)
}

function faktorial(n) {
	var hasil = 1
	for(var i = n; i > 0; i--) {
		hasil *= i
	}

	return hasil
}
