function passwordVerification(){
    var passwd_verify = document.getElementById("passwd").value;
    var passwd_confirm = document.getElementById("confirm").value;    
    if(passwd_verify == ""){
        alert("Password is still empty");
        return false;
    }
    if(passwd_verify.length < 7){
        alert("Password should be more than 7 characters");
        return false;
    }
    if(passwd_verify != passwd_confirm){
        alert("Password didnt match");
        return false;
    }
    if(passwd_verify.charAt(0)== passwd_verify.charAt(0).toLowerCase()){
        alert("First letter should be capital");
        return false;
    }
    if(/^[a-zA-Z0-9]*$/.test(passwd_verify) == false){
        alert("No special characters and spaces allowed");
        return false;
    }

}