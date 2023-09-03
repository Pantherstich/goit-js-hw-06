const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  console.log(event.currentTarget.elements);
  const { email, password } = event.currentTarget.elements;
  const info = {
    email: email.value,
    password: password.value,
  };
if (info.email === "" || info.password === "") { alert('заповніть всі поля')
    
}
  console.log(info);
  event.currentTarget.reset();
}
