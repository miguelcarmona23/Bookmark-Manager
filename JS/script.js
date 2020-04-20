function mobileNav() {
    var x = document.getElementById("hamburger-menu");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

/** for faqs */
$(document).ready(function() {
    $("#faqs-question1").click(function() {
        $("#faqs-answer1").toggleClass("show").delay("fast");
    });
    $("#faqs-question2").click(function() {
        $("#faqs-answer2").toggleClass("show").delay("fast");
    });
    $("#faqs-question3").click(function() {
        $("#faqs-answer3").toggleClass("show").delay("fast");
    });
    $("#faqs-question4").click(function() {
        $("#faqs-answer4").toggleClass("show").delay("fast");
    });

    /** illustration  */
    $('.illustration > ul > li > a').click(function(event) {
        event.preventDefault();
        var active_tab_selector = $('.illustration > ul > li.active > a').attr('href');
        var actived_nav = $('.illustration > ul > li.active');
        actived_nav.removeClass('active');

        $(this).parents('li').addClass('active');
        //hide displaying tab content
        $(active_tab_selector).removeClass('active');
        $(active_tab_selector).addClass('hide');
        //show target tab content
        var target_tab_selector = $(this).attr('href');
        $(target_tab_selector).removeClass('hide');
        $(target_tab_selector).addClass('active');
    });

});