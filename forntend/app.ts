interface LoginFormData {
  username: string;
  password: string;
}

document.addEventListener("DOMContentLoaded", () => {
  //dom is fully loaded
  const loginForm = document.getElementById("login-form") as HTMLFormElement;
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      //find username and password
      const usernameInput = loginForm.elements.namedItem(
        "username"
      ) as HTMLInputElement;
      const passwordInput = loginForm.elements.namedItem(
        "password"
      ) as HTMLInputElement;
      if (usernameInput && passwordInput) {
        const loginDataObj: LoginFormData = {
          username: usernameInput.value,
          password: passwordInput.value,
        };
      }
    });
  } else {
    console.error("Login form not found");
  }
});
