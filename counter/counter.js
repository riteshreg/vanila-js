export const setUpCounter = (parent) =>{
    let count = 0;

    function updateCount(counter){
        count = counter;
        parent.querySelector('#counter').innerHTML = count
    }

    

    parent.querySelector("#increase").addEventListener("click", ()=>updateCount(++count))
    parent.querySelector('#decrease').addEventListener("click", ()=>updateCount(--count))
    parent.querySelector('#reset').addEventListener('click', ()=>updateCount(0))
}