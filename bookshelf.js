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
        .then(() => removeBtn()) //  ==> Removing the button
}

// Creating the bookshelf

function processBooks(booksJSON) {
    var ulTag = document.createElement('ul');
    document.body.appendChild(ulTag);
    booksJSON.forEach(function(booksItem) {
        var liTag = document.createElement('li');
        var textOfLi = document.createTextNode(booksItem.title + ' by ' + booksItem.author)
        liTag.setAttribute('id', booksItem.id);
        liTag.appendChild(textOfLi);
        ulTag.appendChild(liTag);
    });
}

// ## Removing the button
function removeBtn() {
    document.getElementById('fetch-books-btn').removeEventListener('click', fetchBooks);
    document.body.removeChild(btn);
}