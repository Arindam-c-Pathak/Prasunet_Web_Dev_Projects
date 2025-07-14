const navLinks = document.querySelectorAll('#menu a');

navLinks.forEach(link => {
    link.addEventListener('mouseover', function() {
        this.style.color = '#eba03b';
    });
    
    link.addEventListener('mouseout', function() {
        this.style.color = 'white';
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
