window.addEventListener("resize", hideCartByLowResolutionIfEmpty);
let Timer;
const orderDialog = document.getElementById("order_executed");
const deliveryRoller = document.getElementById("delivery_icon");
const callToActionCart = document.getElementById("cart_call_to_action_id").classList;
const lowResolutionCartVisibility = document.getElementById("cart_container_id").classList;
const cartItemsContainer = document.getElementById("cart_items_container_id").classList;
const buttonLowerResolutionCart = document.getElementById("cart_for_lower_resolutions_id").classList;

function createDishesList(menu) {
  let scrollPos = window.scrollY;
  document.getElementById("all_dishes").innerHTML = "";
  document.getElementById("actual_menu_image_change").src = "assets/Images/" + [menu] + ".jpg";
  changeColorMenuButton(menu);
  for (let index = 0; index < Menu[menu].length; index++) {
    document.getElementById("all_dishes").innerHTML += renderDishes(index, menu);
  }
  checkAndReadLocalStorage();
  window.scrollTo(0, scrollPos);
}

function changeColorMenuButton(menu) {
  document.querySelectorAll(".menu_button").forEach((button) => {
    button.classList.remove("active_menu_button_color");
  });
  document.getElementById(menu + "_menu_button").classList.add("active_menu_button_color");
}

function checkAndReadLocalStorage() {
  if (localStorage.getItem("cart")) {
    cart = JSON.parse(localStorage.getItem("cart"));
    createCart();
  }
}

function addToCart(index, menu) {
  if (cart.item.some((item) => item.name == Menu[menu][index].name)) {
    let itemIndex = cart.item.findIndex((element) => element.name == Menu[menu][index].name);
    countPieces("up", itemIndex);
  } else {
    createCartObject(index, menu);
    createCart();
  }
}

function createCartObject(index, menu) {
  cart.item.push({
    name: Menu[menu][index].name,
    piece: 1 /* For First Time in Cart */,
    menuPrice: Menu[menu][index].price,
    price: Menu[menu][index].price,
  });
}

function createCart() {
  document.getElementById("cart").innerHTML = "";
  for (let index = 0; index < cart.item.length; index++) {
    document.getElementById("cart").innerHTML += renderCart(index);
  }
  changeCartGraphicIfFilledOrEmpty();
  updateLowResolutionCartTotalCost();
  addToLocalStorage();
}

function changeCartGraphicIfFilledOrEmpty() {
  if (cart.item.length > 0) {
    createCartPrice();
    callToActionCart.add("display_none");
    cartItemsContainer.add("overflow_auto");
    hideCartByLowResolutionIfEmpty();
  } else {
    document.getElementById("cart_payment_container").innerHTML = "";
    callToActionCart.remove("display_none");
    cartItemsContainer.remove("overflow_auto");
    hideCartByLowResolutionIfEmpty();
  }
}

function updateLowResolutionCartTotalCost() {
  if (cart.item.length == 0) {
    cartTotalCost = emptyCartTotalCost;
  }
  document.getElementById("cart_for_lower_resolutions_total_cost").innerText = cartTotalCost.toLocaleString("de-DE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 1,
  });
}

function addToLocalStorage() {
  if (cart.item.length > 0) {
    localStorage.setItem("cart", JSON.stringify(cart));
  } else {
    localStorage.clear();
  }
}

function hideCartByLowResolutionIfEmpty() {
  let displayWidth = window.innerWidth;
  if (displayWidth < 950 && cart.item.length > 0) {
    buttonLowerResolutionCart.add("display_flex");
  } else {
    buttonLowerResolutionCart.remove("display_flex");
  }
}

function createCartPrice() {
  calculateCartCost();
  calculateDeliveryCost();
  calculateTotalCostCart();
  document.getElementById("cart_payment_container").innerHTML = renderCartCost();
  let freeDeliveryContainer = document.getElementById("free_delivery").classList;
  changeVisibilityDeliveryFreeContainer(freeDeliveryContainer);
}

function calculateCartCost() {
  cartItemCost = cartItemCost - cartItemCost; /* reset cartItemCost to 0 before calculation */
  for (let index = 0; index < cart.item.length; index++) {
    cartItemCost += cart.item[index].price;
  }
}

function calculateDeliveryCost() {
  if (cartItemCost >= freeDeliveryLimit) {
    deliveryFee = freeDeliveryCost;
  } else {
    differenceToFreeDelivery = freeDeliveryLimit - cartItemCost;
    deliveryFee = deliveryFeeCost;
  }
}

function calculateTotalCostCart() {
  if (cartItemCost < freeDeliveryLimit) {
    cartTotalCost = cartItemCost + deliveryFee;
  } else {
    cartTotalCost = cartItemCost;
  }
}

function changeVisibilityDeliveryFreeContainer(freeDeliveryContainer) {
  if (deliveryFee == freeDeliveryCost) {
    freeDeliveryContainer.add("hidden");
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

function openDialog() {
  orderDialog.showModal();
  Timer = setInterval(orderExecuted, 3500);
  imgtransition();
}

function imgtransition() {
  setTimeout(() => {
    deliveryRoller.style.transform = "translateX(1500px)";
  }, 80);
}

function orderExecuted() {
  orderDialog.close();
  resetCartValuesAfterOrder();
  clearInterval(Timer);
  deliveryRoller.style.transform = "translateX(0px)";
  closeLowResolutionCart();
  updateLowResolutionCartTotalCost();
  scrollToTopAfterOrder();
  hideCartByLowResolutionIfEmpty();
}

function resetCartValuesAfterOrder() {
  cart.item = [];
  document.getElementById("cart_payment_container").innerHTML = "";
  document.getElementById("cart").innerHTML = "";
  callToActionCart.remove("display_none");
  cartItemsContainer.remove("overflow_auto");
  localStorage.clear();
}

function closeLowResolutionCart() {
  lowResolutionCartVisibility.remove("low_resolution_cart_visible");
  document.body.style.overflow = "";
}

function scrollToTopAfterOrder() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function openLowResolutionCart() {
  lowResolutionCartVisibility.add("low_resolution_cart_visible");
  document.body.style.overflow = "hidden";
}
