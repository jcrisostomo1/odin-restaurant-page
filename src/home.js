import restaurant from './images/restaurant.jpg';

// Create home section
const homeDiv = document.createElement('div');
const welcome = document.createElement('h1');
const paragraph = document.createElement('p');
const image = document.createElement('img');
homeDiv.classList.add('main');
welcome.innerText = "Welcome to Spice and Dice!"
paragraph.innerText = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum, a omnis. Omnis voluptatem eveniet repellat? Mollitia non rem nisi ab doloremque architecto asperiores rerum repudiandae adipisci voluptas voluptatum hic laudantium consequatur, enim nulla molestias voluptate sed blanditiis sint nostrum cupiditate. Pariatur repellendus placeat sit minima corrupti consectetur dolores vitae aspernatur!";
image.src = restaurant;
homeDiv.append(welcome, paragraph,image);

export { homeDiv } 