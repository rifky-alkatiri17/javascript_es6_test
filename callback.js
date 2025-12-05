const items = document.querySelectorAll('#todo li');
// console.log(items)
// items[5].style.color = 'red'
Object.assign(items[2].style, {
  "color": "red",
  "font-size": "18px",
  "font-weight": "bold"
});

// -------------------------------------
// synchronus callback
// --------------------------------------

// -- contoh 1 --
/*function halo(nama){
	// return alert(nama)
	console.log(`Selamat datang ${nama}`)
}

function tampilkanPesan(callback){
	const nama = prompt('Silahkan Masukkan Nama Anda..');
	callback(nama);
}

// tampilkanPesan(halo); with another func
// tampilkanPesan( name => console.log(`Good Morning ${name}`) ); without another func

const peg = [
	{
		"nama": "Rifki Alkatiri",
		"nohp": "081246620938"
	},
	{
		"nama": "Masyita Balafif",
		"nohp": "082342009044"
	}
]

// -- contoh 2 --
console.log('start'); 
peg.forEach(data=>{
	for(let i=0 ; i<10000000 ; i++){
		let date = new Date()
	}
	console.dir(data.nama) ini masih synchronus
});
console.log('finish')*/

// -----------------------------------------------
// asynchronus callback
// -----------------------------------------------
function getData(url, success, error){
	let xhr = new XMLHttpRequest();	
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4 ){
			if(xhr.status == 200){
				let data = xhr.response;
				let dataParse = JSON.parse(data);
				// console.log(dataParse);
				success(dataParse) //ini callbacknya
			}else{
				error() //ini juga callbacknya
			}
			
		}		
	};
	xhr.open('get', url);
	xhr.send();
}

console.log('mulai');
getData('./data.json', res=> console.log(res), err=> console.log('data tidak ditemukan...') );
console.log('selesai');