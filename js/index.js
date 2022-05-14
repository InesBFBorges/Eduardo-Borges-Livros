document.addEventListener("DOMContentLoaded", () => {

    const nav_dropdown_parent = document.querySelector(".nav-dropdown-parent");
    const nav_dropdown = document.querySelector(".nav-dropdown");
    const menu_dropdown_btn = document.querySelector(".menu-dropdown-btn");
    const nav_list = document.querySelector(".nav-list");
    const hide_menu = document.querySelectorAll(".hide-menu");
    // const hide_menu_dropdown = document.querySelectorAll(".hide-menu-dropdown");
    let turn = 0;
    let turnMenu = 0;
    
    nav_dropdown_parent.addEventListener("click", () => {
        if(turn % 2 === 0)
            nav_dropdown.style.display = "block";
        else
            nav_dropdown.style.display = "none";
        turn++;
    });

    menu_dropdown_btn.addEventListener("click", () => {
        if(turnMenu % 2 === 0)
            nav_list.style.display = "block";
        else
            nav_list.style.display = "none";
        turnMenu++;
    });

    // Hides the menu when these items are clicked
    hide_menu.forEach(item => {
        item.addEventListener("click", () => {
            if(window.innerWidth < 530){
                nav_list.style.display = "none";
                turnMenu++;
            }
        });
    });

    window.addEventListener("resize", (e) => {
        let width = e.target.innerWidth;
        if(width > 530){
            nav_list.style.display = "flex";
        }
    });

});