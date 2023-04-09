function validate() {
  var pas = document.getElementById("pass").value;
  var repas = document.getElementById("repass").value;
  if (document.formvalid.name.value == "") {
    alert("Enter your name");
    document.formvalid.name.focus();
    return false;
  }
  namef = /^[A-Za-z]{1,25}$/;
  if (!document.formvalid.name.value.match(namef)) {
    alert("Enter your correct name");
    document.formvalid.name.focus();
    return false;
  }
  if (document.formvalid.email.value == "") {
    alert("Enter your email address");
    document.formvalid.email.focus();
    return false;
  }
  mailf = /^[a-z0-9._-]+@[a-z]+\.[a-z.]{2,5}$/;
  if (!document.formvalid.email.value.match(mailf)) {
    alert("Please enter the correct email address");
    document.formvalid.email.focus();
    return false;
  }
  if (pas == "") {
      alert("Enter your password");
      document.formvalid.pass.focus();
      return false;
    }
    passf = /^([A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$*&])[A-Za-z\d@$*&]{8,15}$/;
    if (!pas.match(passf)) {
        alert("Enter the correct password");
        document.formvalid.pass.focus();
        return false;
  }
  if (repas == "") {
      alert("Confirm your password");
      document.formvalid.repass.focus();
      return false;
    }
    if (pas != repas) {
        alert("Password and Confirm Password should be same");
        document.formvalid.pass.focus();
        return false;
    }
    if(document.formvalid.gender[0].checked == false && document.formvalid.gender[1].checked == false){
      alert("Select your gender");
      return false;
  }
  if(document.formvalid.city.selectedIndex == "0"){
      alert("Select your city");
      document.formvalid.city.focus();
      return false;
  }
  if (document.formvalid.phone.value == "") {
    alert("Enter your phone number");
    document.formvalid.phone.focus();
    return false;
  }
  phonef = /^(\+[0-9]{1,3}){1}[ ][0-9]{10}$/;
  if (!document.formvalid.phone.value.match(phonef)) {
    alert("Please enter the correct phone number");
    document.formvalid.phone.focus();
    return false;
  }
  var userinput = document.getElementById("dob").value;
  if (userinput == null || userinput == "") {
    alert("Enter a date");
    document.formvalid.dob.focus();
    return false;
  } else {
    var dob = new Date(userinput);
    var today = new Date();
    var diff = today.getTime() - dob.getTime();
    var msInYear = 365 * 24 * 60 * 60 * 1000; //ms per year
    var years = diff / msInYear;
    if (years >= 18) {
      alert("Success");
      return true;
    } else {
      alert("Not allowed");
      return false;
    }
  }
}

// ^ => beginning of string
// $ => end of string
// . => any character except newline
// * =>match 0 or more times
// + =>match 1 or more times
// ? =>match 0 or 1 times; or: shortest match
// | =>alternative
// ( ) =>grouping; “storing”
// [ ] =>set of characters
// { } =>repetition modifier

// 1.Username [Min 8 Chars and alpha numeric characters)
// 	/^[a-z0-9A-Z]{8,}$/i
// 2. Email ID
// 	/^[a-z0-9._-]+@[a-z]+\.[a-z.]{2,5}$/i
// 4. Mobile Number
// 	/^([+0-9]{1,3})?([0-9]{10,11})$/i
// 5. Web Site URL
// 	/^[http://]{1}[www]{1}\.[0-9a-z_.]{1,}\.[a-z.]{2,5}$/i
// 6. Pincode
// 	/^[0-9]{6}$/i

// Javascript function to check whether a field input contains a number with no exponent,
// mandatory integer and fraction and optional sign

// var decimal=  /^[-+]?[0-9]+\.[0-9]+$/;

// Javascript function to check whether a field input contains a number with no exponent,
// mandatory sign (+-), integer, and fraction

// var decimal=  /[-+][0-9]+\.[0-9]+$/;

// Javascript function to check whether a field input contains a number starting with
// mandatory sign (+-), exponent, integer, fraction

// var decimal= /^[-+][0-9]+\.[0-9]+[eE][-+]?[0-9]+$/;

//Email validation

// var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

// Validate dd/mm/yyyy or dd-mm-yyyy format

// var dateformat = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;

// Validate mm/dd/yyyy or mm-dd-yyyy format

//  var dateformat = /^(0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])[\/\-]\d{4}$/;

// validate a phone number of 10 digits with no comma, no spaces, no punctuation and there will be no + sign in front the number.

// var phoneno = /^\d{10}$/;

// To valid a phone number like
// XXX-XXX-XXXX
// XXX.XXX.XXXX
// XXX XXX XXXX

// var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

// If you want to use a + sign before the number in the following way
// +XX-XXXX-XXXX
// +XX.XXXX.XXXX
// +XX XXXX XXXX

// var phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;

//PASSWORD VALIDATIONS
// Minimum eight characters, at least one letter and one number:

// "^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/"

// Minimum eight characters, at least one letter, one number and one special character:

// "^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/"

// Minimum eight characters, at least one uppercase letter, one lowercase letter and one number:

// "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/"

// Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:

// "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/"

// Minimum eight and maximum 10 characters, at least one uppercase letter, one lowercase letter, one number and one special character:

// "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/"

// Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character AND START WITH AN UPPERCASE LETTER:

// "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Z][A-Za-z\d@$!%*?&]{8,}$/"
