let oLastModif = new Date(document.lastModified);
document.querySelector("#lastModified").textContent = oLastModif;

const options = {
	year: "numeric"
  };
  document.querySelector("#yearDate").innerHTML =  new Date().toLocaleDateString("en-US", options);
  
document.addEventListener('DOMContentLoaded', function () {
	const hamburgerBtn = document.getElementById('menu');
	const mainMenu = document.querySelector('.navigation');
  
	hamburgerBtn.addEventListener('click', function () {
		mainMenu.style.display = 
		(mainMenu.style.display === 'none' || mainMenu.style.display === 'block') ? 
		'' : 'block';
	});
  });

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


