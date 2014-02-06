var colCount = 0;
var colWidth = 0;
var margin = 20;
var windowWidth = 0;
var blocks = [];

$(function(){
	$(window).resize(setupBlocks);
});

function setupBlocks() {
	windowWidth = $('#inner_content').outerWidth();
	colWidth = $('.block').outerWidth();
	blocks = [];
	colCount = Math.floor(windowWidth/(colWidth+margin));
	for(var i=0;i<colCount;i++){
		blocks.push(margin);
	}
	positionBlocks();
}

function positionBlocks() {
	$('.block').each(function(){
		if($(this).is(':visible')) {
			var min = Array.min(blocks);
			var index = $.inArray(min, blocks);
			var leftPos = margin+(index*(colWidth+margin));
			$(this).stop().animate({
				'left':leftPos+'px',
				'top':min+'px'
			});
			blocks[index] = min+$(this).outerHeight()+margin;
		}
	});	
}

// Function to get the Min value in Array
Array.min = function(array) {
    return Math.min.apply(Math, array);
};

function changeBlocks(type) {
	if(type == "all") {
		$('.block').stop(true, false).fadeIn(300);
	} else {
		$('.block').each(function() {
			if($(this).hasClass(type)) {
				$(this).show();
			} else {
				$(this).stop(true, false).fadeOut(300);
			}
		});
	}
	setTimeout(setupBlocks, 600);
}