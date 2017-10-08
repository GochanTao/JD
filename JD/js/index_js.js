/* Auther: Gochan Tao
time: 2017/10/6 - 2017/10/8 */

$(document).ready(function (){
      /*关闭头部广告栏*/
      $("#topbanner i").click(function (){
      	$("#topbanner").css("display","none");
      })

      function dropdown (selector,child){
      	$(selector).hover(function (){
      	$(this).find(child).show();
      },function (){
      	$(this).find(child).hide();
      })
      }
      dropdown("#shortcut .dt",".province");
      dropdown("#shortcut .fore",".dt");
      dropdown("#shortcut .service",".dt");
      dropdown("#shortcut .net-nav",".dt");
      dropdown("#adpart .leftpart li",".dt");

      /*轮播图*/
      	var _index=null;
      $("#adpart .flash .indicator i").hover(function()
		{
			clearInterval(timer);
			 _index=$(this).index();
			$(this).addClass("active").siblings("i").removeClass("active");
			$("#adpart .flash>ul").animate({top:-(_index*340)},500);
		},function(){autoplay()});

		function autoplay()
		{
			timer=setInterval(function(){
			_index++;
			if(_index>7)
				{
					_index=0;
					$("#adpart .flash>ul").css("top","0");
				}

				$("#adpart .flash .indicator i").eq(_index).addClass("active").siblings("i").removeClass("active");
				$("#adpart .flash>ul").animate({top:-(_index*340)},500);
			
				
			},4000);
		};
		autoplay();


		/*右侧选项卡*/
		$("#adpart .rightpart .news .tab-head .left-item").hover(function (){
			$(this).addClass("active").siblings(".left-item").removeClass("active");
			var _index =$(this).index(".left-item");
			$("#adpart .rightpart .news .content").eq(_index).show().siblings().hide();
		},function (){})


		/*轮播图按钮*/
		$("#adpart .ad .flash").hover(function (){
			$("#adpart .ad .flash a").show();
		},function (){
			$("#adpart .ad .flash .btn").hide();
		})

		$("#adpart .ad .flash .left-btn").click(function (){

			_index--;
			if(_index<0)
				{
					_index=7;
					// $("#adpart .flash>ul").css("top","0");
				}
			$("#adpart .flash .indicator i").eq(_index).addClass("active").siblings("i").removeClass("active");
			$("#adpart .flash>ul").animate({top:-(_index*340)},500);
		})
		$("#adpart .ad .flash .right-btn").click(function (){

			_index++;
			if(_index>7)
				{
					_index=0;
					 $("#adpart .flash>ul").css("top","0");
				}
			$("#adpart .flash .indicator i").eq(_index).addClass("active").siblings("i").removeClass("active");
			$("#adpart .flash>ul").animate({top:-(_index*340)},500);
		})
    })
    