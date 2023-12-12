
export const setupModal = (parent, open_modal_btn) =>{  
    
    let modalState = false;

    function modal(){
        modalState ? 
        parent.innerHTML = `
        <div id="modal_container">
        <div id="modal_content">
        <h1>hey</h1>
        <button id="close_modal">close</button>
        </div>
        </div>
        `
        : parent.innerHTML = ``

        parent.querySelector("#close_modal").addEventListener("click", ()=>{
            modalState = false
            modal()
        })
    }

    function handleOpenModal(){
        modalState = true
        modal()
    }
    
    open_modal_btn.addEventListener("click", handleOpenModal)

}