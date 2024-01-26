// fetch('https://swapi.dev/api/films')
// .then(response => response.json())
// .then(data => console.log(data.results))

	fetch('https://swapi.dev/api/films/1')
	.then(response => response.json())
	.then(data => {
		const title = document.querySelector('.movie-1 > .title');
		const movie = document.createTextNode(data.title)
		title.appendChild(movie)

		const director = document.querySelector('.movie-1 > .dir');
		const directorText = document.createTextNode(data.director)
		director.appendChild(directorText)

		const producer = document.querySelector('.movie-1 > .pro');
		const producerText = document.createTextNode(data.producer)
		producer.appendChild(producerText)

		const release = document.querySelector('.movie-1 > .rel');
		const releaseText = document.createTextNode(data.release_date)
		release.appendChild(releaseText)

		const id = document.querySelector('.movie-1 > .id');
		const idText = document.createTextNode(data.episode_id)
		id.appendChild(idText)
		
	})
	.catch(error => console.log(error))

	// fetch('https://swapi.dev/api/films/2')
	// .then(response => response.json())
	// .then(data => {
	// 	const title = document.querySelector('.movie-2 > .title');
	// 	const movie = document.createTextNode(data.title)
	// 	title.appendChild(movie)
	// })
	// .catch(error => console.log(error))

	// fetch('https://swapi.dev/api/films/3')
	// .then(response => response.json())
	// .then(data => {
	// 	const title = document.querySelector('.movie-3 > .title');
	// 	const movieOne = document.createTextNode(data.title)
	// 	title.appendChild(movie)
	// })
	// .catch(error => console.log(error))

	// fetch('https://swapi.dev/api/films/4')
	// .then(response => response.json())
	// .then(data => {
	// 	const title = document.querySelector('.movie-4 > .title');
	// 	const movieOne = document.createTextNode(data.title)
	// 	title.appendChild(movie)
	// })
	// .catch(error => console.log(error))

	// fetch('https://swapi.dev/api/films/5')
	// .then(response => response.json())
	// .then(data => {
	// 	const title = document.querySelector('.movie-5 > .title');
	// 	const movieOne = document.createTextNode(data.title)
	// 	title.appendChild(movie)
	// })
	// .catch(error => console.log(error))

	// fetch('https://swapi.dev/api/films/6')
	// .then(response => response.json())
	// .then(data => {
	// 	const title = document.querySelector('.movie-6 > .title');
	// 	const movieOne = document.createTextNode(data.title)
	// 	title.appendChild(movie)
	// })
	// .catch(error => console.log(error))