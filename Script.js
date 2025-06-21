
function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    return regex.test(email);
}
$("#submit").click(function(e){
    let errormessage = "";
    let inputmissing = "";

    $("#fail").html("");
    $("#pass").html("");

    if ($("#name").val() == "") {
        inputmissing += "<p>Please enter the Name</p>"
    }
    if ($("#email").val() == "") {
        inputmissing += "<p>Please enter the email</p>"
    }
    if ($("#phone").val() == "") {
        inputmissing += "<p>Please enter the Phone No.</p>"
    }
    if ($("#password").val() == "") {
        inputmissing += "<p>Please enter the Password</p>"
    }

    if (isEmail($("#email").val()) == false ) {
        errormessage += "<p>Email is not valid</p>";
    }
    if ($.isNumeric($("#phone").val()) == false) {
        errormessage += "<p>Phone no. is not valid</p>";
    }
    if ($("#password").val() != $("#confirmpassword").val()){
        errormessage += "<p>Password is not match</p>";
    }
    if (errormessage === "" && inputmissing === "")  {
        $("#pass").html("You have successfully  Registered").css("color" , "green");
    }
    else{
        $("#fail").html(errormessage + inputmissing).css("color" , "red");    
    }

    e.preventDefault();
    
})