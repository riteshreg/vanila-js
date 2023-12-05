import colors from "../data/color.json";

function generateRandomColor(type) {
  const randomNumber = Math.floor(Math.random() * colors[type].length);
  const { color_code, name } = colors[type][randomNumber];
  return { color_code, name };
}

export function Body(bodyElement, header) {
  let typeState = "normal";
  bodyElement.style.backgroundColor = "pink";
  bodyElement.innerHTML += `
        <div id="bodyElement_container">
        <h3 id="color_title">background color : #D3A6E5</h3>
        <button id="btn">Click</button>
    </div>
    `;

  function handleClick() {
    console.log(typeState);
    const { color_code, name } = generateRandomColor(typeState);
    bodyElement.querySelector(
      "#color_title"
    ).innerHTML = `Background Color: ${name}`;
    bodyElement.style.backgroundColor = color_code;
    bodyElement.querySelector('#btn').style.backgroundColor = color_code
  }

  function handleChangeMode(type) {
    typeState = type;
    handleClick();
  }

  header
    .querySelector("#hex")
    .addEventListener("click", () => handleChangeMode("hex"));
  header
    .querySelector("#simple")
    .addEventListener("click", () => handleChangeMode("normal"));
  bodyElement
    .querySelector("#btn")
    .addEventListener("click", () => handleClick());
}
