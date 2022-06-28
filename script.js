fetch('https://api.chucknorris.io/jokes/random?category=science')
    .then(data =>data.json())
    .then(data => {
      // Work with JSON data here
	const jokeElement = document.getElementById("jokeElement");
	const p = document.createElement("P");
     	p.innerHTML = data.value;
    	jokeElement.appendChild(p);
    
    
    })
