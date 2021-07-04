//Consider the same array of objects and find out the book(s) that is/are on the topic of entrepreneurship
let books = [
    {name: 'The Lean Startup',
        topics: ['entrepreneurship','startups'],
    },
    {
        name: 'War and Peace',
        topics: ['peace', 'politics'],
    },
    {
        name: 'book1',
        topics: ['entrepreneurship', '2']
    },
    {
        name: 'book2',
        topics: ['3', '4']
    }
];
function findTopic(topicName){
	for(let i=0; i< books.length; i++){
		//console.log(books[i].name);
		for(j=0; j<books.length; j++){
			if((books[i].topics)[j]==topicName ){
				console.log(books[i].name)
			}
			else{
				console.log('not found');
			}	
		}
	}
}
findTopic('entrepreneurship');
