
const users = [
    {
        firstname: 'Josh',
        lastname: 'Don',
        email: 'josh@mail.com',
        password: '0045841',
        age: 20
    },
    {
        firstname: 'Sindy',
        lastname: 'White',
        email: 'sindy@nail.com',
        password: '88546sds',
        age: 35
    },
    {
        firstname: 'Jonh',
        lastname: 'Blake',
        email: 'john@mail.com',
        password: '475sda21',
        age: 40
    }
];


let table = document.createElement('table');
document.body.appendChild(table);



for (let key of users) {
    let tr = document.createElement('tr');
    tr.setAttribute('data-editable', 'text');


    let td1 = document.createElement('td');
    td1.innerHTML = key.firstname;
    tr.appendChild(td1);
    td1.setAttribute('data-editable', 'text');



    let td2 = document.createElement('td');
    td2.innerHTML = key.lastname;
    tr.appendChild(td2);
    td2.setAttribute('data-editable', 'text');


    let td3 = document.createElement('td');
    td3.innerHTML = key.email;
    tr.appendChild(td3);
    td3.setAttribute('data-editable', 'email');


    let td4 = document.createElement('td');
    td4.innerHTML = key.password;
    tr.appendChild(td4);
    td4.setAttribute('data-editable', 'password');


    let td5 = document.createElement('td');
    td5.innerHTML = key.age;
    tr.appendChild(td5);
    td5.setAttribute('data-editable', 'number');


    table.appendChild(tr);
};



document.querySelector('body').addEventListener('click', clickHandler);


function clickHandler(event) {
    if (!event.target.hasAttribute('data-editable')) return;

    const { target: editableElement } = event;

    const type = editableElement.getAttribute('data-editable')

    const inputElement = document.createElement('input');
    inputElement.setAttribute('type', type);
    inputElement.value = editableElement.innerText;

    editableElement.after(inputElement);
    editableElement.remove();

    //  inputElement.focus();
    inputElement.select();

    let isDeleted = false;

    inputElement.addEventListener('keyup', function (event) {

        switch (event.key) {
            case 'Enter':
                editableElement.innerText = inputElement.value;
                inputElement.after(editableElement);

                isDeleted = true;
                inputElement.remove()
                break;

            case 'Escape':
                inputElement.after(editableElement);
                inputElement.remove()
                break;
        }
    })

    inputElement.addEventListener('blur', () => {
        if (isDeleted) return;

        inputElement.after(editableElement);
        inputElement.remove()
    })
}