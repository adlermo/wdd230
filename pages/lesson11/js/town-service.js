// Global towns parent section element
const towns = document.getElementById("towns");

const getAll = () => {
  // URL to request town data
  const url = "https://byui-cit230.github.io/weather/data/towndata.json";

  fetch(url)
    .then(
      (res) => {
        if (res.ok) {
          return res.json();
        }
      },
      (err) => {
        alert("It looks like the data isn't available. Please check the log!");
        console.log(err);
      }
    )
    .then((json) => populateData(json));
};

/**
 * Receives the json resolved method and iterates over each town creating the card
 *
 * @param {*} list
 */
const populateData = (list) => {
  // Deconstructing object attribute towns
  const { towns } = list;

  towns.forEach((town) => {
    if (
      town.name === "Soda Springs" ||
      town.name === "Fish Haven" ||
      town.name === "Preston"
    ) {
      createTown(town);
    }
  });
};

const createTown = (town) => {
  const h1 = document.createElement("h1");
  h1.textContent = town.name;
  const h6 = document.createElement("h6");
  h6.textContent = town.motto;

  const p1 = document.createElement("p");
  p1.textContent = `Year Founded: ${town.yearFounded}`;
  const p2 = document.createElement("p");
  p2.textContent = `Population: ${town.currentPopulation}`;
  const p3 = document.createElement("p");
  p3.textContent = `Annual Rain Fall: ${town.averageRainfall}`;

  const img = document.createElement("img");
  img.setAttribute("src", `./images/${town.name}.jfif`);
  img.setAttribute("alt", `${town.name} Image`);
  img.setAttribute("width", `100%`);
  img.setAttribute("heigth", `auto`);

  // Containerin
  const content = document.createElement("div");
  content.appendChild(h1);
  content.appendChild(h6);
  content.appendChild(p1);
  content.appendChild(p2);
  content.appendChild(p3);
  const imgLink = document.createElement("a");
  imgLink.setAttribute("href", `./${town.name}.html`);
  imgLink.appendChild(img);

  const parent = document.createElement("section");

  parent.appendChild(content);
  parent.appendChild(imgLink);

  towns.appendChild(parent);
};

// Main method call
getAll();
