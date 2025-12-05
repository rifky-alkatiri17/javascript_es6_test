const items = document.querySelectorAll('#todo li');
// console.log(items)
// items[5].style.color = 'red'
Object.assign(items[5].style, {
  "color": "red",
  "font-size": "18px",
  "font-weight": "bold"
});

// step 1. create element input and button, juga modal sekalian
const inputContainer = document.getElementById('inputContainer');
inputContainer.innerHTML = `	
	<div class="input-group mb-3">
	  <input type="text" class="form-control" placeholder="Input nama film..." autofocus id="input" value="fast">
	  <button class="btn btn-outline-success" type="button" id="inputBTN">Search</button>
	</div>`;

const simpanModal = document.getElementById('simpanModal');
simpanModal.innerHTML = `
	<div class="modal fade"  id="details" tabindex="-1">
	  <div class="modal-dialog modal-dialog-centered modal-lg">
	    <div class="modal-content">
	      <div class="modal-header">
	        <h5 class="modal-title">JUDUL</h5>
	        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
	      </div>
	      <div class="modal-body">
			<p>gambar | list group</p>
	      </div>
	      <div class="modal-footer">
	        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
	      </div>
	    </div>
	  </div>
	</div>`;


// step 2. ambil data film berdasarkan keyword input lalu tampilkan
const input = document.getElementById('input');
const inputBTN = document.getElementById('inputBTN');
inputBTN.addEventListener('click', async ()=>{
	console.log(input.value);
	const dataFilms = await getDataFilms(input.value);
	// console.log(dataFilms)
	await updateUI(dataFilms)
});

// step 3. tampilkan detail film berdasarkan imdbID

/*const btnDetails = document.querySelectorAll('.btnDetails');
btnDetails.forEach(item=>{
	console.log(this.dataset.imdbID)
}); cara ini tdk bisa*/

// event binding
document.addEventListener('click', async e=>{
	// console.log(e.target.classList);
	if(e.target.classList.contains('btnDetails')){
		// console.log('ok ini dia su...');
		// console.log(e.target.dataset.imdbid);
		const imdbid = e.target.dataset.imdbid;
		const detailsfilm = await getDetails(imdbid);
		// console.log(detailsfilm)
		updateUIDetails(detailsfilm)
	}
});




// ---------------------------
// ~. functions expression
// ---------------------------

const getDataFilms = async function(keywords){
	let allData = [];
	for (let page = 1; page <= 3; page++) {
	 	const url = 'http://www.omdbapi.com/?apikey=8a38adc1&s=' + keywords + '&page=' + page;
		let dataFilms = await fetch(url).then(response=> response.json()).then(data=> data.Search);
		// console.log(dataFilms);
	  	allData = allData.concat(dataFilms);
	  	/*perbedaan push dan concat*/
	}

	console.log(allData); // 30 data
	
	return allData
};

const updateUI = function(dataFilms){ //obj
	let card = '';
	dataFilms.forEach(item=>{
		card += `
			<div class="card" style="width:10rem" >
			  <img src="${item.Poster}" class="card-img-top" alt="...">
			  <div class="card-body">
			    <p class="card-title">${item.Title}</p>
			    <button class="btn btn-success btnDetails" data-imdbid="${item.imdbID}" data-bs-toggle="modal" data-bs-target="#details" >Details</button>
			  </div>				  					 
			</div>
		`; //susun dulu cardnya		
	});

	const movieContainer = document.getElementById('movieContainer');
	movieContainer.innerHTML = `		
	<div class="d-flex flex-wrap justify-content-center gap-3">
		${card}
	</div>`
};

const getDetails = function(imdbid){
	const url = 'http://www.omdbapi.com/?apikey=8a38adc1&i=' + imdbid;
	const detailsFilm = fetch(url).then(response=>response.json()).then(data=>data);
	return detailsFilm
};

const updateUIDetails = function(detailsfilm){
	const modalDialog = document.querySelector('.modal-dialog');    
	let isiModal = `
		<div class="modal-content">
	      <div class="modal-header">
	        <h5 class="modal-title">Title: ${detailsfilm.Title}</h5>
	        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
	      </div>
	      <div class="modal-body">
				<div class="row gap-2">
					<div class="col-md-3 text-center">
						<img class="img-fluid" src="${detailsfilm.Poster}">
					</div>
					<div class="col-md-8">
						<ul class="list-group">
						  <li class="list-group-item"><strong>Actors:</strong> ${detailsfilm.Actors}</li>
						  <li class="list-group-item"><strong>Genre:</strong> ${detailsfilm.Genre}</li>
						  <li class="list-group-item"><strong>Year:</strong> ${detailsfilm.Year}</li>
						  <li class="list-group-item"><strong>Plot:</strong> ${detailsfilm.Plot}</li>
						  <li class="list-group-item"><strong>Writer:</strong> ${detailsfilm.Writer}</li>
						</ul>
					</div>
				</div>	
	      </div>
	      <div class="modal-footer">
	        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
	      </div>
	    </div>
	`;
	modalDialog.innerHTML = isiModal
}