import { homeDiv } from './home'; 
import { menuDiv } from './menu';
import '@fortawesome/fontawesome-free/js/all.js';
import './style.css';

const body = document.getElementsByTagName('body')[0];
const content = document.createElement('div');
content.id = "content";
body.appendChild(content);

// Create header
const header = document.createElement('header');
const title = document.createElement('h1');
title.innerText = "Spice and Dice";
header.appendChild(title);
content.appendChild(header);

// Create navbar
const navbar = document.createElement('navbar');
const tabNames = ["Home", "Menu", "Contact"];
tabNames.map(item => {
    const div = document.createElement('div');
    const tabName = document.createElement('h3');
    tabName.innerText = item;
    div.appendChild(tabName);
    div.classList.add("tab");
    navbar.appendChild(div);
});
content.appendChild(navbar);

// Append home section as default
const section = document.createElement('section');
section.appendChild(homeDiv);
content.appendChild(section);

// Create footer
const footer = document.createElement('footer');
const anchor = document.createElement('a');
const githubLogo = document.createElement('i');
const credits = document.createElement('p');
anchor.setAttribute('href', 'https://github.com/jcrisostomo1');
anchor.setAttribute('rel', 'noreferrer');
anchor.setAttribute('target', '_blank');
githubLogo.classList.add("fa-brands", "fa-github");
anchor.appendChild(githubLogo);
credits.innerText = "Made by: jcrisostomo1";
footer.append(anchor, credits);
content.append(footer);


const removeAllChildNodes = (parent) => {
	while (parent.firstChild) {
			parent.removeChild(parent.firstChild);
	}
}

// Logic to switch tabs
const tabs = document.querySelectorAll('.tab');
tabs.forEach(tab => {
	tab.addEventListener('click', () => {
		// Remove previous section
		let prevSection = document.querySelector('section');
		removeAllChildNodes(prevSection);
		if (tab.innerText === 'Home') {
			prevSection.appendChild(homeDiv);
		} else if (tab.innerText === 'Menu') {
			prevSection.appendChild(menuDiv);
		}
	});
});