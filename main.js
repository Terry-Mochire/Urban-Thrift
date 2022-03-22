$(document).ready(function () {
    let carts = document.querySelectorAll(".add-cart");

// function clothingItem(name, price, inCart) {
//     this.name = name;
//     this.price = price;
//     this.inCart = 0
// };

// let products = [clothingItem()]

for (let index = 0; index < carts.length; index++) {
    carts[index].addEventListener('click', function(event) {
        event.preventDefault();
        cartNumbers();
    });
    
};
function cartNumbers() {
    let productNumbers = parseInt(localStorage.getItem('cartnumbers'));
     if (productNumbers) {
        localStorage.setItem('cartnumbers', productNumbers += 1);
        document.querySelector('.d-flex span').textContent = productNumbers + 1;
     } else {
        localStorage.setItem('cartnumbers', 1);
        document.querySelector('.d-flex span').textContent = 1;
     }
};

function onLoadCartNumbers() {
    let productNumbers = parseInt(localStorage.getItem('cartnumbers'));

    if(productNumbers) {
        document.querySelector('.d-flex span').textContent = productNumbers;
    }
};

onLoadCartNumbers()
});