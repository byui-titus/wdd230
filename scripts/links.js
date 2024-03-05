const baseURL = "https://byui-titus.github.io/wdd230/";
const linksURL = "https://byui-titus.github.io/wdd230/data/links.json";


async function getLinks() {
  try {
      const response = await fetch(linksURL);
      const data = await response.json();
      console.log(data); // Test JSON data
      displayLinks(data); // Call function to display links
  } catch (error) {
      console.error('Error fetching links data:', error);
  }
}

// Function to display activity links
function displayLinks(weeks) {
  const linksContainer = document.getElementById('#cards');

  // Clear existing content
  linksContainer.innerHTML = '';
 // Loop through weeks
  weeks.forEach(week => {
      const weekHeading = document.createElement('h3');
      weekHeading.textContent = `Week ${week.lesson}`;

      const linksList = document.createElement('ul');

      // Loop through links
      week.links.forEach(link => {
          const listItem = document.createElement('li');
          const linkAnchor = document.createElement('a');
          linkAnchor.href = baseURL + link.url;
          linkAnchor.textContent = link.title;
          listItem.appendChild(linkAnchor);
          linksList.appendChild(listItem);
      });

      // Append week heading and links list to container
      linksContainer.appendChild(weekHeading);
      linksContainer.appendChild(linksList);
  });
}

// Call getLinks function to start fetching and displaying links
getLinks()