/* 1. pada saat select option dipilih.
maka otomatis mengaktifkan sebuah class bootstrap 
yakni 'alert' ke dalam tag <p>

note: tentu warnanya alertnya sesuai yg dipilih 
note: pastikan memilih elemennya sesuai dengan struktur yg ada. */

var option = document.querySelector('select')
var subTitle = document.getElementById('subTitle')

option.onchange = function()
{
	var color = this.value
	subTitle.className = "alert-"+color
}


/*	
Bootstrap 4.
Berikut ini struktur html-nya.

<select>
	<option value="light">Light</option>
	<option value="danger">Danger</option>
	<option value="success">Success</option>
	<option value="primary">Primary</option>
	<option value="warning">Warning</option>
	<option value="info">Info</option>
	<option value="secondary">Secondary</option>	
	<option value="dark">Dark</option>
</select>

*/