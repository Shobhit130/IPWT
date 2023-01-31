function validate(){
    firstf = /^[A-Za-z]{8,15}$/;
    if(!document.workshop.first.value.match(firstf)){
        alert("Please enter the correct first name");
        document.workshop.first.focus();
        return false;
    }
    lastf = /^[A-Za-z]{8,15}$/;
    if(!document.workshop.last.value.match(lastf)){
        alert("Please enter the correct last name");
        document.workshop.last.focus();
        return false;
    }
    companyf = /^[A-Za-z0-9 ]{10,15}$/;
    if(!document.workshop.company.value.match(companyf)){
        alert("Please enter the correct company name");
        document.workshop.company.focus();
        return false;
    }
    cityf = /^[A-Za-z]{5,}$/;
    if(!document.workshop.city.value.match(cityf)){
        alert("Please enter the correct city name");
        document.workshop.city.focus();
        return false;
    }
    addf = /^[A-Za-z0-9_., ]{5,}$/;
    if(!document.workshop.address.value.match(addf)){
        alert("Please enter the correct address");
        document.workshop.address.focus();
        return false;
    }
    if(document.workshop.state.selectedIndex == "0"){
        alert("Please choose your state");
        document.workshop.state.focus();
        return false;
    }
    if(document.workshop.country.selectedIndex == "0"){
        alert("Please choose your country");
        document.workshop.country.focus();
        return false;
    }
    mailf = /^[a-z0-9._-]+@[a-z]+\.[a-z.]{2,5}$/;
    if(!document.workshop.email.value.match(mailf)){
        alert("Please enter the correct email address");
        document.workshop.email.focus();
        return false;
    }
    phonef = /^[0-9]{10}$/;
    if(!document.workshop.phone.value.match(phonef)){
        alert("Please enter the correct phone number");
        document.workshop.phone.focus();
        return false;
    }
    if(document.workshop.meal.selectedIndex == "0"){
        alert("Please choose your meal");
        document.workshop.meal.focus();
        return false;
    }
    if((document.workshop.cash.checked == false) && (document.workshop.cheque.checked == false) && (document.workshop.dd.checked == false)){
        alert("Please choose the payment mode");
        document.workshop.cash.focus();
        return false;
    }
    ddf = /^[A-Z]{2}\-[0-9]{6}$/;
    if(!document.workshop.ddcno.value.match(ddf)){
        alert("Please enter the correct DD/Cheque number");
        document.workshop.ddcno.focus();
        return false;
    }
    bnamef = /^[A-Za-z]+$/;
    if(!document.workshop.bname.value.match(bnamef)){
        alert("Please enter the correct bank name");
        document.workshop.bname.focus();
        return false;
    }   
    patf = /^[A-Za-z]+$/;
    if(!document.workshop.pat.value.match(patf)){
        alert("Please enter the payable at field correctly");
        document.workshop.pat.focus();
        return false;
    }   
}