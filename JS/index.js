

// function pick(){
//     var price = document.getElementById("price");
//     box1= price.value;

//     var quantity = document.getElementById("quantity");
//     box2= quantity.value;

// let yes = alert (box1 * box2)
// if (yes == true){
//     location.href= "index1.html"
// }
// }


// let aPrice = 300;
var butt = document.getElementById("butt");
butt.addEventListener("click", calc)
function calc (){
let Price = document.getElementById("Price").value;
let Quantity = document.getElementById("Quantity").value;
    alert(`Total amount is: ${Price * Quantity}`);
    window.location.href="index1.html"
}
