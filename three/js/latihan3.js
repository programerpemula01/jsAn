/*

Proses 'progress-bar' akan bergerak ketika kita mengubah nilai 
inputan range-nya.

note: pastikan memilih elemennya sesuai dengan struktur yg ada.
*/

var range = document.getElementById('range')
var progressbar = document.querySelector('.progress-bar')

range.onchange = function() {
	var data = this.value

	progressbar.textContent = data +"%"
	progressbar.style.width = data +"%"
}

/*

Bootstrap 4.
Berikut ini struktur html-nya.

<div class="progress form-group" style="height: 20px">
	<div class="progress-bar"></div>
</div>

<input type="range" min="0" max="100" value="0" id="range">
*/