document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();
        var newUsername = document.getElementById('new-username').value;
        var newPassword = document.getElementById('new-password').value;
        var errorMessage = document.getElementById('error-message');
      
        if (newUsername === '' || newPassword === '') {
          errorMessage.innerText = 'Please enter both a new username and password.';
        } else {
          errorMessage.innerText = 'Registration successful!';
        }
    //document.getElementById('error-message').innerText = 'Registration successful!';
  });