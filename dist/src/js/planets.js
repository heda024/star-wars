fetch('https://swapi.dev/api/planets')
.then(response => response.json())
.then(data => console.log(data.results))

fetch('https://swapi.dev/api/planets/2')
	.then(response => response.json())
	.then(data => {
		const name = document.querySelector('.planet-1 > .name');
		const nameText = document.createTextNode(data.name)
		name.appendChild(nameText)

		const terrain = document.querySelector('.planet-1 > .ter');
		const terrainText = document.createTextNode(data.terrain)
		terrain.appendChild(terrainText)

		const gravity = document.querySelector('.planet-1 > .grav');
		const gravityText = document.createTextNode(data.gravity)
		gravity.appendChild(gravityText)

		const climate = document.querySelector('.planet-1 > .cli');
		const climateText = document.createTextNode(data.climate)
		climate.appendChild(climateText)

		const diameter = document.querySelector('.planet-1 > .dia');
		const diameterText = document.createTextNode(data.diameter)
		diameter.appendChild(diameterText)
		
	})
	.catch(error => console.log(error))

	fetch('https://swapi.dev/api/planets/6')
	.then(response => response.json())
	.then(data => {
		const name = document.querySelector('.planet-2 > .name');
		const nameText = document.createTextNode(data.name)
		name.appendChild(nameText)

		const terrain = document.querySelector('.planet-2 > .ter');
		const terrainText = document.createTextNode(data.terrain)
		terrain.appendChild(terrainText)

		const gravity = document.querySelector('.planet-2 > .grav');
		const gravityText = document.createTextNode(data.gravity)
		gravity.appendChild(gravityText)

		const climate = document.querySelector('.planet-2 > .cli');
		const climateText = document.createTextNode(data.climate)
		climate.appendChild(climateText)

		const diameter = document.querySelector('.planet-2 > .dia');
		const diameterText = document.createTextNode(data.diameter)
		diameter.appendChild(diameterText)
		
	})
	.catch(error => console.log(error))

	fetch('https://swapi.dev/api/planets/5')
	.then(response => response.json())
	.then(data => {
		const name = document.querySelector('.planet-3 > .name');
		const nameText = document.createTextNode(data.name)
		name.appendChild(nameText)

		const terrain = document.querySelector('.planet-3 > .ter');
		const terrainText = document.createTextNode(data.terrain)
		terrain.appendChild(terrainText)

		const gravity = document.querySelector('.planet-3 > .grav');
		const gravityText = document.createTextNode(data.gravity)
		gravity.appendChild(gravityText)

		const climate = document.querySelector('.planet-3 > .cli');
		const climateText = document.createTextNode(data.climate)
		climate.appendChild(climateText)

		const diameter = document.querySelector('.planet-3 > .dia');
		const diameterText = document.createTextNode(data.diameter)
		diameter.appendChild(diameterText)
		
	})
	.catch(error => console.log(error))

	fetch('https://swapi.dev/api/planets/4')
	.then(response => response.json())
	.then(data => {
		const name = document.querySelector('.planet-4 > .name');
		const nameText = document.createTextNode(data.name)
		name.appendChild(nameText)

		const terrain = document.querySelector('.planet-4 > .ter');
		const terrainText = document.createTextNode(data.terrain)
		terrain.appendChild(terrainText)

		const gravity = document.querySelector('.planet-4 > .grav');
		const gravityText = document.createTextNode(data.gravity)
		gravity.appendChild(gravityText)

		const climate = document.querySelector('.planet-4 > .cli');
		const climateText = document.createTextNode(data.climate)
		climate.appendChild(climateText)

		const diameter = document.querySelector('.planet-4 > .dia');
		const diameterText = document.createTextNode(data.diameter)
		diameter.appendChild(diameterText)
		
	})
	.catch(error => console.log(error))

	fetch('https://swapi.dev/api/planets/8')
	.then(response => response.json())
	.then(data => {
		const name = document.querySelector('.planet-5 > .name');
		const nameText = document.createTextNode(data.name)
		name.appendChild(nameText)

		const terrain = document.querySelector('.planet-5 > .ter');
		const terrainText = document.createTextNode(data.terrain)
		terrain.appendChild(terrainText)

		const gravity = document.querySelector('.planet-5 > .grav');
		const gravityText = document.createTextNode(data.gravity)
		gravity.appendChild(gravityText)

		const climate = document.querySelector('.planet-5 > .cli');
		const climateText = document.createTextNode(data.climate)
		climate.appendChild(climateText)

		const diameter = document.querySelector('.planet-5 > .dia');
		const diameterText = document.createTextNode(data.diameter)
		diameter.appendChild(diameterText)
		
	})
	.catch(error => console.log(error))

	fetch('https://swapi.dev/api/planets/1')
	.then(response => response.json())
	.then(data => {
		const name = document.querySelector('.planet-6 > .name');
		const nameText = document.createTextNode(data.name)
		name.appendChild(nameText)

		const terrain = document.querySelector('.planet-6 > .ter');
		const terrainText = document.createTextNode(data.terrain)
		terrain.appendChild(terrainText)

		const gravity = document.querySelector('.planet-6 > .grav');
		const gravityText = document.createTextNode(data.gravity)
		gravity.appendChild(gravityText)

		const climate = document.querySelector('.planet-6 > .cli');
		const climateText = document.createTextNode(data.climate)
		climate.appendChild(climateText)

		const diameter = document.querySelector('.planet-6 > .dia');
		const diameterText = document.createTextNode(data.diameter)
		diameter.appendChild(diameterText)
		
	})
	.catch(error => console.log(error))