/**
 * Function fetch all recipes
 */
const getProphets = () => {
  const requestURL =
    "https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json";

  fetch(requestURL)
    .then((res) => {
      return res.json();
    })
    .then((list) => {
      const { prophets } = list;
      prophets.forEach((p) => createCard(p));
    });
};

/**
 *
 * @param {*} prophet
 */
const createCard = (prophet) => {
  const fullname = prophet.name + " " + prophet.lastname;

  let card = document.createElement("section");
  let h2 = document.createElement("h3");
  let image = document.createElement("img");
  let p1 = document.createElement("p");
  let p2 = document.createElement("p");

  p1.textContent = "Birth Date: " + prophet.birthdate;
  p2.textContent = "Birth Place: " + prophet.birthplace;
  h2.textContent = fullname;

  card.appendChild(h2);
  card.appendChild(p1);
  card.appendChild(p2);

  image.setAttribute("src", prophet.imageurl);
  image.setAttribute("alt", `${fullname} - ${prophet.order}`);

  card.appendChild(image);

  document.querySelector("#cards").appendChild(card);
};

getProphets();
