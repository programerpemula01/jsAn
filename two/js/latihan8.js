/*
MEMBUAT sebuah fungsi untuk memfilter sebuah array.
Rule:

1. Siapkan array angka, dan string
2. Jika parameter yg di masukkan adalah array string
maka yg akan dilakukan oleh fungsi tersebut adalah
'MENGGABUNGKAN' string satu dengan string lainnya

Sedangkan bila parameter yg dimasukkan 
adalah array angka maka yg akan dilakukan oleh fungsi tersebut adalah
'MENJUMLAHKAN' nilai satu dengan nilai dua sesuai dengan isi arraynya.

BUKAN menjalankan metode .length (Ada yg salah paham.)

3. Tampilkan kedalam console.log
*/

var huruf = ['Doremi', 'Faso', 'Lasido']
var angka = [4, 6, 1]

function filter_data(data, type = 'number') {
	
	var hasil = (type == 'string') ? "" : 0

	for(var i = 0; i < data.length; i++) {
		if(type == 'string') {
			hasil += " " +data[i]
		} else {
			hasil += data[i]
		}

		
	}

	return hasil
}

var text = filter_data(angka)
console.log(text)