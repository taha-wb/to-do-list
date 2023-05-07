
const tasks = document.getElementById('tasks');

const addForm = document.querySelector("#addForm");

addForm.addEventListener('submit' , function(e) {
  e.preventDefault();
  if(document.querySelector("#input").value){
    const value = document.querySelector("#input").value ;
    const newLi = document.createElement("li");    
    const name =  document.createElement("span");
    const deleteBtn = document.createElement("button");
    const checkBtn = document.createElement("button");
    newLi.className = 'task' ;
    name.className = 'name' ;
    deleteBtn.classList.add('deleteBtn') ;
    checkBtn.classList.add('checkBtn') ;
    
  
    name.textContent = value ;
    deleteBtn.textContent = 'Delete';
    checkBtn.textContent = 'Check';
    newLi.appendChild(name);
    newLi.appendChild(checkBtn);
    newLi.appendChild(deleteBtn);
    
    tasks.appendChild(newLi);

  }
 


  document.querySelector("#input").value = ''
  
  
})
// deleting tasks 

tasks.addEventListener('click',function(e){
  if(e.target.className == 'deleteBtn'){
    const li = e.target.parentElement ;
    tasks.removeChild(li);
  }
  });

  // checking tasks 

  tasks.addEventListener('click',function(e){
    if(e.target.className == 'checkBtn'){
      const li = e.target.parentElement ;
      const nameChecked = li.querySelector('.name');
      const classes = nameChecked.classList ;
      if(Array.from(classes).indexOf('checked') == -1){
        nameChecked.style.textDecoration = 'line-through';
        nameChecked.classList.add('checked');
        e.target.textContent = 'uncheck' ;
       }
       else{
        e.target.textContent = 'check' ;
        nameChecked.style.textDecoration = 'none';
        nameChecked.classList.remove('checked')
       }
     
      
    }
    });