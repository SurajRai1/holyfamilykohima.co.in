 // Smooth scrolling for navigation links
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

  // Feedback form submission
  const feedbackForm = document.getElementById('feedbackForm');
  feedbackForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;

      if (name && email && message) {
          alert('Thank you for your feedback!');
          feedbackForm.reset();
      } else {
          feedbackForm.classList.add('shake');
          setTimeout(() => {
              feedbackForm.classList.remove('shake');
          }, 500);
      }
  });

  // Interactive navigation menu
  const navItems = document.querySelectorAll('.nav-menu li a');
  navItems.forEach(item => {
      item.addEventListener('mouseenter', () => {
          item.style.transform = 'translateY(-3px)';
      });
      item.addEventListener('mouseleave', () => {
          item.style.transform = 'translateY(0)';
      });
  });

  // Payment button interaction
  const paymentButton = document.querySelector('.payment-button');
  paymentButton.addEventListener('mouseenter', () => {
      paymentButton.style.transform = 'scale(1.05)';
  });
  paymentButton.addEventListener('mouseleave', () => {
      paymentButton.style.transform = 'scale(1)';
  });