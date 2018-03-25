/*
Membuat function untuk menghitung ipSemester yg nilainya sudah ditentukan.
Rumus: total keseluruhan nilai / jumlah nilai array

lalu tampilkan kedalam console log:
pastikan dibelakang koma 2 angka saja. 
*/

var ipSemester = [2.90, 3.10, 3.25, 2.88, 3.04]

function ipkKumulatif(ip)
{
	var total = 0
	for(var i = 0; i < ip.length; i++) {
		total += ip[i]
	}

	return total/ip.length
}

var hasil = ipkKumulatif(ipSemester)
console.log("IP Kumulatif: " +hasil.toFixed(2))