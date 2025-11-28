


function renderDishes(menu) {
    document.getElementById("all_dishes").innerHTML = "";
    document.getElementById("actual_menu_image_change").src = "assets/Images/" + [menu] + ".jpg";
    for (let index = 0; index < Menu[menu].length; index++) {
        document.getElementById("all_dishes").innerHTML += addDishes(index, menu);
        
        
    }
};

function addToCart(index, menu) {
    createCartObject(index, menu);
    createCart();
    
    

}

/* if abfrage wenn schon vorhanden nur piece und preis aktualisieren ansonsten neu */
function createCartObject(index, menu) {
    cart.item.push({"name": Menu[menu][index].name, 
                "piece": 1,
                "menuPrice": Menu[menu][index].price,
                "price": Menu[menu][index].price})    
}

function createCart() {
    document.getElementById("cart").innerHTML = "";
    for (let index = 0; index < cart.item.length; index++) {
        document.getElementById("cart").innerHTML += renderCart(index);
    }
}

function countPieces(count, index) {
        if (count == "up") {
            cart.item[index].piece += 1;
            calculateCartItemPrice(index);
            createCart();
          
        } else if (count == "down" && cart.item[index].piece > 1){
            cart.item[index].piece -= 1;
            calculateCartItemPrice(index);
            createCart();
        } else {
            cart.item.splice(index, 1)
            createCart();
            
        }
   

}

function calculateCartItemPrice (index) {
    cart.item[index].price = cart.item[index].piece * cart.item[index].menuPrice;
}
