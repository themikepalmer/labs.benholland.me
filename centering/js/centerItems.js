/*
*
* Copyright 2012, Ben Holland http://benholland.me
*
* Released under the WTFPL license
* http://sam.zoy.org/wtfpl/
*
*/
(function($){
	$.fn.extend({
		centerItems: function(options) {
			
			return this.each(function() {
				
				var obj = $(this);
				var margin = parseInt(obj.find('li').css('margin-right'));

				centerListItems();
				$(window).resize(centerListItems);

				function centerListItems() {

					var total = 0,
						temp_total = 0,
						j = 0,
						contW  = obj.width(),
						items  = obj.find('li').length;

					obj.find('li').css({'margin-left':'0px','margin-right':margin});

					obj.find('li').each(function(i, e) {
						var width = $(this).outerWidth()+margin;
						temp_total += width;
						if(temp_total > contW) {
							var diff = contW - total;
							obj.find('li:eq('+j+')').css({'margin-left':(diff/2)+'px'});
							temp_total = total = width;
							j = i;
							if(i == (items-1) && j != (i-1)) {
								var diff = contW - width;
								obj.find('li:eq('+j+')').css({'margin-left':(diff/2)+'px'});
							}
						} else {
							if(i == (items-1)) {
								var diff = contW - temp_total;
								obj.find('li:eq('+j+')').css({'margin-left':(diff/2)+'px'});
							} else {
								total += width;
							}
						}
					});
				}
				
			});
		}
	});
	
})(jQuery);