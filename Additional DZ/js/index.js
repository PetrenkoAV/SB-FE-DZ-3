export {createUser};
export class User{
    constructor(name, username, email,id){
        this.name = name
        this.username = username
        this.email = email
        this.id = id
    }
}

const userContainer = document.querySelector('.user__container')

const createUser = (user) =>{
    const newDiv = document.createElement('div');
    newDiv.className = 'post';
    newDiv.id = user.id;
    newDiv.innerHTML = `
        <h3> ${user.name}</h3>
        <hr>
        <span>Username: </span><p id = 'idUsName'>${user.username}</p>
        <hr>
        <span>Email: </span><p id = 'idEmail'>${user.email}</p>
        <hr>`
    userContainer.append(newDiv);

    const btnDelete = document.createElement('button');
    btnDelete.className = 'delete';
    btnDelete.textContent = 'Удалить карточку';
    const btnDispatch = document.createElement('button');
    btnDispatch.className = 'dsp';
    btnDispatch.textContent = 'Изменить карточку';
    const btnDiv = document.createElement('div');
    btnDiv.className = 'btnDiv';
    btnDiv.append(btnDelete);
    btnDiv.append(btnDispatch);
    newDiv.append(btnDiv);
}
