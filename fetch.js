const items = document.querySelectorAll('#todo li');
// console.log(items)
// items[5].style.color = 'red'
Object.assign(items[4].style, {
  "color": "red",
  "font-size": "18px",
  "font-weight": "bold"
});


const url = 'http://www.omdbapi.com/?apikey=8a38adc1&s=';
const inputContainer = document.getElementById('inputContainer');


inputContainer.innerHTML = `	
	<div class="input-group mb-3">
	  <input type="text" class="form-control" placeholder="Input nama film..." autofocus id="input" value="fast">
	  <button class="btn btn-outline-success" type="button" id="inputBTN">Search</button>
	</div>
`;

const input = document.getElementById('input');
const inputBTN = document.getElementById('inputBTN');
inputBTN.addEventListener('click', ()=>{
	console.log(input.value);
	getDataFilms(input.value);
});

function getDataFilms(value){
	fetch(url + value)
	.then(res=>res.json())
	.then(data=>{
		console.log(data.Search);
		const dataFilms = data.Search;
		let card = '';
		dataFilms.forEach(hasil=>{
			card += `
				<div class="card" style="width:10rem" >
				  <img src="${hasil.Poster}" class="card-img-top" alt="...">
				  <div class="card-body">
				    <p class="card-title">${hasil.Title}</p>
				    <button class="btn btn-success btnDetails" data-imdb="${hasil.imdbID}" data-bs-toggle="modal" data-bs-target="#details">Details</button>
				  </div>				  					 
				</div>`; //cardnya dibuat dulu disini		
		});

		// data-bs-toggle="modal" data-bs-target="#..."

		const movieContainer = document.getElementById('movieContainer');
		movieContainer.innerHTML = `		
		<div class="d-flex flex-wrap justify-content-center gap-3">
			${card}
		</div>`

		const btnDetails = document.querySelectorAll('.btnDetails');
		/*btnDetails.addEventListener('click', function(e){
			console.log(e);
		});*/
		btnDetails.forEach(btn => {
		  btn.addEventListener('click', function(){
		    // console.log(this.dataset.imdb);
		    tampilModal(this.dataset.imdb)
		  });
		});

	});
}

function getFilmDetails(judul){
	alert(judul);
}//hny untuk coba 



function tampilModal(imdbID){
	const newURL = 'http://www.omdbapi.com/?apikey=8a38adc1&i=' + imdbID;
	// console.log(newURL);
	fetch(newURL)
		.then(response=> response.json())
		.then(data=> {
			console.log(data);
			let renderIsiModal =  `
				 <div class="modal-content">
		      <div class="modal-header">
		        <h5 class="modal-title">${data.Title}</h5>
		        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
		      </div>
		      <div class="modal-body">
						<div class="row gap-2">
							<div class="col-md-3 text-center">
								<img class="img-fluid" src="${data.Poster}">
							</div>
							<div class="col-md-7">
								<ul class="list-group">
								  <li class="list-group-item"><strong>Actors:</strong> ${data.Actors}</li>
								  <li class="list-group-item"><strong>Genre:</strong> ${data.Genre}</li>
								  <li class="list-group-item"><strong>Year:</strong> ${data.Year}</li>
								  <li class="list-group-item"><strong>Plot:</strong> ${data.Plot}</li>
								  <li class="list-group-item"><strong>Writer:</strong> ${data.Writer}</li>
								</ul>
							</div>
						</div>		        
		      </div>
		      <div class="modal-footer">
		        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
		      </div>
		    </div>`;
			 
		    const isiModalDialog = document.querySelector('.modal-dialog');
		    isiModalDialog.innerHTML = renderIsiModal
		});

};

// --------------------------
// KOMPONEN
// --------------------------

let templateListGroup = function(){
	return `
		<ul class="list-group">
		  <li class="list-group-item">Actors: </li>
		  <li class="list-group-item">Genre: </li>
		  <li class="list-group-item">Year: </li>
		  <li class="list-group-item">Plot: </li>
		  <li class="list-group-item">Writer: </li>
		</ul>`
	};


let templateIsiModal = function(){

	return `
		<div class="modal fade"  id="details" tabindex="-1">
		  <div class="modal-dialog modal-dialog-centered modal-lg">
		    <div class="modal-content">
		      <div class="modal-header">
		        <h5 class="modal-title">JUDUL</h5>
		        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
		      </div>
		      <div class="modal-body">
		        ${templateListGroup()}
		      </div>
		      <div class="modal-footer">
		        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
		      </div>
		    </div>
		  </div>
		</div>`
	};

const simpanModal = document.getElementById('simpanModal');
simpanModal.innerHTML = templateIsiModal();


