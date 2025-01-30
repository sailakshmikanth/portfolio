// Select the header element
const header = document.querySelector('.header');

let lastScrollY = window.scrollY; // Track the last scroll position

// Add a scroll event listener
window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY) {
        // Scrolling down: hide the header
        header.classList.add('hidden');
    } else {
        // Scrolling up: show the header
        header.classList.remove('hidden');
    }
    lastScrollY = window.scrollY; // Update the last scroll position
});

console.log('Script is working');
