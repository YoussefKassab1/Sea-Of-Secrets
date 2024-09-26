const imageContainer = document.querySelector('.landing .container .image img');
const imageWrapper = document.querySelector('.landing .container .image');

// Throttle function to improve performance
function throttle(func, limit) {
  let lastFunc;
  let lastRan;
  return function () {
    const context = this;
    const args = arguments;
    if (!lastRan) {
      func.apply(context, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(function () {
        if (Date.now() - lastRan >= limit) {
          func.apply(context, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
}

// Event handler function
function rotateImage(e) {
  const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  imageContainer.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
}

// Throttled mousemove event
imageWrapper.addEventListener('mousemove', throttle(rotateImage, 50));

imageWrapper.addEventListener('mouseleave', function () {
  imageContainer.style.transform = `rotateY(0deg) rotateX(0deg)`;
});
