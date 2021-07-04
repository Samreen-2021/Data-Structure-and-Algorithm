// Again consider the above array of objects, and delete one of the objects that represent a book.
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
//here i have added two books as instructed in the class for better understanding of deletion process.
{
    // delete an item from end
  books.length = books.length-1;
    console.log(books);
}

{
    //delete item from start
    for(let i = 0; i<books.length-1; i++){
    books[i] =books[i+1];
    }
    books.length= books.length-1;
    console.log(books);
}
