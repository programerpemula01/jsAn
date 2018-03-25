// Event onclick untuk dapat text/tulisan sesuai yg di klik.

var list = document.getElementById("parent").children;
var result = document.getElementById("result");

for (var i=0; i<list.length; i++) {
	list[i].onclick = function(){
		result.innerText = this.innerText;
	}
}

/*
Berikut ini struktur HTMLnya.
<nav class="form-group" id="parent">
	<a href="#" class="btn btn-sm btn-default">PHP</a>
	<a href="#" class="btn btn-sm btn-info">Javascript</a>
	<a href="#" class="btn btn-sm btn-danger">Golang</a>
</nav>

<p>You chose <strong id="result"></strong></p>
*/