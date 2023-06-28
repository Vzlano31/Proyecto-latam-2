const menuItems= document.querySelectorAll(".menu-item");
console.log(menuItems);


menuItems.forEach(function (item) {
    item.addEventListener("click", function(e) {
        const currenItem = documen.querySelector(".active");
        currentItem.classList.remove("active");
        e.target.classList.add("active");
    });
});

/* const body = document.querySelector("body");
const iconos= document.querySelectorAll(".icon");

const boton = document.querySelector("#btn-dark");

boton.addEventListener("clic",fuction (e) {
    body.classList.toggle ("modo_oscuro");
    iconos.forEach(fuction (icono){
        icono.classList.toggle("color_icon");
    });
}); */


