console.log("This is working");
function validate(){
    //Declare all variables
    var firstname = document.getElementById("fi_name");
    var lastname = document.getElementById("la_name");
    var username = document.getElementById("us_name");
    var phonenum = document.getElementById("pnumber");
    var password = document.getElementById("password");
    var confirm_password = document.getElementById("cpassword");
    var email = document.getElementById("mail_id");
    var emailreg = /^([a-zA-Z0-9\.-_]+)@([a-zA-Z0-9-]+).([a-z]{2,8})(.[a-z]{2,8})$/;
    var regx = /[^1-9]\d{9}$/;
    var valid = true;
    
    /*Write a code to check for validation of all fields*/

    if(firstname.value.trim() == "")    //Make sure spaces are not counted as input
    {
        //Check if First name field is empty and display error message
        firstname.style.border = "solid 2px red";
        document.getElementById("lbfirst").style.visibility = "visible";
        valid = false;
    }
    else
    {
        //Remove error message after First name has been entered
        firstname.style.border = "";
        document.getElementById("lbfirst").style.visibility = "hidden";
    }
    if(lastname.value.trim() == "")
    {
        //Check if Last name field is empty and display error message
        lastname.style.border = "solid 2px red";
        document.getElementById("lblast").style.visibility = "visible";
        valid = false;
    }
    else
    {
        //Remove error message after Last name has been entered
        lastname.style.border = "";
        document.getElementById("lblast").style.visibility = "hidden";
    }
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
    if(regx.test(phonenum.value))   //Ensure phone number entered is correct (exactly 10 digits)
    {
        phonenum.style.border = "";
        document.getElementById("lbphone").style.visibility = "hidden";
    }
    else
    {
        //Prompt user to input correct phone number
        phonenum.style.border = "solid 2px red";
        document.getElementById("lbphone").style.visibility = "visible";
        document.getElementById("lbphone").innerHTML = "Please enter a valid 10 digit phone number('0' included)";
        valid = false;
    }
    if(emailreg.test(email.value))      //Check for a valid email
    {
        email.style.border = "";
        document.getElementById("lbemail").style.visibility = "hidden";
    }
    else
    {
        //Display error message if email is invalid
        email.style.border = "solid 2px red";
        document.getElementById("lbemail").style.visibility = "visible";
        document.getElementById("lbemail").innerHTML = "Please enter a valid email";
        valid = false;
    }
    if(password.value.length > 8)       //make sure password is at least 8 characters
    {
        password.style.border = "";
        document.getElementById("lbpass").style.visibility = "hidden";
        if(confirm_password.value==password.value)
            {
                //Password confirmation 
                confirm_password.style.border = "";
                document.getElementById("lbconpass").style.visibility = "hidden";
             }
        else
            {
                confirm_password.style.border = "solid 2px red";
                document.getElementById("lbconpass").style.visibility = "visible";
                document.getElementById("lbconpass").innerHTML= "Password does not match";
                valid = false;
            }
        
    }
    else
    {
        password.style.border = "solid 2px red";
        document.getElementById("lbpass").style.visibility = "visible";
        valid = false;
    }
    
    //ensure either of the gender radio button is selected
    if(document.getElementById("male").checked||document.getElementById("female").checked)
    {
        document.getElementById("lbgender").style.visibility = "hidden";
    }
    else
    {
        //Prompt user to select on of the buttons
        document.getElementById("lbgender").style.visibility = "visible";
        document.getElementById("lbgender").innerHTML = "Select Gender";
        valid = false;
    }
    
    return valid;

}