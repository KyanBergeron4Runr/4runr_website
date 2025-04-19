document.addEventListener('DOMContentLoaded', () => {
  const packageContainer = document.querySelector('.package-container');
  const packages = document.querySelectorAll('.package-card');
  let currentIndex = 0;
  let autoPlayInterval;
  const isMobile = window.innerWidth <= 767;

  function createMobileNav() {
    // Create mobile navigation container
    const mobileNav = document.createElement('div');
    mobileNav.className = 'mobile-nav';

    // Create previous button
    const prevButton = document.createElement('button');
    prevButton.className = 'mobile-nav-button';
    prevButton.innerHTML = '← Previous';
    prevButton.onclick = () => {
      clearInterval(autoPlayInterval);
      showPreviousPackage();
      startAutoPlay();
    };

    // Create next button
    const nextButton = document.createElement('button');
    nextButton.className = 'mobile-nav-button';
    nextButton.innerHTML = 'Next →';
    nextButton.onclick = () => {
      clearInterval(autoPlayInterval);
      showNextPackage();
      startAutoPlay();
    };

    mobileNav.appendChild(prevButton);
    mobileNav.appendChild(nextButton);
    packageContainer.after(mobileNav);

    // Create package indicators
    const indicatorContainer = document.createElement('div');
    indicatorContainer.className = 'package-indicator';
    
    packages.forEach((_, index) => {
      const dot = document.createElement('div');
      dot.className = `indicator-dot ${index === currentIndex ? 'active' : ''}`;
      dot.onclick = () => {
        clearInterval(autoPlayInterval);
        goToPackage(index);
        startAutoPlay();
      };
      indicatorContainer.appendChild(dot);
    });

    mobileNav.after(indicatorContainer);
  }

  function createDesktopNav() {
    // Create desktop navigation buttons
    const prevButton = document.createElement('button');
    prevButton.className = 'nav-button prev';
    prevButton.innerHTML = '←';
    prevButton.onclick = () => {
      clearInterval(autoPlayInterval);
      showPreviousPackage();
      startAutoPlay();
    };

    const nextButton = document.createElement('button');
    nextButton.className = 'nav-button next';
    nextButton.innerHTML = '→';
    nextButton.onclick = () => {
      clearInterval(autoPlayInterval);
      showNextPackage();
      startAutoPlay();
    };

    packageContainer.appendChild(prevButton);
    packageContainer.appendChild(nextButton);
  }

  function showNextPackage() {
    packages[currentIndex].style.display = 'none';
    packages[currentIndex].style.opacity = '0';
    currentIndex = (currentIndex + 1) % packages.length;
    packages[currentIndex].style.display = 'flex';
    setTimeout(() => {
      packages[currentIndex].style.opacity = '1';
      updateIndicators();
    }, 50);
  }

  function showPreviousPackage() {
    packages[currentIndex].style.display = 'none';
    packages[currentIndex].style.opacity = '0';
    currentIndex = (currentIndex - 1 + packages.length) % packages.length;
    packages[currentIndex].style.display = 'flex';
    setTimeout(() => {
      packages[currentIndex].style.opacity = '1';
      updateIndicators();
    }, 50);
  }

  function goToPackage(index) {
    if (index === currentIndex) return;
    packages[currentIndex].style.display = 'none';
    packages[currentIndex].style.opacity = '0';
    currentIndex = index;
    packages[currentIndex].style.display = 'flex';
    setTimeout(() => {
      packages[currentIndex].style.opacity = '1';
      updateIndicators();
    }, 50);
  }

  function updateIndicators() {
    if (!isMobile) return;
    const dots = document.querySelectorAll('.indicator-dot');
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentIndex);
    });
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
    updateIndicators();
  }

  function startAutoPlay() {
    clearInterval(autoPlayInterval);
    autoPlayInterval = setInterval(() => {
      showNextPackage();
    }, 10000);
  }

  // Initialize
  if (isMobile) {
    createMobileNav();
  } else {
    createDesktopNav();
  }
  
  updateVisibility();
  startAutoPlay();

  // Handle window resize
  window.addEventListener('resize', () => {
    const newIsMobile = window.innerWidth <= 767;
    if (newIsMobile !== isMobile) {
      location.reload(); // Refresh page on layout change
    }
  });

  // Stop auto-play when the tab is not visible
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      clearInterval(autoPlayInterval);
    } else {
      startAutoPlay();
    }
  });
}); 