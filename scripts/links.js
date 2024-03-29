const baseURL = "https://github.com/byui-titus/wdd230";
const linksURL = "https://github.com/byui-titus/wdd230/blob/main/links/links.json";
const cards = document.querySelector("#cards");

async function getLinks() {
  const response = await fetch(linksURL);
  const data = await response.json();
  displayLinks(data);
}

const displayLinks = (weeks) => {
  weeks.foreach((week) => {
    let card = document.createElement("section");
    let week = document.createElement("p");
    let activity = document.createElement("a");

    week.textcontent = `${week.lesson}`;
    activity.setAttribute("href", week.url);
    activity.setAttribute("");

    card.appendChild(week);
    card.appendChild(activity);

    cards.appendChild(card);
  });
};
getLinks();