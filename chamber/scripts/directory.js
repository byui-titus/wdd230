const requestURL = 'data/members.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) { 
    const businesses = jsonObject['businesses'];
    businesses.forEach(displayBusinesses);
  });


  function displayBusinesses(business) {
    let card = document.createElement('section');
    let imageurl = document.createElement('img');
    let name= document.createElement('h2');
    let location = document.createElement('p');
    let contact = document.createElement('p');
    let membership = document.createElement('p');
    let companyurl = document.createElement('a');
  
    imageurl.setAttribute('src', business.imageurl);
    imageurl.setAttribute('alt', `Icon image for ${business.name}`);
    imageurl.setAttribute('loading', 'lazy');

    name.textContent = `${business.name}`;
  
    location.innerHTML = business.location;

    contact.textContent = business.contact;

    membership.textContent = business.membership;

    companyurl.textContent = business.companyurl;
    companyurl.setAttribute('href', '#'); 
  
    card.appendChild(imageurl);
    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(contact);
    card.appendChild(membership);
    card.appendChild(companyurl);
  
    document.querySelector('.directory-grid').appendChild(card);
  }


  const directory = document.querySelector('.directory-grid')
  const dirpanelbutton = document.querySelector('#panel');
  const dirlistbutton = document.querySelector('#list');


  dirpanelbutton.addEventListener('click', () => {directory.classList.add('panelview')}, false);
  dirlistbutton.addEventListener('click', () => {directory.classList.remove('panelview')}, false);