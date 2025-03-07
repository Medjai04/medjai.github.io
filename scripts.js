// Language Toggle Function
function changeLanguage(lang) {
  if (lang === 'es') {
    // Change content to Spanish
    document.querySelector('h1').textContent = 'Bienvenido a Consultas Con Eduardo Mejia';
    document.querySelector('#about h2').textContent = 'Sobre Mí';
    // Add more translations as needed
  } else if (lang === 'en') {
    // Change content to English
    document.querySelector('h1').textContent = 'Welcome to Consultations With Eduardo Mejia';
    document.querySelector('#about h2').textContent = 'About Me';
    // Add more translations as needed
  }
}

// Contact Form Submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Gracias por tu mensaje. Te contactaremos pronto.');
  // You can add code here to send the form data to your backend or email.
});
