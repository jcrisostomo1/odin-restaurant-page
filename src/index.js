import restaurant from './images/restaurant.jpg';
import '@fortawesome/fontawesome-free/js/all.js';
import './style.css';

const body = document.getElementsByTagName('body')[0];
const content = document.createElement('div');
content.id = "content";
body.appendChild(content);

console.log(body)

// Create header
const header = document.createElement('header');
const title = document.createElement('h1');
title.innerText = "Spice and Dice";
header.appendChild(title);
content.appendChild(header);

// Create navbar
const navbar = document.createElement('navbar');
const tabs = ["Home", "Menu", "Contact"];
tabs.map(item => {
    const div = document.createElement('div');
    const tabName = document.createElement('h3');
    tabName.innerText = item;
    div.appendChild(tabName);
    div.classList.add("tab");
    navbar.appendChild(div);
});
content.appendChild(navbar);

// Create section
const section = document.createElement('section');
const main = document.createElement('div');
const welcome = document.createElement('h1');
const paragraph = document.createElement('p');
const image = document.createElement('img');
main.classList.add('main');
welcome.innerText = "Welcome to Spice and Dice!"
paragraph.innerText = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum, a omnis. Omnis voluptatem eveniet repellat? Mollitia non rem nisi ab doloremque architecto asperiores rerum repudiandae adipisci voluptas voluptatum hic laudantium consequatur, enim nulla molestias voluptate sed blanditiis sint nostrum cupiditate. Pariatur repellendus placeat sit minima corrupti consectetur dolores vitae aspernatur!";
image.src = restaurant;
main.append(welcome, paragraph,image);
section.appendChild(main);
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