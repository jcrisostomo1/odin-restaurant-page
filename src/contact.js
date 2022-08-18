// Create contact section
const contactDiv = document.createElement('div');
const welcome = document.createElement('h1');
const address = document.createElement('h3');
const phone = document.createElement('h3');
contactDiv.classList.add('main');
welcome.innerText = "Contact"
address.innerText = "Address: 123 Fakenotreal Rd, Smallville CA, 12345";
phone.innerText = "Phone: 123-56-7890";
contactDiv.append(welcome, address, phone);

export { contactDiv } 