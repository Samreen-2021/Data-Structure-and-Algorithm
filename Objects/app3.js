//Suppose you have an array of objects:

	let books = [
        {name: 'The Lean Startup',
			topics: ['entrepreneurship','startups'],
		},
		{
			name: 'War and Peace',
			topics: ['peace', 'politics'],
		}	
	];
        console.log(books[0].name);
		console.log(books[0].topics);
        console.log(books[1].name);
		console.log(books[1].topics);
		
{
	//how to access nested array in an array of objects
	for(let i=0; i< books.length; i++){
		//console.log(books[i].name);
		for(j=0; j<books.length; j++){
				console.log((books[i].topics)[j]);
		}
	}
}









