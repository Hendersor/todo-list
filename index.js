const dinamicList = document.querySelector(".dinamic-list");

const arrayItem =  ["Prueba1", "Prueba2"];
const fragment = document.createDocumentFragment();
const template = document.querySelector(".template").content;

arrayItem.forEach(item => {
    template.querySelector(".list").textContent = item;
    const clone = template.cloneNode(true);
    fragment.appendChild(clone);
});

dinamicList.appendChild(fragment);

