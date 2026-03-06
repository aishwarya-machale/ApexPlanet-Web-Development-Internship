// SIGNUP LOGIC
const signupForm = document.getElementById("signupForm");

if (signupForm) {
  signupForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirm = document.getElementById("confirmPassword").value.trim();
    const error = document.getElementById("signupError");

    if (password !== confirm) {
      error.innerText = "Passwords do not match!";
      return;
    }

    const user = { name, email, password };

    localStorage.setItem("user", JSON.stringify(user));
    alert("Signup successful! Please login.");
    window.location.href = "login.html";
  });
}

// LOGIN LOGIC
const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value.trim();
    const error = document.getElementById("loginError");

    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (!savedUser) {
      error.innerText = "No account found. Please Sign Up.";
      return;
    }

    if (email === savedUser.email && password === savedUser.password) {
      localStorage.setItem("isLoggedIn", "true");
      window.location.href = "index.html";
    } else {
      error.innerText = "Invalid Email or Password!";
    }
  });
}

// LOGOUT FUNCTION (call from navbar)
function logout() {
  localStorage.removeItem("isLoggedIn");
  window.location.href = "login.html";
}
