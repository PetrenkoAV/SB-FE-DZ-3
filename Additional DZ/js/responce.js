var modal = document.getElementById("myModal");
import { User, createUser } from "./index.js"
import { cardId } from "../modal.js";
const result=[];
const submitBtn = modal.querySelector('#formBtn');
const containerEvent = document.querySelector('.user__container');


const getPosts = async () =>{
    const responce = await fetch('https://jsonplaceholder.typicode.com/users?_limit=4');
   const res = await responce.json();
    for(let i in res){result.push(new User(res[i].name, res[i].username, res[i].email, res[i].id))};
    for(let i in result){createUser(result[i])};
}

 getPosts();


submitBtn.addEventListener('click', async (event) =>{
     event.preventDefault();
     const container = document.getElementById(`${cardId}`);
    fetch(`https://jsonplaceholder.typicode.com/users/${cardId}}`, {
        method: 'PATCH',
        body: JSON.stringify({
          name: modal.querySelector('#inpName').value,
          username: modal.querySelector('#inpUsname').value,
          email: modal.querySelector('#inpEmail').value
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((res) =>{
          console.log(res);
          container.querySelector('h3').textContent = res.name;
          container.querySelector('#idUsName').textContent = res.username;
          container.querySelector('#idEmail').textContent = res.email;

        });
        modal.style.display = "none";
        
 });

containerEvent.addEventListener('click', async (event) =>{
  if(event.target.className === 'delete'){
    console.log(event.path[2].id);
    fetch(`https://jsonplaceholder.typicode.com/posts/${event.path[2].id}`, {
      method: 'DELETE',
      });
      containerEvent.removeChild(event.path[2]);
  }


});