/*
Tampilkan pesan Alert.
berdasarkan waktu yg ditentukan.

dan jika 'diclose' pesan Alertnya
maka dia otomatis tampil kembali 

note: pastikan memilih elemennya sesuai dengan struktur yg ada.
*/

var alert = document.querySelector('.alert')

if(!alert.classList.contains('show')) {
	showMessage()
}

function showMessage()
{
	setTimeout(function(){
		alert.classList.add('show')
	}, 2000)
}

var close = document.querySelector('.close')
close.addEventListener('click', function(){
	alert.classList.remove('show')
	showMessage()
})


/*
Bootstrap 4.
Berikut ini struktur html-nya.

<div class="alert alert-warning fade">
  <strong>Holy guacamole!</strong> You should check in on some of those fields below.
  <button type="button" class="close">
    <span>&times;</span>
  </button>
</div>

*/