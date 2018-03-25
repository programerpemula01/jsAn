var ul = document.getElementById('list')

var item = document.querySelectorAll('.list-group-item')

for(var i = 0; i < item.length; i++) {
	item[i].addEventListener('click', function(){	

		var input = document.createElement('input')

		input.value = this.textContent
		input.className = "form-control"

		this.appendChild(input)
	})
}