/**
 * Lazy loading implementation for images
 * This script defers loading of images until they are close to the viewport
 */

// Create a function to initialize lazy loading
function initLazyLoading() {
    console.log('Initializing lazy loading for images');
    
    // First, make sure images below the fold are prepared for lazy loading
    prepareLazyImages();
    
    // Check if IntersectionObserver is supported
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                // If the image is in viewport
                if (entry.isIntersecting) {
                    const img = entry.target;
                    const src = img.getAttribute('data-src');
                    
                    // Only replace if data-src exists
                    if (src) {
                        console.log('Loading image:', src);
                        img.setAttribute('src', src);
                        img.removeAttribute('data-src');
                        img.classList.remove('lazy-load');
                        img.classList.add('lazy-loaded');
                    }
                    
                    // Once loaded, stop watching
                    observer.unobserve(img);
                }
            });
        }, {
            // Start loading when image is 200px away from viewport
            rootMargin: '200px 0px',
            threshold: 0.01
        });
        
        // Find all images with lazy-load class
        const lazyImages = document.querySelectorAll('img.lazy-load');
        console.log('Found', lazyImages.length, 'lazy-load images');
        lazyImages.forEach(img => {
            imageObserver.observe(img);
        });
    } else {
        // Fallback for browsers that don't support IntersectionObserver
        // Load all images immediately
        const lazyImages = document.querySelectorAll('img.lazy-load');
        lazyImages.forEach(img => {
            const src = img.getAttribute('data-src');
            if (src) {
                img.setAttribute('src', src);
                img.removeAttribute('data-src');
                img.classList.remove('lazy-load');
                img.classList.add('lazy-loaded');
            }
        });
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Listen for the componentsLoaded event from componentLoader
    document.addEventListener('componentsLoaded', function() {
        console.log('Components loaded, initializing lazy loading');
        // Wait a short time to ensure all components are fully rendered
        setTimeout(initLazyLoading, 100);
    });
    
    // Also initialize immediately in case components are already loaded
    initLazyLoading();
});

// Reinitialize on window resize (for responsive layout changes)
window.addEventListener('resize', function() {
    // Debounce the resize event
    clearTimeout(window.resizeTimer);
    window.resizeTimer = setTimeout(function() {
        initLazyLoading();
    }, 250);
});

// Reinitialize on scroll to catch any missed images
window.addEventListener('scroll', function() {
    // Debounce the scroll event
    clearTimeout(window.scrollTimer);
    window.scrollTimer = setTimeout(function() {
        initLazyLoading();
    }, 250);
});

// Function to convert regular images to lazy-loaded ones
function prepareLazyImages() {
    // Only apply to images below the fold on mobile
    if (window.innerWidth < 768) {
        // Find all images in the document
        const allImages = document.querySelectorAll('img:not(.lazy-load):not(.lazy-loaded)');
        
        // Process each image
        allImages.forEach(img => {
            // Skip images that are already processed
            if (img.hasAttribute('data-src')) {
                return;
            }
            
            // Skip images that are in the header or hero sections
            const isInHeader = img.closest('#header-component') !== null;
            const isInHero = img.closest('#hero-component') !== null;
            
            if (!isInHeader && !isInHero) {
                // Get current source
                const currentSrc = img.getAttribute('src');
                if (currentSrc && !currentSrc.startsWith('data:')) {
                    // Set data-src and remove src to prevent loading
                    img.setAttribute('data-src', currentSrc);
                    
                    // Set a placeholder or very small image
                    img.setAttribute('src', 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E');
                    
                    // Add lazy-load class for the observer to pick up
                    img.classList.add('lazy-load');
                    
                    console.log('Prepared image for lazy loading:', currentSrc);
                }
            }
        });
    }
}

// Run on page load
window.addEventListener('load', prepareLazyImages);
