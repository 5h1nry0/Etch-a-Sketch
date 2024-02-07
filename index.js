function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

const container = document.querySelector('#container');

let button = document.querySelector('button')
button.addEventListener('click',() => {
    let number = prompt('Type here the number of squares per side')
    removeAllChildNodes(container);
    if (number <= 100) {
        for (let i = 0; i < number; i++) {
            let row = document.createElement("div");
            row.classList.add("row");
            container.appendChild(row);
            for (let n = 0; n < number; n++){
                let widthAndHeight = 880 / number
                let square = document.createElement("div");
                square.classList.add("square");
                square.style.width = `${widthAndHeight}px`;
                square.style.height = `${widthAndHeight}px`;
                square.addEventListener('mouseover',() => {
                    let randomColor = Math.floor(Math.random()*16777215).toString(16);
                    square.style.backgroundColor = "#" + randomColor;
                })
                row.appendChild(square); 
            }
        }
    } else
    { alert("Error. Max number is 100.")}     

}) 
