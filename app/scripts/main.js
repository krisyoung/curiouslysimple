require.config({
    paths: {
        jquery: '../components/jquery/jquery',
        bootstrap: 'vendor/bootstrap',
        smoothScroll: 'vendor/jquery.smooth-scroll',
        grid: 'vendor/jquery.grid'
    },
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        },
        smoothScroll: {
            deps: ['jquery'],
            exports: 'jquery'
        },
        grid: {
            deps: ['jquery'],
            exports: 'jquery'
        }
    }
});

require(['app', 'jquery', 'bootstrap', 'smoothScroll', 'grid'], function (app, $) {
    'use strict';
    // use app here
    $(".cs-app-nav").on("click", "a", function (ev) {
        ev.preventDefault();
        $.smoothScroll({
            scrollTarget: $(this).attr('href')
        });
        highlightNavItem($(this))

    });
    $(".cs-app-nav").on("activate", "li", function (ev) {
        ev.preventDefault();
        highlightNavItem($('a', this))
    });

    function highlightNavItem (item) {
        var w, x, el;
        el = item;
        el.parent().addClass("active").siblings().removeClass("active");
        w = el.width();
        x = el.position().left;
        $(".cs-highlight").stop().animate({ width: w, left: x }, 300);
    }

    $(window).on("resize", function (ev) {
        var w, x, activeEl = $('.cs-app-nav .active a');
        if(activeEl.length){
            w = activeEl.width();
            x = activeEl.position().left;
            $(".cs-highlight").css({ width: w, left: x });
        }
    });

    $('.carousel').carousel({
      interval: 8000
    });

    Grid.init();
});
