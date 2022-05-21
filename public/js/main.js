const section = document.querySelectorAll('.section');
const controlSection = document.getElementById('control');
const control = controlSection.children;
const bodyElement = document.body;

function pageTransition(){
   for(let i = 0 ; i < control.length; i++ ){
      control[i].addEventListener('click',function(){
         let currButton = document.querySelectorAll('.active-btn')
         console.log(currButton)
         currButton[0].className = currButton[0].className.replace('active-btn','')
         this.classList.add('active-btn')
      })
   }
}

pageTransition()
