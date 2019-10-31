// Warm Up
document.querySelector('span.mess-with-me').style.fontSize = '3em';
document.querySelector('p.mess-with-me').style.background = 'lightgreen';
document.querySelector('#triceratops').style.width = '324px';
document.querySelector('#hide-me').style.display = 'none';

// Event Listeners!
function redBorder(event) {
    event.target.style.border = '5px solid red';
}

document.querySelector('#triceratops').addEventListener('click', redBorder)

function makeTransparent(event) {
    event.target.style.opacity = '.50';
}

document.querySelector('#feathers').addEventListener('click', makeTransparent)

function addPadding(event) {
    event.target.style.paddingRight = '100px';
}

document.querySelector('#rattle').addEventListener('click', addPadding)


function changeBackgroundColor() {
    const findRow = document.querySelector('#row');
    let bgColor = findRow.style.background

    if(bgColor === 'red') {
        findRow.style.background = 'white';
    } else {
        findRow.style.background = 'red';
    }
}

document.querySelector('#toggle').addEventListener('click', changeBackgroundColor)

function growPic() {
    event.target.style.width = '200px';
}

document.querySelector('#t-rex').addEventListener('mouseover', growPic)

function changePicBack() {
    event.target.style.width = '162px';
}

document.querySelector('#t-rex').addEventListener('mouseout', changePicBack)