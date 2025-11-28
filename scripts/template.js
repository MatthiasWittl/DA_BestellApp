function addDishes(index, menu) {
    return `
        <div class="dish_menu" >
                    <div>
                        <h2>${Menu[menu][index].name}</h2>
                        <p>${Menu[menu][index].description}</p>
                        <span>${Menu[menu][index].price}€</span>
                    </div>
                    <button class="add_to_cart" onclick="addToCart(${[index]}, '${menu}')" type="button">&#0043</button>
                </div>`
}

function renderCart(index) {
     return `
        <div class="cart_dishes">
        <div>
        <h3>${cart.item[index].name}</h3>
        <button class="cart_button" >&#8722</button>
        <span>${cart.item[index].piece}</span>
        <button class="cart_button" >&#43</button>
        </div>
        <span>${cart.item[index].price}€</span>
    </div>
        `
    
}