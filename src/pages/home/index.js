document.addEventListener('DOMContentLoaded', () => {
    const heroSearch = document.querySelector('.search');
    
    const observerOptions = {
        root: null,
        threshold: 0, 
        rootMargin: "-100px 0px 0px 0px" 
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting && entry.boundingClientRect.top < 0) {
                // Add class when search is gone
                document.body.classList.add('scrolled-mode');
            } else {
                // Remove class when back at top
                document.body.classList.remove('scrolled-mode');
            }
        });
    }, observerOptions);

    if(heroSearch) {
        observer.observe(heroSearch);
    }
});