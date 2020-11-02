window.onload=function(){

    //name validation
    var name = document.getElementById('name');
    var nameError = document.getElementById ('name-error');
    function validateName(){
        var space=name.value.indexOf(" ");
        if (space<=0 || name.value.length<6 || name.value == null){
            return false;
        }
        else{
            return true;
        }
    }
    name.onblur = function(){
        if (validateName(name.value)){
            name.style.border = "3px solid green";
            nameError.style.display="none";
        } else {
            name.style.border = "3px solid red";
            nameError.style.display="block";
        }
    }
    name.onfocus = function(){
        nameError.style.display = "none";
        name.style.border = "3px solid blue";

    }
    //email validation
    var email=document.getElementById('email');
    var mailFormat=/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    function validateMail(){
        if (email.value.match(mailFormat)){
            return true;
        }
        else{
            return false;
        }
    }
    email.onblur = function(){
        if (validateMail(email.value)){
            email.style.border = "3px solid green";
            document.getElementById('email-error').style.display="none";
        } else {
            email.style.border = "3px solid red";
            document.getElementById('email-error').style.display="block";
        }
    }
    email.onfocus = function(){
        document.getElementById('email-error').style.display = "none";
        email.style.border = "3px solid blue";
    }
    //password validation
    var password=document.getElementById('password');
    function checkPassword(){
        var passw= /^.{4,12}$/;
        if(password.value.match(passw)){
            if(password.value.length>=8){
                return true;
            }
        }
        else{
            return false;
        }
    }
    password.onblur = function(){
        if (checkPassword(password.value)){
            password.style.border = "3px solid green";
            document.getElementById('password-error').style.display="none";
        } else {
            password.style.border = "3px solid red";
            document.getElementById('password-error').style.display="block";
        }
    }
    password.onfocus = function(){
        document.getElementById('password-error').style.display = "none";
        password.style.border = "3px solid blue";
    }
    //Age validation
    var age=document.getElementById('age');
    function checkAge(){
        if (age.value>=18){
            return true;
        }
        else{
            return false;
        }
    }
    age.onblur = function(){
        if (checkAge(age.value)){
            age.style.border = "3px solid green";
            document.getElementById('age-error').style.display="none";
        } else {
            age.style.border = "3px solid red";
            document.getElementById('age-error').style.display="block";
        }
    }
    age.onfocus = function(){
        document.getElementById('age-error').style.display = "none";
        age.style.border = "3px solid blue";
    }
    //Phone Number validation
    var phone=document.getElementById('phone');
    function checkPhone(){
        var phnum= /^\d{7,}$/;
        if(phone.value.match(phnum)){
            return true;
        }
        else{
            return false;
        }
    }
    phone.onblur = function(){
        if (checkPhone(phone.value)){
            phone.style.border = "3px solid green";
            document.getElementById('phone-error').style.display="none";
        } else {
            phone.style.border = "3px solid red";
            document.getElementById('phone-error').style.display="block";
        }
    }
    phone.onfocus = function(){
        document.getElementById('phone-error').style.display = "none";
        phone.style.border = "3px solid blue";
    }
    //adress validation
    var adress=document.getElementById('adress');
    function checkAdress(){
        var adds= /^.{4,12}$/;
        var space=adress.value.indexOf(" ");
        if(adress.value.match(adds)){
            if(adress.value.length>=5 && space > 0){
                return true;
            }
        }
        else{
            return false;
        }
    }
    adress.onblur = function(){
        if (checkAdress(adress.value)){
            adress.style.border = "3px solid green";
            document.getElementById('adress-error').style.display="none";
        } else {
            adress.style.border = "3px solid red";
            document.getElementById('adress-error').style.display="block";
        }
    }
    adress.onfocus = function(){
        document.getElementById('adress-error').style.display = "none";
        adress.style.border = "3px solid blue";
    }
    //city validation
    var city=document.getElementById('city');
    function checkCity(){
        if(city.value.length>=3){
            return true;
        }
        else{
            return false;
        }
    }
    city.onblur = function(){
        if (checkCity(city.value)){
            city.style.border = "3px solid green";
            document.getElementById('city-error').style.display="none";
        } else {
            city.style.border = "3px solid red";
            document.getElementById('city-error').style.display="block";
        }
    }
    city.onfocus = function(){
        document.getElementById('city-error').style.display = "none";
        city.style.border = "3px solid blue";
    }
    //Post Code Number validation
    var postcode=document.getElementById('postcode');
    function checkPostNumb(){
        if (postcode.value.length>=3){
            return true;
        }
        else{
            return false;
        }
    }
    postcode.onblur = function(){
        if (checkPostNumb(postcode.value)){
            postcode.style.border = "3px solid green";
            document.getElementById('postcode-error').style.display="none";
        } else {
            postcode.style.border = "3px solid red";
            document.getElementById('postcode-error').style.display="block";
        }
    }
    postcode.onfocus = function(){
        document.getElementById('postcode-error').style.display = "none";
        postcode.style.border = "3px solid blue";
    }
    //dni validation
    var dni=document.getElementById('dni');
    function checkDocNumb(){
        if (dni.value.length>6 && dni.value.length<9){
            return true;
        }
        else{
            return false;
        }
    }
    dni.onblur = function(){
        if (checkDocNumb(dni.value)){
            dni.style.border = "3px solid green";
            document.getElementById('dni-error').style.display="none";
        } else {
            dni.style.border = "3px solid red";
            document.getElementById('dni-error').style.display="block";
        }
    }
    dni.onfocus = function(){
        document.getElementById('dni-error').style.display = "none";
        dni.style.border = "3px solid blue";
    }
    //Button
    var form=document.getElementById('formulary');
    form.addEventListener('submit',function(e){
        e.preventDefault();
        var errorFields = "";
        var result = true;
        if (!validateName()){
            errorFields+= "Full Name, ";
            result = true;
        }
        if (!validateMail()){
            errorFields+= "E-Mail, ";
            result = true;
        }
        if (!checkPassword()){
            errorFields+= "Password, ";
            result = true;
        }
        if (!checkAge()){
            errorFields+= "Age, ";
            result = true;
        }
        if (!checkPhone()){
            errorFields+= "Phone Number, ";
            result = true;
        }
        if (!checkCity()){
            errorFields+= "City, ";
            result = true;
        }
        if (!checkPostNumb()){
            errorFields+= "Post Number, ";
            result = true;
        }
        if (!checkDocNumb()){
            errorFields+= "Document Number, ";
            result = true;
        }
        if(validateName(name.value) && validateMail(email.value) && checkPassword(password.value) && checkAge(age.value) && checkPhone(phone.value) && checkAdress(adress.value) && checkCity(city.value) && checkPostNumb(postcode.value) && checkDocNumb(dni.value)){
            alert("Full Name: "+name.value+"\n E-mail: "+email.value+"\n Password: "+password.value+"\n Age: "+age.value+"\n Phone Number: "+phone.value+"\n Adress: "+adress.value+"\n City: "+city.value+"\n Post Number: "+postcode.value+"\n Document Number: "+dni.value);
            form.reset();
            name.style.border = "3px solid transparent";
            email.style.border = "3px solid transparent";
            password.style.border = "3px solid transparent";
            age.style.border = "3px solid transparent";
            phone.style.border = "3px solid transparent";
            adress.style.border = "3px solid transparent";
            city.style.border = "3px solid transparent";
            postcode.style.border = "3px solid transparent";
            dni.style.border = "3px solid transparent";
        }
        else if(result){
            alert("Please check the following fields for possible errors " +errorFields);
        }
    }); 
}
