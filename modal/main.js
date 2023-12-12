import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupModal } from './modal.js'

document.querySelector('#app').innerHTML = `
  <div id="container">
  <div id="modal"></div>
    <h1>modal</h1>
    <button id="open_modal_btn">open modal</button>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias repudiandae perspiciatis atque eaque earum, laborum voluptas molestiae voluptatibus nostrum perferendis accusantium. Laboriosam, quis atque! Iste sapiente delectus, excepturi quod vero accusamus autem atque magni illo eum animi eius laboriosam sit earum doloremque sunt ut amet omnis aperiam enim dolore quasi! Reprehenderit labore sequi quia quidem eius doloremque excepturi debitis repudiandae officiis veniam. Aliquid, soluta architecto mollitia fuga porro, autem recusandae dolore natus repellat quia cum incidunt atque molestiae, optio illo? Ex, vero qui, quidem saepe possimus corporis incidunt tempora a maiores doloremque voluptates corrupti? Deserunt, facere itaque? Neque quo omnis cum doloremque explicabo repellat, praesentium sed quis maxime aspernatur officia eum, fugit eligendi temporibus debitis? Labore repudiandae quidem atque ipsa vitae, omnis obcaecati distinctio sunt deleniti numquam earum neque quasi! Nulla nostrum fugiat deleniti ratione nesciunt, totam vel cumque labore quas impedit alias nihil at illum ab amet ipsam maiores. Harum quod debitis et. Molestias tenetur porro nesciunt quidem cum consectetur fuga voluptatibus est obcaecati dolorum commodi, nemo ipsam assumenda voluptatum ad a laborum illo? Perferendis tempora voluptatum necessitatibus delectus assumenda omnis soluta in numquam dolor placeat eaque, quisquam vero vitae ut pariatur repellat doloremque quae quidem illo provident facilis aliquam! Saepe delectus autem, ducimus, recusandae veniam eaque dolore iure neque doloribus placeat, quasi odit sit voluptate quia. Consequuntur exercitationem ipsam numquam quam commodi, quos pariatur! Exercitationem nisi dolorem eaque ipsam in molestias maxime, eligendi nostrum distinctio commodi beatae quidem eius aliquid laboriosam fuga debitis necessitatibus, minima harum molestiae impedit similique esse voluptatibus enim. Recusandae culpa est nostrum sapiente minima dolorem animi eum, esse totam odio laudantium quis, id inventore vitae aspernatur iste accusamus in dicta cum vel ut. Exercitationem rem reprehenderit illum deserunt quidem repellendus illo temporibus at cum maiores molestiae vero quibusdam porro sapiente provident dolor nisi dolore, minus, laudantium ipsam. Ea debitis dolorem sunt cum consequatur repellat, aliquid assumenda odit sit facilis quidem minus quam est! Vitae ipsam nobis modi aut quod possimus atque repudiandae nostrum at facere odit id, nulla dignissimos rem natus ea commodi ducimus! Quo magni error reiciendis quaerat eaque necessitatibus rerum cupiditate facere, explicabo exercitationem veritatis cum modi. Ullam autem illum laborum eveniet assumenda iste consequatur dolorem quae tenetur! Natus, eius repudiandae. Magnam beatae consectetur necessitatibus hic fugiat alias veniam tempora, nulla amet magni corrupti explicabo molestias eveniet quibusdam officia harum eius inventore dicta repellendus id dolor. Fugit nulla eligendi corporis dolor voluptate, commodi in alias consequatur aperiam qui facere recusandae nihil vitae cumque eaque. Aliquid, necessitatibus accusantium? Ipsam tempore rem esse veniam fugiat aperiam repudiandae dolorum unde praesentium, nobis earum vitae quibusdam illum sapiente voluptatibus vero quasi sit ea deleniti pariatur error ad fuga inventore?

  </div>
`


setupModal(document.querySelector('#modal'), document.querySelector('#open_modal_btn'))


