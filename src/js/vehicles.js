const fetchData = async ()=>{
	const response = await fetch('https://swapi.dev/api/vehicles');
	const data = await response.json();
		console.log(data.results);
	}
	
fetchData()