import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setUpCardReview } from "./cardReview";

document.querySelector("#app").innerHTML = `
<div id="container">
  <div id="title_container">
  <div id="title">Our Reviews</div>
  <div id="title_line"/>
  </div>

  <div id="card_container">
  
  <div id="card">
 
  </div>
  
  <button id="prev">prev</button>
  <button id="next">next</button>
  <button id="surprise">Surprise</button>

  <div>

  </div>
  
  </div>

</div>
`;

setUpCardReview(document.querySelector("#card_container"));
