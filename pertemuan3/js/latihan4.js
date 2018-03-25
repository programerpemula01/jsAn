/*
ketika di klik salah satu buttonnya
aktifkan nama class yg ada di attribute 'title'
untuk elemen <h3>

tentu kita bisa mengaktifkan banyak 
class untuk satu elemen.

tergantung button yg pilih.

dan jika buttonnya berada dalam keadaan tidak terpilih
maka button & classnya pun tidak aktif.

note: pastikan memilih elemennya sesuai dengan struktur yg ada.
*/

var button = document.querySelectorAll("button");
var elemenTag = document.querySelector("h3");

for(var i = 0; i < button.length; i++) {
	button[i].onclick = function() {
		this.classList.toggle("active");
		elemenTag.classList.toggle(this.title)
	}
}

/*
Bootstrap 4.
Berikut ini struktur html-nya.

<div class="btn-group">
  <button title="display-4" class="btn btn-secondary">Small Size</button>
  <button title="font-weight-bold" class="btn btn-secondary">Font Weight</button>
  <button title="text-uppercase" class="btn btn-secondary">UpperCase</button>
  <button title="text-lowercase" class="btn btn-secondary">LowerCase</button>
  <button title="text-light" class="btn btn-secondary">Text Light</button>
  <button title="bg-warning" class="btn btn-secondary">Background</button>
</div>

*/