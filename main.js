// Get the modal
const modal = document.getElementById("myModal");

// Get the button that opens the modal
const btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

const add = document.querySelector('addFood');

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
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



}
let preOrder = document.querySelector('addFood');

preOrder.onclick = function() {
 if(this.click == true){
   console.log(btn);
 }
}

