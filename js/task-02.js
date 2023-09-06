const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.querySelector("#ingredients");

const items = [];
ingredients.map(ingredient => {
  const item = document.createElement("li");
  item.textContent = ingredient;
  item.classList.add("item");
  items.push(item);
})
list.append(...items)


// const items = ingredients.map(ingredient => `<li class="item">${ingredient}</li>`)
//   .join('');
// list.insertAdjacentHTML('beforeend', items);