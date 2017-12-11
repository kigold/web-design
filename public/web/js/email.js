$(document).ready(function() {
    var email = $('#form');
    email.submit(function (e) {
        e.preventDefault();
        valEmail();
    })
    function valEmail(){
        $("#result").text("");
        var email = $("#email").val();
        if (validateEmail(email)) {
            $("#result").text(email + " is a valid :)");
            $("#result").css("color", "green");
        }
        else {
            $("#result").text(email + " is not a valid email :(");
            $("#result").css("color", "red");
        }
        return false;
    }
});

function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }