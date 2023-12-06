import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setUpCounter } from "./counter";

document.querySelector("#app").innerHTML = `
  <div id="container">
    <h1 id="title">Counter</h1>
    <h1 id="counter">0</h1>
    <div>
    <button id="decrease">DECREASE</button>
    <button id="reset">RESET</button>
    <button id="increase">INCREASE</button>
    </div>
  </div>
`;


setUpCounter(document.querySelector('#container'))