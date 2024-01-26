fetch('https://swapi.dev/api/vehicles')
.then(response => response.json())
.then(data => console.log(data.results))

fetch('https://swapi.dev/api/vehicles/7')
	.then(response => response.json())
	.then(data => {
		const name = document.querySelector('.vehicle-1 > .name');
		const nameText = document.createTextNode(data.name)
		name.appendChild(nameText)

		const model = document.querySelector('.vehicle-1 > .mod');
		const modelText = document.createTextNode(data.model)
		model.appendChild(modelText)

		const crew = document.querySelector('.vehicle-1 > .crew');
		const crewText = document.createTextNode(data.crew)
		crew.appendChild(crewText)

		const cost = document.querySelector('.vehicle-1 > .cost');
		const costText = document.createTextNode(data.cost_in_credits)
		cost.appendChild(costText)

		const manufacturer = document.querySelector('.vehicle-1 > .manu');
		const manufacturerText = document.createTextNode(data.manufacturer)
		manufacturer.appendChild(manufacturerText)
		
	})
	.catch(error => console.log(error))

	fetch('https://swapi.dev/api/vehicles/8')
	.then(response => response.json())
	.then(data => {
		const name = document.querySelector('.vehicle-2 > .name');
		const nameText = document.createTextNode(data.name)
		name.appendChild(nameText)

		const model = document.querySelector('.vehicle-2 > .mod');
		const modelText = document.createTextNode(data.model)
		model.appendChild(modelText)

		const crew = document.querySelector('.vehicle-2 > .crew');
		const crewText = document.createTextNode(data.crew)
		crew.appendChild(crewText)

		const cost = document.querySelector('.vehicle-2 > .cost');
		const costText = document.createTextNode(data.cost_in_credits)
		cost.appendChild(costText)

		const manufacturer = document.querySelector('.vehicle-2 > .manu');
		const manufacturerText = document.createTextNode(data.manufacturer)
		manufacturer.appendChild(manufacturerText)
		
	})
	.catch(error => console.log(error))


	fetch('https://swapi.dev/api/vehicles/2')
	.then(response => response.json())
	.then(data => {
		const name = document.querySelector('.vehicle-3 > .name');
		const nameText = document.createTextNode(data.name)
		name.appendChild(nameText)

		const model = document.querySelector('.vehicle-3 > .mod');
		const modelText = document.createTextNode(data.model)
		model.appendChild(modelText)

		const crew = document.querySelector('.vehicle-3 > .crew');
		const crewText = document.createTextNode(data.crew)
		crew.appendChild(crewText)

		const cost = document.querySelector('.vehicle-3 > .cost');
		const costText = document.createTextNode(data.cost_in_credits)
		cost.appendChild(costText)

		const manufacturer = document.querySelector('.vehicle-3 > .manu');
		const manufacturerText = document.createTextNode(data.manufacturer)
		manufacturer.appendChild(manufacturerText)
		
	})
	.catch(error => console.log(error))

	fetch('https://swapi.dev/api/vehicles/5')
	.then(response => response.json())
	.then(data => {
		const name = document.querySelector('.vehicle-4 > .name');
		const nameText = document.createTextNode(data.name)
		name.appendChild(nameText)

		const model = document.querySelector('.vehicle-4 > .mod');
		const modelText = document.createTextNode(data.model)
		model.appendChild(modelText)

		const crew = document.querySelector('.vehicle-4 > .crew');
		const crewText = document.createTextNode(data.crew)
		crew.appendChild(crewText)

		const cost = document.querySelector('.vehicle-4 > .cost');
		const costText = document.createTextNode(data.cost_in_credits)
		cost.appendChild(costText)

		const manufacturer = document.querySelector('.vehicle-4 > .manu');
		const manufacturerText = document.createTextNode(data.manufacturer)
		manufacturer.appendChild(manufacturerText)
		
	})
	.catch(error => console.log(error))

	fetch('https://swapi.dev/api/vehicles/4')
	.then(response => response.json())
	.then(data => {
		const name = document.querySelector('.vehicle-5 > .name');
		const nameText = document.createTextNode(data.name)
		name.appendChild(nameText)

		const model = document.querySelector('.vehicle-5 > .mod');
		const modelText = document.createTextNode(data.model)
		model.appendChild(modelText)

		const crew = document.querySelector('.vehicle-5 > .crew');
		const crewText = document.createTextNode(data.crew)
		crew.appendChild(crewText)

		const cost = document.querySelector('.vehicle-5 > .cost');
		const costText = document.createTextNode(data.cost_in_credits)
		cost.appendChild(costText)

		const manufacturer = document.querySelector('.vehicle-5 > .manu');
		const manufacturerText = document.createTextNode(data.manufacturer)
		manufacturer.appendChild(manufacturerText)
		
	})
	.catch(error => console.log(error))

	fetch('https://swapi.dev/api/vehicles/9')
	.then(response => response.json())
	.then(data => {
		const name = document.querySelector('.vehicle-6 > .name');
		const nameText = document.createTextNode(data.name)
		name.appendChild(nameText)

		const model = document.querySelector('.vehicle-6 > .mod');
		const modelText = document.createTextNode(data.model)
		model.appendChild(modelText)

		const crew = document.querySelector('.vehicle-6 > .crew');
		const crewText = document.createTextNode(data.crew)
		crew.appendChild(crewText)

		const cost = document.querySelector('.vehicle-6 > .cost');
		const costText = document.createTextNode(data.cost_in_credits)
		cost.appendChild(costText)

		const manufacturer = document.querySelector('.vehicle-6 > .manu');
		const manufacturerText = document.createTextNode(data.manufacturer)
		manufacturer.appendChild(manufacturerText)
		
	})
	.catch(error => console.log(error))