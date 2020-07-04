let add_btn = document.querySelector('.add_todo');
let todo_input = document.querySelector('.todo_input');
let ulSpisok = document.querySelector('.ul-spisok');
let lis = document.getElementsByClassName('newTodo');
let spans = document.getElementsByTagName('span');
let imps = document.getElementsByClassName('Imp');
let allBtn = document.querySelector('.all');
let InBtn = document.querySelector('.in');
let endBtn = document.querySelector('.end');
let Li = document.getElementsByTagName('li');
let impo = document.querySelector('.impo');
 
let search = function (){
    let input = document.querySelector(".search");
    input.addEventListener('keyup', () => {
        let filter = input.value.toLowerCase();
        let filterElements = document.querySelectorAll('.ul-spisok li');

        filterElements.forEach(item => {
            if (item.innerHTML.toLowerCase().indexOf(filter) > -1){
                item.style.display = '';                
            } else {
                item.style.display = 'none';
            }
        })
    })
};










function bold(){
    for(let i of imps){
        i.addEventListener('click', function(){
            i.parentElement.parentElement.firstChild.style.fontWeight = 'bold';
            i.parentElement.parentElement.firstChild.className = 'newTodo Impos'
            event.preventDefault();
            })    
            
}}

function endQuest(){
    for(let li of lis){
        li.addEventListener('click', function(){
        li.style.textDecoration = 'line-through';
        li.className = 'newTodo Ended';
        event.preventDefault();
        })
    }
}

function deleteTodo(){
    for(let span of spans){
        span.addEventListener('click', function(){
            span.parentElement.parentElement.remove();
            event.preventDefault();
        })
    }
};

function loadTodo(){
    if(localStorage.getItem('todoApplication')){
        ulSpisok.innerHTML = localStorage.getItem('todoApplication');
        deleteTodo();
    }
};

add_btn.addEventListener('click', function(){
    
        let newLi = document.createElement('li');
        let newSpan = document.createElement('span');
        let newDiv = document.createElement('div');
        newDiv.innerHTML = 'Important';
        newDiv.className = 'Imp';
        newSpan.innerHTML = 'Delete';
        let mainDiv = document.createElement('div');
        mainDiv.className = 'mainDiv';
        let newTodo = document.createElement('div');
        newTodo.className = 'newTodo';
        newTodo.innerHTML = todo_input.value;
        todo_input.value = ''; 
        mainDiv.append(newSpan,newDiv);
        ulSpisok.appendChild(newLi).append(newTodo,mainDiv);

        deleteTodo();
        endQuest();
        bold();
        search();


        let Impa = document.getElementsByClassName('Impos');
        let todo = document.getElementsByClassName('newTodo');
        let ended = document.getElementsByClassName('Ended');
        endBtn.addEventListener('click', function(){
           for(let i of todo){
               i.parentElement.style.display = 'none';
           }
           for(let i of ended){
               i.parentElement.style.display = 'flex';
           }
        })
           
        allBtn.addEventListener('click', function(){
            for(let i of todo){
                i.parentElement.style.display = 'flex'
            }
        })
        InBtn.addEventListener('click', function(){
            for(let i of ended){
                i.parentElement.style.display = 'none'
            }
        })
        impo.addEventListener('click', function(){
            for(let i of todo){
                i.parentElement.style.display = 'none';
            }
           
            for(let i of ended){
                i.parentElement.style.display = 'none'
            }
            for( let i of Impa){
                i.parentElement.style.display = 'flex';
            }
            
            

        })




        let numbers = document.querySelector('.numbers');
        numbers.innerHTML = `In progress : ${Number(todo.length - ended.length)} of ${Number(todo.length)}`


        for(let li of lis){
            li.addEventListener('click', function(){
            li.style.textDecoration = 'line-through';
            
            event.preventDefault();
            let numbers = document.querySelector('.numbers');
        numbers.innerHTML = `In progress : ${Number(todo.length - ended.length)} of ${Number(todo.length)}`
            })
        }
});