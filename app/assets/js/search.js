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
	$("ul#prof>li.img").html("<img src=\"/assets/1.png\" width=\"99px\"; height=\"99px\";>")
	$("ul#prof>li.name").html("辻大地")
	$("ul#prof>li.univ").html("同志社大学<br />工学部機械工学科")
	$("ul#prof>li.sub").html("<div class=\"english\"></div><div class=\"mathematica\"></div>")
	$("ul#prof>li.station").html("JR京都駅")
	$("ul#prof>li.car").html("あり")
	$("ul#prof>li.money").html("2000円")
	$("ul#prof>li.message").html("無理なく楽しく、<br />勉強が好きになれるような指導を目指します")
});

$(".2").hover(function(){
	$("ul#prof>li.img").html("<img src=\"/assets/2.png\" width=\"99px\"; height=\"99px\";>")
	$("ul#prof>li.name").html("東川諒央")
	$("ul#prof>li.univ").html("仏教大学<br />情報システム学科")
	$("ul#prof>li.sub").html("<div class=\"mathematica\"></div><div class=\"society\"></div>")
	$("ul#prof>li.station").html("JR西大路駅")
	$("ul#prof>li.car").html("なし")
	$("ul#prof>li.money").html("2500円")
	$("ul#prof>li.message").html("無理なく楽しく、<br />勉強が好きになれるような指導を目指します")
});

$(".3").hover(function(){
	$("ul#prof>li.img").html("<img src=\"/assets/3.png\" width=\"99px\"; height=\"99px\";>")
	$("ul#prof>li.name").html("西出俊")
	$("ul#prof>li.univ").html("京都大学<br />機会工学部ロボット工学科")
	$("ul#prof>li.sub").html("<div class=\"japanese\"></div><div class=\"english\"></div>")
	$("ul#prof>li.station").html("京阪出町柳駅")
	$("ul#prof>li.car").html("なし")
	$("ul#prof>li.money").html("2500円")
	$("ul#prof>li.message").html("無理なく楽しく、<br />勉強が好きになれるような指導を目指します")
});

$(".4").hover(function(){
	$("ul#prof>li.img").html("<img src=\"/assets/4.png\" width=\"99px\"; height=\"99px\";>")
	$("ul#prof>li.name").html("吉田綾華")
	$("ul#prof>li.univ").html("立命館大学<br />")
	$("ul#prof>li.sub").html("<div class=\"mathematica\"></div>")
	$("ul#prof>li.station").html("阪急四条大宮駅")
	$("ul#prof>li.car").html("なし")
	$("ul#prof>li.money").html("2000円")
	$("ul#prof>li.message").html("無理なく楽しく、<br />勉強が好きになれるような指導を目指します")
});

$(".5").hover(function(){
	$("ul#prof>li.img").html("<img src=\"/assets/5.png\" width=\"99px\"; height=\"99px\";>")
	$("ul#prof>li.name").html("中山智博")
	$("ul#prof>li.univ").html("京都美術工芸大学<br />工芸デザインコース")
	$("ul#prof>li.sub").html("<div class=\"other\"></div>")
	$("ul#prof>li.station").html("京阪本線淀駅")
	$("ul#prof>li.car").html("あり")
	$("ul#prof>li.money").html("2500円")
	$("ul#prof>li.message").html("無理なく楽しく、<br />勉強が好きになれるような指導を目指します")
});

$(".6").hover(function(){
	$("ul#prof>li.img").html("<img src=\"/assets/6.png\" width=\"99px\"; height=\"99px\";>")
	$("ul#prof>li.name").html("福井洋子")
	$("ul#prof>li.univ").html("立命館大学")
	$("ul#prof>li.sub").html("<div class=\"society\"></div><div class=\"science\"></div>")
	$("ul#prof>li.station").html("阪急四条大宮駅")
	$("ul#prof>li.car").html("なし")
	$("ul#prof>li.money").html("2000円")
	$("ul#prof>li.message").html("無理なく楽しく、<br />勉強が好きになれるような指導を目指します")
});

$(".7").hover(function(){
	$("ul#prof>li.img").html("<img src=\"/assets/7.png\" width=\"99px\"; height=\"99px\";>")
	$("ul#prof>li.name").html("Jango")
	$("ul#prof>li.univ").html("京都大学")
	$("ul#prof>li.sub").html("<div class=\"english\"></div>")
	$("ul#prof>li.station").html("京阪出町柳駅")
	$("ul#prof>li.car").html("あり")
	$("ul#prof>li.money").html("2500円")
	$("ul#prof>li.message").html("無理なく楽しく、<br />勉強が好きになれるような指導を目指します")
});

$(".8").hover(function(){
	$("ul#prof>li.img").html("<img src=\"/assets/8.png\" width=\"99px\"; height=\"99px\";>")
	$("ul#prof>li.name").html("佐藤修一")
	$("ul#prof>li.univ").html("京都大学<br />")
	$("ul#prof>li.sub").html("<div class=\"society\"></div><div class=\"english\"></div>")
	$("ul#prof>li.station").html("JR京都駅")
	$("ul#prof>li.car").html("あり")
	$("ul#prof>li.money").html("2500円")
	$("ul#prof>li.message").html("無理なく楽しく、<br />勉強が好きになれるような指導を目指します")
});

$(".9").hover(function(){
	$("ul#prof>li.img").html("<img src=\"/assets/9.png\"width=\"99px\"; height=\"99px\";>")
	$("ul#prof>li.name").html("鳩山千夏")
	$("ul#prof>li.univ").html("立命館大学<br />")
	$("ul#prof>li.sub").html("<div class=\"society\"></div><div class=\"japanese\"></div>")
	$("ul#prof>li.station").html("阪急四条大宮駅")
	$("ul#prof>li.car").html("なし")
	$("ul#prof>li.money").html("2000円")
	$("ul#prof>li.message").html("無理なく楽しく、<br />勉強が好きになれるような指導を目指します")
});

$(".10").hover(function(){
	$("ul#prof>li.img").html("<img src=\"/assets/10.png\" width=\"99px\"; height=\"99px\"; >")
	$("ul#prof>li.name").html("岩渕直也")
	$("ul#prof>li.univ").html("同志社大学<br />工学部機械工学科")
	$("ul#prof>li.sub").html("<div class=\"english\"></div><div class=\"mathematica\"></div>")
	$("ul#prof>li.station").html("JR京都駅")
	$("ul#prof>li.car").html("あり")
	$("ul#prof>li.money").html("2500円")
	$("ul#prof>li.message").html("無理なく楽しく、<br />勉強が好きになれるような指導を目指します")
});

$(".11").hover(function(){
	$("ul#prof>li.img").html("<img src=\"/assets/11.png\" width=\"99px\"; height=\"99px\";>")
	$("ul#prof>li.name").html("Michael")
	$("ul#prof>li.univ").html("京都大学")
	$("ul#prof>li.sub").html("<div class=\"science\"></div>")
	$("ul#prof>li.station").html("京阪出町柳駅")
	$("ul#prof>li.car").html("あり")
	$("ul#prof>li.money").html("2000円")
	$("ul#prof>li.message").html("無理なく楽しく、<br />勉強が好きになれるような指導を目指します")
});

$(".12").hover(function(){
	$("ul#prof>li.img").html("<img src=\"/assets/12.png\" width=\"99px\"; height=\"99px\";>")
	$("ul#prof>li.name").html("米澤友加里")
	$("ul#prof>li.univ").html("京都大学")
	$("ul#prof>li.sub").html("<div class=\"society\"></div><div class=\"science\"></div>")
	$("ul#prof>li.station").html("京阪出町柳駅")
	$("ul#prof>li.car").html("なし")
	$("ul#prof>li.money").html("2000円")
	$("ul#prof>li.message").html("無理なく楽しく、<br />勉強が好きになれるような指導を目指します")
});


$(".con").hover(function(){
	$(".con").css({"opacity":0, "z-index":-120}),
	$(".man").css({"z-index":120}),
	$(".woman").css({"z-index":120}),
	$('.pp').css({"opacity":1}),
	$('.g').css({"opacity":1}),
	$('.b').css({"opacity":1}),
	$('.r').css({"opacity":1}),
	$('.y').css({"opacity":1}),
	$('.p').css({"opacity":1})
},
function(){
	$(".con").css({"opacity":1,"z-index":10})
/*
	$(".man").css({"z-index":-120}),
	$(".woman").css({"z-index":-120}),
*/
	$('.pp').css({"opacity":0})
	$('.g').css({"opacity":0}),
	$('.b').css({"opacity":0}),
	$('.r').css({"opacity":0}),
	$('.y').css({"opacity":0}),
	$('.p').css({"opacity":0}),
	$('.naka').css({"opacity":1})
});


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

$(".man").click(function(){
	if( $(this).css({"opacity":1, "z-index":0}) ) {
		$(".woman").animate({"opacity":0.2})
	}
});

$(".woman").click(function(){
	if( $(this).css({"opacity":1 ,"z-index":0}) ) {
		$(".man").animate({"opacity":0.2})
	}
});


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
