//button event listeners for create new book, add new book to page, close popup
const addBtn = document.querySelector('#addBtn');
addBtn.addEventListener('click', addBookToLibrary);

// let myLibrary=[
//     {
//         title: "A Game of Thrones",
//         author: "George R. R. Martin",
//         pages: 694,
//         read: false,
//     },
// ];

// function Book(title, author, pages, read) {
//     // the constructor
//     this.title = form.title.value; 
//     this.author = form.author.value; 
//     this.pages = form.pages.value; 
//     this.read = form.read.checked; 
// };


const title=document.getElementById("title");
const author=document.getElementById("author");
const pages=document.getElementById("pages");
const read=document.getElementById("read");

let myLibrary=[];

class Book {
    constructor(title, author, pages, read){
        this.title=title;
        this.author =author; 
        this.pages =pages; 
        this.read =read;
    }
}

let newBook = new Book("A Game of Thrones","George R. R. Martin",694,false);
myLibrary.push(newBook);

function addBookToLibrary() {
    // do stuff here
    if(!title.value||!author.value||!pages.value){
        alert("Field must not be empty!");
        return;   
    }
    newBook = new Book(title.value, author.value, pages.value, read.checked);
    myLibrary.push(newBook);
    form.reset();
    render();
    document.getElementById("modalOne").style.display = 'none';
}

//Creates book visual in browser
function render() {
    const display = document.querySelector('.books-container');
    const books = document.querySelectorAll('.book');
    books.forEach(book => display.removeChild(book));
   
    for (let i=0; i<myLibrary.length; i++){
        createBook(myLibrary[i]);
    }
}

//creats book DOM elements, to use in render();
function createBook(item) {
    const library = document.querySelector('.books-container');
    const bookDiv = document.createElement('div');
    const titleDiv = document.createElement('div');
    const authDiv = document.createElement('div');
    const pageDiv = document.createElement('div');
    const removeBtn = document.createElement('button');
    const readBtn = document.createElement('button'); 
    
    
    bookDiv.classList.add('book');
    bookDiv.setAttribute('id', myLibrary.indexOf(item));

    titleDiv.textContent = item.title;
    titleDiv.classList.add('title');
    bookDiv.appendChild(titleDiv);

    authDiv.textContent = `by ${item.author}`;
    authDiv.classList.add('author');
    bookDiv.appendChild(authDiv);

    pageDiv.textContent = `${item.pages} pages`;
    pageDiv.classList.add('pages');
    bookDiv.appendChild(pageDiv);

    readBtn.classList.add('readBtn')    
    bookDiv.appendChild(readBtn);
    if(item.read===false) {
        readBtn.textContent = 'Not Read';
        readBtn.style.backgroundColor = '#e04f63';
    }else {
        readBtn.textContent = 'Read';
        readBtn.style.backgroundColor = '#63da63'
    }

    removeBtn.textContent = 'Remove'; 
    removeBtn.setAttribute('id', 'removeBtn');
    bookDiv.appendChild(removeBtn);
    
    library.appendChild(bookDiv);

    removeBtn.addEventListener('click', () => {
        myLibrary.splice(myLibrary.indexOf(item),1);
        render();
    });

    //add toggle ability to each book 'read' button on click
    readBtn.addEventListener('click', () => { 
        item.read = !item.read; 
        render();
    }); 
};

let modalBtns = [...document.querySelectorAll(".button")];
modalBtns.forEach(function (btn) {
  btn.onclick = function () {
    let modal = btn.getAttribute("data-modal");
    document.getElementById(modal).style.display = "block";
  };
});
window.onclick = function (event) {
  if (event.target.className === "modal") {
    event.target.style.display = "none";
  }
};

render();