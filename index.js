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

function enter(){
    if(inputValue.keyCode === 13 && inputValue.trim() === ' '){
        console.log("No esta vacio");
    }else{
        console.log("Esta vacio");
    }
}

input.addEventListener('keyup', enter)
