var colCount = 0;
var colWidth = 0;
var marginX = 20;
var marginY= 40;
var windowWidth = 0;
var blocks = [];
var loop = 0;

$(function(){
	$(window).resize(setupBlocks);
});

function setupBlocks() {
	windowWidth = $(window).width();
	colWidth = $('.project').outerWidth();
	blocks = [];
	colCount = Math.floor(windowWidth/(colWidth+marginX));
	for(var i=0;i<colCount;i++){
		blocks.push(marginX);
	}
	positionBlocks();
}

function positionBlocks() {
	$('.project').each(function(){
		var min = Array.min(blocks);
		var index = $.inArray(min, blocks);
		var leftPos = marginX+(index*(colWidth+marginX));
		$(this).css({
			'left':leftPos+'px',
			'top':min+'px'
		});
		blocks[index] = min+$(this).outerHeight()+marginY;
	});
	if(loop===0){
		showTitle();
	}
	loop++;
}

function showTitle() {
	$('#heading').fadeIn();
}

// Function to get the Min value in Array
Array.min = function(array) {
    return Math.min.apply(Math, array);
};