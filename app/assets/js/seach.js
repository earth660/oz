
$('.item').hover(
	function(){
		var $this = $(this);
		expand($this);
		},
		function(){
			var $this = $(this);
			collapse($this);
	});
function expand($elem){
var angle = 0;
var t = setInterval(function () {
    if(angle == 1440){
        clearInterval(t);
        return;
    }
    angle += 40;
    $('.link',$elem).stop().animate({rotate: '+=-40deg'}, 0);
    },10);
$elem.stop().animate({width:'268px'}, 1000)
	.find('.item_content').fadeIn(400,function(){
	    $(this).find('p').stop(true,true).fadeIn(600);
	    });
	}
function collapse($elem){
var angle = 1440;
var t = setInterval(function () {
    if(angle == 0){
        clearInterval(t);
        return;
    }
    angle -= 40;
    $('.link',$elem).stop().animate({rotate: '+=40deg'}, 0);
    },10);
    $elem.stop().animate({width:'52px'}, 1000)
    .find('.item_content').stop(true,true).fadeOut().find('p').stop(true,true).fadeOut();
}

		function NextFocusMove(object, targetName, maxLength)
		{
			if(object.value.length >= maxLength)
				object.form.elements[targetName].focus();
		}
		
		function PrevFocusMove(object, targetName, str)
		{
			if( str.length == 0 ){
				fc(0)				
			} else if( str.length == 4 ) {
				$("#cover").css({"opacity":1}),
				$(".1").css({"opacity":1}),
				$(".2").css({"opacity":1}),
				$(".3").css({"opacity":1}),
				$(".4").css({"opacity":1}),
				$(".5").css({"opacity":1}),
				$(".6").css({"opacity":1}),
				$(".7").css({"opacity":1}),
				$(".8").css({"opacity":1}),
				$(".9").css({"opacity":1}),
				$(".10").css({"opacity":1}),
				$(".11").css({"opacity":1}),
				$(".12").css({"opacity":1}),
				$(".maru").animate({"margin-left":"0px","opacity":1,"z-index":100},500),
				$("#cover").css({"opacity":1});
			} else {
				$("#cover").css({"opacity":0}),
				$(".maru").animate({"margin-left":"-100px","opacity":0,"z-index":-100},500);
			}
		}
		
		function fc(num){
		 document.fcset.elements[num].focus();
		}


$(".1, .2, .3, .4").hover(function(e){
	$(".5, .6, .7, .8").not(":animated").animate({"margin-top":"350px"})
	setTimeout(function(){
		$(".5:animated, .6:animated, .7:animated, .8:animated")
		.stop(true,false).animate({"margin-top":"350px"})
	},10)
	$(".cover").fadeIn(1000).css({"top":($(this).offset().top + 170)})
	$(".rate").fadeIn(1000).css({"top":($(this).offset().top + 170)})
},
function(){
	$(".5, .6, .7, .8").stop(true,false).animate({"margin-top":"30px"})
	$(".cover").stop(true,false).fadeOut(100)
});

$(".5, .6, .7, .8").hover(function(e){
	$(".9, .10, .11, .12").not(":animated").animate({"margin-top":"350px"})
	setTimeout(function(){
		$(".9:animated, .10:animated, .11:animated, .12:animated")
		.stop(true,false).animate({"margin-top":"350px"})
	},10)
	$(".cover").fadeIn(1000).css({"top":($(this).offset().top + 170)})
	$(".rate").fadeIn(1000).css({"top":($(this).offset().top + 170)})
},
function(){
	$(".9, .10, .11, .12").stop(true,false).animate({"margin-top":"30px"})
	$(".cover").stop(true,false).fadeOut(100)
});

$(".9, .10, .11, .12").hover(function(e){
	$(".cover").fadeIn(1000).css({"top":($(this).offset().top + 170)})
	$(".rate").fadeIn(1000).css({"top":($(this).offset().top + 170)})
},
function(){
	$(".cover").stop(true,false).fadeOut(100)
});


$(".1").hover(function(){
	$("ul#prof>li.img").html("<img src=\"../images/1.png\" width=\"99px\"; height=\"99px\";>")
	$("ul#prof>li.mail").css({"opacity":1})
	$("ul#prof>li.name").html("辻大地")
	$("ul#prof>li.univ").html("同志社大学<br />工学部機械工学科")
	$("ul#prof>li.sub").html("<div class=\"english\"></div><div class=\"mathematica\"></div>")
	$("ul#prof>li.station").html("JR京都駅")
	$("ul#prof>li.car").html("あり")
	$("ul#prof>li.money").html("2000円")
	$("ul#prof>li.message").html("無理なく楽しく、<br />勉強が好きになれるような指導を目指します")
});

$(".2").hover(function(){
	$("ul#prof>li.img").html("<img src=\"../images/2.png\" width=\"99px\"; height=\"99px\";>")
	$("ul#prof>li.mail").css({"opacity":1})
	$("ul#prof>li.name").html("東川諒央")
	$("ul#prof>li.univ").html("仏教大学<br />情報システム学科")
	$("ul#prof>li.sub").html("<div class=\"mathematica\"></div><div class=\"society\"></div>")
	$("ul#prof>li.station").html("JR西大路駅")
	$("ul#prof>li.car").html("なし")
	$("ul#prof>li.money").html("2500円")
	$("ul#prof>li.message").html("無理なく楽しく、<br />勉強が好きになれるような指導を目指します")
});

$(".3").hover(function(){
	$("ul#prof>li.img").html("<img src=\"../images/3.png\" width=\"99px\"; height=\"99px\";>")
	$("ul#prof>li.mail").css({"opacity":1})
	$("ul#prof>li.name").html("西出俊")
	$("ul#prof>li.univ").html("京都大学<br />機会工学部ロボット工学科")
	$("ul#prof>li.sub").html("<div class=\"japanese\"></div><div class=\"english\"></div>")
	$("ul#prof>li.station").html("京阪出町柳駅")
	$("ul#prof>li.car").html("なし")
	$("ul#prof>li.money").html("2500円")
	$("ul#prof>li.message").html("無理なく楽しく、<br />勉強が好きになれるような指導を目指します")
});

$(".4").hover(function(){
	$("ul#prof>li.img").html("<img src=\"../images/4.png\" width=\"99px\"; height=\"99px\";>")
	$("ul#prof>li.mail").css({"opacity":0})
	$("ul#prof>li.name").html("吉田綾華")
	$("ul#prof>li.univ").html("立命館大学<br />")
	$("ul#prof>li.sub").html("<div class=\"mathematica\"></div>")
	$("ul#prof>li.station").html("阪急四条大宮駅")
	$("ul#prof>li.car").html("なし")
	$("ul#prof>li.money").html("2000円")
	$("ul#prof>li.message").html("無理なく楽しく、<br />勉強が好きになれるような指導を目指します")
});

$(".5").hover(function(){
	$("ul#prof>li.img").html("<img src=\"../images/5.png\" width=\"99px\"; height=\"99px\";>")
	$("ul#prof>li.mail").css({"opacity":0})
	$("ul#prof>li.name").html("中山智博")
	$("ul#prof>li.univ").html("京都美術工芸大学<br />工芸デザインコース")
	$("ul#prof>li.sub").html("<div class=\"other\"></div>")
	$("ul#prof>li.station").html("京阪本線淀駅")
	$("ul#prof>li.car").html("あり")
	$("ul#prof>li.money").html("2500円")
	$("ul#prof>li.message").html("無理なく楽しく、<br />勉強が好きになれるような指導を目指します")
});

$(".6").hover(function(){
	$("ul#prof>li.img").html("<img src=\"../images/6.png\" width=\"99px\"; height=\"99px\";>")
	$("ul#prof>li.mail").css({"opacity":1})
	$("ul#prof>li.name").html("福井洋子")
	$("ul#prof>li.univ").html("立命館大学")
	$("ul#prof>li.sub").html("<div class=\"society\"></div><div class=\"science\"></div>")
	$("ul#prof>li.station").html("阪急四条大宮駅")
	$("ul#prof>li.car").html("なし")
	$("ul#prof>li.money").html("2000円")
	$("ul#prof>li.message").html("無理なく楽しく、<br />勉強が好きになれるような指導を目指します")
});

$(".7").hover(function(){
	$("ul#prof>li.img").html("<img src=\"../images/7.png\" width=\"99px\"; height=\"99px\";>")
	$("ul#prof>li.mail").css({"opacity":1})
	$("ul#prof>li.name").html("Jango")
	$("ul#prof>li.univ").html("京都大学")
	$("ul#prof>li.sub").html("<div class=\"english\"></div>")
	$("ul#prof>li.station").html("京阪出町柳駅")
	$("ul#prof>li.car").html("あり")
	$("ul#prof>li.money").html("2500円")
	$("ul#prof>li.message").html("無理なく楽しく、<br />勉強が好きになれるような指導を目指します")
});

$(".8").hover(function(){
	$("ul#prof>li.img").html("<img src=\"../images/8.png\" width=\"99px\"; height=\"99px\";>")
	$("ul#prof>li.mail").css({"opacity":1})
	$("ul#prof>li.name").html("佐藤修一")
	$("ul#prof>li.univ").html("京都大学<br />")
	$("ul#prof>li.sub").html("<div class=\"society\"></div><div class=\"english\"></div>")
	$("ul#prof>li.station").html("JR京都駅")
	$("ul#prof>li.car").html("あり")
	$("ul#prof>li.money").html("2500円")
	$("ul#prof>li.message").html("無理なく楽しく、<br />勉強が好きになれるような指導を目指します")
});

$(".9").hover(function(){
	$("ul#prof>li.img").html("<img src=\"../images/9.png\"width=\"99px\"; height=\"99px\";>")
	$("ul#prof>li.mail").css({"opacity":0})
	$("ul#prof>li.name").html("鳩山千夏")
	$("ul#prof>li.univ").html("立命館大学<br />")
	$("ul#prof>li.sub").html("<div class=\"society\"></div><div class=\"japanese\"></div>")
	$("ul#prof>li.station").html("阪急四条大宮駅")
	$("ul#prof>li.car").html("なし")
	$("ul#prof>li.money").html("2000円")
	$("ul#prof>li.message").html("無理なく楽しく、<br />勉強が好きになれるような指導を目指します")
});

$(".10").hover(function(){
	$("ul#prof>li.img").html("<img src=\"../images/10.png\" width=\"99px\"; height=\"99px\"; >")
	$("ul#prof>li.mail").css({"opacity":1})
	$("ul#prof>li.name").html("岩渕直也")
	$("ul#prof>li.univ").html("同志社大学<br />工学部機械工学科")
	$("ul#prof>li.sub").html("<div class=\"english\"></div><div class=\"mathematica\"></div>")
	$("ul#prof>li.station").html("JR京都駅")
	$("ul#prof>li.car").html("あり")
	$("ul#prof>li.money").html("2500円")
	$("ul#prof>li.message").html("無理なく楽しく、<br />勉強が好きになれるような指導を目指します")
});

$(".11").hover(function(){
	$("ul#prof>li.img").html("<img src=\"../images/11.png\" width=\"99px\"; height=\"99px\";>")
	$("ul#prof>li.mail").css({"opacity":1})
	$("ul#prof>li.name").html("Michael")
	$("ul#prof>li.univ").html("京都大学")
	$("ul#prof>li.sub").html("<div class=\"science\"></div>")
	$("ul#prof>li.station").html("京阪出町柳駅")
	$("ul#prof>li.car").html("あり")
	$("ul#prof>li.money").html("2000円")
	$("ul#prof>li.message").html("無理なく楽しく、<br />勉強が好きになれるような指導を目指します")
});

$(".12").hover(function(){
	$("ul#prof>li.img").html("<img src=\"../images/12.png\" width=\"99px\"; height=\"99px\";>")
	$("ul#prof>li.mail").css({"opacity":1})
	$("ul#prof>li.name").html("米澤友加里")
	$("ul#prof>li.univ").html("京都大学")
	$("ul#prof>li.sub").html("<div class=\"society\"></div><div class=\"science\"></div>")
	$("ul#prof>li.station").html("京阪出町柳駅")
	$("ul#prof>li.car").html("なし")
	$("ul#prof>li.money").html("2000円")
	$("ul#prof>li.message").html("無理なく楽しく、<br />勉強が好きになれるような指導を目指します")
});

/* ↓変更 */

$(".con").hover(function(){
	$(".con").css({"opacity":0, "z-index":-200}),
	$(".man").css({"opacity":1, "z-index":200}),
	$(".woman").css({"opacity":1, "z-index":200}),
	$('.pp').css({"opacity":1}),
	$('.g').css({"opacity":1}),
	$('.b').css({"opacity":1}),
	$('.r').css({"opacity":1}),
	$('.y').css({"opacity":1}),
	$('.p').css({"opacity":1})
},
function(){
	$(".con").css({"opacity":1, "z-index":0}),
	$(".man").css({"opacity":0, "z-index":-200}),
	$(".woman").css({"opacity":0, "z-index":-200}),
	$('.pp').css({"opacity":0})
	$('.g').css({"opacity":0}),
	$('.b').css({"opacity":0}),
	$('.r').css({"opacity":0}),
	$('.y').css({"opacity":0}),
	$('.p').css({"opacity":0}),
	$('.naka').css({"opacity":1})
});

$(".man, .woman").hover(function(){
	$(".con").css({"opacity":0, "z-index":-200}),
	$(".man").css({"opacity":1, "z-index":200}),
	$(".woman").css({"opacity":1, "z-index":200}),
	$('.pp').css({"opacity":1}),
	$('.g').css({"opacity":1}),
	$('.b').css({"opacity":1}),
	$('.r').css({"opacity":1}),
	$('.y').css({"opacity":1}),
	$('.p').css({"opacity":1})
},
function(){
	$(".con").css({"opacity":1, "z-index":0}),
	$(".man").css({"opacity":0, "z-index":-200}),
	$(".woman").css({"opacity":0, "z-index":-200}),
	$('.pp').css({"opacity":0})
	$('.g').css({"opacity":0}),
	$('.b').css({"opacity":0}),
	$('.r').css({"opacity":0}),
	$('.y').css({"opacity":0}),
	$('.p').css({"opacity":0}),
	$('.naka').css({"opacity":1})
});

/* ↑変更 */

$(".pp").hover(function(){
 	$(".con").css({"opacity":0}),
 	$(".naka").css({"opacity":1}),
  	$(this).css({"opacity":1}),
  	$('.p').css({"opacity":0.2}),
	$('.g').css({"opacity":0.2}),
	$('.b').css({"opacity":0.2}),
	$('.r').css({"opacity":0.2}),
	$('.y').css({"opacity":0.2}),
	$('.naka').css({"opacity":1})	
},
function(){
  	$(".con").css({"opacity":1}),
  	$(this).css({"opacity":0}),
	$('.g').css({"opacity":0}),
	$('.b').css({"opacity":0}),
	$('.r').css({"opacity":0}),
	$('.y').css({"opacity":0}),
	$('.p').css({"opacity":0}),
	$('.naka').css({"opacity":1})
});

$(".g").hover(function(){
 	$(".con").css({"opacity":0}),
  	$(".naka").css({"opacity":1}),
  	$(this).css({"opacity":1}),
  	$('.pp').css({"opacity":0.2}),
	$('.p').css({"opacity":0.2}),
	$('.b').css({"opacity":0.2}),
	$('.r').css({"opacity":0.2}),
	$('.y').css({"opacity":0.2}),
	$('.naka').css({"opacity":1})
	
},
function(){
  	$(".con").css({"opacity":1}),
  	$(this).css({"opacity":0}),
	$('.pp').css({"opacity":0}),
	$('.b').css({"opacity":0}),
	$('.r').css({"opacity":0}),
	$('.y').css({"opacity":0}),
	$('.p').css({"opacity":0}),
	$('.naka').css({"opacity":1})
});

$(".b").hover(function(){
 	$(".con").css({"opacity":0}),
  	$(".naka").css({"opacity":1}),

  	$(this).css({"opacity":1}),
  	$('.pp').css({"opacity":0.2}),
	$('.g').css({"opacity":0.2}),
	$('.p').css({"opacity":0.2}),
	$('.r').css({"opacity":0.2}),
	$('.y').css({"opacity":0.2}),
	$('.naka').css({"opacity":1})	
	
},

function(){
  	$(".con").css({"opacity":1}),
  	$(this).css({"opacity":0}),
	$('.pp').css({"opacity":0}),
	$('.g').css({"opacity":0}),
	$('.r').css({"opacity":0}),
	$('.y').css({"opacity":0}),
	$('.p').css({"opacity":0}),
	$('.naka').css({"opacity":1})
  	
});

$(".r").hover(function(){
 	$(".con").css({"opacity":0}),
  	$(".naka").css({"opacity":1}), 

  	$(this).css({"opacity":1}),
  	$('.pp').css({"opacity":0.2}),
	$('.g').css({"opacity":0.2}),
	$('.b').css({"opacity":0.2}),
	$('.p').css({"opacity":0.2}),
	$('.y').css({"opacity":0.2}),
	$('.naka').css({"opacity":1})
},
function(){
  	$(".con").css({"opacity":1}),
  	$(this).css({"opacity":0}),
	$('.pp').css({"opacity":0}),
	$('.g').css({"opacity":0}),
	$('.b').css({"opacity":0}),
	$('.y').css({"opacity":0}),
	$('.p').css({"opacity":0}),
	$('.naka').css({"opacity":1})

});

$(".y").hover(function(){
 	$(".con").css({"opacity":0}),
  	$(".naka").css({"opacity":1}),

  	$(this).css({"opacity":1}),
  	$('.pp').css({"opacity":0.2}),
	$('.g').css({"opacity":0.2}),
	$('.b').css({"opacity":0.2}),
	$('.r').css({"opacity":0.2}),
	$('.p').css({"opacity":0.2}),
	$('.naka').css({"opacity":1})	

},
function(){
  	$(".con").css({"opacity":1}),
  	$(this).css({"opacity":0}),
	$('.pp').css({"opacity":0}),
	$('.g').css({"opacity":0}),
	$('.b').css({"opacity":0}),
	$('.r').css({"opacity":0}),
	$('.p').css({"opacity":0}),
	$('.naka').css({"opacity":1})

});

$(".p").hover(function(){
 	$(".con").css({"opacity":0}),
  	$(".naka").css({"opacity":1}), 

  	$(this).css({"opacity":1}),
  	$('.pp').css({"opacity":0.2}),
	$('.g').css({"opacity":0.2}),
	$('.b').css({"opacity":0.2}),
	$('.r').css({"opacity":0.2}),
	$('.y').css({"opacity":0.2}),
	$('.naka').css({"opacity":1})
},
function(){
  	$(".con").css({"opacity":1}),
  	$(this).css({"opacity":0}),
	$('.pp').css({"opacity":0}),
	$('.g').css({"opacity":0}),
	$('.b').css({"opacity":0}),
	$('.r').css({"opacity":0}),
	$('.y').css({"opacity":0}),
	$('.naka').css({"opacity":1})
});


/* ----------8<----------8<--------------------8<----------8<---------- */

/* ↓変更 */

$(".man").click(function(){
	if( $(this).css({"opacity":1}) ) {
		$(".woman").animate({"opacity":0.2})
	}

	$(".1").css({"display":"block"}),
	$(".2").css({"display":"block"}),
	$(".3").css({"display":"block"}),
	$(".4").css({"display":"none"}),
	$(".5").css({"display":"block"}),
	$(".6").css({"display":"none"}),
	$(".7").css({"display":"block"}),
	$(".8").css({"display":"block"}),
	$(".9").css({"display":"none"}),
	$(".10").css({"display":"block"}),
	$(".11").css({"display":"block"}),
	$(".12").css({"display":"none"})

	$(".1, .2, .3").hover(function(){
		$(".5").stop()
		$(".10, .11").not(":animated").animate({"margin-top":"350px"})
	setTimeout(function(){
		$(".10:animated, .11:animated")
		.stop(true,false).animate({"margin-top":"350px"})
	},10)

	},
	function(){
		$(".10, .11").stop(true,false).animate({"margin-top":"30px"})
	})

	$(".5").hover(function(){
		$(".7, .8").not(":animated").animate({"margin-top":"350px"})
	setTimeout(function(){
		$(".7:animated, .8:animated")
		.stop(true,false).animate({"margin-top":"350px"})
	},10)

	},
	function(){
		$(".7, .8").stop(true,false).animate({"margin-top":"30px"})
	})

	$(".7, .8").hover(function(){$(".10, .11").stop()})

});

$(".woman").click(function(){
	if( $(this).css({"opacity":1}) ) {
		$(".man").animate({"opacity":0.2})
	}
	$(".1").css({"display":"none"}),
	$(".2").css({"display":"none"}),
	$(".3").css({"display":"none"}),
	$(".4").css({"display":"block"}),
	$(".5").css({"display":"none"}),
	$(".6").css({"display":"block"}),
	$(".7").css({"display":"none"}),
	$(".8").css({"display":"none"}),
	$(".9").css({"display":"block"}),
	$(".10").css({"display":"none"}),
	$(".11").css({"display":"none"}),
	$(".12").css({"display":"block"})

	$(".4").hover(function(){$(".6").stop()})
	$(".6").hover(function(){$(".9, .12").stop()})

});


/* ↑変更 */

$(".g").click(function(){
	$(".1").css({"display":"none"}),
	$(".2").css({"display":"none"}),
	$(".3").css({"display":"none"}),
	$(".4").css({"display":"none"}),
	$(".5").css({"display":"none"}),
	$(".6").css({"display":"block"}),
	$(".7").css({"display":"none"}),
	$(".8").css({"display":"none"}),
	$(".9").css({"display":"none"}),
	$(".10").css({"display":"none"}),
	$(".11").css({"display":"block"}),
	$(".12").css({"display":"block"}),
	
	$(".6").hover(function(){
		$(".11, .12").stop()
	})
});

$(".b").click(function(){
	$(".1").css({"display":"block"}),
	$(".2").css({"display":"block"}),
	$(".3").css({"display":"none"}),
	$(".4").css({"display":"block"}),
	$(".5").css({"display":"none"}),
	$(".6").css({"display":"none"}),
	$(".7").css({"display":"none"}),
	$(".8").css({"display":"none"}),
	$(".9").css({"display":"none"}),
	$(".10").css({"display":"block"}),
	$(".11").css({"display":"none"}),
	$(".12").css({"display":"none"}),
	
	$(".1, .2, .4").hover(function(){
		$(".10").stop()
	})
});

$(".r").click(function(){
	$(".1").css({"display":"none"}),
	$(".2").css({"display":"none"}),
	$(".3").css({"display":"block"}),
	$(".4").css({"display":"none"}),
	$(".5").css({"display":"none"}),
	$(".6").css({"display":"none"}),
	$(".7").css({"display":"none"}),
	$(".8").css({"display":"none"}),
	$(".9").css({"display":"block"}),
	$(".10").css({"display":"none"}),
	$(".11").css({"display":"none"}),
	$(".12").css({"display":"none"})	
});

$(".y").click(function(){
	$(".1").css({"display":"none"}),
	$(".2").css({"display":"block"}),
	$(".3").css({"display":"none"}),
	$(".4").css({"display":"none"}),
	$(".5").css({"display":"none"}),
	$(".6").css({"display":"block"}),
	$(".7").css({"display":"none"}),
	$(".8").css({"display":"block"}),
	$(".9").css({"display":"block"}),
	$(".10").css({"display":"none"}),
	$(".11").css({"display":"none"}),
	$(".12").css({"display":"block"}),
	
	$(".2").hover(function(){
		$(".6, .8").stop()
	}),
	
	$(".6, .8").hover(function(){
		$(".9").stop()
	}),
	
	$(".2, .6, .8, .9").hover(function(){
		$(".12").not(":animated").animate({"margin-top":"350px"})
	setTimeout(function(){
		$(".12:animated")
		.stop(true,false).animate({"margin-top":"350px"})
	},10)

	},
	function(){
		$(".12").stop(true,false).animate({"margin-top":"30px"})
	})
});

$(".p").click(function(){
	$(".1").css({"display":"block"}),
	$(".2").css({"display":"none"}),
	$(".3").css({"display":"block"}),
	$(".4").css({"display":"none"}),
	
	$(".5").css({"display":"none"}),
	$(".6").css({"display":"none"}),
	$(".7").css({"display":"block"}),
	$(".8").css({"display":"block"}),

	$(".9").css({"display":"none"}),
	$(".10").css({"display":"block"}),
	$(".11").css({"display":"none"}),
	$(".12").css({"display":"none"}),
	
	$(".1, .3").hover(function(){
		$(".7, .8").stop()
	}),
	
	$(".1, .3, .7, .8").hover(function(){
		$(".10").not(":animated").animate({"margin-top":"350px"})
	setTimeout(function(){
		$(".10:animated").stop(true,false).animate({"margin-top":"350px"})
	},10)
	},
	function(){
		$(".10").stop(true,false).animate({"margin-top":"30px"})
	})
});

$(".pp").click(function(){
	$(".1").css({"display":"none"}),
	$(".2").css({"display":"none"}),
	$(".3").css({"display":"none"}),
	$(".4").css({"display":"none"}),
	$(".5").css({"display":"block"}),
	$(".6").css({"display":"none"}),
	$(".7").css({"display":"none"}),
	$(".8").css({"display":"none"}),
	$(".9").css({"display":"none"}),
	$(".10").css({"display":"none"}),
	$(".11").css({"display":"none"}),
	$(".12").css({"display":"none"})
});

$(".1").hover(function(){
	$(".prate1").html("3.2")
	$(".prate2").html("5.0")
	$(".prate3").html("4.1")
});

$(".2").hover(function(){
	$(".prate1").html("3.6")
	$(".prate2").html("4.5")
	$(".prate3").html("3.3")
});

$(".3").hover(function(){
	$(".prate1").html("5.0")
	$(".prate2").html("3.2")
	$(".prate3").html("4.6")
});

$(".4").hover(function(){
	$(".prate1").html("3.2")
	$(".prate2").html("3.5")
	$(".prate3").html("3.3")
});

$(".5").hover(function(){
	$(".prate1").html("4.2")
	$(".prate2").html("4.8")
	$(".prate3").html("3.1")
});

$(".6").hover(function(){
	$(".prate1").html("2.3")
	$(".prate2").html("4.5")
	$(".prate3").html("5.0")
});

$(".7").hover(function(){
	$(".prate1").html("4.2")
	$(".prate2").html("3.8")
	$(".prate3").html("4.1")
});

$(".8").hover(function(){
	$(".prate1").html("4.6")
	$(".prate2").html("3.5")
	$(".prate3").html("3.3")
});

$(".9").hover(function(){
	$(".prate1").html("3.2")
	$(".prate2").html("4.0")
	$(".prate3").html("3.3")
});

$(".10").hover(function(){
	$(".prate1").html("3.5")
	$(".prate2").html("3.7")
	$(".prate3").html("3.4")
});

$(".11").hover(function(){
	$(".prate1").html("4.6")
	$(".prate2").html("4.5")
	$(".prate3").html("5.0")
});

$(".12").hover(function(){
	$(".prate1").html("3.9")
	$(".prate2").html("5.0")
	$(".prate3").html("5.0")
});


$("a").hover(function(){
	
	var prate1 = $(".prate1").text();
	var prate2 = $(".prate2").text();
	var prate3 = $(".prate3").text();

	if ( prate1.indexOf("5.") != -1){$(".rate1").html("");}
	if ( prate1.indexOf("4.") != -1){$(".rate1").html("<img src=\"../images/per40.png\">");}
	if ( prate1.indexOf("3.") != -1){$(".rate1").html("<img src=\"../images/per30.png\">");}
	if ( prate1.indexOf("2.") != -1){$(".rate1").html("<img src=\"../images/per20.png\">");}
	if ( prate1.indexOf("1.") != -1){$(".rate1").html("<img src=\"../images/per10.png\">");}
	
	if ( prate2.indexOf("5.") != -1){$(".rate2").html("");}
	if ( prate2.indexOf("4.") != -1){$(".rate2").html("<img src=\"../images/per40.png\">");}
	if ( prate2.indexOf("3.") != -1){$(".rate2").html("<img src=\"../images/per30.png\">");}
	if ( prate2.indexOf("2.") != -1){$(".rate2").html("<img src=\"../images/per20.png\">");}
	if ( prate2.indexOf("1.") != -1){$(".rate2").html("<img src=\"../images/per10.png\">");}

	if ( prate3.indexOf("5.") != -1){$(".rate3").html("");}
	if ( prate3.indexOf("4.") != -1){$(".rate3").html("<img src=\"../images/per40.png\">");}
	if ( prate3.indexOf("3.") != -1){$(".rate3").html("<img src=\"../images/per30.png\">");}
	if ( prate3.indexOf("2.") != -1){$(".rate3").html("<img src=\"../images/per20.png\">");}
	if ( prate3.indexOf("1.") != -1){$(".rate3").html("<img src=\"../images/per10.png\">");}

});


/*
$(window).resize(function(){
    var w = $(window).width();
    var pad = 1024;
    var phone = 767;
    if (pad <= w) {
	    // Tablet 
        $('body').css({
            background: 'red'
        });

    } else if (pad < w && phone <= w){
	    // Phone
        $('body').css({
            background: 'black'
        });
    }
});
*/