import data from "./libs/data.json";

function getRandomPerson() {
  return data[Math.floor(Math.random() * data.length)];
}

export function setUpCardReview(parent) {
  let index = 0;

  function updateCardData(person) {
    parent.querySelector("#card").innerHTML = `
      <div>
      <div>
      <img id="avatar" src="${person.img}"/>
      </div>
      
      <div id="user_data_container">
      <h7>${person.name}</h7>
      <h8>${person.job}</h8>
      </div>
      
      <div>
      <p>${person.text}</p>
      </div>
      </div>
      `;
  }

  function updateIndex(ind) {
    if (ind === data.length) {
      index = 0;
    } else if (ind === -1) {
      index = data.length - 1;
    } else {
      index = ind;
    }
    updateCardData(data[index]);
  }

  updateCardData(data[index]);

  parent
    .querySelector("#prev")
    .addEventListener("click", () => updateIndex(--index));
  parent
    .querySelector("#next")
    .addEventListener("click", () => updateIndex(++index));

  function handleClick() {
    console.log("click");
    updateCardData(getRandomPerson());
  }

  parent.querySelector("#surprise").addEventListener("click", handleClick);
}
