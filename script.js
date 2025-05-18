document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form from refreshing the page

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const errorMsg = document.getElementById("errorMsg");

  // Basic validation
  if (!name || !email || !password || !confirmPassword) {
    errorMsg.textContent = "Please fill in all fields.";
    return;
  }

  if (password.length < 6) {
    errorMsg.textContent = "Password must be at least 6 characters.";
    return;
  }

  if (password !== confirmPassword) {
    errorMsg.textContent = "Passwords do not match.";
    return;
  }

  errorMsg.textContent = "";
  alert(`Account created for ${name}! (This is a demo.)`);

  // You can add API calls or redirect logic here
});
function handleGoogleSignIn() {
  alert("Google Sign-In clicked (demo only)");
  // In a real app, you'd use Google Identity Services or Firebase Auth
}
