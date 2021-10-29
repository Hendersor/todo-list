const dinamicList = document.querySelector(".dinamic-list");
const input = document.querySelector("#input");


let arrayTask =  [];
document.addEventListener('DOMContentLoaded', () =>{
    if(localStorage.getItem('tareas')){
        arrayTask = JSON.parse(localStorage.getItem('tareas'));
    }
    deployTask();
})
const fragment = document.createDocumentFragment();
const template = document.querySelector(".template").content;


input.focus();
input.addEventListener('keyup', inputValidation)

function inputValidation(e){
    if(e.keyCode === 13 && input.value.trim() === "" ){
        console.log("Esta vacio"); //Agregar animacion
    }
    if(e.keyCode === 13 && input.value.trim() !== "" ){
        const taskObject = {
            id: Date.now(),
            task: input.value,
            status: false,
        }
        arrayTask.push(taskObject);
        deployTask();
        input.value = "";
    }
}

function deployTask(){
    localStorage.setItem('tareas', JSON.stringify(arrayTask))


    dinamicList.innerHTML = "";
    Object.values(arrayTask).forEach(item => {
        const clone = template.cloneNode(true);
        clone.querySelector(".list").textContent = item.task;
        
       if(item.status){
        clone.querySelector(".list").style.textDecoration = "line-through";
        clone.querySelectorAll(".btn")[0].setAttribute('name','refresh-outline')
       }else{
        clone.querySelector(".list").style.textDecoration = "none";
        clone.querySelectorAll('.btn')[0].setAttribute('name', 'checkmark-outline')
       }

        clone.querySelectorAll('.btn')[0].dataset.id = item.id;
        clone.querySelectorAll('.btn')[1].dataset.id = item.id;
        fragment.appendChild(clone);
    });
    dinamicList.appendChild(fragment);
    
}


const selectTask = document.querySelector(".dinamic-list");

selectTask.addEventListener('click', taskDone);

function taskDone(e){
   
    if(e.target.name === "checkmark-outline"){
        arrayTask.forEach(item => {
            if(e.target.dataset.id == item.id){
                item.status = true; 
                deployTask();
            }
        })             
   }

   if(e.target.name === "refresh-outline"){
    arrayTask.forEach(item => {
        if(e.target.dataset.id == item.id){
            item.status = false;
            deployTask();
        }
    })    
   }

   if(e.target.name === "close-outline"){
            const removeIndex = arrayTask.findIndex(item => item.id == e.target.dataset.id);
            arrayTask.splice( removeIndex, 1);
            deployTask();
        }
   e.stopPropagation();
}




