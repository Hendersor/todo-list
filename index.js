const dinamicList = document.querySelector(".dinamic-list");
const input = document.querySelector("#input");
const inputValue = document.querySelector("#input").value;


const arrayItem =  [];
const fragment = document.createDocumentFragment();
const template = document.querySelector(".template").content;

arrayItem.forEach(item => {
    template.querySelector(".list").textContent = item;
    const clone = template.cloneNode(true);
    fragment.appendChild(clone);
});

dinamicList.appendChild(fragment);

function validarEnter(e){
    if(e.keyCode === 13 && input.value.trim() === "" ){
        console.log("Esta vacio"); //Agregar animacion
    }
    if(e.keyCode === 13 && input.value.trim() !== "" ){
        console.log("Tiene contenido");
    }
}
input.addEventListener('keyup', validarEnter)

function pushArray(){
    arrayItem.push(input.value);
}