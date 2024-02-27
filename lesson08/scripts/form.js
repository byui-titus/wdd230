function checkPassword(input) {
    var password = document.getElementById('password').value;
    var confirmPassword = input.value;
    var errorSpan = document.getElementById('password_error');
    if (password !== confirmPassword) {
      errorSpan.style.display = 'inline';
      document.getElementById('password').value = '';
      input.value = '';
      document.getElementById('password').focus();
    } else {
      errorSpan.style.display = 'none';
    }
  }