


function renderDishes(menu) {
    document.getElementById("all_dishes").innerHTML = "";
    document.getElementById("actual_menu_image_change").src = "assets/Images/" + [menu] + ".jpg";
    for (let index = 0; index < Menu[menu].length; index++) {
        document.getElementById("all_dishes").innerHTML += addDishes(index, menu);
        
        
    }
};

function addToCart(index, menu) {
    createCartObject(index, menu);
    /*renderCart();*/
    console.log(cart);
    console.log(Menu);
    
    createCart();
    
    

}


function createCartObject(index, menu) {
    cart.item.push({"name": Menu[menu][index].name,
                "price": Menu[menu][index].price, 
                "piece": 1})

      
}

function createCart() {
    document.getElementById("cart").innerHTML = "";
    for (let index = 0; index < cart.item.length; index++) {
        document.getElementById("cart").innerHTML += renderCart(index);
    }
}