document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();

    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const phoneNumber = document.getElementById("phone-number").value;
    const emailID = document.getElementById("email-id").value;

    const alertMessage = `First Name: ${firstName}\nLast Name: ${lastName}\nPhone Number: ${phoneNumber}\nEmail ID: ${emailID}`;
    
    alert(alertMessage);
});