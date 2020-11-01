window.onload=function(){

    //name validation
    var name = document.getElementById('name');
    function validateName(){
        var space=name.value.indexOf(" ");
        if (space<=0 || name.value.length<6){
            return false;
        }
        else{
            return true;
        }
    }
    name.onblur = function(){
        if (validateName(event.target.value)){
            document.getElementById('name').style.border = "3px solid green";
            document.getElementById('name-error').style.display="none";
        } else {
            document.getElementById('name').style.border = "3px solid red";
            document.getElementById('name-error').style.display="block";
        }
    }
    name.onfocus = function(){
        document.getElementById('name-error').style.display = "none";
        document.getElementById('name').style.border = "3px solid blue";

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
        if (validateMail(event.target.value)){
            document.getElementById('email').style.border = "3px solid green";
            document.getElementById('email-error').style.display="none";
        } else {
            document.getElementById('email').style.border = "3px solid red";
            document.getElementById('email-error').style.display="block";
        }
    }
    email.onfocus = function(){
        document.getElementById('email-error').style.display = "none";
        document.getElementById('email').style.border = "3px solid blue";
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
        if (checkPassword(event.target.value)){
            document.getElementById('password').style.border = "3px solid green";
            document.getElementById('password-error').style.display="none";
        } else {
            document.getElementById('password').style.border = "3px solid red";
            document.getElementById('password-error').style.display="block";
        }
    }
    password.onfocus = function(){
        document.getElementById('password-error').style.display = "none";
        document.getElementById('password').style.border = "3px solid blue";
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
        if (checkAge(event.target.value)){
            document.getElementById('age').style.border = "3px solid green";
            document.getElementById('age-error').style.display="none";
        } else {
            document.getElementById('age').style.border = "3px solid red";
            document.getElementById('age-error').style.display="block";
        }
    }
    age.onfocus = function(){
        document.getElementById('age-error').style.display = "none";
        document.getElementById('age').style.border = "3px solid blue";
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
        if (checkPhone(event.target.value)){
            document.getElementById('phone').style.border = "3px solid green";
            document.getElementById('phone-error').style.display="none";
        } else {
            document.getElementById('phone').style.border = "3px solid red";
            document.getElementById('phone-error').style.display="block";
        }
    }
    phone.onfocus = function(){
        document.getElementById('phone-error').style.display = "none";
        document.getElementById('phone').style.border = "3px solid blue";
    }
    //adress validation
    var adress=document.getElementById('adress');
    function checkAdress(){
        var adds= /^.{4,12}$/;
        var space=adress.value.indexOf(" ");
        if(adress.value.match(adds)){
            if(adress.value.length>=5 || space > 0){
                return true;
            }
        }
        else{
            return false;
        }
    }
    adress.onblur = function(){
        if (checkAdress(event.target.value)){
            document.getElementById('adress').style.border = "3px solid green";
            document.getElementById('adress-error').style.display="none";
        } else {
            document.getElementById('adress').style.border = "3px solid red";
            document.getElementById('adress-error').style.display="block";
        }
    }
    adress.onfocus = function(){
        document.getElementById('adress-error').style.display = "none";
        document.getElementById('adress').style.border = "3px solid blue";
    }
    //city validation
    var city=document.getElementById('city');
    function checkCity(cityValue){
        if(cityValue && cityValue.length>=3){
            return true;
        }
        else{
            return false;
        }
    }
    city.onblur = function(){
        if (checkCity(event.target.value)){
            document.getElementById('city').style.border = "3px solid green";
            document.getElementById('city-error').style.display="none";
        } else {
            document.getElementById('city').style.border = "3px solid red";
            document.getElementById('city-error').style.display="block";
        }
    }
    city.onfocus = function(){
        document.getElementById('city-error').style.display = "none";
        document.getElementById('city').style.border = "3px solid blue";
    }
    //Post Code Number validation
    var postcode=document.getElementById('postcode');
    function checkPostNumb(postcode){
        if (postcode && postcode.length>=3){
            return true;
        }
        else{
            return false;
        }
    }
    postcode.onblur = function(){
        if (checkPostNumb(event.target.value)){
            document.getElementById('postcode').style.border = "3px solid green";
            document.getElementById('postcode-error').style.display="none";
        } else {
            document.getElementById('postcode').style.border = "3px solid red";
            document.getElementById('postcode-error').style.display="block";
        }
    }
    postcode.onfocus = function(){
        document.getElementById('postcode-error').style.display = "none";
        document.getElementById('postcode').style.border = "3px solid blue";
    }
    //city validation
    var dni=document.getElementById('dni');
    function checkDocNumb(dni){
        if (dni.length>6 && dni.length<9){
            return true;
        }
        else{
            return false;
        }
    }
    dni.onblur = function(){
        if (checkDocNumb(event.target.value)){
            document.getElementById('dni').style.border = "3px solid green";
            document.getElementById('dni-error').style.display="none";
        } else {
            document.getElementById('dni').style.border = "3px solid red";
            document.getElementById('dni-error').style.display="block";
        }
    }
    dni.onfocus = function(){
        document.getElementById('dni-error').style.display = "none";
        document.getElementById('dni').style.border = "3px solid blue";
    }
    //Button
    var form=document.getElementById('formulary');
    form.addEventListener('submit',function(e){
        e.preventDefault();
        if(validateName(name.value) && validateMail(email.value) && checkPassword(password.value) && checkAge(age.value) && checkPhone(phone.value) && checkAdress(adress.value) && checkCity(city.value) && checkPostNumb(postcode.value) && checkDocNumb(dni.value)){
            alert("Full Name: "+name.value+", E-mail: "+email.value+", Password: "+password.value+", Age: "+age.value+", Phone Number: "+phone.value+", Adress: "+adress.value+", City: "+city.value+", Post Number: "+postcode.value+", Document Number: "+dni.value);
            form.reset(); 
        }
        else{
            alert("Please check some fields contains errors");
        }
    }); 
}
