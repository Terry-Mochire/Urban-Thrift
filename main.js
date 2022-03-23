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
                this.inCart = 1;
            };
            
            
            var itemName = activeParent.querySelector("h5").textContent;
            var itemPrice =parseInt(activeParent.querySelector("#price").textContent);
    
            var selectedClothingItem = new clothingItem(itemName, itemPrice);
            var products = [ ];
            products.push(selectedClothingItem);
        
            console.log(selectedClothingItem);

            cartNumbers(products[index]);
            totalCost(products[index]);

            function cartNumbers(products) {
                let productNumbers = parseInt(localStorage.getItem('cartnumbers'));
                if (productNumbers) {
                localStorage.setItem('cartnumbers', productNumbers += 1);
                document.querySelector('.d-flex span').textContent = productNumbers + 1;
                } else {
                localStorage.setItem('cartnumbers', 1);
                document.querySelector('.d-flex span').textContent = 1;
                }
            };

            function totalCost(products) {
                let cartCost = localStorage.getItem('totalCost');
                
                if(cartCost != null) {
                    cartCost = parseInt(cartCost);
                    localStorage.setItem('totalcost', cartCost + selectedClothingItem.price)
                } else {
                    localStorage.setItem('totalCost', selectedClothingItem.price);
                }
            }
        });

    };


    function onLoadCartNumbers() {
        let productNumbers = parseInt(localStorage.getItem('cartnumbers'));

        if(productNumbers) {
        document.querySelector('.d-flex span').textContent = productNumbers;
    };
};
    



onLoadCartNumbers()
});