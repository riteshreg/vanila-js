import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { Body } from "./components/body";

document.querySelector("#app").innerHTML = `
  <div>
  <header id="header_container">
    <h2 id="header_title">color flipper</h2>
    <div id="header_second_container"> 
      <h2 id="simple">Simple</h2>
      <h2 id="hex">Hex</h2>
    </div>
  </header>    

  <div id="body"/>
  </div>
`;


Body(document.querySelector('#body'), document.querySelector('#header_container'))