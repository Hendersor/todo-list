let task = document.getElementById('input');
task.addEventListener('keyup', input);


function input (event){
const code = event.keyCode;
const taskValue = task.value;
   if(code === 13){
       if(task.value.length > 0){
        const area = document.querySelector('ul.list');
        const li = document.createElement('li');
        area.appendChild(li);
        const userTask = document.createTextNode(taskValue);
        li.appendChild(userTask);
        deleteInput();
       }

   }
}

function deleteInput(){
    let task = document.getElementById('input').value = '';

}


