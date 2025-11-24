


function renderDishes() {
    for (let index = 0; index < Menu.appetizer.length; index++) {
        document.getElementById("all_dishes").innerHTML += addDishes(index);
        
        
    }
}