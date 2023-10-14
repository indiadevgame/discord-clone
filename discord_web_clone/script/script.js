 let main_menu_nav_container = document.querySelector(".main_navbar_menu");

let click_show_toggle_btn =  document.querySelector(".menu_bar_toggle");

let close_show_toggle_window = document.querySelector(".cross");

let body = document.querySelector("body");


click_show_toggle_btn.addEventListener("click", ()=>{
    main_menu_nav_container.classList.add("active_show");
    body.style.overflowY = "hidden"
})


close_show_toggle_window.addEventListener("click", ()=>{
    main_menu_nav_container.classList.remove("active_show");
    body.style.overflowY = "scroll"
})


let explore_btn_click_show = document.querySelector(".btn_2");
let show_explore_hidden_container = document.querySelector(".click_toggle_hide_explore_btn");
let btn_1 = document.querySelector(".hero_c_btn_1");


explore_btn_click_show.addEventListener("click",()=>{
    show_explore_hidden_container.classList.add("toggle_allow")
    btn_1.style.display = "none";
    explore_btn_click_show.style.display = "none"
})


// moving cursor


let cursor = document.querySelector(".cursor");


window.addEventListener("mousemove",(e)=>{
   const x = e.clientX  - 50;
   const y = e.clientY  - 20;
    cursor.style.left = x+"px";
    cursor.style.top = y+"px";
   
})