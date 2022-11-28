function validate_login(){
    //Declare all variables
    var username = document.getElementById("us_name");
    var password = document.getElementById("password");
    var valid = true;

    if(username.value.trim() == "")
    {
        //Check if Username field is empty and display error message
        username.style.border = "solid 2px red";
        document.getElementById("lbuser").style.visibility = "visible";
        valid = false;
    }
    else
    {
         //Remove error message after  username has been entered
        username.style.border = "";
        document.getElementById("lbuser").style.visibility = "hidden";
    }

    if(password.value.length >= 8)       //make sure password is at least 8 characters
    {
        password.style.border = "";
        document.getElementById("lbpass").style.visibility = "hidden";
    }
    else
    {
        password.style.border = "solid 2px red";
        document.getElementById("lbpass").style.visibility = "visible";
        valid = false;
    }

    return valid;
}