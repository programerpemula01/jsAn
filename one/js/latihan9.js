/* 9. Buatkan array colors sebagai berikut
Lalu tampilkan ke daftar list document HTML
dan berikan warna background sesuai dengan array colorsnya */

var colors = ['salmon', 'lightgreen', '#ccc', 'aqua']
var list = document.getElementById('list')
for(var i = 0; i < colors.length; i++)
{
	list.innerHTML += '<li style="background: '+colors[i]+'">'+ colors[i] +'</li>'
}

/* --------- Mendapatkan 5 Point untuk yg bisa mengerjakan. --------- */