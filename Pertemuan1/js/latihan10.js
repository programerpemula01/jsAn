/* 10. Melakukan perulangan while yg nilai awalnya mulai dari 1
Dengan menampilkan alert dengan tulisan cetak bilangan 1, bilangan 2, bilangan 3 ...
Perulangan itu akan berhenti ketika
kita menekan tombol cancel pada dialog confirmnya

dan pada akhirnya kita akan tampilkan
semua hasil perulangan didalam console 

tentu proses perulangan akan terjadi ketika kita menekan tombol OK
pada dialog confirmnya */

var i = 1
var option = confirm('Apakah ingin melakukan perulangan?')
while(option)
{
	alert('Cetak Bilangan ' +i)
	option = confirm('Mau melakukannya lagi?')
	console.log('Bilangan ' +i)
	i++
}


/* --------- Mendapatkan 7 Point untuk yg bisa mengerjakan. --------- */