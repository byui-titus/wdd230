// 1️⃣ Initialize display element variable
const visitsDisplay = document.querySelector(".visits");
// 2️⃣ Get the stored VALUE for the numVisits-ls KEY in localStorage if it exists. 
//If the numVisits KEY is missing, then assign 0 to the numVisits variable.
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

// 3️ Determine if this is the first visit or display the number of visits. 
//We wrote this example backwards in order for you to think deeply about the logic.
if (numVisits !== 0) {
  visitsDisplay.textContent = numVisits;
} else {
  visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}

// 4️ increment the number of visits by one.
numVisits++;

//store the new visit total into localStorage, key=numVisits-ls
localStorage.setItem("numVisits-ls", numVisits);



document.addEventListener("DOMContentLoaded", () => {
    let lastModified = document.lastModified;
   let h4 = document.querySelector("footer h4");
    h4.innerText = h4.innerText.concat(` ${lastModified}`);
    let date = new Date();
    let h3 = document.querySelector("footer h3");
    let str = h3.innerText.slice(0, index + 1).concat(`${date.getFullYear()}`);
   h3.innerText = str.concat(h3.innerText.slice(index + 1));
});