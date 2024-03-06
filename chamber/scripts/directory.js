const url1 = "data/data.json";
const cards = document.querySelector("#cards");

async function getBusinessesData() {
  const response = await fetch(url1);
  const data = await response.json();
  displayBusinesses(data.businesses);
}

getBusinessesData();
const displayBusinesses = (businesses) => {
  businesses.forEach((business) => {
    let card = document.createElement("section");
    let bName = document.createElement("h2");
    let imageurl = document.createElement("img");
    let location = document.createElement("p");
    let contact = document.createElement("p");
    let companyurl = document.createElement("a");
    let membership = document.createElement("h4");

    imageurl.setAttribute("src", business.imageurl);
    imageurl.setAttribute("alt", `Logo of ${business.name}`);
    imageurl.setAttribute("loading", "lazy");
    imageurl.setAttribute("width", "auto");
    imageurl.setAttribute("height", "auto");

    bName.textContent = `${business.name}`;
    location.textContent = `${business.location}`;
    contact.textContent = `${business.contact}`;
    membership.textContent = `${business.membership} Membership`;
    companyurl.setAttribute("href", `${business.companyurl}`);
    companyurl.textContent = business.companyurl;
    companyurl.setAttribute("target", "_blank");

    card.appendChild(imageurl);
    card.appendChild(bName);
    card.appendChild(location);
    card.appendChild(contact);
    card.appendChild(membership);
    card.appendChild(companyurl);

    cards.appendChild(card);
  });
};
getBusinessesData();


const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

gridbutton.addEventListener("click", () => {
  display.classList.add("grid-directory");
  display.classList.remove("list-directory");
});

listbutton.addEventListener("click", showList);

function showList() {
  display.classList.add("list-directory");
  display.classList.remove("grid-directory");
}