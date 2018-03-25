/*

Mengetikkan sesuatu didalam inputan pencarian
Ambil nilainya hilangkan elemen HTML yg tidak sesuai 
dengan keyword pencariannya.

note: pastikan memilih elemennya sesuai dengan struktur yg ada.
*/

var input = document.getElementById("input");
var list = document.getElementById("demo").children;

input.onkeyup = function(){
	var text = this.value.toLowerCase();
	for(var i = 0; i < list.length; i++) {
		if(list[i].innerText.toLowerCase().indexOf(text) > -1){ 
		//bila karakter tidak ditemukan maka akan menghasilkan nilai -1
			list[i].style.display = "";
		} else {
			list[i].style.display = "none";
		}
	}
}

/*
Bootstrap 4.
Berikut ini struktur html-nya.

<div class="form-group">
	<input type="text" placeholder="Search for names.." id="input" >
</div>

<ul id="demo">
	<li>HTML</li>
	<li>Express</li>
	<li>CSS</li>
	<li>PHP</li>
	<li>MySQL</li>
	<li>jQuery</li>
	<li>NodeJS</li>
	<li>Angular</li>
</ul>
*/