var colCount = 0;
var colWidth = 0;
var margin = 20;
var windowWidth = 0;
var blocks = [];

$(function(){
	$(window).resize(setupBlocks);
});

function setupBlocks() {
	windowWidth = $('#container').width();
	colWidth = $('.block').outerWidth();
	blocks = [];
	console.log(blocks);
	colCount = Math.floor(windowWidth/(colWidth+margin*2));
	for(var i=0;i<colCount;i++){
		blocks.push(margin);
	}
	positionBlocks();
}

function positionBlocks() {
	$('.block').each(function(){
		var min = Array.min(blocks);
		var index = $.inArray(min, blocks);
		var leftPos = margin+(index*(colWidth+margin));
		$(this).css({
			'left':leftPos+'px',
			'top':min+'px'
		});
		blocks[index] = min+$(this).outerHeight()+margin;
	});	

	// Set footer position
	var maxHeight = Array.max(blocks);
	$('#container').stop().animate({'height':maxHeight});
	$('#footer').stop().animate({'top':maxHeight+150});
}

// Function to get the Min value in Array
Array.min = function(array) {
    return Math.min.apply(Math, array);
};

// Function to get the Min value in Array
Array.max = function(array) {
    return Math.max.apply(Math, array);
};