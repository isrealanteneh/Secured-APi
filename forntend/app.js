document.addEventListener("DOMContentLoaded", function () {
    //dom is fully loaded
    var loginForm = document.getElementById("login-form");
    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();
            //find username and password
            var usernameInput = loginForm.elements.namedItem("username");
            var passwordInput = loginForm.elements.namedItem("password");
            if (usernameInput && passwordInput) {
                var loginDataObj = {
                    username: usernameInput.value,
                    password: passwordInput.value,
                };
            }
        });
    }
    else {
        console.error("Login form not found");
    }
});
