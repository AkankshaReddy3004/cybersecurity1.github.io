document.getElementById("Connect With Us").addEventListener("Send now", function(event){
    event.preventDefault(); 
    
    // Display a confirmation message
    var confirmationMessage = "Thank you for Contacting, " + name + ", we will reach you out soon.";
    alert(confirmationMessage);
});