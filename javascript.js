let myLibrary = [];

function Book() {
  // the constructor...
}

function addBookToLibrary() {
  // do stuff here

  myLibrary.push(input.value);
}

function displayBooks(){
    for(let i=0;i<myLibrary.length;i++){
        return myLibrary[i];
    }
}


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