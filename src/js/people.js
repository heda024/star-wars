const fetchData = async ()=>{
	const response = await fetch('https://swapi.dev/api/people');
	const data = await response.json();
		console.log(data.results);
	}
	
fetchData()

// function displayFilms(data){
// 	data.forEach(person => {
// 		console.log(person.name)
// 	});
// }

