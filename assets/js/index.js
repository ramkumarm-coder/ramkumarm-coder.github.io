AOS.init();

//On ready
$(document).ready(function () {
    // Top bar scroll link
    $('.scroll-link').on('click', function (e) {
        e.preventDefault();

        var target = $(this).attr('href');
        var $target = $(target);

        if (!$target.length) return;

        var headerOffset = 70; // sticky header height
        var targetPosition = $target.offset().top - headerOffset;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });


    //Sticky header
    var $header = $('#mainHeader');
    var $spacer = $('#headerSpacer');
    var headerHeight = $header.outerHeight();
    var stickyPoint = $header.offset().top;

    $(window).on('scroll', function () {
        if ($(window).scrollTop() > stickyPoint) {
            if (!$header.hasClass('sticky')) {
                $header.addClass('sticky');
                $spacer.height(headerHeight).show(); // prevent jump
            }
        } else {
            $header.removeClass('sticky');
            $spacer.hide();
        }
    });
});


//Top bar toggle
// Toggle active-menu for hamburger navbar
document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger-menu");
    const navMenu = document.querySelector(".nav-menu");

    // Add click listener to the hamburger button
    hamburger.addEventListener("click", () => {
        // Toggle the 'active' class on the menu
        navMenu.classList.toggle("active-menu");

        // Optional: Add 'active' class to the hamburger for X animation
        hamburger.classList.toggle("active-menu");
    });
});

//Header sticky js
$(document).ready(function () {

});
