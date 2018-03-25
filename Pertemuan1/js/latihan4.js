/* 4. Melakukan 'disabled' untuk tombol button 
sesuai konfirmasi yg dilakukan oleh user

Bila menekan tombol 'OK' maka buttonnya disabled 
dan sebaliknya. */

var _button = document.getElementById('demo')
_confirm = confirm('button akan disable? ')
var disable = _confirm ? "disabled" : ""
_button.innerHTML = "<button "+disable+">Mulai Belajar</button>"

/* --------- Mendapatkan 5 Point untuk yg bisa mengerjakan. --------- */