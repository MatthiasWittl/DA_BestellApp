


function renderDishes(menu) {
    document.getElementById("all_dishes").innerHTML = "";
    document.getElementById("actual_menu_image_change").src = "assets/Images/" + [menu] + ".jpg";
    for (let index = 0; index < Menu[menu].length; index++) {
        document.getElementById("all_dishes").innerHTML += addDishes(index, menu);
        
        
    }
};