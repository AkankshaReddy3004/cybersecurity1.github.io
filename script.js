document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // Check username and password (dummy check)
  if (username === 'admin','akanksha','naziya' && password === 'admin123','akanksha34','nazi@567') {
    alert('Login successful!');
    // Redirect to another page or do something else
  } else {
    alert('Invalid username or password. Please try again.');
  }
});
