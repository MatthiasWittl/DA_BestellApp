let Timer;

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
  if (cart.item.length > 0) {
    createCartPrice();
  } else {
    document.getElementById("cart_payment_container").innerHTML = "";
  }
  
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

function createCartPrice(){
    calculateCartCost();
    calculateDeliveryCost();
    calculateTotalCostCart();
    document.getElementById("cart_payment_container").innerHTML = renderCartCost();
}

function calculateCartCost(){
    cartItemCost = 0;
    for (let index = 0; index < cart.item.length; index++) {
        cartItemCost += cart.item[index].price
    }
    cartItemCost.toLocaleString("de-DE", { style: "currency", currency: "EUR"});
    
}

function calculateDeliveryCost() {
    if (cartItemCost > freeDelivery) {
        deliveryFee = 0;  /* keine harten Zahlen */
    } else { 
        let differenceToFreeDelivery = freeDelivery - cartItemCost;
        console.log(differenceToFreeDelivery+"€ fehlen für Lieferkostenfrei");
        deliveryFee = 8; /* keine harten Zahlen */
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

const orderDialog = document.getElementById("order_executed");

function openDialog() {
    orderDialog.showModal();
    Timer = setInterval(closeDialog, 3500);
    imgtransition();
    
    
}

function closeDialog() {
    orderDialog.close();
    cart.item = [];
    document.getElementById("cart_payment_container").innerHTML = "";
    document.getElementById("cart").innerHTML = "";
    clearInterval(Timer);
}

function imgtransition() {
    const deliveryRoller = document.getElementById("delivery_icon");
    setTimeout(() => {
    deliveryRoller.style.transform = "translate(1500px)";
}, 80)
}

/* calculate in eine function packen oder stufenweise starten
Kosten für die Lieferung in eine render function packen
abholung und Lieferung button einfügen und mit in die Rechnung einfließen lassen */