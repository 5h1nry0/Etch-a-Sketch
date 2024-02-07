//function createGrid() {
//const container = document.getElementById('container')
//    for (let i=0; i<256; i++) {
//        let square = document.createElement("div");
//        square.classList.add("square");
//       container.appendChild(square);
//   }
//}
//createGrid() 

//function createGrid() {
//    const container = document.querySelector("#container"); 
//    for (let i = 0; i < 256; i++) {
//        let square = document.createElement("div");
//        square.classList.add("square");
//        container.appendChild(square);
//    }

//}

//createGrid() 

//let hoverEffect = document.getElementsByClassName("square")
//for (let i=0; i<hoverEffect.length; i++) {
//    hoverEffect[i].addEventListener('mouseover',() => {
//        hoverEffect[i].classList.add("hover");
//    })
//}

const container = document.querySelector('#container');
removeAllChildNodes(container);

let button = document.querySelector('button')
button.addEventListener('click',() => {
let number = prompt('Type here the number of squares per side')
removeAllChildNodes(container);
for (let i = 0; i < number*number; i++) {
    let square = document.createElement("div");
    square.classList.add("square");
    container.appendChild(square);
}
let hoverEffect = document.getElementsByClassName("square")
for (let i=0; i<hoverEffect.length; i++) {
    hoverEffect[i].addEventListener('mouseover',() => {
        hoverEffect[i].classList.add("hover");
    })
}
}) 
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}