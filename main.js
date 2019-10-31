// Warm Up
document.querySelector('span.mess-with-me').style.fontSize = '3em';
document.querySelector('p.mess-with-me').style.background = 'lightgreen';
document.querySelector('#triceratops').style.width = '324px';
document.querySelector('#hide-me').style.display = 'none';

// Event Listeners!
document.querySelector('#triceratops').addEventListener('click', redBorder)

document.querySelector('#feathers').addEventListener('click', makeTransparent)

document.querySelector('#rattle').addEventListener('click', addPadding)

document.querySelector('#toggle').addEventListener('click', changeBackgroundColor)

document.querySelector('#t-rex').addEventListener('mouseover', growPic)

document.querySelector('#t-rex').addEventListener('mouseout', changePicBack)

function redBorder(event) {
    event.target.style.border = '5px solid red';
}

function makeTransparent(event) {
    event.target.style.opacity = '.50';
}

function addPadding(event) {
    event.target.style.paddingRight = '100px';
}

function changeBackgroundColor() {
    const findRow = document.querySelector('#row');
    let bgColor = findRow.style.background

    if(bgColor === 'red') {
        findRow.style.background = 'white';
    } else {
        findRow.style.background = 'red';
    }
}

function growPic() {
    event.target.style.width = '200px';
}

function changePicBack() {
    event.target.style.width = '162px';
}