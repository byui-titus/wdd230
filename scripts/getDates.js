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
	hamburger.addEventListener('click', () => {
		menu.classList.toggle('show');
		hamburger.innerHTML = menu.classList.contains('show') ? 'X' : '&#9776;';
	});
  });













