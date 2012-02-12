(function($){	
	$(function(){
		$('.carousel').carousel({})
		$('.carousel').on('slide',function(){
			$activePill = $(".nav-pills .active");
			var number;
			for(number = 1; number<=4; number++){
				if($activePill.hasClass(number)){
					next = number +1;
					if(number === 4){
						next = 1;
					}
					$activePill.removeClass("active");
					$(".nav-pills ."+next).addClass("active");
				}
			}
		});
	});
	
})(jQuery);