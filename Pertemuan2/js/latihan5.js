/*
 Membuat sistem 'counter': yakni penambahan satu dan pengurangan satu
 dengan menambahkan event onclick pada masing masing buttonnya.
*/
var obj = {
	count: 0,
	element: document.getElementById('text'),
	loadCount: function() {
		this.element.textContent = this.count
	},

	increment: function() {
		this.count = this.count + 1
		this.loadCount()
	},

	decrement: function() {
		if(this.count <= 0) this.count = 1

		this.count = this.count - 1
		this.loadCount()
	}
}

// jalankan counter.
obj.loadCount()

var btn1 = document.getElementById('btn1')
var btn2 = document.getElementById('btn2')

btn1.onclick = function() {
	obj.increment()
}

btn2.onclick = function() {
	obj.decrement()
}

/*
	<mark class="display-1" id="text">1</mark>
	<button id="btn1">+</button>
	<button id="btn2">-</button>
*/