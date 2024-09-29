// Get DOM elements
const toggleMenu = document.querySelector('.toggle-menu');
const menu = document.querySelector('nav ul');
let isMenuOpen = false;

// Check screen width ranges
function isHoverEnabled() {
  return window.innerWidth <= 991 && window.innerWidth > 850;
}

function isClickEnabled() {
  return window.innerWidth <= 850;
}

// Toggle menu visibility for click interaction
toggleMenu.addEventListener('click', () => {
  if (isClickEnabled()) {
    if (!isMenuOpen) {
      menu.classList.add('active');
      isMenuOpen = true;
    } else {
      menu.classList.remove('active');
      isMenuOpen = false;
    }
  }
});

// Open menu on hover for screen widths between 850px and 991px
toggleMenu.addEventListener('mouseenter', () => {
  if (isHoverEnabled()) {
    menu.classList.add('active');
    isMenuOpen = true;
  }
});

// Close menu when leaving the menu or toggle for hover interaction
toggleMenu.addEventListener('mouseleave', () => {
  if (isHoverEnabled()) {
    setTimeout(() => {
      if (!menu.matches(':hover')) {
        menu.classList.remove('active');
        isMenuOpen = false;
      }
    }, 200); // Delay to allow time for mouse to move into the menu
  }
});

menu.addEventListener('mouseleave', () => {
  if (isHoverEnabled()) {
    setTimeout(() => {
      if (!toggleMenu.matches(':hover')) {
        menu.classList.remove('active');
        isMenuOpen = false;
      }
    }, 200);
  }
});

// Close menu when clicking outside (only for click-enabled screens)
document.addEventListener('click', (event) => {
  if (isClickEnabled() && isMenuOpen && !menu.contains(event.target) && !toggleMenu.contains(event.target)) {
    menu.classList.remove('active');
    isMenuOpen = false;
  }
});

// Ensure the menu is hidden if window is resized and doesn't match hover/click-enabled sizes
window.addEventListener('resize', () => {
  if (!isHoverEnabled() && !isClickEnabled()) {
    menu.classList.remove('active');
    isMenuOpen = false;
  }
});
