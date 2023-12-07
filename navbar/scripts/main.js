import "../style.css";
import { setUpNavbar } from "../components/Navbar";

document.querySelector("#app").innerHTML = `
  <div>
    <div id="navbar"></div>

    <h1>Hello home page </h1>

    

    
  </div>
  `;

setUpNavbar(document.querySelector("#navbar"));
