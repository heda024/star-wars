async function checkWeather(city){
	const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
	let data = await response.json();

	console.log(data);

	document.querySelector('.city').innerHTML = data.name;
	document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°C';
	document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
	document.querySelector('.wind').innerHTML = data.wind.speed + ' km/h';
}