$(document).ready(function() {
    // Smooth scrolling
    $('nav ul li a').click(function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 800);
    });

    // Fade-in effect on scroll
    function fadeInOnScroll() {
        $('.fade-in').each(function() {
            var elementTop = $(this).offset().top;
            var windowBottom = $(window).scrollTop() + $(window).height();
            if (windowBottom > elementTop) {
                $(this).addClass('show');
            }
        });
    }
    $(window).on('scroll', fadeInOnScroll);
    fadeInOnScroll(); // Initial check

    // Dark mode toggle
    $('.dark-mode-toggle').click(function() {
        $('body').toggleClass('dark-mode');
    });
});
