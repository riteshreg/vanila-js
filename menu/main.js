import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { menu } from "./data";

document.querySelector("#app").innerHTML = `
  <div>
    <div class="title_container">
    <h1>Our Menu</h1>
    <div class="underline"></div>
    </div>

    <div class="menu_list"></div>

    <div class="menu_container">
    
    </div>

  </div>
`;

const menuList = document.querySelector(".menu_list");
const menuContainer = document.querySelector(".menu_container");

function filterMenu() {
  let selectedItem = "all";

  const menuCategoriesArray = [...new Set(menu.map((item) => item.category))];
  menuList.innerHTML = `
  <ul class="menu_categories">
  <li class="menu_item active">All</li>
  ${menuCategoriesArray
    .map((item) => `<li data-category=${item} class="menu_item">${item}</li>`)
    .join("")}  
  </ul>
  </ul>
  `;



  document.querySelectorAll(".menu_item").forEach((categoryItem) => {
    categoryItem.addEventListener("click", () => {
      selectedItem = categoryItem.dataset.category;
      const menus = selectedItem === "all" ? menu : menu.filter((item) => item.category === selectedItem);
      displayItems(menus);
      // Add/remove "active" class for highlighting the selected category
      document.querySelectorAll(".menu_item").forEach((item) => item.classList.remove("active"));
      categoryItem.classList.add("active");
    });
  });

  displayItems(menu)


}

filterMenu();

function displayItems(menus) {
  menuContainer.innerHTML = ``;
  menus.forEach((item) => {
    const menuItemContainer = document.createElement("div");
    menuItemContainer.id = `menu_item_${item.id}`;
    menuContainer.appendChild(menuItemContainer);
    menuCard(menuItemContainer, item);
  });
}

function menuCard(parent, item) {
  parent.innerHTML = `
  <div class="card_container">
  <img height="200" height="200" src=${item.img} alt=${item.title}/>
  <div class="menu_info">
  <div class="menu_title_container">
  <div class="menu_title">${item.title}</div>
  <div class="menu_price">${item.price}</div>
  </div>
  <div class="seperator"></div>
  <div class="menu_text">${item.desc}</div>
  </div>
  `;
}
