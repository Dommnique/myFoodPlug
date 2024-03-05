const orderName = document.getElementById('name');
const orderNumber = document.getElementById('phone-number');
const orderEmail = document.getElementById("email");
const orderMeal = document.getElementById("meal");
const orderQuantity = document.getElementById("quantity");
const orderAddress = document.getElementById("address");
const orderDate = document.getElementById("delivery-date");
const success = document.getElementById("success");
const closeBtn = document.getElementById("closebtn");
const imagery = document.getElementById("imagery");
const form = document.getElementById('form');
const navMenu = document.getElementById("navbtn");
const sideMenu = document.getElementById('side-menu');
const closeMenu = document.getElementById('closeMenu');
const bodyCover = document.getElementById('bodyCover');

// Function for showError and showSuccess
function showError(input, message) {
    const formControl = input.parentNode;
    formControl.className = 'formControl showError';
    const small = formControl.querySelector('small');
    small.innerHTML = message;
}

function showSuccess(input) {
    const formControl = input.parentNode;
    formControl.className = 'formControl showSuccess';
}

// A function that capitalizes the error message
function getField(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}


//A Function that checks the required field
function checkRequired(inputArr) {
    inputArr.forEach(function (input) {
        if (input.value.trim() === '') {
            showError(input, `${getField(input)} is required`)
        } else {
            showSuccess(input);
            addSuccess();
        }
    })
}

//A Function that checks the validity of the email passed in by the users
function checkEmail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (re.test(input.value.trim())) {
        showSuccess(input)
    } else {
        showError(input, "Email is not valid")
    }
}

//A function that displays ORDER SUCCESSFUL when all the input fields are validated 
function addSuccess() {
    success.classList.add('success');
}

//A function that resets the input field after form has been submitted
function resetField(inputArr) {
    inputArr.forEach(input => {
        const formControl = input.parentNode;
        formControl.className = "formControl";
        const small = formControl.querySelector('small');
        small.innerHTML = '';
    })

}



//A function that changes the display images at certain time interval
function changeImage() {
    let myImages = [
        "assets/images/jollof rice.jpg",
        "assets/images/Ewa agoyin.jpg",
        "assets/images/eggsauce.png",
        "assets/images/Banga.png",
        "assets/images/stew.png"
    ]

    const g = imagery.src = `${myImages[Math.floor(Math.random() * 5)]}`;
    //console.log(g);

}
changeImage();

// Set interval for 7seconds for the food images to changes
setInterval(changeImage, 7000);


//Event listener on the form for when it is submitted 
form.addEventListener("submit", function (e) {
    e.preventDefault();

    checkRequired([orderName, orderNumber, orderEmail, orderQuantity, orderAddress, orderDate]);
    checkEmail(orderEmail);
    sendEmail();

    return false;
});

//Event listener on the closeBtn
closeBtn.addEventListener("click", function () {
    success.classList.remove("success");
    resetField([orderName, orderNumber, orderEmail, orderQuantity, orderAddress, orderDate])
    form.reset();
});

function openMenu() {
    //console.log(true);
    sideMenu.classList.add('showMenu');
    bodyCover.classList.add('reveal')
}

function closeSideMenu() {
    sideMenu.classList.remove('showMenu');
    bodyCover.classList.remove('reveal');
}

//Event listener on the navMenu btn
navMenu.addEventListener("click", openMenu);

//Event listener on the sideMenu btn
closeMenu.addEventListener("click", closeSideMenu);

//Send email function 
function sendEmail() {
    const myPassword = "DE2AB930D757F46B3F8B71E14A8572AB8313";
    const bodyMessage = `
       Fullname: ${orderName.value}<br>
       Phone Number : ${orderNumber.value}<br>
       Email: ${orderEmail.value}<br>
       Meal: ${orderMeal.value}<br>
       Quantity: ${orderQuantity.value}<br>
       Delivery Address: ${orderAddress.value}<br>
       Delivery Date: ${orderDate.value}<br>
    `
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "dommnicomeke@gmail.com",
        Password: `${myPassword}`,
        To: "dommnicomeke@gmail.com",
        From: "dommnicomeke@gmail.com",
        Subject: "New Order",
        Body: `${bodyMessage}`
    });
    //.then(
      //  message => {
        //    if(message == "OK"){
          //      Swal.fire({
            //        title: "Success!",
              //      text: "Your order has been sent via Email!",
                //    icon: "success"
                  //});
            //}
        //}
    //);
} 