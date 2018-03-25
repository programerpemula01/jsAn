/*
Menampilkan semua nilai array satu persatu.
berikut ini adalah contoh arraynya:
*/

var badge = ['primary', 'secondary', 'info', 
'warning', 'danger', 'light', 'dark', 'success']

var demo = document.getElementById('demo')
var i = 2

badge.forEach(function(e) {
	var timer = i +"000"

	setTimeout(function(){
		demo.innerHTML += '<span class="badge badge-'+e+'">'+e+'</span> '
	}, timer)
	
	i++

	console.log(i)
})