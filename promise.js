const items = document.querySelectorAll('#todo li');
// console.log(items)
// items[5].style.color = 'red'
Object.assign(items[3].style, {
  "color": "red",
  "font-size": "18px",
  "font-weight": "bold"
});

// contoh 1
let ditepati = true;

/*const janji1 = new Promise((resolve,reject)=>{
	if(ditepati){
		resolve('janji ditepati');
	}else{
		reject('Janji Tidak Ditepati...');
	}
});

// console.log(janji1); 
// janji1.then(res=>console.log(res)).catch(err=>console.log(err));*/

/*const janji2 = new Promise((resolve,rejct)=>{
	if(ditepati){
		setTimeout(resolve=>console.log('ditepati setelah bbrp waktu...'),2000)
	}else{
		setTimeout(rejct=>console.log('tidak ditepati setelah bbrp waktu...'),2000)
	}
});
// console.log(janji2);
janji2.then(res=>console.log(res)).catch(err=>console.log(err));*/

// promise All

const film = new Promise(resolve=>{
	setTimeout(()=>{
		resolve([{
			judul: "Avengers",
			pemeran: "Robert Downey Jr.",
			sutradara: "Kevin Feige dkk"
		}]);
	},2000);
});

const cuaca = new Promise(resolve=>{
	setTimeout(()=>{
		resolve([{
			kota: "Kupang",
			temp: "30 ^C",
			keterangan: "Cerah Berawan"
		}]);
	},1000);
});

film.then(response=>console.log(response));
cuaca.then(response=>console.log(response));

/*Promise.all([film,cuaca])
	.then(response=>{
		console.log(response)
		const [film, cuaca] = response;
		console.log(film);
		console.log(cuaca);

		const {kota,keterangan} = response[1][0];
		console.log(keterangan); console.log(kota)
	});*/