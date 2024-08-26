document.addEventListener('DOMContentLoaded', function() {
  // Get all navbar links
  var navLinks = document.querySelectorAll('.navbar-link');

  // Function to update the active class
  function updateActiveLink() {
      var currentPath = window.location.pathname;

      navLinks.forEach(function(link) {
          // Get the href attribute of the link
          var linkPath = link.getAttribute('href');
          
          // Check if the link matches the current path
          if (currentPath.includes(linkPath)) {
              link.classList.add('active');
          } else {
              link.classList.remove('active');
          }
      });
  }

  // Initial call to set the active class
  updateActiveLink();

  // Optionally, add event listeners to the links to update the active class on click
  navLinks.forEach(function(link) {
      link.addEventListener('click', function() {
          navLinks.forEach(function(nav) {
              nav.classList.remove('active');
          });
          link.classList.add('active');
      });
  });
});

