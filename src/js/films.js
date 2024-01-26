// fetch('https://swapi.dev/api/films')
// .then(response => response.json())
// .then(data => displayMovies(data.results))
// .catch(error => console.log(error));

// function displayMovies(data){
// 	data.forEach(movie => {
// 	console.log(movie.title);		
// 	});
// }

// fetch('https://swapi.dev/api/films')
// .then(response => response.json())
// .then(data => console.log(data.results))
// .catch(error => console.log(error));



// async function checkWeather(movie){
// 	const response = await fetch('https://swapi.dev/api/films');
// 	let data = await response.json();

// 	console.log(data.results);

// 	document.querySelector('.title1').innerHTML = data.[3].title;
// }

const fetchData = async ()=>{
	const response = await fetch('https://swapi.dev/api/films');
	const data = await response.json();
		displayFilms(data.results)
		pushHtml()
	}
	
fetchData()

function displayFilms(data){
	data.forEach(film => {
		console.log(film.title)
	});
}

function pushHtml(){
	document.querySelector('.title1').innerHTML = 'Title' + data
}

// 