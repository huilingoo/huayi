$(function(){
	
	
	/*主营业务*/
	$('.content1-bus ul li').hover(function(){
				$(this).find('.blue').css('display','block');
			},function(){
				$(this).find('.blue').css('display','none');
			});
		
		/*人才战略*/
		$('.ii').click(function(){
			if($(this).is('.on')){
					$(this).removeClass('on');
					$(this).parent('span').parent('li').find('.span-in').css('display','block');
				}else{
					$(this).addClass('on');
					$(this).parent('span').parent('li').find('.span-in').css('display','none');
				}
		
		});
		
		$('.ii').hover(function(){
			$(this).find('img').css('top','-40px');
			
		},function(){
			$(this).find('img').css('top','0px');
		});
		
		/*右侧效果*/
		/*$('.right ul li').hover(function(){
			$(this).addClass('right-aa');
		},function(){
			$(this).removeClass('right-aa');
		});*/
		
		$('.li-phone').mouseenter(function(){
			$(this).find('a').stop().animate({'right':'145px'},500);
			$(this).find('.phone-box').stop().animate({'width':'180px'},500);
		}).mouseleave(function(){
			$(this).find('a').stop().animate({'right':'9px'},500);
			$(this).find('.phone-box').stop().animate({'width':'0px'},500);
		});
		
		
			
			
		})