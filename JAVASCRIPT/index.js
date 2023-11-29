let sortButt = document.getElementById('sortButt')
let addButt = document.getElementById('addButt')
let input = document.getElementById('input')


function validation(){
    if (input.value.length > 3 && input.value.trim() !== "" && input.value[0] === input.value[0].toUpperCase()){

        alert("valid input")
    }else{
        alert("Invalid input");
    }
}
addButt.addEventListener('click', validation)

