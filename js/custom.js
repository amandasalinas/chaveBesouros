(function ($) {
    "use strict";
    
    /* CALCULATE PAGE TITLE NEGATIVE MARGIN */
    var adjustPageTitle = function () {
        var distance = $('#beetle-main-container > .container').offset().left - 295;
        $('#beetle-main-container').find('.beetle-page-title').css('margin-right', -distance);
        $('#beetle-main-container').find('.beetle-page-title').css('padding-right', distance);
        $('#beetle-main-container').find('.beetle-page-title').css('opacity', 1);
    };

    /* HORIZONTAL CARD IMAGES */
    var cardImages = function () {
        $('body').find(".card-horizontal-right").each(function () {
            if ($(this).attr('data-img')) {
                var card_img = $(this).data('img');
                $(this).css('background-image', 'url("' + card_img + '")');
            }
        });
    };
    
    /* GO TO TOP BUTTON */
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 300) {
            $("#beetle-gototop").css('bottom', 0);
        } else {
            $("#beetle-gototop").css('bottom', '-50px');
        }
    });
    
    $("#beetle-gototop").on('click', function (e) {
        e.preventDefault();
        $("html, body").animate({
            scrollTop: 0
        }, 500);
        return false;
    });
    
    /* FULLSCREEN SEARCH */
    $("#beetle-open-search").on('click', function (e) {
        e.preventDefault();
        $("#beetle-fullscreen-search").fadeIn(200);
    });
    
    $("#beetle-close-search").on('click', function (e) {
        e.preventDefault();
        $("#beetle-fullscreen-search").fadeOut(200);
    });

    /* MAIN MENU */
    $('#beetle-main-menu').find(".beetle-menu-ul > li > a").on('click', function () {
        var nxtLink = $(this).next();
        if ((nxtLink.is('ul')) && (nxtLink.is(':visible'))) {
            nxtLink.slideUp(300);
            $(this).removeClass("beetle-menu-up").addClass("beetle-menu-down");
        }
        if ((nxtLink.is('ul')) && (!nxtLink.is(':visible'))) {
            $('#beetle-main-menu').find('.beetle-menu-ul > li > ul:visible').slideUp(300);
            nxtLink.slideDown(300);
            $('#beetle-main-menu').find('.beetle-menu-ul > li:has(ul) > a').removeClass("beetle-menu-up").addClass("beetle-menu-down");
            $(this).addClass("beetle-menu-up");
        }
        if (nxtLink.is('ul')) {
            return false;
        } else {
            return true;
        }
    });
    
    /* MOBILE MENU */
    $("#beetle-menu-toggle").on('click', function () {
        $("#beetle-social-cell,#beetle-main-menu").toggle();
    });
    
    /* EVENTS */
    $(document).ready(function () {
        adjustPageTitle();
        cardImages();
        $('#beetle-main-menu').find('.beetle-menu-ul > li:has(ul) > a').addClass("beetle-menu-down");
        $('body').find('select').addClass('custom-select');
        $('body').find('.beetle-masonry-grid').css('opacity', '1');
    });
    
    $(window).on('resize orientationchange', function () {
        adjustPageTitle();
    });
    
    $(window).on('load', function () {
        var grid = $('body').find('.beetle-masonry-grid');
        salvattore.rescanMediaQueries(grid);
    });
    
})(jQuery);