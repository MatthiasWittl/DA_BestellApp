function renderDishes(index, menu) {
  return `
        <div class="dish_menu" >
                    <div>
                        <h2>${Menu[menu][index].name}</h2>
                        <p>${Menu[menu][index].description}</p>
                        <p>${Menu[menu][index].price.toLocaleString("de-DE", { style: "currency", currency: "EUR", maximumFractionDigits: 1})}</p>
                    </div>
                    <button class="add_to_cart" onclick="addToCart(${[index,]}, '${menu}')" type="button">&#0043</button>
                </div>`;
}

function renderCart(index) {
  return `
        <div class="cart_dishes">
        <div>
        <h3>${cart.item[index].name}</h3>
        <button class="cart_add_remove_pieces" onclick="countPieces('down', ${[index,]})" >&#8722</button>
        <span class="cart_pieces">${cart.item[index].piece}</span>
        <button class="cart_add_remove_pieces" onclick="countPieces('up', ${[index,]})" >&#43</button>
        </div>
        <span class="cart_dish_price" >${cart.item[index].price.toLocaleString("de-DE", { style: "currency", currency: "EUR", maximumFractionDigits: 1})}</span>
    </div>
        `;
}

function renderCartCost() {
    return `
        <p class="free_delivery_container" id="free_delivery"> Noch ${differenceToFreeDelivery.toLocaleString("de-DE", { style: "currency", currency: "EUR", maximumFractionDigits: 1})} bis Lieferkosten frei </p>
       <div>
                    <p>Zwischensumme</p>
                    <p>${cartItemCost.toLocaleString("de-DE", { style: "currency", currency: "EUR", maximumFractionDigits: 1})}</p>
                </div>
                <div class="cart_border_bottom">
                    <p>Lieferkosten</p>
                    <p>${deliveryFee.toLocaleString("de-DE", { style: "currency", currency: "EUR", maximumFractionDigits: 1})}</p>
                </div>
                <div  >
                    <p>Gesamt</p>
                    <p>${cartTotalCost.toLocaleString("de-DE", { style: "currency", currency: "EUR", maximumFractionDigits: 1})}</p>
        </div>
        <button class="cart_order_button" onclick="openDialog()" type="button">Bezahlen</button>
        `
}
