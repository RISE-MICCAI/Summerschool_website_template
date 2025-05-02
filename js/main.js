document.addEventListener("DOMContentLoaded", () => {
    // Testimonials slider
    const testimonialsSlider = document.querySelector(".testimonials-slider");
    if (testimonialsSlider) {
        let currentIndex = 0;
        const testimonials = testimonialsSlider.querySelectorAll(".testimonial");
        const totalTestimonials = testimonials.length;
        let sliderInterval;

        const startSlider = () => {
            sliderInterval = setInterval(() => {
                testimonials[currentIndex].classList.remove("active");
                currentIndex = (currentIndex + 1) % totalTestimonials;
                testimonials[currentIndex].classList.add("active");
            }, 5000);
        };

        const stopSlider = () => clearInterval(sliderInterval);

        // Start slider
        startSlider();

        // Pause slider on hover
        testimonialsSlider.addEventListener("mouseenter", stopSlider);
        testimonialsSlider.addEventListener("mouseleave", startSlider);
    }

    // Contact icons interactivity
    const contactIcons = document.querySelectorAll(".contact i");
    contactIcons.forEach(icon => {
        icon.addEventListener("click", () => {
            const contactInfo = icon.nextElementSibling.textContent.trim();
            navigator.clipboard.writeText(contactInfo).then(() => {
                alert(`Copied to clipboard: ${contactInfo}`);
            }).catch(() => {
                alert("Failed to copy contact information.");
            });
        });
    });
});