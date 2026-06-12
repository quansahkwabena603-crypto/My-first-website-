/* ========================================
   INTERACTIVE JAVASCRIPT FOR PORTFOLIO
   Learn, Grow, Adapt, Learn New Skills
   ======================================== */

// ========================================
// 1. SMOOTH SCROLLING FOR NAVIGATION LINKS
// ========================================

// Get all navigation links
const navLinks = document.querySelectorAll('.nav-links a');

// Add click event listener to each link
navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        // Prevent default link behavior
        event.preventDefault();
        
        // Get the target section ID from the href attribute
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        // Scroll to the target section smoothly
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ========================================
// 2. SCROLL ANIMATION FOR ELEMENTS
// ========================================

// Function to check if element is in viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
    );
}

// Function to add animation classes to elements on scroll
function animateOnScroll() {
    // Get all skill cards, project cards, and contact cards
    const cards = document.querySelectorAll('.skill-card, .project-card, .contact-card');
    
    cards.forEach((card, index) => {
        if (isElementInViewport(card)) {
            // Add delay for staggered animation effect
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 100);
        }
    });
}

// Set initial state for cards
window.addEventListener('load', () => {
    const cards = document.querySelectorAll('.skill-card, .project-card, .contact-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease';
    });
    
    // Trigger animation on load
    animateOnScroll();
});

// Listen to scroll events to trigger animations
window.addEventListener('scroll', animateOnScroll);

// ========================================
// 3. NAVBAR BACKGROUND CHANGE ON SCROLL
// ========================================

// Get the navbar element
const navbar = document.querySelector('.navbar');

// Listen to scroll events
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        // Add a slight shadow when scrolled
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.2)';
    } else {
        // Remove shadow at top of page
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// ========================================
// 4. ACTIVE NAV LINK INDICATOR
// ========================================

// Function to update active nav link based on scroll position
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    
    sections.forEach(section => {
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);
        
        // Check if section is in viewport
        const sectionRect = section.getBoundingClientRect();
        if (sectionRect.top <= 100 && sectionRect.bottom >= 100) {
            // Remove active class from all links
            navLinks.forEach(link => link.style.borderBottom = 'none');
            
            // Add active style to current link
            if (navLink) {
                navLink.style.borderBottom = '2px solid white';
            }
        }
    });
}

// Listen to scroll events
window.addEventListener('scroll', updateActiveNavLink);

// ========================================
// 5. PROJECT CARD INTERACTION
// ========================================

// Get all project links
const projectLinks = document.querySelectorAll('.project-link');

projectLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        // Check if link is "Coming Soon" or "You're Here!"
        const linkText = this.textContent.trim();
        
        if (linkText === 'Coming Soon' || linkText === 'Stay Tuned') {
            event.preventDefault();
            // Show alert to user
            alert('🚀 This project is coming soon! Check back later for updates.');
        }
    });
});

// ========================================
// 6. SMOOTH PAGE LOAD ANIMATION
// ========================================

// Get all main sections
const sections = document.querySelectorAll('section');

// Add fade-in animation on page load
window.addEventListener('load', () => {
    sections.forEach((section, index) => {
        section.style.opacity = '1';
    });
});

// ========================================
// 7. CONTACT FORM INTERACTION
// ========================================

// Get all contact cards
const contactCards = document.querySelectorAll('.contact-card');

contactCards.forEach(card => {
    // Add hover effects
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05) translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// ========================================
// 8. CONSOLE MESSAGE FOR DEVELOPERS
// ========================================

// Fun message in console for developers
console.log('%cWelcome to Quansah Kwabena\'s Portfolio! 🎉', 'font-size: 20px; color: #3498db; font-weight: bold;');
console.log('%cLearn, Grow, Adapt, Learn New Skills', 'font-size: 16px; color: #9b59b6; font-weight: bold;');
console.log('%cThis is my learning journey. Feel free to explore the code and reach out!', 'font-size: 14px; color: #2ecc71;');
console.log('%cEmail: quansahkwabena603@gmail.com', 'font-size: 12px; color: #f39c12;');
console.log('%cGitHub: https://github.com/quansahkwabena603', 'font-size: 12px; color: #e74c3c;');

// ========================================
// 9. KEYBOARD NAVIGATION SUPPORT
// ========================================

// Add keyboard navigation
document.addEventListener('keydown', (event) => {
    // Press 'H' to go to home
    if (event.key === 'h' || event.key === 'H') {
        const homeSection = document.querySelector('#home');
        if (homeSection) {
            homeSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
    
    // Press 'C' to go to contact
    if (event.key === 'c' || event.key === 'C') {
        const contactSection = document.querySelector('#contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
});

// ========================================
// 10. UTILITY FUNCTION - LOG BROWSER INFO
// ========================================

// Function to log useful browser information
function logBrowserInfo() {
    console.log('Browser: ' + navigator.userAgent);
    console.log('Screen Resolution: ' + window.innerWidth + ' x ' + window.innerHeight);
    console.log('Device Type: ' + (window.innerWidth < 768 ? 'Mobile' : 'Desktop'));
}

// Uncomment to see browser info
// logBrowserInfo();
