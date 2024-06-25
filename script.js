const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm_password");
const displayErrorMessage = document.querySelector(".error-message");

let currentPassword = "";
let currentConfirmPassword = "";

password.addEventListener('keyup', checkPassword);
confirmPassword.addEventListener('keyup', checkPassword);

function checkPassword() {
    currentPassword = password.value;
    currentConfirmPassword = confirmPassword.value;
    if (currentPassword !== currentConfirmPassword || 
        (password.value === "" && confirmPassword.value === "")) {
        displayErrorMessage.textContent = "* Passwords do not match";
        password.classList.add("invalid");
        confirmPassword.classList.add("invalid");
    } else {
        displayErrorMessage.textContent = "";
        password.classList.remove("invalid");
        confirmPassword.classList.remove("invalid");
    }
    pass
}