(function($){	
	$(function(){
		$('.carousel').carousel({});
		window.click = 0;
		$('.carousel').on('slide',function(){
			$activePill = $(".nav-pills .active");
			if(window.click === 0){
				var number;
				for(number = 1; number<=4; number++){
					//if the carousel turns automatically then you should move to the next pill
					if($activePill.hasClass(number)){
						next = number +1;
						if(number === 4){
							next = 1;
						}
						$activePill.removeClass("active");
						$(".nav-pills ."+next).addClass("active");
					}
				}	
			}
			else{
				window.click = 0;
			}
			//alert("the slide");
			
		});
		$('.left').on('click',function(){
			$activePill = $(".nav-pills .active");
			var number;
			for(number =4; number >= 1; number--){
				//if the carousel is turned by means of the left click the pills should go backwards
				if($activePill.hasClass(number)){
					next = number-1;
					if(number === 1){
						next = 4;
					}
					$activePill.removeClass("active");
					$(".nav-pills ."+next).addClass("active");
				}
			}
			//	alert("the click");
			window.click = 1;
		});
		
		$('.right').on('click',function(){
			$activePill = $(".nav-pills .active");
			var number;
			for(number =1; number <= 4; number++){
				//if the carousel is turned by means of the left click the pills should go backwards
				if($activePill.hasClass(number)){
					next = number+1;
					if(number === 4){
						next = 1;
					}
					$activePill.removeClass("active");
					$(".nav-pills ."+next).addClass("active");
				}
			}
			//	alert("the click");
			window.click = 1;
		});
	});
	
})(jQuery);