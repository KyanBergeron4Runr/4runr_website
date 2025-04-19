document.addEventListener('DOMContentLoaded', () => {
  const packageContainer = document.querySelector('.package-container');
  const packages = document.querySelectorAll('.package-card');
  let currentIndex = 0;
  let startX = 0;
  let isDragging = false;
  let autoPlayInterval;

  // Touch events for mobile swipe
  packageContainer.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    isDragging = true;
    clearInterval(autoPlayInterval);
  });

  packageContainer.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const currentX = e.touches[0].clientX;
    const diff = startX - currentX;
    
    if (Math.abs(diff) > 50) { // Minimum swipe distance
      if (diff > 0) {
        // Swipe left
        showNextPackage();
      } else {
        // Swipe right
        showPreviousPackage();
      }
      isDragging = false;
    }
  });

  packageContainer.addEventListener('touchend', () => {
    isDragging = false;
    startAutoPlay();
  });

  function showNextPackage() {
    packages[currentIndex].classList.remove('swipe-left', 'swipe-right', 'auto-cycle');
    currentIndex = (currentIndex + 1) % packages.length;
    packages[currentIndex].classList.add('swipe-left');
    updateVisibility();
  }

  function showPreviousPackage() {
    packages[currentIndex].classList.remove('swipe-left', 'swipe-right', 'auto-cycle');
    currentIndex = (currentIndex - 1 + packages.length) % packages.length;
    packages[currentIndex].classList.add('swipe-right');
    updateVisibility();
  }

  function updateVisibility() {
    packages.forEach((pkg, index) => {
      if (index === currentIndex) {
        pkg.style.display = 'flex';
        pkg.style.opacity = '1';
      } else {
        pkg.style.display = 'none';
        pkg.style.opacity = '0';
      }
    });
  }

  function startAutoPlay() {
    clearInterval(autoPlayInterval);
    autoPlayInterval = setInterval(() => {
      packages[currentIndex].classList.add('auto-cycle');
      setTimeout(() => {
        showNextPackage();
      }, 9500); // Slightly less than the animation duration
    }, 10000); // Match this with the CSS animation duration
  }

  // Initialize
  updateVisibility();
  startAutoPlay();

  // Stop auto-play when the tab is not visible
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      clearInterval(autoPlayInterval);
    } else {
      startAutoPlay();
    }
  });
}); 