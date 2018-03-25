/*

Memberikan Event Onclick
ketika di klik salah satu buttonnya maka warna background body akan berubah 
sesuai dengan warna yg di klik.
note: pastikan memilih elemennya sesuai dengan struktur yg ada.
*/

var button = document.getElementsByTagName('button')

for(var i = 0; i < button.length; i++) {
	button[i].onclick = function(){
		var color = this.getAttribute('data-color')
		document.body.style.backgroundColor = color
	}
}

/*
Bootstrap 4.
Berikut ini struktur html-nya.

<button data-color="#34ace0" class="btn btn-default btn-sm">Summer Sky</button>
<button data-color="#aaa69d" class="btn btn-default btn-sm">Hot Stone</button>
<button data-color="#f3a683" class="btn btn-default btn-sm">Creamy Peach</button>
<button data-color="#c44569" class="btn btn-default btn-sm">Deep Rose</button>
*/
