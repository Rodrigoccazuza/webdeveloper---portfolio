var msgCookies = document.getElementById('cookies-msg')
function agree(){
    localStorage.lgpd = "agree"
    msgCookies.classList.remove('show')
}

if(localStorage.lgpd == 'agree'){
    msgCookies.classList.remove('show')
}
else{
    msgCookies.classList.add('show')
}




/* form */ 


function sendMessage() {
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const services = document.getElementById('services').value;
    const message = document.getElementById('message').value;
  


    // Display the submitted data
    document.getElementById('resultname').textContent = name;
    document.getElementById('resultemail').textContent = email;
    document.getElementById('resultservices').textContent = services;
    document.getElementById('resultmessage').textContent = message;
    

    // Hide the form and show the result
    document.getElementById('contactForm').style.display = 'none';
    document.getElementById('result').style.display = 'block';
}
