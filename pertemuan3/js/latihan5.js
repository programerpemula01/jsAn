/*

Menjalankan progress bar secara otomatis.
progress-bar akan bertambah 10
terus menerus sampai progress-barnya mencapai 100%

Lalu di cek
Pada saat progress-bar mencapai 50% 
maka progress-bar berubah menjadi warna biru.

bila progress-bar mencapai 100% 
progress-bar berubah menjadi warna hijau dan menampilkan pesan kecil
kedalam element HTMLnya

note: pastikan memilih elemennya sesuai dengan struktur yg ada.

*/


var progressbar = document.querySelector('.progress-bar')
var i = 0
var setTimer = setInterval(function(){
	
	progressbar.textContent = i +"%"
	progressbar.style.width = i +"%"
	i += 10

	if(i > 50) {
		progressbar.classList.remove('bg-warning')
	}

	if(i > 100) {
		clearInterval(setTimer);
		progressbar.classList.add('bg-success')
		progressbar.parentElement.nextElementSibling
		.innerHTML = '<p class="alert-success">Upload Berhasil Dilakukan!!</p>'
	}

}, 2000)

/*
Bootstrap 4.
Berikut ini struktur html-nya.

<div></div>

<div class="progress form-group" style="height: 20px">
	<div class="progress-bar bg-warning"></div>
</div>

<div>Masukkan pesan notifnya kesini.</div>

*/