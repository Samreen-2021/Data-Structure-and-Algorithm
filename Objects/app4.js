let books = [
    {name: 'The Lean Startup',
        topics: ['entrepreneurship','startups'],
    },
    {
        name: 'War and Peace',
        topics: ['peace', 'politics'],
    }
];
//Take the above array of objects and add a book of your choice to it with the same properties.
{ //at the end

    books.length= books.length+1;
    books[books.length-1]= {name: 'Quran', topics: ['faith', 'equality']};
    console.log(books);
}

{
// at start
    books.length= books.length+1;
    for(let i=books.length-1; i> 0; i--){
        books[i]=books[i-1];
    }
    books[0]= {name: 'Quran', topics: ['faith', 'equality']};
    console.log(books);
}
