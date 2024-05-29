document.addEventListener('DOMContentLoaded', function() {
    const contactButton = document.getElementById('contact-button');
    const contactForm = document.getElementById('contact-form');
  
    contactButton.addEventListener('click', function() {
      contactForm.scrollIntoView({ behavior: 'smooth' });
      const firstInput = contactForm.querySelector('input'); 
      if (firstInput) {
        firstInput.focus();
      }
    });
  });