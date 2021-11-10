const recipesList = document.querySelector("#recipes");

/**
 * Function fetch all recipes
 */
const getRecipes = () => {
  fetch("api/recipes.json")
    .then((res) => {
      return res.json();
    })
    .then((list) => {
      const { recipes } = list;
      recipes.forEach((element) => createCard(element));
    });
};

/**
 *
 * @param {*} recipe
 */
const createCard = (recipe) => {
  const title = document.createElement("li");
  title.textContent = recipe.title;
  const totalIngredients = document.createElement("li");
  totalIngredients.textContent = recipe.ingredients.length + ` ingrediants`;
  const totalSteps = document.createElement("li");
  totalSteps.textContent = recipe.steps.length + ` steps to prepare`;

  const card = document.createElement("ul");
  card.appendChild(title);
  card.appendChild(totalIngredients);
  card.appendChild(totalSteps);
  recipesList.appendChild(card);
};

getRecipes();
