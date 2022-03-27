var modal = document.getElementById("myModal");
var containerEvent = document.querySelector('.user__container');
var span = document.getElementsByClassName("close")[0];
let cardId = 1;

export {cardId};

containerEvent.addEventListener('click', (event)=>{
    if(event.target.className === 'dsp'){
        modal.style.display = "block";
        const container = event.path[2];
        modal.querySelector('#inpName').value = container.querySelector('h3').textContent;
        modal.querySelector('#inpUsname').value = container.querySelector('#idUsName').textContent;
        modal.querySelector('#inpEmail').value = container.querySelector('#idEmail').textContent;
        cardId = container.id;
    }
});
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}