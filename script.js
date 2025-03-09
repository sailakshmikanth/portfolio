document.addEventListener("DOMContentLoaded", function () {
    const elements = [
        { id: "typing-text", text: "Hi, I'm Sai Lakshmikanth." },
        { id: "typing-para", text: "Welcome to my portfolio! I'm a passionate Computer Science student specializing in AI and Machine Learning. Let's build the future together!" }
    ];
    
    let currentElement = 0;
    let index = 0;

    function typeEffect() {
        if (currentElement < elements.length) {
            const el = document.getElementById(elements[currentElement].id);
            if (index < elements[currentElement].text.length) {
                el.innerHTML += elements[currentElement].text.charAt(index);
                index++;
                setTimeout(typeEffect, 50); // Adjust typing speed
            } else {
                index = 0;
                currentElement++;
                setTimeout(typeEffect, 500); // Delay before next text starts
            }
        }
    }

    typeEffect();
});


const header = document.querySelector('.header'); 
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY) {
        // Scrolling down: hide the header
        header.classList.add('hidden');
    } else {
        // Scrolling up: show the header
        header.classList.remove('hidden');
    }
    lastScrollY = window.scrollY; // Update last scroll position
});

// Show header when hovered
header.addEventListener('mouseenter', () => {
    header.classList.remove('hidden');
});

// Hide header when mouse leaves (if user is not scrolling up)
header.addEventListener('mouseleave', () => {
    if (window.scrollY > lastScrollY) {
        header.classList.add('hidden');
    }
});


function openPage(pageUrl) {
    location.assign(pageUrl);
}

document.addEventListener("DOMContentLoaded", () => {
    let progressBars = document.querySelectorAll(".progress-bar");

    function showProgress() {
        progressBars.forEach(bar => {
            let progress = bar.dataset.progress || 0;
            let rect = bar.getBoundingClientRect();
            let windowHeight = window.innerHeight;

            if (rect.top < windowHeight * 0.9) { // Trigger animation when 90% of the element is in view
                bar.style.width = `${progress}%`;
                let percentageText = bar.querySelector(".progress-text");
                let currentValue = 0;
                
                let interval = setInterval(() => {
                    if (currentValue >= progress) {
                        clearInterval(interval);
                    } else {
                        currentValue++;
                        percentageText.textContent = `${currentValue}%`;
                    }
                }, 15);
            }
        });
    }

    window.addEventListener("scroll", showProgress);
    showProgress(); // Run on page load in case skills section is already in view
});


// Disable Right-Click


    document.addEventListener("contextmenu", (event) => event.preventDefault());

    document.addEventListener("keydown", (event) => {
        if (
            event.key === "F12" || 
            (event.ctrlKey && event.shiftKey && (event.key === "I" || event.key === "J")) || 
            (event.ctrlKey && event.key === "U")
        ) {
            event.preventDefault();
        }
    });

    setInterval(() => {
        (function() {
            function devtoolsDetect() {
                const threshold = 160;
                let widthThreshold = window.outerWidth - window.innerWidth > threshold;
                let heightThreshold = window.outerHeight - window.innerHeight > threshold;
                if (widthThreshold || heightThreshold) {
                    alert("Developer tools detected! Please close it.");
                    window.location.reload();
                }
            }
            devtoolsDetect();
        })();
    }, 1000);


console.log('Script is working');
