// Code for responsive navigation
const hamButton = document.querySelector('#hamBtn');
const navigation = document.querySelector('.navigation');
hamButton.addEventListener('click', () => { navigation.classList.toggle('appear') }, false);

//last update date
let lastUpdated = document.lastModified;
document.getElementById("updatedDate").textContent = lastUpdated;


function closeBanner() {
    document.getElementById("chamberBanner").style.display = "none";
}

function closeMessage() {
    document.querySelector('.top-message').style.display = 'none';
}