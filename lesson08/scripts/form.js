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

  document.addEventListener("DOMContentLoaded", () => {
    // Get the last modified date
    let lastModified = document.lastModified;

    // Get the h4 to set the string
    let h4 = document.querySelector("footer h4");

    // Set h4 inner text with date
    h4.innerText = h4.innerText.concat(` ${lastModified}`);

    // Get current date
    let date = new Date();

    // Get h3 to place the current year
    let h3 = document.querySelector("footer h3");

    // Get © index in string
    let index = h3.innerText.indexOf("©");

    // Get string before © and add current year
    let str = h3.innerText.slice(0, index + 1).concat(`${date.getFullYear()}`);

    // Add the rest of the string
    h3.innerText = str.concat(h3.innerText.slice(index + 1));
});