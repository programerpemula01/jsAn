/* 3. Memberikan warna random. */

/*
Struktur HTML: 
<input type="text" placeholder="Random Color"> */

// ==== Point: 10
// Berikut array warnanya:
var colors = [
  'darksalmon', 'hotpink', 'lightskyblue', 'goldenrod', 'peachpuff',
  'mediumspringgreen', 'cornflowerblue', 'blanchedalmond', 'lightslategrey'
];

var input = document.querySelector('input')

var colorRandom = function(){
	let colorPick = Math.floor(Math.random() * colors.length);
	document.body.style.color = colors[colorPick]
}

input.addEventListener('keydown', colorRandom)