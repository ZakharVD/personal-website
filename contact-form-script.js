const formSumbitBtn = document.getElementById('form-sumbit-btn');
const emailAdress = document.getElementById('form-email');

function sendEmail() {
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "dev.zakharvdovchenko@gmail.com",          
        Password : "777E0425DC833C0E58513AF35735402B4BC8",         
        To : 'vdovchenkozakhar@gmail.com',
        From : emailAdress.value,
        Subject : "New Contact Form Inquiry",
        Body : "And this is the body" // to be replaced
    }).then(
      message => alert(message)
    );
}


formSumbitBtn.addEventListener('click', sendEmail);