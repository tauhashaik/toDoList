let sortButt = document.getElementById('sortButt');
let addButt = document.getElementById('addButt');
let input = document.getElementById('input');
let itemsInput = document.getElementById('tDItems');
let toDoList = document.getElementById('toDoList');

function validation(){
    if (input.value.length > 3 && input.value.trim() !== "" && input.value[0] === input.value[0].toUpperCase()){

    }else{
        alert("Invalid input");
    }
}
addButt.addEventListener('click', validation)


// Create array

let toDoArray = []

// function to add to list.

// function to add to list
function addToList() {
    let listItem = {
        id: toDoArray.length === 0 ? 1 : toDoArray.length + 1,
        name: input.value,
        createdDate: new Date(),
        completed: false
    };
    
    // 
    toDoArray.push(listItem);
    
    addToUi(listItem);
    
    // Adding to Local Storage
    addToLocalStorage(toDoArray);
    
    // Clear the input field
    input.value = '';
}

// function to add new items and create <li> tags for new items.
function addToUi(newItem){
    let li = document.createElement('li');
    li.textContent = newItem.name;
    toDoList.appendChild(li);
}

addButt.addEventListener('click', addToUi)

// function to add local storage
function addToLocalStorage(toDoArray) {
    // convert the toDoArray to a string then store it.
    localStorage.setItem('toDoArray', JSON.stringify(toDoArray));
  }




  