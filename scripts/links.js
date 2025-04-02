const baseURL = "https://byui-titus.github.io/wdd230/";
const linksURL = baseURL + "data/links.json"; 

// Asynchronous function to fetch the links data
async function getLinks() {
    const response = await fetch(linksURL);  // Fetch the JSON file
    const data = await response.json(); 
    console.log(data); // Check if data is being fetched    // Convert the response to JSON
    displayLinks(data);                     // Pass the data to displayLinks function
}

// Function to dynamically create and display the links
function displayLinks(data) {
    const container = document.getElementById("learning-activities");  // This is the container where the links will go
    data.weeks.forEach(week => {
        const weekElement = document.createElement("div");  // Create a div for each week
        const weekHeader = document.createElement("h3");     // Create a header for the week
        weekHeader.textContent = week.week;                  // Set the text to the week name
        weekElement.appendChild(weekHeader);                  // Append the week header to the div
        
        const list = document.createElement("ul");           // Create a list for the links
        week.links.forEach(link => {
            const listItem = document.createElement("li");  // Create a list item for each link
            const anchor = document.createElement("a");      // Create an anchor element for the link
            anchor.href = baseURL + link.url;                // Set the URL for the link
            anchor.textContent = link.title;                 // Set the text for the link
            listItem.appendChild(anchor);                     // Append the link to the list item
            list.appendChild(listItem);                       // Append the list item to the list
        });

        weekElement.appendChild(list);                        // Append the list to the week div
        container.appendChild(weekElement);                    // Append the week div to the container
    });
}

// Call the getLinks function when the page is ready
getLinks();
