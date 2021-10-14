// Querying elements by id
const input = document.getElementById("favchap");
const addButton = document.getElementById("add");
const list = document.getElementById("list");

// Adding event listeners
addButton.addEventListener("click", () => {
  if (input.value != null && input.value != "") addFavoriteChapter(input.value);
  else alert("Please, insert a chapter!");
});

input.addEventListener("keyup", (event) => {
  // Triggering value to html LI
  if (input.value != null && input.value != "" && event.key === "Enter")
    addFavoriteChapter(input.value);
});

// HTML DOM manipulation functions
const addFavoriteChapter = (favoriteChapter) => {
  // Step 6.a
  let li = document.createElement("li");
  // Step 6.b
  let delBtn = document.createElement("button");
  // Step 6.c
  li.textContent = favoriteChapter;
  // Step 6.d
  delBtn.textContent = "❌";
  // Step 6.e
  li.appendChild(delBtn);
  // Step 6.f
  list.appendChild(li);
  // Step 6.g
  delBtn.addEventListener("click", () => list.removeChild(li));
  // Step 6.h
  input.focus();
  // Step 6.i
  input.value = "";
};
