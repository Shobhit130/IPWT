function validate(){
    var pas = document.getElementById("pass").value;
    var repas = document.getElementById("repass").value;

    if(document.formvalid.name.value == ""){
        alert("Enter your name");
        document.formvalid.name.focus();
        return false;
    }
    namef = /^[A-Za-z]{1,25}$/;
    if(!document.formvalid.name.value.match(namef)){
        alert("Enter your correct name");
        document.formvalid.name.focus();
        return false;
    }
    if(document.formvalid.email.value == ""){
        alert("Enter your email address");
        document.formvalid.email.focus();
        return false;
    }
    mailf = /^[a-z0-9._-]+@[a-z]+\.[a-z.]{2,5}$/;
    if(!document.formvalid.email.value.match(mailf)){
        alert("Please enter the correct email address");
        document.formvalid.email.focus();
        return false;
    }
    if(pas == ""){
        alert("Enter your password");
        document.formvalid.pass.focus();
        return false;
    }
    passf = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$*&])[A-Za-z\d@$*&]{8,15}$/;
    if(!pas.match(passf)){
        alert("Enter the correct password");
        document.formvalid.pass.focus();
        return false;
    }
    if(repas == ""){
        alert("Confirm your password");
        document.formvalid.repass.focus();
        return false;
    }
    if(pas!=repas){
        alert("Password and Confirm Password should be same");
        document.formvalid.pass.focus();
        return false;
    }
    if(document.formvalid.phone.value == ""){
        alert("Enter your phone number");
        document.formvalid.phone.focus();
        return false;
    }
    phonef = /^(\+[0-9]{1,3}){1}[ ][0-9]{10}$/;
    if(!document.formvalid.phone.value.match(phonef)){
        alert("Please enter the correct phone number");
        document.formvalid.phone.focus();
        return false;
    }
}