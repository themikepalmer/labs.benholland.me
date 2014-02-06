$(function() {
    'use strict';

    var
        $banner       = $('#banner'),
        $downArrow    = $('#down_arrow'),
        $body         = $('body'),
        $w            = $(window),
        $helpers      = $('.helper'),
        $cards        = $('.card'),
        $foodspotting = $('#foodspotting_photos'),

        imagePathFront = 'url(\'/content/images/cards/front/{{name}}.jpg\')',
        imagePathBack  = 'url(\'/content/images/cards/back/{{name}}.jpg\')',
        bannerOffsetTop,
        startingAnimations,
        showHelpersTimeout,

        isIPad = navigator.userAgent.indexOf('iPad') > 0,

        animationReady            = true,
        preventHelpersFromShowing = false;


    var showHelpers = function() {
        $cards.each(function(i, el) {
            if(isScrolledIntoView(el)) {
                var top = $(el).offset().top + $(el).height() / 2;
                $helpers.css('top', top);
                $helpers.fadeIn(250);
                return;
            }
        });
    };

    var hideHelpers = function() {
        clearTimeout(showHelpersTimeout);
        $helpers.fadeOut(150);
    };


    var isScrolledIntoView = function(elem) {
        var
            docViewTop    = $w.scrollTop(),
            docViewBottom = docViewTop + $w.height(),
            elemTop       = $(elem).offset().top,
            elemBottom    = elemTop + ($(elem).height() / 2);

        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    };

    var scrollWindowTo = function(top, duration, callback) {
        $('html, body').animate({scrollTop: top}, duration || 300, callback || function(){});
    };



    bannerOffsetTop = $w.height() / 2 - $banner.height() / 2;

    startingAnimations = setTimeout(function() {
        $banner.addClass('middle');

        setTimeout(function() {
            $downArrow.addClass('slide-up bounce');
        }, 800);
    }, 800);



    var cardClicked = function() {
        if(!animationReady) return;

        animationReady = false;

        var $this = $(this),
            $parent = $this.parent(),
            $images = $parent.next();

        var scrollTo = $this.offset().top - ((window.innerHeight)/2) + $banner.height(),
            isFlipped = $parent.hasClass('flipped');


        var flipCard = function() {
            if($('html:animated, body:animated').length !== 0) return;

            if(!preventHelpersFromShowing) {
                hideHelpers();
                preventHelpersFromShowing = true;
            }

            $images.show();

            if(isFlipped) {
                $images.find('.title').animate({'opacity': 0});
                $images.find('.images').removeClass('showing');

                setTimeout(function() {
                    $this.flip({
                        direction: 'lr',
                        bgImage: imagePathFront.replace('{{name}}', $this.data('name')),
                        onEnd: function() {
                            $parent.removeClass('flipped');
                            animationReady = true;
                            $images.hide();
                        }
                    });
                }, 800);
            } else {
                $parent.addClass('flipped');
                $images.find('.title').delay(400).animate({'opacity': 1}, function() {
                    $images.find('.images').addClass('showing');
                });

                $this.flip({
                    direction: 'rl',
                    bgImage: imagePathBack.replace('{{name}}', $this.data('name')),
                    onEnd: function() {
                        animationReady = true;
                    }
                });
            }

        };

        if(!isFlipped) {
            scrollWindowTo(scrollTo, 600, flipCard);
        } else {
            flipCard();
        }

    };


    $cards.click(cardClicked).each(function(i, el) {
        var $this = $(el);
        $this.addClass('loaded').css('background-image', imagePathFront.replace('{{name}}', $this.data('name')));
    });


    $downArrow.click(function() {
        scrollWindowTo($cards.first().offset().top - ((window.innerHeight)/2) + $banner.height(), 1000);
    });

    var screenInteraction = function() {

        if($w.scrollTop() < 20) {
            $body.addClass('top');
            $banner.addClass('middle');
            clearTimeout(startingAnimations);
        } else {
            $body.addClass('scrolled').removeClass('top');
        }

        if(!preventHelpersFromShowing) {
            hideHelpers();
            showHelpersTimeout = setTimeout(function() {
                showHelpers();
            }, 1000);
        }

        if($w.scrollTop() >= bannerOffsetTop) {
            $banner.addClass('fixed');
        } else {
            $banner.removeClass('fixed');
       }
   };


    $w.on('scroll touchmove', screenInteraction);

    $w.on('resize', function() { $w.trigger('scroll touchmove'); });

    screenInteraction();

    if(isIPad) $body.addClass('mobile');

});