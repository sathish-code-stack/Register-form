
const nameInput = document.getElementById("name")
const emailInput = document.getElementById("email")
const passwordInput = document.getElementById("password")
const submitBtn = document.getElementById("submitBtn")
const form = document.getElementById("registerForm")

let submitted = false

function validateForm() {
    const name = nameInput.value.trim()
    const email = emailInput.value.trim()
    const password = passwordInput.value

    const nameValid = name !== ""
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    const passwordValid = password.length >= 6

    if (submitted) {
        document.getElementById("nameError").textContent=nameValid ? "" : "Name is required"
        document.getElementById("emailError").textContent =emailValid ? "" : "Enter a valid email address"
        document.getElementById("passwordError").textContent =passwordValid ? "" : "Password must be at least 6 characters"
    }

    submitBtn.disabled = !(nameValid && emailValid && passwordValid)
    return nameValid && emailValid && passwordValid
}

nameInput.addEventListener("input", validateForm)
emailInput.addEventListener("input", validateForm)
passwordInput.addEventListener("input", validateForm)

form.addEventListener("submit", function(event) {
    event.preventDefault()

    submitted = true

    if (validateForm()) {
        document.getElementById("successMessage").textContent = "Registration successful"
        form.reset()
        submitted = false

        document.getElementById("nameError").textContent = ""
        document.getElementById("emailError").textContent = ""
        document.getElementById("passwordError").textContent = ""
         submitBtn.disabled = true;
    }
});


