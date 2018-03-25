var inputGroup = document.getElementById('group')
var input = inputGroup.children


var obj = {
	firstname: "",
	lastname: "",

	el: document.querySelector('mark'),

	sapa1: function(e) {
		this.firstname = e.value
		this.el.textContent = this.firstname
	},

	sapa2: function(e) {
		this.lastname = e.value
		this.el.textContent = this.firstname + " " +this.lastname

	}
}

input[0].onkeyup = function() {
	obj.sapa1(this)
}

input[1].onkeyup = function(){
	obj.sapa2(this)
}

/*
	<div class="form-group" id="group">
		<input type="text" placeholder="Firstname">
		<input type="text" placeholder="Lastname">
	</div>

	<p>Hi, <mark>DUMET School</mark></p>
*/