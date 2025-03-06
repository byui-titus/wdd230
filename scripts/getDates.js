// Dynamically set year
const yearSpan = document.querySelector('#year');
yearSpan.textContent = new Date().getFullYear();

// Dynamically set last modified date
const lastModified = document.querySelector('#lastModified');
lastModified.textContent = `Last Modified: ${document.lastModified}`;














