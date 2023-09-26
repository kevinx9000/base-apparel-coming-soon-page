const emailForm = document.getElementById('email-form')
const inputField = document.querySelector('.input-field')
const inputBtn = document.querySelector('.input-btn')
const errorMessage = document.querySelector('.error-message')
const errorIcon = document.querySelector('.error-icon')

emailForm.addEventListener('submit', function (event) {
    event.preventDefault()

    if (!inputField.value) {
        errorMessage.innerHTML = `<small>You forgot to add your email</small>`
        inputField.classList.add('error-border')
        errorIcon.classList.remove('hidden')

    }
    else if (!inputField.checkValidity()) {
        errorMessage.innerHTML = `<small>Please provide a valid email address</small>`
        inputField.classList.add('error-border')
        errorIcon.classList.remove('hidden')
    }
    else {
        errorMessage.innerHTML = `<small><b>Success!</b> And immediately shredded.</small>`
        inputField.classList.remove('error-border')
        errorIcon.classList.add('hidden')
        inputField.value = ""
        console.log("form submitted")
    }
})



