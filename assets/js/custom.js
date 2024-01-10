/* register page js */
function showRPassword() {
    var password = document.getElementById("rpassword");
    var eyeIcon = document.getElementById("registerp_eye-toggle");
    if (password.type === "password") {
        eyeIcon.classList.add('ri-eye-off-line');
        password.type = "text";
    } else {
        password.type = "password";
        eyeIcon.classList.remove('ri-eye-off-line');
    }
}
function showRCPassword() {
    var password = document.getElementById("rcpassword");
    var eyeIcon = document.getElementById("regustercp_eye-toggle");
    if (password.type === "password") {
        eyeIcon.classList.add('ri-eye-off-line');
        password.type = "text";
    } else {
        password.type = "password";
        eyeIcon.classList.remove('ri-eye-off-line');
    }
}
/** validate register form **/
function validateRFullName() {
    var fullName = document.getElementById("rfullname");
    var errorMessage = document.getElementById("rfn_error-msg");

    var trimmedRFNInput = fullName.value.trim();
    // Ensure at least 2 characters, at most 60 characters, no numbers, and no special characters
    var namePattern = /^[a-zA-Z\s]{2,60}$/;

    if (!namePattern.test(fullName.value)) {
        errorMessage.style.display = "block";
        return false;
    } else {
        errorMessage.style.display = "none";
        return true;
    }
}

function validateRUserName() {
    var userName = document.getElementById("rusername");
    var errorMessage = document.getElementById("run_error-msg");
    // Trim leading and trailing spaces
    var trimmedRUNInput = userName.value.trim();

    // Ensure at least 1 character, at most 70 characters, and only allow _ - @
    var userNamePattern = /^[-_@$#a-zA-Z0-9]{1,70}$/;

    if (!userNamePattern.test(userName.value)) {
        errorMessage.style.display = "block";
        return false;
    } else {
        errorMessage.style.display = "none";
        return true;
    }
}
function validateREmail() {
    var email = document.getElementById("remail");
    var errorMessage = document.getElementById("reml_error-msg");

    var trimmedREInput = email.value.trim();
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email.value)) {
      errorMessage.style.display = "block";
      return false;
    } else {
      errorMessage.style.display = "none";
      return true;
    }
}
function validateRPswd() {
    var password = document.getElementById("rpassword");
    var errorMessage = document.getElementById("rpswd_error-msg");

    // Ensure at least one small letter, one capital letter, one digit/number, one special character
    // Overall at least 8 characters, at most 60 characters
    var passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#_-])[A-Za-z\d@#_-]{8,60}$/;
    if (!passwordPattern.test(password.value)) {
        errorMessage.style.display = "block";
        return false;
      } else {
        errorMessage.style.display = "none";
        return true;
      }
      //validateRCPswd(); // Check password match immediately
}
function validateRCPswd() {
    var password = document.getElementById("rpassword");
    var cPassword = document.getElementById("rcpassword");
    var errorMessage = document.getElementById("rcpswd_error-msg");

  
    if (password.value !== cPassword.value) {
        errorMessage.style.display = "block";
        return false;
      } else {
        errorMessage.style.display = "none";
        return true;
      }
}


function submitData() {
    var errorMessagefn = document.getElementById("rfn_error-msg");
    var errorMessageun = document.getElementById("run_error-msg");
    var errorMessageemail = document.getElementById("reml_error-msg");
    var errorMessagepswd = document.getElementById("rpswd_error-msg");
    var errorMessagecpswd = document.getElementById("rcpswd_error-msg");
    // Check if both validations pass
    if (!errorMessagefn.style.display && !errorMessageun.style.display && !errorMessageemail.style.display &&
         !errorMessagepswd.style.display && !errorMessagecpswd.style.display) {
      alert("Now you can store data in the database.");
    } else {
      alert("Please fill properly form before submitting.");
    }
  }