/* 13. Masukkan nilai dari inputan promptnya
ke dalam array kosong
dengan bantuan perintah while() sebanyak 5 kali
Lalu tampilkan hasil console isi arraynya */

var _count = 0 
var modules = []
while(_count <= 5)
{
	var _input = prompt("Masukkan Nama Module?")
	modules[_count] = _input //bisa menggunakan push
	_count++
}

console.log(modules)

/* --------- Mendapatkan 10 Point untuk yg bisa mengerjakan. --------- */