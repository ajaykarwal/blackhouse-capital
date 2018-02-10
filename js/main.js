---
---

$(document).ready(function () {
    // Mobile navigation toggle button
    $('.nav-toggle').click(function () {
        $(this).toggleClass('open');
        $('body').toggleClass('nav-open');
        $('.nav-container').slideToggle(200);
    });


    
});
