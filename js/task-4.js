const loginForm = document.querySelector(".login-form");
console.log(loginForm);

const handleSubmit = (event) => {
    event.preventDefault();
    const formElements = event.target.elements;
    const emailForm = event.target.elements.email.value.trim();
    const passwordForm = event.target.elements.password.value.trim();
    if(emailForm === "" || passwordForm === "") {
        alert("All form fields must be filled in")
    } else {
        const formData = {
            email: emailForm,
            password: passwordForm,
        }
        console.log(formData);

        event.target.reset();
    }
}
loginForm.addEventListener("submit", handleSubmit);