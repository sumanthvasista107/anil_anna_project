function toggleMobileMenu(){
    document.getElementById("menu").classList.toggle
    ("active");
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');

        if (targetId === "#") {
            window.scrollTo({
                top: 0, // Scroll to the top of the page
                behavior: 'smooth'
            });
        } else {
            const targetElement = document.querySelector(targetId);

            window.scrollTo({
                top: targetElement.offsetTop - 60, // Adjust 60px according to header height
                behavior: 'smooth'
            });
        }
    });
});
