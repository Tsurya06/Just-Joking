fetch('https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Spooky,Christmas?blacklistFlags=nsfw,religious,racist,sexist,explicit&type=single')
    .then(data =>data.json())
    .then(data => {
      // Work with JSON data here
	const jokeElement = document.getElementById("jokeElement");
	const p = document.createElement("P");
     	p.innerHTML = data.joke;
    	jokeElement.appendChild(p);
    
    
    })
