
// Function to handle the intersection of the target elements
function handleIntersection(entries, observer) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const targetElement = entry.target;
            const animationClass = targetElement.dataset.animation;

            if (animationClass) {
                targetElement.classList.add(animationClass);
                // Remove the animate-on-scroll class to prevent animation on subsequent scrolls
                targetElement.classList.remove('animate-on-scroll');
            }
        }
    });
}

const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0,
};

const observer = new IntersectionObserver(handleIntersection, options);

// Observe all elements with the "animate-on-scroll" class
const animatedElements = document.querySelectorAll('.animate-on-scroll');
animatedElements.forEach((element) => {
    observer.observe(element);
});
