var form = document.querySelector('form');
var contactPage = document.getElementById('contact-page');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    contactPage.style.display = "block";
    contactPage.style.textAlign = "center";

    contactPage.innerHTML = '<p style="font-size: 24px;">Thank you for your message!</p>';
});
