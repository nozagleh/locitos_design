$(document).ready(function(){
	$('#tt').hide();

	//var elements = $('#services').position();
	//var elementHeight = parseInt(elements.top);
	var wheight = $(window).height();
	var wwidth = $(window).width();

	var originalPos = $(window).scrollTop();
	if (wwidth > 1050) {
		$('#article1').css('opacity', '0.5');
		$('#article2').css('opacity', '0.5');
		$('#elements').css('opacity', '0.5');
	};
	
	//var counter = 0;
	$(window).scroll(function(){
		if (wwidth > 1050) {
			checkCloseness('#article1');
			checkCloseness('#article2');
			checkCloseness('#elements');
		};
		
		//checkCloseness('.article-box');
		var pos = $(window).scrollTop();
		/*
		if (pos > originalPos) {
			counter++;
			var p = counter*wheight;
			console.log(wheight);
			$("html,body").animate({scrollTop: p}, 1500);
			//$(window).scrollTop(p);
			originalPos = pos;
			return false;
		}else if(pos < originalPos){
			counter--;
			var p =  counter*wheight;
			$("html,body").animate({
				scrollTop: p
			},1500);
			//$(window).scrollTop(p);
			originalPos = pos;
			return false;
		};
		*/
		var height = wheight + pos;

		/*if (height >= elementHeight) {
			
		};*/

		if (pos >= 701) {
			//$('#services').addClass('service-box');
			$('#tt').fadeIn(500);
		}else{
			//$("#services").removeClass('service-box');
			$('#tt').fadeOut(500);
		};
	});
	$('#tt').click(function(){
		$('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
	    }, 500);
	    return false;
	});
	$('#nav-btn').click(function(){
		console.log("clicked");
		$('.mobile_nav').toggleClass('nav-toggle');
	});
});

function checkCloseness(ele){
	$(ele).each(function(){
		var a = $(this).offset().top;
		var b = ($(window).scrollTop() + $(window).height() - 20);
		console.log(a + " > " + b);
			if($(this).offset().top < ($(window).scrollTop() + $(window).height() - 20)) {
            	$(ele).animate({
					opacity: "1"
					},1500);
        	}else {
        	}
		});
}