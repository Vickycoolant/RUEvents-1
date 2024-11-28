document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm"); // Sign In form container
    const registerForm = document.getElementById("registerForm"); // Register form container
    const userIcon = document.getElementById("user1"); // User icon
    const registerButton = document.getElementById("registerButton"); // Register button
    const loginToRegisterLink = document.getElementById("toRegister"); // Link to switch to Register
    const registerToLoginLink = document.getElementById("toLogin"); // Link to switch to Sign In

    // Hide all forms initially
    loginForm.style.display = "none";
    registerForm.style.display = "none";

    // Function to show or hide a form
    function toggleFormVisibility(form) {
        if (form.style.display === "none" || form.style.display === "") {
            loginForm.style.display = "none"; // Ensure the other form is hidden
            registerForm.style.display = "none"; // Ensure the other form is hidden
            form.style.display = "block"; // Show the current form
        } else {
            form.style.display = "none"; // Hide the form
        }
    }

    // Show Sign In form when user icon is clicked
    userIcon.addEventListener("click", () => toggleFormVisibility(loginForm));

    // Switch to Register form when "Register here" link is clicked
    loginToRegisterLink.addEventListener("click", (e) => {
        e.preventDefault();
        toggleFormVisibility(registerForm);
    });

    // Switch to Sign In form when "Sign in here" link is clicked
    registerToLoginLink.addEventListener("click", (e) => {
        e.preventDefault();
        toggleFormVisibility(loginForm);
    });

    // Hide forms when clicking outside of them
    window.addEventListener("click", (e) => {
        if (
            !loginForm.contains(e.target) &&
            !registerForm.contains(e.target) &&
            e.target.id !== "user1"
        ) {
            loginForm.style.display = "none";
            registerForm.style.display = "none";
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");
    const toRegister = document.getElementById("toRegister");
    const toLogin = document.getElementById("toLogin");
    const loginButton = document.getElementById("loginButton");
    const registerButton = document.getElementById("registerButton");

    // Switch to Register Form
    toRegister.addEventListener("click", (e) => {
        e.preventDefault();
        loginForm.style.display = "none";
        registerForm.style.display = "block";
    });

    // Switch to Login Form
    toLogin.addEventListener("click", (e) => {
        e.preventDefault();
        registerForm.style.display = "none";
        loginForm.style.display = "block";
    });

    // Login Form Validation
    loginButton.addEventListener("click", () => {
        const name = document.getElementById("loginName").value.trim();
        const email = document.getElementById("loginEmail").value.trim();
        const password = document.getElementById("loginPassword").value.trim();

        if (!name || !email || !password) {
            alert("All fields are required!");
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            alert("Enter a valid email address!");
        } else {
            alert("Login successful!");
            // Add your login logic here
        }
    });

    // Register Form Validation
    registerButton.addEventListener("click", () => {
        const name = document.getElementById("registerName").value.trim();
        const email = document.getElementById("registerEmail").value.trim();
        const password = document.getElementById("registerPassword").value.trim();
        const confirmPassword = document.getElementById("confirmPassword").value.trim();

        if (!name || !email || !password || !confirmPassword) {
            alert("All fields are required!");
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            alert("Enter a valid email address!");
        } else if (password !== confirmPassword) {
            alert("Passwords do not match!");
        } else if (password.length < 6) {
            alert("Password must be at least 6 characters!");
        } else {
            alert("Registration successful!");
            // Add your registration logic here
        }
    });
});
