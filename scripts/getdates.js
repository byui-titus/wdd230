let oLastModif = new Date(document.lastModified);
document.querySelector("#lastModified").textContent = oLastModif;

const options = {
    year: "numeric"
};
document.querySelector("#yearDate").innerHTML =  new Date().toLocaleDateString("en-US", options);

const visitsDisplay = document.querySelector(".visits");
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;
if (numVisits !== 0) {
  visitsDisplay.textContent = numVisits;
} else {
  visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}
numVisits++;
localStorage.setItem("numVisits-ls", numVisits);


const currentTemp = document.querySelector("#current-temp");
currentTemp.innerHTML = `${data.main.temp}&deg;F`;
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

const url = `https://api.openweathermap.org/data/2.5/weather?lat=25.68&lon=-100.32&appid=82b9407b7b6d113e077d354c4b29fe74&units=imperial`;

async function apiFetch(){
    try{
        const response = await fetch(url);
        if(response.ok){
            const data = await response.json();
            console.log(data); //Testing only
            displayResults(data); // uncomment when ready
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error)
    }
}

function displayResults(data) {
    
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute("src",iconsrc);
    weatherIcon.setAttribute("alt","weather icon");
    captionDesc.textContent =`${desc}`;
}

apiFetch();