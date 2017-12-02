// Creating a button
var btn = document.createElement('button');
btn.setAttribute('id', 'fetch-books-btn');
var textOfBtn = document.createTextNode('Fetch Books');
btn.appendChild(textOfBtn);
document.body.appendChild(btn);
btn.addEventListener('click', fetchBooks); //## Fetching the books data    

//## Fetching the books data  
function fetchBooks() {
    //    console.log('BOOKS');
    const booksJSON = 'https://raw.githubusercontent.com/codeyourfuture/bookshelf-project/master/books.json'
    fetch(booksJSON) // go and retrieve all the data I need 
        .then(response => response.json()) // convert these data to string
        .then(books => processBooks(books)) //used this data as value for processBook   
}

// Creating the bookshelf

function processBooks(booksJSON) {
    var ulTag = document.createElement('ul');
    document.body.appendChild(ulTag);
    booksJSON.forEach(function(booksItem) {
        var liTag = document.createElement('li');
        var textOfLi = document.createTextNode(booksItem.author + booksItem.title)
        liTag.setAttribute('id', booksItem.id);
        liTag.appendChild(textOfLi);
        ulTag.appendChild(liTag);
    });

    ulTag.addEventListener('click')
}