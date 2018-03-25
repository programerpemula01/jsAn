/* Tampilkan kedalam Elemen HTML
per-kata dari satu kalimat */
 

var text = "#Selamat Pagi Juara"
var hasil = text.split(" ")

var title = document.getElementById('title')

var i = 0
var timer = setInterval(function(){
	title.innerText = hasil[i]
	
	if(i == hasil.length - 1) clearInterval(timer)
	i++
}, 2000)