/*
11. Membuat rangkaian bintang menggunakan for
*/
var bintang = '';
for(var x = 0; x < 5; x++) {
	for(y = 0; y <= x; y++) {
		bintang += "*";
	}

	bintang += "\n"
}

console.log(bintang)

/* --------- Mendapatkan 10 Point untuk yg bisa mengerjakan. --------- */