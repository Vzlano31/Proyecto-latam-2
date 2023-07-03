const menuItems= document.querySelectorAll(".menu-item");
console.log(menuItems);


menuItems.forEach(function (item) {
    item.addEventListener("click", function(e) {
        const currentItem = document.querySelector(".active");
        currentItem.classList.remove("active");
        e.target.classList.add("active");
    });
});


