/* 2. Tampilkan list Movies dan 
memberikan list warna pada tiap tiap barisnya .*/

/*
Struktur HTML:
<h5>Top Mo<strong>vies</strong></h5>
<ul id="items" class="list-group"></ul>
*/

// ======== Point 10
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
      let id = index+1

      li.classList.add('list-group-item')

      if(id % 2 == 0) {
        li.classList.add('list-group-item-danger')
      } else {
        li.classList.add('list-group-item-light')
      }

      li.title = e.title
      li.innerHTML = '<mark>'+id+'</mark>' + ' - ' + e.title + ' <span class="badge badge-primary">'+e.releaseDate+'</span>'
      this.element.appendChild(li)
    })
  }
}

obj.getMovies(obj.movies)