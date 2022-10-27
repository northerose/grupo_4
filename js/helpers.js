function checkPassword(){
    pass1 = document.getElementById(pass1); 
    pass2 = document.getElementById(pass2);

    if (pass1.value != pass2.value) {
        return "Las password no coinciden";
    }else{
        return "procesando el formulario";
    }
}

checkPassword();