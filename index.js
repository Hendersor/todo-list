let task = document.getElementById('input');
task.addEventListener('keyup', input);




function input (event){
const code = event.keyCode;
const taskValue = task.value;
   if(code === 13){
        const area = document.querySelector('ul.list');
        const li = document.createElement('li');
        area.appendChild(li);
        const userTask = document.createTextNode(taskValue);
        li.appendChild(userTask);
        console.log(taskValue);
   }
}

