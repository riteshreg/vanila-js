import '../style.css'
export const setUpNavbar = (parent) => {
  function initNavbar() {
    parent.innerHTML = `
        <div id="navbar_container">
        <h2>Coding Addict</h2>    
        
        <ul id="navbar_ul_list_page">
        <li><a id="link" href="/">Home</a></li>
        <li><a id="link" href="/pages/about">About</a></li>
        <li><a id="link" href="#">Home</a></li>
        <li><a id="link" href="#">Home</a></li>

        </ul>


        <ul id="navbar_ul_list_page">
        <li><a id="link" href="#">Facebook</a></li>
        <li><a id="link" href="#">X</a></li>
        <li><a id="link" href="#">What's app</a></li>
        <li><a id="link" href="#">Instagram</a></li>

        </ul>

        </div>
        `;
  }

  initNavbar();
};
