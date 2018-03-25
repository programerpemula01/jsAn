// 1. Menjalakan event mouseenter dan mouseeleave

/*
Struktur HTML: 
<div class="display">
	<div class="circle bg-info"></div>
	<div class="circle bg-danger"></div>
	<div class="circle bg-success"></div>
	<div class="circle bg-warning"></div>
</div>
*/

// ======== Point: 15 ===

var circle = document.querySelectorAll('.circle')
circle.forEach( (e, i) => {
	
	e.addEventListener('mouseenter', function(){
		this.style.transform = 'translateY(50px)'
		this.style.opacity = '0.5'
	})

	e.addEventListener('mouseleave', function(){
		this.style.transform = 'translateY(0)'
		this.style.opacity = '1'
	})
	
})
