/* 2. Tampilkan list Movies dan detail movienya.
berdasarkan movie yg dipilih.*/

/*
Struktur HTML:
<h5>Top Mo<strong>vies</strong></h5>
<ul id="items" class="list-group"></ul>

<div id="detail">
  <p>Movie yg dipilih - <strong>Mad Max: Fury Road</strong></p>
  <button class="btn btn-primary btn-sm">Back to Movies</button>
</div>
*/

// ======== Point 15
// Berikut ini ada object moviesnya:

let obj = {

  movies : [
    {title:'Zootopia', releaseDate:2016},

    {title:'Batman v Superman: Dawn of Justice', releaseDate:2016},
    {title:'Captain American: Civil War', releaseDate:2016},

    {title:'X-Men: Apocalypse', releaseDate:2016},

    {title:'Warcraft', releaseDate:2016},

    {title:'Avengers: Age of Ultron', releaseDate:2015},

    {title:'Star Wars: The Force Awakens', releaseDate:2015},

    {title:'The Hunger Games: Mockingjay - Part 2', releaseDate:2015},
    
    {title:'Jurassic World', releaseDate:2015},
    
    {title:'Furious 7', releaseDate:2015},
    {title:'Terminator: Genisys', releaseDate:2015},
    
    {title:'Ant-Man', releaseDate:2015},
    
    {title:'Mission: Impossible 5 Rogue Nation', releaseDate:2015},
    
    {title:'Tomorrowland', releaseDate:2015},
    {title:'Mad Max: Fury Road', releaseDate:2015},
  ],

  element: document.getElementById('items'),

  getMovies: function(movies) {
    movies.forEach( (e, index) => {
      let li = document.createElement('li')
      li.classList.add('list-group-item')
      li.title = e.title
      li.textContent = (index+1) + " - " + e.title
      this.element.appendChild(li)
    })
  }
}

obj.getMovies(obj.movies)

var items = document.querySelectorAll('.list-group-item')
var paragraf = document.querySelector('#detail p strong')
var btn = document.querySelector('#detail button')

for(var i = 0; i < items.length; i++) {
  items[i].onclick = function() {
    var title = this.title
    obj.element.style.display = 'none'
    this.parentElement.nextElementSibling.style.display = 'block'

    paragraf.textContent = title

    btn.addEventListener('click', function(){
      obj.element.style.display = 'block'
      this.parentElement.style.display = 'none'
    })
  }
}

