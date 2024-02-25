function submitForm() {
    
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

   
    var formData = {
        name: name,
        email: email,
        message: message
    };

   
    console.log(formData);
    
}
