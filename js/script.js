const inputItem = document.querySelector('#input-task');
const main = document.querySelector('.main');
const listItem = document.querySelector('#task-list');


const toDoArray = JSON.parse(localStorage.getItem('task-list')) || [];
    function updateList(){
        listItem.innerHTML = '';

        for (const key in toDoArray) {
            const li = document.createElement('li');

            const input = document.createElement('input');
            input.setAttribute("type", "checkbox");

            const span = document.createElement('span');
            span.innerText = toDoArray[key];
            span.classList.add('task')

            const button = document.createElement('button');
            button.innerText = 'X';
            button.setAttribute('key',key);
            button.classList.add('delete-btn');

            li.appendChild(input);
            li.appendChild(span);
            li.appendChild(button);
            listItem.appendChild(li);
        }

        localStorage.setItem('task-list',JSON.stringify(toDoArray));
    }

    function addToList(value){
        if (value === '') return;

        toDoArray.push(value);

        updateList();
        inputItem.value = '';
        inputItem.focus();
    }

    function deleteFromList(key){

        toDoArray.splice(Number(key),1);

        updateList();
        inputItem.value = '';
        inputItem.focus();
    }


    form.addEventListener('submit', e => {
        e.preventDefault();
        addToList(inputItem.value);
    });

    document.addEventListener('click', e => {
        const el = e.target;
        if (el.classList.contains('delete-btn')){
            deleteFromList(el.getAttribute('key'));
        }
    });

    updateList();