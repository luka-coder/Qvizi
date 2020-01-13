function myFunction(){
    var at = document.getElementById("email").value.indexOf("@");
    submitOK = "true";
    if (at == -1) {
        alert("Not a valid e-mail!");
        submitOK = "false";
      }
    
      if (submitOK == "false") {
        return false;}
}
myFunction();