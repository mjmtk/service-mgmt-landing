// Custom JavaScript for CommunIT Landing Page

// Initialize on regular DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
  // Basic initialization that doesn't depend on components
});

// Initialize after all components are loaded
document.addEventListener('componentsLoaded', function() {
  // Add animation classes to elements when they come into view
  const animateElements = document.querySelectorAll('.card, .section-title, .feature-item');
  
  // Simple function to check if an element is in viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  // Function to add animation class when element is in viewport
  function checkForAnimation() {
    animateElements.forEach(element => {
      if (isInViewport(element) && !element.classList.contains('animate-fadeIn')) {
        element.classList.add('animate-fadeIn');
      }
    });
  }
  
  // Check for animations on scroll
  window.addEventListener('scroll', checkForAnimation);
  
  // Check for animations on initial load
  checkForAnimation();
  
  // Form validation enhancement (in addition to Alpine.js)
  const contactForm = document.querySelector('#contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
      // This is just a placeholder for server-side form submission
      // In a real implementation, you would handle the form submission via AJAX
      console.log('Form submitted');
      
      // Get form data
      const formData = new FormData(contactForm);
      const formDataObj = {};
      formData.forEach((value, key) => {
        formDataObj[key] = value;
      });
      
      // Log form data (in a real app, this would be sent to a server)
      console.log('Form data:', formDataObj);
      
      // The form submission is handled by Alpine.js (@submit.prevent="formSubmitted = true")
      // which shows the confirmation message
    });
  }
});
