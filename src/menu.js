// Create menu section
const menuDiv = document.createElement('div');
const welcome = document.createElement('h1');
const paragraph = document.createElement('p');
menuDiv.classList.add('main');
welcome.innerText = "Menu!"
paragraph.innerText = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum, a omnis. Omnis voluptatem eveniet repellat? Mollitia non rem nisi ab doloremque architecto asperiores rerum repudiandae adipisci voluptas voluptatum hic laudantium consequatur, enim nulla molestias voluptate sed blanditiis sint nostrum cupiditate. Pariatur repellendus placeat sit minima corrupti consectetur dolores vitae aspernatur!";
menuDiv.append(welcome, paragraph);

export { menuDiv } 