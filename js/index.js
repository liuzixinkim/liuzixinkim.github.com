window.onload=function(){

	//导航控制
	var aLi=$('#nav_box li');
	
	var mySwiper=new Swiper('.swiper-container-v', {
        pagination: '.swiper-pagination-v',
        // freeMode : true,
        freeModeMomentumRatio : 5,
        paginationClickable: true,
        keyboardControl : true,
        direction: 'vertical',
        mousewheelControl : true,
        speed:600,
        effect: 'slide',
        hashnav:true
    });

	aLi.click(function (){
		mySwiper.slideTo($(this).index());
	});

	
	
	//二屏显示效果
	var timer=null;
	var lastHash='#0';
	clearInterval(timer);
	timer=setInterval(function (){
		if(lastHash!=window.location.hash)
		{
			if(window.location.hash=='#2')
			{	
				var timer2=null;
				var iNow=0;
				timer2=setInterval(function (){
					$('.page2 .work li').eq(iNow).css({
						WebkitTransform:'translateY(0)',
						msTransform:'translateY(0)',
						MozTransform:'translateY(0)',
						opacity:1
					});
					iNow++;
					if(iNow==$('.page2 .work li').length)
					{
						clearInterval(timer2);
					}
				},100);
			}
		}
		else if(lastHash==window.location.hash && window.location.hash!='#2')
		{
			$('.page2 .work li').css({
				WebkitTransform:'translateY(100px)',
				msTransform:'translateY(100px)',
				MozTransform:'translateY(100px)',
				opacity:0
			});
		}
		lastHash=window.location.hash;
	},50);





	//四屏显示效果
	// var timer4=null;
	// var lastHash2='#0';
	// clearInterval(timer4);
	// timer4=setInterval(function (){
	// 	if(lastHash2!=window.location.hash)
	// 	{
	// 		if(window.location.hash=='#4')
	// 		{	
	// 			var timer42=null;
	// 			var iNow=0;
	// 			timer42=setInterval(function (){
	// 				$('.page4 .case li').eq(iNow).css({
	// 					WebkitTransform:'translateY(0)',
	// 					opacity:1
	// 				});
	// 				iNow++;
	// 				if(iNow==$('.page4 .case li').length)
	// 				{
	// 					clearInterval(timer42);
	// 				}
	// 			},100);
	// 		}
	// 	}
	// 	else if(lastHash2==window.location.hash && window.location.hash!='#4')
	// 	{
	// 		$('.page4 .case li').css({
	// 			WebkitTransform:'translateY(50px)',
	// 			opacity:0
	// 		});
	// 	}
	// 	lastHash2=window.location.hash;
	// },50);
	
	


    //按钮控制到下一页
    $('.btn1').click(function (){
        mySwiper.slideNext();
    });



	//page3切换
	var oLeft=document.querySelector('#left');	
	var oRight=document.querySelector('#right');
	var aLi=document.querySelectorAll('#ul1 li');
	
	//存class
	var aClass=[];
	for(var i=0; i<aLi.length; i++){
		aClass[i]=aLi[i].className;
	}
	
	function tab(){
		for(var i=0; i<aLi.length; i++){
			aLi[i].className=aClass[i];
		}	
	}
	
	//左面
	oLeft.onclick=function(){
		aClass.unshift(aClass.pop());	
		tab();
	};
	
	//右面
	oRight.onclick=function(){
		aClass.push(aClass.shift());	
		
		tab();
	};


	//audio
	var oPlay=document.getElementById('audio');
	var oA=new Audio();
	oPlay.appendChild(oA);
	oA.src='mp3/Secret Garden - The Promise.mp3';
	oA.play();
	// oA.setAttribute('loop',true);

	
	var bReady=true;
	oPlay.onclick=function (){
		if(bReady)
		{
			oA.pause();
			this.style.backgroundImage='url(images/button.png)';
			bReady=false;
		}else
		{
			oA.play();
			this.style.backgroundImage='url(images/button2.png)';
			bReady=true;
		}
	};
	oA.onended=function (){
		oA.play();
	};
};