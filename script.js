function SendMail(){
    console.log("Send mail is used");
    var params = {
        full_name : document.getElementById("full_name").value,
        messages : document.getElementById("messages").value,
        email : document.getElementById("email").value,
    }
    console.log(full_name);
    console.log(email);
    console.log(messages);
    console.log(params.messages);
    console.log(params.full_name);
    emailjs.send("service_bj3sinc","template_mozauri", params).then(function res(){
        alert("Thankyou for contacting me!");
    })

}