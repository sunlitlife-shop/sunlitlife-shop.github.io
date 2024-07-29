document.addEventListener('DOMContentLoaded', () => {
    // Gradient Noise initialization is now handled in gradientNoise.js

    const serviceItems = document.querySelectorAll('.service-item');

    // Service Items Animation
    function animateServices() {
        serviceItems.forEach((item, index) => {
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, index * 200); // Stagger the animation
        });
    }

    // Trigger animation after a short delay
    setTimeout(animateServices, 500);
});