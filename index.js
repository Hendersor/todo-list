const dinamicList = document.querySelector(".dinamic-list");
const input = document.querySelector("#input");


const arrayTask =  [];
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
        console.log(taskObject);
        arrayTask.push(taskObject);
        deployTask();
        input.value = "";
    }
}

function deployTask(){
    Object.values(arrayTask).forEach(item => {
        dinamicList.innerHTML = "";
        template.querySelector(".list").textContent = item.task;
        const clone = template.cloneNode(true);
        clone.querySelectorAll('.btn')[0].dataset.id = item.id;
        clone.querySelectorAll('.btn')[1].dataset.id = item.id;
        fragment.appendChild(clone);
    });
    dinamicList.appendChild(fragment);
    
}


const selectTask = document.querySelector(".dinamic-list")

selectTask.addEventListener('click', taskDone);

function taskDone(e){
   if(e.target.name === "checkmark-outline"){
       
      /*  console.log(arrayTask[e.target.dataset.id].status); */
   
        arrayTask.find(item => {
            if(e.target.dataset.id == item.id){
                console.log(true)
                console.log(arrayTask[e.target.dataset.id].status);
            }
            else{
                console.log(false)
            }
        })

        

   }
   if(e.target.name === "close-outline"){
       console.log("Tarea borrada");
        console.log(e.target);

   }
   e.stopPropagation();
}