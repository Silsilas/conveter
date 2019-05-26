
// DOM var

let addMenu = document.querySelector('#add-menu');
let imageUrl = document.querySelector('#image-url');
let addBtn = document.querySelector('add-btn');
let myForm = document.querySelector('#my-form');
let msg = document.querySelector('.msg');
let foodMenu = document.querySelector('.food');
let newFood = document.querySelector('.new');

// let addMen = document.querySelector('.add-menu');



// Get the modal
const modal = document.getElementById("myModal");

// Get the button that opens the modal
const btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

const add = document.querySelector('addFood');

// When the user clicks on the button, open the modal
btn.onclick = () => modal.style.display = "block";


// btn.onclick = () => myForm.style.display = 'none';


// When the user clicks on <span> (x), close the modal
span.onclick = () =>   modal.style.display = "none";


// When the user clicks anywhere outside of the modal, close it
window.onclick = (e) => {
  if (e.target == modal) {
    modal.style.display = "none";

  }
}



  // looping thought each sected button


//   // checkbox

// let checkBox = document.querySelector('#addFood');

// // addEvent lisner
// if (checkBox.checked == true){
//   let orderBox = document.querySelector('food');
// // problem
//   food.addEventListener('checked', filterOrder)
// function filterOrder(){

//   let filterValue =
//                    document.querySelector('food').value.toUpperCase();

//                    let div = document.querySelector('ingridients');

//                    let h3 = document.querySelectorAll('item');
//         for(let i =0;i < h3.length; i++){
//           let a = h3[i].getElementsByTagName('a')[0];
//           if(a.innerHTML.toUpperCase().indexOf(filterValue)== 1
//           ){
//             h3[i].style.display = "";
//           }else{
//             h3[i].style.display = "none"
//           }
//         }
// }

// } else {
//   text.style.display = "none";
// }







// const message = 'Hellow there!';


// function firstMessage(){
//   setTimeout(() => {
//     let output = '';
//     output += '<p>$(message)<p>';

//     document.body.innerHTML = output;
//   }, 1000);
// }


// firstMessage();


myForm.addEventListener('submit', onsubmit);


function onsubmit(e){
  e.preventDefault();


  if(imageUrl.value===''){
    msg.classList.add('error');
     msg.innerHTML = 'please fill';
     setTimeout(() => msg.remove(), 3000);
  } else{
     addMenu.style.display = 'none';

     let createFood = document.createElement('div');

    const newMenu =document.createElement('div');

createFood.style = 'ingridients'
    newMenu.appendChild(document.createTextNode(''));
     newFood.appendChild(newMenu);

     imageUrl.value = '';


  }
}