// header blur effect 

document.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

// header hamburger menu


// JavaScript to toggle the mobile navigation
const hamburgerMenu = document.getElementById("hamburger-menu");
const mobileNav = document.getElementById("mobile-nav");

hamburgerMenu.addEventListener("click", () => {
    mobileNav.classList.toggle("open");
    if (mobileNav.classList.contains("open")) {
        mobileNav.style.display = "flex";
    } else {
        mobileNav.style.display = "none";
    }
});



// comments slider

document.addEventListener('DOMContentLoaded', () => {
    // Slider Elements
    const slider = document.querySelector('.comments-slider');
    const slides = document.querySelectorAll('.comment-slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    // Slider Configuration
    let currentSlide = 0;
    const totalSlides = slides.length;

    // Show Specific Slide
    function showSlide(index) {
        // Reset all slides
        slides.forEach(slide => {
            slide.classList.remove('active');
        });

        // Ensure index wraps around
        currentSlide = (index + totalSlides) % totalSlides;

        // Activate current slide
        slides[currentSlide].classList.add('active');

        // Slide animation
        slider.style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    // Next Slide Function
    function nextSlide() {
        currentSlide++;
        showSlide(currentSlide);
    }

    // Previous Slide Function
    function prevSlide() {
        currentSlide--;
        showSlide(currentSlide);
    }

    // Event Listeners for Navigation
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // Optional: Auto Slide Functionality
    function autoSlide() {
        nextSlide();
    }

    // Auto slide every 5 seconds
    let autoSlideInterval = setInterval(autoSlide, 5000);

    // Pause auto-sliding on hover
    slider.addEventListener('mouseenter', () => {
        clearInterval(autoSlideInterval);
    });

    slider.addEventListener('mouseleave', () => {
        autoSlideInterval = setInterval(autoSlide, 5000);
    });

    // Keyboard Navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') nextSlide();
        if (e.key === 'ArrowLeft') prevSlide();
    });

    // Touch Swipe Support for Mobile
    let touchStartX = 0;
    let touchEndX = 0;

    slider.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });

    slider.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });

    function handleSwipe() {
        if (touchEndX < touchStartX) {
            nextSlide();
        }
        if (touchEndX > touchStartX) {
            prevSlide();
        }
    }

    // Initial setup
    showSlide(0);
});

// contact section

// Optional: Form Validation and Submission
document.querySelector('.contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Basic form validation
    const inputs = this.querySelectorAll('input, textarea, select');
    let isValid = true;

    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.style.borderColor = 'red';
            isValid = false;
        } else {
            input.style.borderColor = '#ddd';
        }
    });

    if (isValid) {
        // Simulate form submission
        alert('Message sent successfully!');
        this.reset();
    }
});

// Optional: Input Validation in Real-time
document.querySelectorAll('.form-control').forEach(input => {
    input.addEventListener('input', function () {
        this.style.borderColor = '#ddd';
    });
});


// footer

// Particle.js Configuration
particlesJS('particles-js', {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: '#ffffff'
        },
        shape: {
            type: 'circle',
            stroke: {
                width: 0,
                color: 'black'
            }
        },
        opacity: {
            value: 0.5,
            random: false,
            anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#ffffff',
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 6,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'repulse'
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        }
    },
    retina_detect: true
});

// Additional Interactive Elements
document.addEventListener('DOMContentLoaded', () => {
    const newsletterInput = document.querySelector('.newsletter-input input');
    const newsletterButton = document.querySelector('.newsletter-input button');

    newsletterButton.addEventListener('click', (e) => {
        e.preventDefault();
        const email = newsletterInput.value;

        if (validateEmail(email)) {
            // Simulate newsletter signup
            alert('Thank you for subscribing!');
            newsletterInput.value = '';
        } else {
            alert('Please enter a valid email address');
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    // Animated Hover Effects
    const footerLinks = document.querySelectorAll('.footer-links a');
    footerLinks.forEach(link => {
        link.addEventListener('mouseenter', (e) => {
            e.target.style.transform = 'translateX(5px)';
        });

        link.addEventListener('mouseleave', (e) => {
            e.target.style.transform = 'translateX(0)';
        });
    });
});