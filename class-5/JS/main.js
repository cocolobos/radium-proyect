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
    var emailError=document.getElementById('email-error');
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
            emailError.style.display="none";
        } else {
            email.style.border = "3px solid red";
            emailError.style.display="block";
        }
    }
    email.onfocus = function(){
        emailError.style.display = "none";
        email.style.border = "3px solid blue";
    }
    //password validation
    var password=document.getElementById('password');
    var passError=document.getElementById('password-error');
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
            passError.style.display="none";
        } else {
            password.style.border = "3px solid red";
            passError.style.display="block";
        }
    }
    password.onfocus = function(){
        passError.style.display = "none";
        password.style.border = "3px solid blue";
    }
    //Repeat Password validation
    var repeatPass=document.getElementById('repassword');
    var repPassError=document.getElementById('repassword-error');
    function repeatPassword(){
        if(repeatPass.value === password.value){
            return true;
        }
        else{
            return false;
        }
    }
    repeatPass.onblur = function(){
        if (repeatPassword(repeatPass.value)){
            repeatPass.style.border = "3px solid green";
            repPassError.style.display="none";
        } else {
            repeatPass.style.border = "3px solid red";
            repPassError.style.display="block";
        }
    }
    repeatPass.onfocus = function(){
        repPassError.style.display = "none";
        repeatPass.style.border = "3px solid blue";
    }
    //Age validation
    var age=document.getElementById('age');
    var ageError=document.getElementById('age-error');
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
            ageError.style.display="none";
        } else {
            age.style.border = "3px solid red";
            ageError.style.display="block";
        }
    }
    age.onfocus = function(){
        ageError.style.display = "none";
        age.style.border = "3px solid blue";
    }
    //Phone Number validation
    var phone=document.getElementById('phone');
    var phoneError=document.getElementById('phone-error');
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
            phoneError.style.display="none";
        } else {
            phone.style.border = "3px solid red";
            phoneError.style.display="block";
        }
    }
    phone.onfocus = function(){
        phoneError.style.display = "none";
        phone.style.border = "3px solid blue";
    }
    //adress validation
    var adress=document.getElementById('adress');
    var adressError=document.getElementById('adress-error');
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
            adressError.style.display="none";
        } else {
            adress.style.border = "3px solid red";
            adressError.style.display="block";
        }
    }
    adress.onfocus = function(){
        adressError.style.display = "none";
        adress.style.border = "3px solid blue";
    }
    //city validation
    var city=document.getElementById('city');
    var cityError=document.getElementById('city-error');
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
            cityError.style.display="none";
        } else {
            city.style.border = "3px solid red";
            cityError.style.display="block";
        }
    }
    city.onfocus = function(){
        cityError.style.display = "none";
        city.style.border = "3px solid blue";
    }
    //Post Code Number validation
    var postcode=document.getElementById('postcode');
    var postcodeError=document.getElementById('postcode-error')
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
            postcodeError.style.display="none";
        } else {
            postcode.style.border = "3px solid red";
            postcodeError.style.display="block";
        }
    }
    postcode.onfocus = function(){
        postcodeError.style.display = "none";
        postcode.style.border = "3px solid blue";
    }
    //dni validation
    var dni=document.getElementById('dni');
    var dniError=document.getElementById('dni-error');
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
            dniError.style.display="none";
        } else {
            dni.style.border = "3px solid red";
            dniError.style.display="block";
        }
    }
    dni.onfocus = function(){
        dniError.style.display = "none";
        dni.style.border = "3px solid blue";
    }
    //Button
    var form=document.getElementById('formulary');
    form.addEventListener('submit',function(e){
        e.preventDefault();
        var errorFields = "";
        var result = true;
        if (!validateName()){
            errorFields+= "Full Name\n";
            name.style.border = "3px solid red";
            nameError.style.display="block";
            result = true;
        }
        if (!validateMail()){
            errorFields+= "E-Mail\n";
            email.style.border = "3px solid red";
            emailError.style.display="block";
            result = true;
        }
        if (!checkPassword()){
            errorFields+= "Password\n";
            password.style.border = "3px solid red";
            passError.style.display="block";
            result = true;
        }
        if(!repeatPassword()){
            errorFields+= "Repeat Password\n";
            repeatPass.style.border = "3px solid red";
            repPassError.style.display="block";
            result=true;
        }
        if (!checkAge()){
            errorFields+= "Age\n";
            age.style.border = "3px solid red";
            ageError.style.display="block";
            result = true;
        }
        if (!checkPhone()){
            errorFields+= "Phone Number\n";
            phone.style.border = "3px solid red";
            phoneError.style.display="block";
            result = true;
        }
        if (!checkAdress()){
            errorFields+= "Adress\n";
            adress.style.border = "3px solid red";
            adressError.style.display="block";
            result = true;
        }
        if (!checkCity()){
            errorFields+= "City\n";
            city.style.border = "3px solid red";
            cityError.style.display="block";
            result = true;
        }
        if (!checkPostNumb()){
            errorFields+= "Post Number\n";
            postcode.style.border = "3px solid red";
            postcodeError.style.display="block";
            result = true;
        }
        if (!checkDocNumb()){
            errorFields+= "Document Number\n";
            dni.style.border = "3px solid red";
            dniError.style.display="block";
            result = true;
        }
        if(validateName(name.value) && validateMail(email.value) && checkPassword(password.value) && repeatPassword (repeatPass.value) && checkAge(age.value) && checkPhone(phone.value) && checkAdress(adress.value) && checkCity(city.value) && checkPostNumb(postcode.value) && checkDocNumb(dni.value)){
            alert("Full Name: "+name.value+"\n E-mail: "+email.value+"\n Password: "+password.value+"\n Repeat Password: "+repeatPass.value+"\n Age: "+age.value+"\n Phone Number: "+phone.value+"\n Adress: "+adress.value+"\n City: "+city.value+"\n Post Number: "+postcode.value+"\n Document Number: "+dni.value);
            form.reset();
            name.style.border = "3px solid transparent";
            email.style.border = "3px solid transparent";
            password.style.border = "3px solid transparent";
            repeatPass.style.broder = "3px solid transparent";
            age.style.border = "3px solid transparent";
            phone.style.border = "3px solid transparent";
            adress.style.border = "3px solid transparent";
            city.style.border = "3px solid transparent";
            postcode.style.border = "3px solid transparent";
            dni.style.border = "3px solid transparent";
        }
        else if(result){
            alert("Please check the following fields for possible errors:\n" +errorFields);
        }
    });
    //BONUS
    var itemInput = document.querySelector('input[type="text"]');
    itemInput.addEventListener('keyup', runEvent);
    function runEvent(e){
        document.getElementById('box').innerHTML= e.target.value ? "<h3>Hello "+name.value+"</h3>" : "";
    }
}
