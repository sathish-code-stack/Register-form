
const nameInput = document.getElementById("name")
const emailInput = document.getElementById("email")
const passwordInput = document.getElementById("password")
const submitBtn = document.getElementById("submitBtn")
const form = document.getElementById("registerForm")

let nameTimer, emailTimer, passwordTimer
const email_valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validateName() {
    const name = nameInput.value.trim()
    document.getElementById("nameError").textContent = name === "" ? "Name is required" : ""
    checkForm()
}

function validateEmail() {
    const email = emailInput.value.trim()
    const pattern = email_valid
    document.getElementById("emailError").textContent = !pattern.test(email) ? "Enter a valid email address" : ""
    checkForm()
}

function validatePassword() {
    const password = passwordInput.value
    document.getElementById("passwordError").textContent =password.length < 6 ? "Password must be at least 6 characters" : ""
    checkForm()
}

function checkForm() {
    const nameValid = nameInput.value.trim() !== ""
    const emailValid = email_valid.test(emailInput.value.trim())
    const passwordValid = passwordInput.value.length >= 6
    submitBtn.disabled = !(nameValid && emailValid && passwordValid)
}

nameInput.addEventListener("input", function () {
    clearTimeout(nameTimer);
    nameTimer = setTimeout(validateName, 500)
})
emailInput.addEventListener("input", function () {
    clearTimeout(emailTimer);
    emailTimer = setTimeout(validateEmail, 500)
})

passwordInput.addEventListener("input", function () {
    clearTimeout(passwordTimer);
    passwordTimer = setTimeout(validatePassword, 500)
})

form.addEventListener("submit", function (event) {
    event.preventDefault()
    validateName()
    validateEmail()
    validatePassword()

    if (!submitBtn.disabled) {
        document.getElementById("successMessage").textContent ="Registration successful!"
        form.reset()

        document.getElementById("nameError").textContent = ""
        document.getElementById("emailError").textContent = ""
        document.getElementById("passwordError").textContent = ""
        submitBtn.disabled = true
    }
})
submitBtn.disabled = true
