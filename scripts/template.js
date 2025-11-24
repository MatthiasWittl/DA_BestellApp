function addDishes(index) {
    return `
        <div class="dish_menu" >
                    <div>
                        <h2>${Menu.appetizer[index].name}</h2>
                        <p>${Menu.appetizer[index].description}</p>
                        <span>${Menu.appetizer[index].price}€</span>
                    </div>
                    <button class="add_to_cart" type="button">&#0043</button>
                </div>`
}