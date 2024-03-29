/*
 * Flip! jQuery Plugin (http://lab.smashup.it/flip/)
 * @author Luca Manno (luca@smashup.it) [http://i.smashup.it]
 *              [Original idea by Nicola Rizzo (thanks!)]
 *
 * @version 0.9.9 [Nov. 2009]
 *
 * @changelog
 * v 0.9.9      ->      Fix transparency over non-colored background. Added dontChangeColor option.
 *                      Added $clone and $this parameters to on.. callback functions.
 *                      Force hexadecimal color values. Made safe for noConflict use.
 *                      Some refactoring. [Henrik Hjelte, Jul. 10, 2009]
 *                      Added revert options, fixes and improvements on color management.
 *                      Released in Nov 2009
 * v 0.5        ->      Added patch to make it work with Opera (thanks to Peter Siewert), Added callbacks [Feb. 1, 2008]
 * v 0.4.1      ->      Fixed a regression in Chrome and Safari caused by getTransparent [Oct. 1, 2008]
 * v 0.4        ->      Fixed some bugs with transparent color. Now Flip! works on non-white backgrounds | Update: jquery.color.js plugin or jqueryUI still needed :( [Sept. 29, 2008]
 * v 0.3        ->      Now is possibile to define the content after the animation.
 *                              (jQuery object or text/html is allowed) [Sept. 25, 2008]
 * v 0.2        ->      Fixed chainability and buggy innertext rendering (xNephilimx thanks!)
 * v 0.1        ->      Starting release [Sept. 11, 2008]
 *
 */
(function($) {

    function int_prop(fx) {
        fx.elem.style[fx.prop] = parseInt(fx.now, 10) + fx.unit;
    }

    var throwError = function(message) {
            throw ({
                name: 'jquery.flip.js plugin error',
                message: message
            });
        };

    var isIE6orOlder = function() {
            // User agent sniffing is clearly out of fashion and $.browser will be be deprectad.
            // Now, I can't think of a way to feature detect that IE6 doesn't show transparent
            // borders in the correct way.
            // Until then, this function will do, and be partly political correct, allowing
            // 0.01 percent of the internet users to tweak with their UserAgent string.
            //
            // Not leadingWhiteSpace is to separate IE family from, well who knows?
            // Maybe some version of Opera?
            // The second guess behind this is that IE7+  will keep supporting maxHeight in the future.
            // First guess changed to dean edwards ie sniffing http://dean.edwards.name/weblog/2007/03/sniff/
            return ( /*@cc_on!@*/ false && (typeof document.body.style.maxHeight === 'undefined'));
        };

    $.extend($.fx.step, {
        borderTopWidth: int_prop,
        borderBottomWidth: int_prop,
        borderLeftWidth: int_prop,
        borderRightWidth: int_prop
    });

    $.fn.flip = function(settings) {
        return this.each(function() {
            var $this = $(this),
                flipObj, $clone, dirOption, dirOptions, newContent, ie6 = isIE6orOlder();

            if ($this.data('flipLock')) {
                return false;
            }

            $this.data('flipLock', 1);

            flipObj = {
                width: $this.width(),
                height: $this.height(),
                bgColor: '#FFF',
                bgImage: settings.bgImage,
                fontSize: $this.css('font-size') || '12px',
                direction: settings.direction || 'tb',
                toColor: '#FFF',
                speed: settings.speed || 400,
                top: $this.offset().top,
                left: $this.offset().left,
                target: settings.content || null,
                transparent: 'transparent',
                dontChangeColor: settings.dontChangeColor || false,
                onBefore: settings.onBefore || function() {},
                onEnd: settings.onEnd || function() {},
                onAnimation: settings.onAnimation || function() {}
            };

            // This is the first part of a trick to support
            // transparent borders using chroma filter for IE6
            // The color below is arbitrary, lets just hope it is not used in the animation
            ie6 && (flipObj.transparent = '#123456');

            $clone = $this.css('visibility', 'hidden').clone(true).data('flipLock', 1).appendTo('body').html('').css({
                visibility: 'visible',
                position: 'absolute',
                left: flipObj.left,
                top: flipObj.top,
                margin: 0,
                zIndex: 9999,
                'box-shadow': 'none'
            });

            var defaultStart = function() {
                return {
                    backgroundColor: '#FFF',
                    fontSize: 0,
                    lineHeight: 0,
                    borderTopWidth: 0,
                    borderLeftWidth: 0,
                    borderRightWidth: 0,
                    borderBottomWidth: 0,
                    borderTopColor: flipObj.transparent,
                    borderBottomColor: flipObj.transparent,
                    borderLeftColor: flipObj.transparent,
                    borderRightColor: flipObj.transparent,
                    background: 'none',
                    borderStyle: 'solid',
                    height: 0,
                    width: 0
                };
            };

            var defaultVertical = function() {
                var waist = (flipObj.height / 100) * 25;
                var start = defaultStart();
                start.height = flipObj.height;
                return {
                    'start': start,
                    'first': {
                        borderTopWidth: waist,
                        borderLeftWidth: 0,
                        borderRightWidth: 0,
                        borderBottomWidth: waist,
                        borderLeftColor: '#FFF',
                        borderRightColor: '#FFF',
                        top: flipObj.top - waist,
                        left: flipObj.left + (flipObj.width / 2)
                    },
                    'second': {
                        borderTopWidth: 0,
                        borderLeftWidth: 0,
                        borderRightWidth: 0,
                        borderBottomWidth: 0,
                        borderLeftColor: flipObj.transparent,
                        borderRightColor: flipObj.transparent,
                        top: flipObj.top,
                        left: flipObj.left
                    }
                };
            };

            dirOptions = {
                'lr': function() {
                    var d = defaultVertical();
                    d.first.left += 200;
                    d.second.left += 200;
                    d.start.borderLeftWidth = flipObj.width;
                    d.start.borderLeftColor = flipObj.bgColor;
                    d.second.borderRightWidth = flipObj.width;
                    d.second.borderRightColor = flipObj.toColor;
                    return d;
                },
                'rl': function() {
                    var d = defaultVertical();
                    d.first.left -= 200;
                    d.second.left -= 200;
                    d.start.borderRightWidth = flipObj.width;
                    d.start.borderRightColor = flipObj.bgColor;
                    d.second.borderLeftWidth = flipObj.width;
                    d.second.borderLeftColor = flipObj.toColor;
                    return d;
                }
            };

            dirOption = dirOptions[flipObj.direction]();

            // Second part of IE6 transparency trick.
            ie6 && (dirOption.start.filter = 'chroma(color=' + flipObj.transparent + ')');

            newContent = function() {
                var target = flipObj.target;
                return target && target.jquery ? target.html() : target;
            };

            $clone.queue(function() {
                flipObj.onBefore($clone, $this);
                $clone.html('').css(dirOption.start);
                $clone.dequeue();
            });

            // First flip
            $clone.animate(dirOption.first, flipObj.speed);

            // Not sure what this does
            // $clone.queue(function() {
            //     flipObj.onAnimation($clone, $this);
            //     $clone.dequeue();
            // });

            // second flip
            $clone.animate(dirOption.second, flipObj.speed);

            $clone.queue(function() {
                if (!flipObj.dontChangeColor) {
                    $this.css({
                        backgroundColor: flipObj.toColor
                    });
                }
                $this.css({
                    visibility: 'visible',
                    'background-image': flipObj.bgImage
                });

                var nC = newContent();
                if (nC) {
                    $this.html(nC);
                }
                $clone.remove();
                flipObj.onEnd($clone, $this);
                $this.removeData('flipLock');
                $clone.dequeue();
            });
        });
    };
})(jQuery);