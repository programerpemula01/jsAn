/* 
Defaultnya: daftar list ul-nya masih kosong
kita akan isi dengan mengambil seluruh nilai dari array

lalu masukkan kedalam tag <ul>nya.

Warning: "tidak boleh menggunakan innerHTML"

note: pastikan memilih elemennya sesuai dengan struktur yg ada.
*/

var lesson = ['html', 'css', 'jquery', 'php', 'javascript']
var list = document.getElementById('list')

for(var i = 0; i < lesson.length; i++) {
	var li = document.createElement('li')
	li.textContent = lesson[i]


	list.appendChild(li)
}

/*
Bootstrap 4.
Berikut ini struktur html-nya.

<ul id="list"></ul>
*/
