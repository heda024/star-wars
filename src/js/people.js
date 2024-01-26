// fetch('https://swapi.dev/api/people')
// .then(response => response.json())
// .then(data => console.log(data.results))

fetch('https://swapi.dev/api/people/1')
	.then(response => response.json())
	.then(data => {
		const name = document.querySelector('.movie-1 > .title');
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


