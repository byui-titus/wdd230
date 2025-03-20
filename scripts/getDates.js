// Dynamically set year
const yearSpan = document.querySelector('#year');
yearSpan.textContent = new Date().getFullYear();

// Dynamically set last modified date
const lastModified = document.querySelector('#lastModified');
lastModified.textContent = `Last Modified: ${document.lastModified}`;


const modeButton = document.querySelector("#mode");
const body = document.querySelector("body");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("✪")) {
		body.style.background = "#000";
		body.style.color = "#fff";
		modeButton.textContent = "💡";
	} else {
		body.style.background = "#aea4e3";
		body.style.color = "#000";
		modeButton.textContent = "✪";
	}
});

document.addEventListener('DOMContentLoaded', function () {
	const hamburgerBtn = document.getElementById('menu');
	const mainMenu = document.querySelector('.navigation');
  
	hamburgerBtn.addEventListener('click', function () {
		mainMenu.style.display = 
		(mainMenu.style.display === 'none' || mainMenu.style.display === 'block') ? 
		'' : 'block';
	});
	hamburgerBtn.addEventListener('click', () => {
		menu.classList.toggle('show');
		hamburgerBtn.innerHTML = menu.classList.contains('show') ? 'X' : '&#9776;';
	});
  });

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
  

const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("#fig1");

const url = `https://api.openweathermap.org/data/2.5/weather?lat=0.4004382776169058&lon=32.47878626329907&appid=0782fecc58388e8fce1d91ab43807e18&units=metric`;
const url1 = `https://api.openweathermap.org/data/2.5/forecast?lat=0.4004382776169058&lon=32.47878626329907&appid=0782fecc58388e8fce1d91ab43807e18&units=metric`;

async function weatherapiFetch() {
	try {
	  const response = await fetch(url);
	  if (response.ok) {
		const data = await response.json();
		console.log(data); //Testing only
		displayResults(data); // uncomment when ready
	  } else {
		throw Error(await response.text());
	  }
	} catch (error) {
	  console.log(error);
	}
  }
  
  function displayResults(data) {
	currentTemp.innerHTML = `${data.main.temp.toFixed(1)}&deg;C`;
	const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
	let desc = data.weather[0].description;
	weatherIcon.setAttribute("src", iconsrc);
	weatherIcon.setAttribute("alt", "weather icon");
	captionDesc.textContent = `${desc}`;
  }
  
  async function forecastapiFetch() {
	try {
	  const response = await fetch(url1);
	  if (response.ok) {
		const data = await response.json();
		console.log(data); //Testing only
		displayForecast(data); // uncomment when ready
	  } else {
		throw Error(await response.text());
	  }
	} catch (error) {
	  console.log(error);
	}
  }

weatherapiFetch();
forecastapiFetch();
forecastdates();











