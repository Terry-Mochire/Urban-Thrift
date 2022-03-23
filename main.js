$(document).ready(function () {
    let carts = document.querySelectorAll(".add-cart");

    

    for (let index = 0; index < carts.length; index++) {
        carts[index].addEventListener('click', function(event) {
            event.preventDefault();
            console.log("Added to Cart");
        
            

            const activeParent = document.activeElement.parentNode;
           
            console.log(activeParent);
           
                
            function clothingItem(name, price, inCart) {
                this.name = name;
                this.price = price;
                this.inCart = 0;
            };
            let products = [];
            
            let itemName = activeParent.querySelector("h5").textContent;
            let itemPrice =activeParent.querySelector("#price").textContent;
    
            let selectedClothingItem = new clothingItem(itemName, itemPrice);
            products.push(selectedClothingItem);
        
            console.log(products);

            cartNumbers(products[index]);

            

        });

    };

    function cartNumbers(products) {

        let productNumbers = parseInt(localStorage.getItem('cartnumbers'));
        if (productNumbers) {
        localStorage.setItem('cartnumbers', productNumbers += 1);
        document.querySelector('.d-flex span').textContent = productNumbers + 1;
        } else {
        localStorage.setItem('cartnumbers', 1);
        document.querySelector('.d-flex span').textContent = 1;
        }

        setItems(products);
    };
     function setItems(products) {
         console.log("Inside of the SetItems Function");
         console.log("My product is", products);
     }

    function onLoadCartNumbers() {
        let productNumbers = parseInt(localStorage.getItem('cartnumbers'));

        if(productNumbers) {
        document.querySelector('.d-flex span').textContent = productNumbers;
    };
};
    



onLoadCartNumbers()
});