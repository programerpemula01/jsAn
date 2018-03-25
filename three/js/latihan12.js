/* Hilangkan satu persatu kotak div-nya
berdasarkan kotak yg dipilih */

var box = document.getElementsByClassName("box");

for(var i = 0; i < box.length; i++) {
	box[i].addEventListener("click", removeBox)
}

function removeBox(){
	this.style.width = "0";
	this.style.height = "0";
}

/*
Bootstrap 4.
Berikut ini struktur html-nya.

.box { width: 50px; height: 50px; transition: all 1s ease; float: left; 
			margin-right: 10px}

<div class="box bg-warning"></div>
<div class="box bg-danger"></div>
<div class="box bg-info"></div>
*/