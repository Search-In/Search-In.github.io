document.addEventListener('DOMContentLoaded', () => {
  // Select all anchor tags wrapping buttons
  const clickableLinks = document.querySelectorAll('.customLink');

  clickableLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      const target = event.currentTarget;
      target.classList.add('click-effect');

      // Remove the effect after the animation duration
      setTimeout(() => {
        target.classList.remove('click-effect');
      }, 200); // Matches the transition duration in CSS
    });
  });
});


function runAnimations() {}
runAnimations();
