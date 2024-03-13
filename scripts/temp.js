const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#figcaption');
const weatherNow = document.querySelector('#now');

const url = 'https:api.openweathermap.org/data/2.5/weather?lat=0.3146557784244641&lon=32.57806450520109&appid=0782fecc58388e8fce1d91ab43807e18&units=metric';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            //console.log (data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}
function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    weatherNow.innerHTML = `${data.weather[0].description}`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute("src",iconsrc);
    weatherIcon.setAttribute("alt","weather icon");
    captionDesc.textContent =`${desc}`;
}

apiFetch();