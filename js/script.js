// Function to animate counting
function animateCount(element, targetCount) {
    let currentCount = 0;
    const duration = 150; // Adjust the duration as needed
    const step = targetCount / duration;

    function updateCount() {
        currentCount += step;
        element.textContent = `${Math.ceil(currentCount)}+`;

        if (currentCount < targetCount) {
            requestAnimationFrame(updateCount);
        }
    }

    updateCount();
}

// Intersection Observer to trigger counting animation when element is in view
const countBox = document.getElementById('countBox');
const counters = document.querySelectorAll('.count');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            counters.forEach(counter => {
                const targetCount = parseInt(counter.textContent);
                animateCount(counter, targetCount);
            });
            observer.disconnect();
        }
    });
}, { threshold: 0.5 });

observer.observe(countBox);
