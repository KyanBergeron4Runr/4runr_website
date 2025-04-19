document.addEventListener('DOMContentLoaded', () => {
  const packageContainer = document.querySelector('.package-container');
  const packages = document.querySelectorAll('.package-card');
  let currentIndex = 0;
  let startX = 0;
  let currentX = 0;
  let isDragging = false;
  let autoPlayInterval;

  // Touch events for mobile swipe
  packageContainer.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    currentX = startX;
    isDragging = true;
    clearInterval(autoPlayInterval);
    packageContainer.style.cursor = 'grabbing';
  });

  packageContainer.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    
    currentX = e.touches[0].clientX;
    const diff = startX - currentX;
    
    // Allow scrolling only after a minimum distance to prevent accidental swipes
    if (Math.abs(diff) > 30) {
      e.preventDefault(); // Prevent scrolling only when we're sure it's a swipe
    }
  });

  packageContainer.addEventListener('touchend', (e) => {
    if (!isDragging) return;
    
    const diff = startX - currentX;
    if (Math.abs(diff) > 50) { // Minimum swipe distance
      if (diff > 0) {
        // Swipe left
        showNextPackage();
      } else {
        // Swipe right
        showPreviousPackage();
      }
    }
    
    isDragging = false;
    packageContainer.style.cursor = 'grab';
    startAutoPlay();
  });

  // Mouse events for desktop
  packageContainer.addEventListener('mousedown', (e) => {
    startX = e.clientX;
    currentX = startX;
    isDragging = true;
    clearInterval(autoPlayInterval);
    packageContainer.style.cursor = 'grabbing';
  });

  packageContainer.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    
    currentX = e.clientX;
    const diff = startX - currentX;
    
    if (Math.abs(diff) > 30) {
      e.preventDefault();
    }
  });

  packageContainer.addEventListener('mouseup', (e) => {
    if (!isDragging) return;
    
    const diff = startX - currentX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        showNextPackage();
      } else {
        showPreviousPackage();
      }
    }
    
    isDragging = false;
    packageContainer.style.cursor = 'grab';
    startAutoPlay();
  });

  packageContainer.addEventListener('mouseleave', () => {
    if (isDragging) {
      isDragging = false;
      packageContainer.style.cursor = 'grab';
      startAutoPlay();
    }
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