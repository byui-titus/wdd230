const visitsDisplay = document.querySelector(".visits");

let namVisits = Number(window.localStorage.getItem("namVisits-ls")) || 0;


if (namVisits !== 0) {
  visitsDisplay.textContent = namVisits;
} else {
  visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}

// 4️ increment the number of visits by one.
namVisits++;

//store the new visit total into localStorage, key=numVisits-ls
localStorage.setItem("namVisits-ls", namVisits);

