document.addEventListener('DOMContentLoaded', function () {
    const termsPopup = document.querySelector('.terms');       
    const exitButton = document.querySelector('.terms .exit'); 
    const aboutLink = document.querySelector('a[href="#about"]'); 
  

    aboutLink.addEventListener('click', function (event) {
      event.preventDefault();
      termsPopup.classList.add('visible');
    });
  

    exitButton.addEventListener('click', function () {
      termsPopup.classList.remove('visible');
    });
  

    document.addEventListener('click', function (event) {
    
      if (!termsPopup.contains(event.target) && event.target !== aboutLink && !aboutLink.contains(event.target)) {
        termsPopup.classList.remove('visible'); 
      }
    });
    
    
    aboutLink.addEventListener('click', function(event) {
      event.stopPropagation(); 
    });
  });
  