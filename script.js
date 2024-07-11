// Simulating login functionality
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Normally, here you would perform an AJAX request to authenticate the user
    // For demonstration purposes, let's assume the login is successful
    alert('Login successful! Redirecting to your account...');
    
    // Simulate redirection (you would typically redirect to a dashboard or account page)
    window.location.href = 'dashboard.html'; // Redirect to a hypothetical dashboard page
  });
  