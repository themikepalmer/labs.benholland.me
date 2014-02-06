/*
 *
 * Copyright 2012, Ben Holland http://benholland.me
 *
 * Released under the WTFPL license
 * http://sam.zoy.org/wtfpl/
 *
 */
(function($){

	Array.max = function(array) {
	    return Math.max.apply(Math, array);
	};

	Array.min = function(array) {
	    return Math.min.apply(Math, array);
	};

	$.fn.extend({
		pinIt: function(o) {
			
			return this.each(function() {
				
				var obj = $(this),
					item        = o.item 	|| '.block',
					padding     = o.padding || 0,
					margin      = o.margin  || 20,
					colCount    = 0,
					colWidth    = 0,
					contWidth   = 0,
					fixedHeight = parseInt(o.fixedHeight) || 0,
					blocks      = [];

				var items = $(item);

				$(window).resize(setBlockOrder);

				setBlockOrder();

				function setBlockOrder() {
					contWidth = obj.width();
					colWidth = $('.block').outerWidth();
					blocks = [];
					colCount = Math.floor(contWidth/(colWidth+margin*2));
					for(var i=0;i<colCount;i++){
						blocks.push(margin);
					}
					positionBlocks();
				}

				function positionBlocks() {
					items.each(function(){
						var min = Array.min(blocks);
						var index = $.inArray(min, blocks);
						var leftPos = margin+(index*(colWidth+margin));
						$(this).css({
							'left':leftPos+'px',
							'top':min+'px'
						});
						if(!fixedHeight) {
							blocks[index] = min+$(this).outerHeight()+margin;
						} else {
							blocks[index] = min+fixedHeight+margin;
						}
					});	
					adjustParentHeight();
				}

				function adjustParentHeight() {
					var height = Array.max(blocks);
					obj.css('height', (height + padding));
				}
				
			});
		}
	});
	
})(jQuery);