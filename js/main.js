---
---

$(document).ready(function () {
    // Mobile navigation toggle button
    $('.nav-toggle').click(function () {
        $(this).toggleClass('open');
        $('body').toggleClass('nav-open');
        $('.nav-container').slideToggle(200);
    });

    var blackhouse = $('.blackhouse');
    var capital = $('.capital');

    blackhouse.hide();
    setTimeout(function () {
        blackhouse.show();
        blackhouse.shuffleLetters({
            "step": 8,			// How many times should the letters be changed
            "fps": 25
        });
    }, 500);

    capital.hide();
    setTimeout(function () {
        capital.show();
        capital.shuffleLetters({
            "step": 8,			// How many times should the letters be changed
            "fps": 25
        });
    }, 500);
});
