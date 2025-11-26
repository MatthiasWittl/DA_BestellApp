function addDishes(index, menu) {
    return `
        <div class="dish_menu" >
                    <div>
                        <h2>${Menu[menu][index].name}</h2>
                        <p>${Menu[menu][index].description}</p>
                        <span>${Menu[menu][index].price}€</span>
                    </div>
                    <button class="add_to_cart" type="button">&#0043</button>
                </div>`
}