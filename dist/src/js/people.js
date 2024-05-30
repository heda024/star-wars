fetch('https://swapi.dev/api/people')
.then(response => response.json())
.then(data => console.log(data.results))

fetch('https://swapi.dev/api/people/1')
	.then(response => response.json())
	.then(data => {
		const name = document.querySelector('.character-1 > .name');
		const nameText = document.createTextNode(data.name)
		name.appendChild(nameText)

		const gender = document.querySelector('.character-1 > .gender');
		const genderText = document.createTextNode(data.gender)
		gender.appendChild(genderText)

		const height = document.querySelector('.character-1 > .h');
		const heightText = document.createTextNode(data.height)
		height.appendChild(heightText)

		const eye = document.querySelector('.character-1 > .eye');
		const eyeText = document.createTextNode(data.eye_color)
		eye.appendChild(eyeText)

		const birth = document.querySelector('.character-1 > .by');
		const birthText = document.createTextNode(data.birth_year)
		birth.appendChild(birthText)
		
	})
	.catch(error => console.log(error))

	fetch('https://swapi.dev/api/people/2')
	.then(response => response.json())
	.then(data => {
		const name = document.querySelector('.character-2 > .name');
		const nameText = document.createTextNode(data.name)
		name.appendChild(nameText)

		const gender = document.querySelector('.character-2 > .gender');
		const genderText = document.createTextNode(data.gender)
		gender.appendChild(genderText)

		const height = document.querySelector('.character-2 > .h');
		const heightText = document.createTextNode(data.height)
		height.appendChild(heightText)

		const eye = document.querySelector('.character-2 > .eye');
		const eyeText = document.createTextNode(data.eye_color)
		eye.appendChild(eyeText)

		const birth = document.querySelector('.character-2 > .by');
		const birthText = document.createTextNode(data.birth_year)
		birth.appendChild(birthText)
		
	})
	.catch(error => console.log(error))

	fetch('https://swapi.dev/api/people/3')
	.then(response => response.json())
	.then(data => {
		const name = document.querySelector('.character-3 > .name');
		const nameText = document.createTextNode(data.name)
		name.appendChild(nameText)

		const gender = document.querySelector('.character-3 > .gender');
		const genderText = document.createTextNode(data.gender)
		gender.appendChild(genderText)

		const height = document.querySelector('.character-3 > .h');
		const heightText = document.createTextNode(data.height)
		height.appendChild(heightText)

		const eye = document.querySelector('.character-3 > .eye');
		const eyeText = document.createTextNode(data.eye_color)
		eye.appendChild(eyeText)

		const birth = document.querySelector('.character-3 > .by');
		const birthText = document.createTextNode(data.birth_year)
		birth.appendChild(birthText)
		
	})
	.catch(error => console.log(error))

	fetch('https://swapi.dev/api/people/4')
	.then(response => response.json())
	.then(data => {
		const name = document.querySelector('.character-4 > .name');
		const nameText = document.createTextNode(data.name)
		name.appendChild(nameText)

		const gender = document.querySelector('.character-4 > .gender');
		const genderText = document.createTextNode(data.gender)
		gender.appendChild(genderText)

		const height = document.querySelector('.character-4 > .h');
		const heightText = document.createTextNode(data.height)
		height.appendChild(heightText)

		const eye = document.querySelector('.character-4 > .eye');
		const eyeText = document.createTextNode(data.eye_color)
		eye.appendChild(eyeText)

		const birth = document.querySelector('.character-4 > .by');
		const birthText = document.createTextNode(data.birth_year)
		birth.appendChild(birthText)
		
	})
	.catch(error => console.log(error))

	fetch('https://swapi.dev/api/people/5')
	.then(response => response.json())
	.then(data => {
		const name = document.querySelector('.character-5 > .name');
		const nameText = document.createTextNode(data.name)
		name.appendChild(nameText)

		const gender = document.querySelector('.character-5 > .gender');
		const genderText = document.createTextNode(data.gender)
		gender.appendChild(genderText)

		const height = document.querySelector('.character-5 > .h');
		const heightText = document.createTextNode(data.height)
		height.appendChild(heightText)

		const eye = document.querySelector('.character-5 > .eye');
		const eyeText = document.createTextNode(data.eye_color)
		eye.appendChild(eyeText)

		const birth = document.querySelector('.character-5 > .by');
		const birthText = document.createTextNode(data.birth_year)
		birth.appendChild(birthText)
		
	})
	.catch(error => console.log(error))


	fetch('https://swapi.dev/api/people/10')
	.then(response => response.json())
	.then(data => {
		const name = document.querySelector('.character-6 > .name');
		const nameText = document.createTextNode(data.name)
		name.appendChild(nameText)

		const gender = document.querySelector('.character-6 > .gender');
		const genderText = document.createTextNode(data.gender)
		gender.appendChild(genderText)

		const height = document.querySelector('.character-6 > .h');
		const heightText = document.createTextNode(data.height)
		height.appendChild(heightText)

		const eye = document.querySelector('.character-6 > .eye');
		const eyeText = document.createTextNode(data.eye_color)
		eye.appendChild(eyeText)

		const birth = document.querySelector('.character-6 > .by');
		const birthText = document.createTextNode(data.birth_year)
		birth.appendChild(birthText)
		
	})
	.catch(error => console.log(error))


