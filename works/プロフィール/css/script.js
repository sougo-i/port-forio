$(function() {
	$('.english').hover(function() {
		$('#text1').fadeIn(1000);
	},function(){
		$('#text1').fadeOut(1000);
    });

    $('.writing').hover(function() {
    	$('#text2').fadeIn(1000);
    },function() {
        $('#text2').fadeOut(1000);
    });

    $('.programming').hover(function() {
		$('#text3').fadeIn(1000);
	},function(){
		$('#text3').fadeOut(1000);
    });

    $('.index-btn').click(function(){
    	$('.active').removeClass('active')

    	var clickedindex = $('.index-btn').index($(this));
    	$('.slide').eq(clickedindex).addClass('active');

    });

    
});