


function renderDishes(menu) {
    document.getElementById("all_dishes").innerHTML = "";
    for (let index = 0; index < Menu[menu].length; index++) {
        document.getElementById("all_dishes").innerHTML += addDishes(index, menu);
        
        
    }
};