import './style.css'
import { setUpSidebar } from './components/sidebar'

document.querySelector('#app').innerHTML = `
  <div id="toggle"></div>
  <div id="container">
    <div  id="sidebar"></div>
    <div id="content_container">
       <h1>hello</h1>
       lorem4444444444444
       
   </div>
   </div>
`

setUpSidebar(document.querySelector('#sidebar'), document.querySelector("#toggle"))
