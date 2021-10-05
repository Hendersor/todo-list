const dinamicList = document.querySelector(".dinamic-list");
const input = document.querySelector("#input");


const arrayTask =  [];
const fragment = document.createDocumentFragment();
const template = document.querySelector(".template").content;



input.addEventListener('keyup', inputValidation)

function inputValidation(e){
    if(e.keyCode === 13 && input.value.trim() === "" ){
        console.log("Esta vacio"); //Agregar animacion
    }
    if(e.keyCode === 13 && input.value.trim() !== "" ){
        arrayTask.push(input.value);
        deployTask();
        input.value = "";
    }
}

function deployTask(){
    arrayTask.forEach(item => {
        dinamicList.innerHTML = "";
        template.querySelector(".list").textContent = item;
        const clone = template.cloneNode(true);
        fragment.appendChild(clone);
    });
    dinamicList.appendChild(fragment);
}