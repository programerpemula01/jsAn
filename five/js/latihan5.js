// Manipulation Data. Tampil, Update dan Delete

/*
Struktur HTML:
<table class="table">
  <thead>
    <tr>
      <td>#</td>
      <td>Title</td>
      <td>Action</td>
    </tr>
  </thead>
  <tbody id="content"></tbody>
</table>
*/

// ======== Point 25
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

  element: document.getElementById('content'),

  manipulation(that, operand) {
    let input = that.parentElement.previousElementSibling.children[0];
    let span = that.parentElement.previousElementSibling.children[1];
    that.style.display = "none";

    if(operand == 'edit') {
      input.style.display = "block" 
      span.style.display = "none" 
      that.nextElementSibling.style.display = "inline-block"

    } else if(operand == 'save') {
      input.style.display = "none" 
      span.style.display = "block"
      span.textContent = input.value 
      that.previousElementSibling.style.display = "inline-block"

    } else if(operand == 'delete') {
      that.nextElementSibling.style.display = "inline-block"
    }
  },

  getMovies() {
    // this.element.innerHTML = ""

    this.movies.forEach( (data, index) => {
      this.element.innerHTML += `<tr>
        <td>${index+1}</td>
        <td><input type="text" value="${data.title}" class="form-control" /> <span>${data.title}</span></td>
        <td>
          <a href="#" class="btn-edit badge badge-warning">Edit</a>
          <a href="#" class="btn-save badge badge-primary">Save</a> 
          <a href="#" class="btn-delete badge badge-danger">Delete</a> 
          <a href="#" class="btn-confirm badge badge-secondary" data-id="${index}">Confirm</a>
        </td>
      </tr>`
    })
  },

  deleteMovie(that) {
    let index = that.getAttribute('data-id')
    that.parentElement.parentElement.remove()
    this.movies.splice(index, 1)
  }
}

obj.getMovies()

let btnEdit = document.querySelectorAll('.btn-edit')
let btnDelete = document.querySelectorAll('.btn-delete')
let btnSave = document.querySelectorAll('.btn-save')
let btnConfirm = document.querySelectorAll('.btn-confirm')

function forList(items, callback) {
  // edit data
  for(var i = 0; i < btnEdit.length; i++) {
    items[i].onclick = callback
  }
}

var edit = function(e) {
  e.preventDefault()
  obj.manipulation(this, 'edit')
}

var save = function(e) {
  e.preventDefault()
  obj.manipulation(this, 'save')
}

var deleteData = function(e) {
  e.preventDefault()
  obj.manipulation(this, 'delete')
}

var confirmasi = function(e){
  e.preventDefault()
  var cek = confirm('Data ingin dihapus?')
  if(cek) {
    obj.deleteMovie(this)
  } else {
    this.style.display = 'none'
    this.previousElementSibling.style.display = "inline-block"
  }
}

forList(btnEdit, edit)
forList(btnSave, save)
forList(btnDelete, deleteData)
forList(btnConfirm, confirmasi)


