const emailValue = document.getElementById("form-group__email");
const form = document.querySelector(".form");
const message = "Please provide a valid email address";
const errorMessage = document.querySelector(".error-message");

// Check email is valid
function checkEmail(input) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!re.test(input.value.trim())) {
    showError(input, message);
  }
}
// Check empty email
function checkRequired(input) {
  if (input.value.trim() === "") {
    showError();
  } else {
    errorMessage.classList.remove("active");
  }
}

// Show input error message
function showError() {
  errorMessage.style.display = "block";
  errorMessage.classList.add("active");
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!checkRequired(emailValue)) {
    checkEmail(emailValue);
  }
});
