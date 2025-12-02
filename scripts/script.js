function createDishesList(menu) {
  document.getElementById("all_dishes").innerHTML = "";
  document.getElementById("actual_menu_image_change").src =
    "assets/Images/" + [menu] + ".jpg";
  for (let index = 0; index < Menu[menu].length; index++) {
    document.getElementById("all_dishes").innerHTML += renderDishes(index, menu);
  }
}

function addToCart(index, menu) {
  if (cart.item.some((item) => item.name == Menu[menu][index].name)) {
    let itemIndex = cart.item.findIndex(
      (element) => element.name == Menu[menu][index].name);
    countPieces("up", itemIndex);
  } else {
    createCartObject(index, menu);
    createCart();
  }
}

function createCartObject(index, menu) {
  cart.item.push({
    name: Menu[menu][index].name,
    piece: 1,
    menuPrice: Menu[menu][index].price,
    price: Menu[menu][index].price,
  });
}

function createCart() {
  document.getElementById("cart").innerHTML = "";
  for (let index = 0; index < cart.item.length; index++) {
    document.getElementById("cart").innerHTML += renderCart(index);
  }
  calculateCartCost();
  calculateDeliveryCost();
  calculateTotalCostCart();
}

function countPieces(count, index) {
  if (count == "up") {
    cart.item[index].piece += 1;
    calculateCartItemPrice(index);
    createCart();
  } else if (count == "down" && cart.item[index].piece > 1) {
    cart.item[index].piece -= 1;
    calculateCartItemPrice(index);
    createCart();
  } else {
    cart.item.splice(index, 1);
    createCart();
  }
}

function calculateCartItemPrice(index) {
  cart.item[index].price = cart.item[index].piece * cart.item[index].menuPrice;
}

function calculateCartCost(){
    cartItemCost = 0;
    for (let index = 0; index < cart.item.length; index++) {
        cartItemCost += cart.item[index].price
    }
    console.log(cartItemCost);
    
}

function calculateDeliveryCost() {
    if (cartItemCost > freeDelivery) {
        console.log("Lieferkosten frei");  
    } else { 
        let differenceToFreeDelivery = freeDelivery - cartItemCost;
        console.log(differenceToFreeDelivery+"€ fehlen für Lieferkostenfrei");
    }
}

function calculateTotalCostCart() {
        cartTotalCost = 0;
    if (cartItemCost < freeDelivery) {
        cartTotalCost = cartItemCost + deliveryFee
        console.log("Gesamt kosten " + cartTotalCost + "€");
    } else { 
        cartTotalCost = cartItemCost
        console.log("Gesamt kosten " + cartTotalCost + "€");
        
        
    }
    
}

/* calculate in eine function packen oder stufenweise starten
Kosten für die Lieferung in eine render function packen
abholung und Lieferung button einfügen und mit in die Rechnung einfließen lassen */