const password = document.getElementById("password");
const password2 = document.getElementById("rp-password");
const form = document.getElementById("form");


form.addEventListener("submit", function (event) {
    if (password.value != password2.value) {
        console.log(false);
        event.preventDefault();
    }
})
