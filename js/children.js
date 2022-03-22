
function Clothe(name, price){
    this.name = name;
    
    this.price = price;
};

$(document).ready(function(){
    $("a#buy").last().click(function(event){
        event.preventDefault();

        var itemName = $("h5#name").text();
        var itemPrice = parseInt($("p#price").text());
        
        var selectedClothe = new Clothe (itemName, itemPrice);

        console.log(selectedClothe);
    });
})