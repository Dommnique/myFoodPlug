const navMenu = document.getElementById("navbtn");
const sideMenu = document.getElementById('side-menu');
const closeMenu = document.getElementById('closeMenu');
const bodyCover = document.getElementById('bodyCover');


function openMenu() {
    //console.log(true);
    sideMenu.classList.add('showMenu');
    bodyCover.classList.add('reveal')
}

function closeSideMenu(){
    sideMenu.classList.remove('showMenu');
    bodyCover.classList.remove('reveal');
}

//Event listener on the navMenu btn
navMenu.addEventListener("click", openMenu);

//Event listener on the sideMenu btn
closeMenu.addEventListener("click", closeSideMenu);