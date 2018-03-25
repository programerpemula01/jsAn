var list = document.getElementsByClassName("list-group-item")
var item = document.querySelector("mark");

// list.length = 4
for(var i=0; i < list.length; i++){
	list[i].onclick = function() {

		var count = item.innerText;
		var hasil = parseInt(count);
		var total = 0;

		if (this.className != "list-group-item active") {
			this.classList.add("active");
			item.innerText = hasil += 1;
		} else {
			this.classList.remove("active");
			item.innerText = hasil -= 1;
		}
	}
}


/*
<ul class="list-group">
	<li class="list-group-item">Development </li>
	<li class="list-group-item">Hosting & Domain </li>
	<li class="list-group-item">Design </li>
	<li class="list-group-item">Code Integration </li>
	<li class="list-group-item">Marketing</li>
	<li class="list-group-item">Analisa</li>
	<li class="list-group-item">Testing</li>
	<li class="list-group-item">Implementasi</li>
</ul>

<p class="mt-3 bg-warning">Total: <mark>0</mark> Items</p>
*/