
const menu = document.querySelector(".meunu-button");

menu.addEventListener( "click" , () =>{
    const toggleMenu = document.querySelectorAll(".meunu-button div");

    const sideBar = document.querySelector(".side-bar");
    sideBar.classList.toggle("active");

    toggleMenu.forEach( ( mem ) =>{
        mem.classList.toggle("active");
    })
})

const linkMenu = document.querySelectorAll(".side-bar a");

linkMenu.forEach( (link) => {

    const sideBar = document.querySelector(".side-bar");

    link.addEventListener("click" , () =>{
        sideBar.classList.toggle("active");
    })
})

const icons = document.querySelectorAll(".first-page .media-icons i");

icons.forEach( (icon) =>{
    icon.classList.add("active");
    setTimeout( () =>{
        icon.classList.remove("active");
        icon.style.opacity = 1;
    } , 1500 );  
})