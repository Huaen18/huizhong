/*导航栏*/
$('.nav li').each(function(){
	$(this).mouseenter(function(){
		if ($.browser.msie && ($.browser.version == "6.0") && !$.support.style){//兼容IE6
			$(this).find('dl:first').show();
		}
		else
		{
			$(this).find('dl:first').slideDown();
		}
	});
	$(this).mouseleave(function(){
		if ($.browser.msie && ($.browser.version == "6.0") && !$.support.style){
			$(this).find('dl:first').hide();
		}
		else
		{
			$(this).find('dl:first').slideUp();
		}
	});
});
$('.navDl dd').each(function(){
	$(this).mouseenter(function(){
		if ($.browser.msie && ($.browser.version == "6.0") && !$.support.style){
			$(this).find('dl:first').show();
		}
		else
		{
			$(this).find('dl:first').slideDown();
		}
		$(this).find('.nav-dl').parents('dd').find('a:first').addClass('navdl-cur');
	});
	$(this).mouseleave(function(){
		if ($.browser.msie && ($.browser.version == "6.0") && !$.support.style){
			$(this).find('dl:first').hide();
		}
		else
		{
			$(this).find('dl:first').slideUp();
		}
		$(this).find('.nav-dl').parents('dd').find('a:first').removeClass('navdl-cur');
	});
});
/*切换*/
$('.change').mouseenter(function(){
	$('.change-a').fadeIn();
});
$('.change').mouseleave(function(){
	$('.change-a').fadeOut();
});
$('.change-btnUl li').each(function(){
	$(this).mouseenter(function(){
		var numOld=$('.cbth-current').index();
		$(this).addClass('cbth-current').siblings('li').removeClass('cbth-current');
		var num=$('.cbth-current').index();
		if(numOld!=num)
		{
			$('.change-ul li').eq(num).addClass('change-current').siblings('li').removeClass('change-current');
			$('.change-current li').eq(num).fadeIn();
			$('.change-current li').eq(numOld).fadeOut();
		}
	});
});
$('.change-left').click(function(){
	var num=$('.cbth-current').index();
	var total=$('.change-ul li:last').index();
	num-=1;
	if(num>=0)
	{
		$('.change-btnUl li').eq(num).addClass('cbth-current').siblings('li').removeClass('cbth-current');
		$('.change-ul li').eq(num).addClass('change-current').siblings('li').removeClass('change-current');
		$('.change-ul li').eq(num).fadeIn();
		$('.change-ul li').eq(num-1).fadeOut();
	}
	else
	{
		num=total;
		$('.change-btnUl li').eq(num).addClass('cbth-current').siblings('li').removeClass('cbth-current');
		$('.change-ul li').eq(num).addClass('change-current').siblings('li').removeClass('change-current');
		$('.change-ul li').eq(num).fadeIn();
		$('.change-ul li:first').fadeOut();
	}
});
$('.change-right').click(function(){
	auto();
});
function auto(){
	var num=$('.cbth-current').index();
	var total=$('.change-ul li:last').index();
	num+=1;
	if(num<=total)
	{
		$('.change-btnUl li').eq(num).addClass('cbth-current').siblings('li').removeClass('cbth-current');
		$('.change-ul li').eq(num).addClass('change-current').siblings('li').removeClass('change-current');
		$('.change-ul li').eq(num).fadeIn();
		$('.change-ul li').eq(num-1).fadeOut();
	}
	else
	{
		num=0;
		$('.change-btnUl li').eq(num).addClass('cbth-current').siblings('li').removeClass('cbth-current');
		$('.change-ul li').eq(num).addClass('change-current').siblings('li').removeClass('change-current');
		$('.change-ul li').eq(num).fadeIn();
		$('.change-ul li').eq(total).fadeOut();
	}
}
var autoFlash=setInterval('auto()',3000);
$('.ch').mouseenter(function(){
	clearInterval(autoFlash);
});
$('.ch').mouseleave(function(){
	autoFlash=setInterval('auto()',3000);
});
/*图标*/
$('.icon-ul li').each(function(){
	$(this).mouseenter(function(){
		var num=$(this).index()+1;
		$(this).addClass('ic_current').siblings('li').removeClass('li_current');
		$(this).addClass('icon-li'+num+'-current');
		$(this).animate({width:'334px'},500);
		$('.icon-ul li').each(function(){
			var ii=$(this).index()+1;
			if(num!=ii)
			{
				$(this).stop();
				$(this).removeClass('icon-li'+ii+'-current');
				$(this).animate({width:'0px'},500);
			}
		});
		
	});
});
/*关于左边*/
$('.about-left').mouseenter(function(){
	$(this).find('i').animate({bottom:'0px'},500);
	$(this).find('img').animate({width:'540px',height:'265px',marginTop:'-25px',marginLeft:'-12px'},500);
});
$('.about-left').mouseleave(function(){
	$(this).find('i').animate({bottom:'-241px'},500);
	$(this).find('img').animate({width:'491px',height:'241px',marginTop:'0px',marginLeft:'0px'},500);	
});

/*关于右边*/
$('.about-btnl').click(function(){
	var firstLi=$('.about-r-ul li:first');
	$('.about-r-ul').append(firstLi);
});
$('.about-btnr').click(function(){
	var lastLi=$('.about-r-ul li:last');
	$('.about-r-ul').prepend(lastLi);
});

var liW=138;
$('.client-btnl').click(function(){
	$('.client-link li:first').animate({marginLeft:-liW+'px'},200,function(){
		   $('.client-link ul').append($(this));
		   $(this).css('margin-left','0px');
	 });
});
$('.client-btnr').click(function(){
	$('.client-link li:last').css('margin-left',-liW+'px');
	$('.client-link ul').prepend($('.client-link li:last'));
	$('.client-link li:first').animate({marginLeft:'0px'},200);
});

/*返回顶部*/
$('.the_top').click(function(){
	$('html,body').animate({scrollTop:0},200,function(){$('.to_top').fadeOut();});
});
var winH=parseInt($(window).height());
$(window).scroll(function(){
	var scrollH=$(this).scrollTop();
	if(scrollH>=winH)
	{
		$('.to_top').fadeIn();
	}
	else
	{
		$('.to_top').fadeOut();
	}
});



/*列表*/
$('.list_tit li').each(function(){
	$(this).mouseup(function(){
		$(this).addClass('list_current').siblings('li').removeClass('list_current');
	});
});

/*留言*/
$('.online a:first').click(function(){
	var tog=$(this).attr('toggle');
	if(tog==1)
	{
		$('.online').animate({width:'19px'},100);
		$('.online').animate({height:'35px'},100,function(){
								$(this).addClass('onLine_off');
								$('.online a:first').attr('toggle','0');
							});
	}
	else
	{
		$('.online').animate({width:'62px'},100);
		$('.online').animate({height:'259px'},100,function(){
								$(this).removeClass('onLine_off');
								$('.online a:first').attr('toggle','1');
							});
	}
});