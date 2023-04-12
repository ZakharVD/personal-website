const formSumbitBtn = document.getElementById("form-submit-btn");
// const emailAdress = document.getElementById("form-email");
// const name = document.getElementById("form-name");
// const message = document.getElementById("form-massage");
const form = document.getElementById('email-form');

(function() {
  emailjs.init("8KVvybsx5iuDXHooY");
}())
sendEmail = () => {
  const serviceID = "service_gn56bfr";
  const templeteID = "template_s0r5leo";

  emailjs
    .sendForm(serviceID, templeteID, form)
    .then((res) => alert("message sent"))
    .catch((err) => console.log(err));
};

formSumbitBtn.addEventListener("click", sendEmail);
