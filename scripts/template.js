function renderDishes(index, menu) {
  return `
        <div class="dish_menu" >
                    <div>
                        <h2>${Menu[menu][index].name}</h2>
                        <p>${Menu[menu][index].description}</p>
                        <p>${Menu[menu][index].price}€</p>
                    </div>
                    <button class="add_to_cart" onclick="addToCart(${[index,]}, '${menu}')" type="button">&#0043</button>
                </div>`;
}

function renderCart(index) {
  return `
        <div class="cart_dishes">
        <div>
        <h3>${cart.item[index].name}</h3>
        <button class="cart_button" onclick="countPieces('down', ${[index,]})" >&#8722</button>
        <p>${cart.item[index].piece}</p>
        <button class="cart_button" onclick="countPieces('up', ${[index,]})" >&#43</button>
        </div>
        <span>${cart.item[index].price}€</span>
    </div>
        `;
}
