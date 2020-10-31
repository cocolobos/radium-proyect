(function(window, document, undefined){ 
    window.onload = init;
    function init(){
        var form=document.getElementById('formulary');
        form.addEventListener('submit',function(e){
            e.preventDefault();
            if(validateName && validateMail && checkPassword && checkAge && checkPhone && checkAdress && checkCity && checkPostNumb && checkDocNumb){
                document.getElementById('complete-message').classList.add('formulary-complete formulary-message-complete'); 
            }
            else{
                document.getElementById('mistake').classList.add('formulary-message'); 
            }

        });

        //Name validation
        var name=document.getElementById('name');
        name.addEventListener('blur',function(e){
            e.preventDefault();
            if(validateName(event.target.value)){
                document.getElementById('fullname').classList.add('formulary-group-correct');
                document.getElementById('fullname').classList.add('formulary-group-correct formulary-error');
            }
            else{
                document.getElementById('fullname').classList.add('formulary-group-incorrect');
                document.getElementById('fullname').classList.add('formulary-group-incorrect formulary-error');
            }
        })
        function validateName(){
            var space=name.value.indexOf(" ");
            if (space<=0 || name.value.length<6){
                return false;
            }
            else{
                return true;
            }
        }
        // Email validation
        var email=document.getElementById('email');
        email.addEventListener('blur',function(e){
            e.preventDefault();
            if(validateMail(event.target.value)){
                document.getElementById('e-mail').classList.add('formulary-group-correct');
                document.getElementById('e-mail').classList.add('formulary-group-correct formulary-error');
            }
            else{
                document.getElementById('e-mail').classList.add('formulary-group-incorrect');
                document.getElementById('e-mail').classList.add('formulary-group-incorrect formulary-error');
            }
        })
        function validateMail(){
            var mailFormat=/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
            if (email.value.match(mailFormat)){
                return true;
            }
            else{
                return false;
            }
        }
        //Password Validation
        var password=document.getElementById('password');
        password.addEventListener('blur',function(e){
            e.preventDefault();
            if(checkPassword(event.target.value)){
                document.getElementById('pass').classList.add('formulary-group-correct');
                document.getElementById('pass').classList.add('formulary-group-correct formulary-error');
            }
            else{
                document.getElementById('pass').classList.add('formulary-group-incorrect');
                document.getElementById('pass').classList.add('formulary-group-incorrect formulary-error');
            }
        })
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
        // Age Validation
        var age=document.getElementById('age');
        age.addEventListener('blur',function(e){
            e.preventDefault();
            if(checkAge(event.target.value)){
                document.getElementById('year').classList.add('formulary-group-correct');
                document.getElementById('year').classList.add('formulary-group-correct formulary-error');
            }
            else{
                document.getElementById('year').classList.add('formulary-group-incorrect');
                document.getElementById('year').classList.add('formulary-group-incorrect formulary-error');
            }
        })
        function checkAge(){
            if (age.value>=18){
                return true;
            }
            else{
                return false;
            }
        }
        // Phone Number Validation
        var phone=document.getElementById('phone');
        phone.addEventListener('blur',function(e){
            e.preventDefault();
            if(checkPhone(event.target.value)){
                document.getElementById('phnumb').classList.add('formulary-group-correct');
                document.getElementById('phnumb').classList.add('formulary-group-correct formulary-error');
            }
            else{
                document.getElementById('phnumb').classList.add('formulary-group-incorrect');
                document.getElementById('phnumb').classList.add('formulary-group-incorrect formulary-error');
            }
        })
        function checkPhone(){
            var phnum= /^\d{7,}$/;
            if(phone.value.match(phnum)){
                return true;
            }
            else{
                return false;
            }
        }
        // Adress Validation
        var adress=document.getElementById('adress');
        adress.addEventListener('blur',function(e){
            e.preventDefault();
            if(checkAdress(event.target.value)){
                document.getElementById('direct').classList.add('formulary-group-correct');
                document.getElementById('direct').classList.add('formulary-group-correct formulary-error');
            }
            else{
                document.getElementById('direct').classList.add('formulary-group-incorrect');
                document.getElementById('direct').classList.add('formulary-group-incorrect formulary-error');
            }
        })
        function checkAdress(adress){
            var space=adress.value.indexOf(" ");
            var direct= /^[a-zA-Z0-9\s]{5,}$/;
            if(adress.value.match(direct) && space>0){
                return true;
            }
            else{
                return false;
            }
        }
        // City Validation
        var city=document.getElementById('city');
        city.addEventListener('blur',function(eventCity){
            eventCity.preventDefault();
            if(checkCity(eventCity.target.value)){
                document.getElementById('location').classList.add('formulary-group-correct');
                document.getElementById('location').classList.add('formulary-group-correct formulary-error');
            }
            else{
                document.getElementById('location').classList.add('formulary-group-incorrect');
                document.getElementById('location').classList.add('formulary-group-incorrect formulary-error');
            }
        })
        function checkCity(cityValue){
            console.log(cityValue);
            if(cityValue && cityValue.length>=3){
                return true;
            }
            else{
                return false;
            }
        }
        // Post Code Validation
        var postcode=document.getElementById('postcode');
        postcode.addEventListener('blur',function(e){
            e.preventDefault();
            if(checkPostNumb(event.target.value)){
                document.getElementById('code').classList.add('formulary-group-correct');
                document.getElementById('code').classList.add('formulary-group-correct formulary-error');
            }
            else{
                document.getElementById('code').classList.add('formulary-group-incorrect');
                document.getElementById('code').classList.add('formulary-group-incorrect formulary-error');
            }
        })
        function checkPostNumb(post){
            if (post && post.length>=3){
                return true;
            }
            else{
                return false;
            }
        }
        // Document Number Validation
        var dni=document.getElementById('dni');
        dni.addEventListener('blur',function(e){
            e.preventDefault();
            if(checkDocNumb(event.target.value)){
                document.getElementById('doc').classList.add('formulary-group-correct');
                document.getElementById('doc').classList.add('formulary-group-correct formulary-error');
            }
            else{
                document.getElementById('doc').classList.add('formulary-group-incorrect');
                document.getElementById('doc').classList.add('formulary-group-incorrect formulary-error');
            }
        })
        function checkDocNumb(dni){
            if (dni.length>6 && dni.length<9){
                return true;
            }
            else{
                return false;
            }
        }
    }
})(window, document, undefined);
