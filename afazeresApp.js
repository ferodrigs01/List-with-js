var listElement = document.querySelector('#app ul'); //get selectors
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');



var todos = JSON.parse(localStorage.getItem('list_todos')) || ['Seu primeiro afazer']; //setting a default value if the list is empty

function renderTodos(){ //function to display the list of

    listElement.innerHTML = ''; //clear

    for (todo of todos){
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement('a');
        var linkText = document.createTextNode('excluir');
        linkElement.setAttribute('href','#');

        var pos = todos.indexOf(todo);
        linkElement.setAttribute('onclick','deleteTodo('+pos+')'); //defiened position of the vetor

        linkElement.appendChild(linkText); //make element
        todoElement.appendChild(todoText);
        listElement.appendChild(todoElement);
        todoElement.appendChild(linkElement);
    }
}

renderTodos();

function addTodo(){
    var todoText = inputElement.value;
    todos.push(todoText);
    inputElement.value='';
    renderTodos();
    saveToStorage();
}

buttonElement.onclick = addTodo;

function deleteTodo(pos){
    todos.splice(pos, 1);
    renderTodos();
    saveToStorage();
}

function saveToStorage(){

    localStorage.setItem('list_todos',JSON.stringify(todos)); //transform to json
}