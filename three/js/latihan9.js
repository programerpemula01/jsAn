/* 
Membuat validasi inputan tidak boleh kosong
Kalo kosong tambahkan pesan kesalahannya.

dan jika inputannya di isi
maka tampil nilai inputannya kedalam HTMLnya.

note: pastikan memilih elemennya sesuai dengan struktur yg ada.
*/

var input = document.querySelector('input')
var btn = document.querySelector('button')
var tagLine = document.querySelector('#subTitle')

btn.onclick = function() {
	var text = input.value

	if(text == "") {
		input.setAttribute('placeholder', 'Tidak Boleh Kosong')
	} else {
		input.value = ""
		input.setAttribute('placeholder', '')
		tagLine.innerHTML = "Hi, <strong>"+text+"</strong>"
	}
}

/*
Bootstrap 4.
Berikut ini struktur html-nya.

<input type="text">
<button>Submit</button>
*/

