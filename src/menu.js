import drunkenNoodles from './images/drunken_noodles.jpeg'

// Create menu section
const menuDiv = document.createElement('div');
const welcome = document.createElement('h1');
const paragraph = document.createElement('p');
const drunkenNoodlesImg = document.createElement('img');
menuDiv.classList.add('main');
welcome.innerText = "Menu!"
drunkenNoodlesImg.src = drunkenNoodles;
menuDiv.append(welcome, drunkenNoodlesImg, paragraph);

export { menuDiv } 