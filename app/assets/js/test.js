//sub > english, other, japanese, society, scinece, mathematica
//データベースから各データを引っこ抜いて表示する

$('ul#teachers > li').each(function(i){
		$(this).attr('class',(i+1));
});

$("#teachers>li:nth-of-type(1)").hover(function(){
	$("ul#prof>li.img").html("<img src=\"../images/1.png\">")
	$("ul#prof>li.name").html("辻大地")
	$("ul#prof>li.univ").html("同志社大学<br />工学部機械工学科")
	$("ul#prof>li.sub").html("<div class=\"english\"></div><div class=\"mathematica\"></div>")
	$("ul#prof>li.station").html("JR京都駅")
	$("ul#prof>li.car").html("あり")
	$("ul#prof>li.money").html("2000円")
	$("ul#prof>li.message").html("無理なく楽しく、<br />勉強が好きになれるような指導を目指します")
});

$("#teachers>li:nth-of-type(2)").hover(function(){
	$("ul#prof>li.img").html("<img src=\"../images/2.png\">")
	$("ul#prof>li.name").html("東川諒央")
	$("ul#prof>li.univ").html("仏教大学<br />情報システム学科")
	$("ul#prof>li.sub").html("<div class=\"mathematica\"></div><div class=\"society\"></div>")
	$("ul#prof>li.station").html("JR西大路駅")
	$("ul#prof>li.car").html("なし")
	$("ul#prof>li.money").html("2500円")
	$("ul#prof>li.message").html("無理なく楽しく、<br />勉強が好きになれるような指導を目指します")
});

$("#teachers>li:nth-of-type(3)").hover(function(){
	$("ul#prof>li.img").html("<img src=\"../images/3.png\">")
	$("ul#prof>li.name").html("西出俊")
	$("ul#prof>li.univ").html("京都大学<br />機会工学部ロボット工学科")
	$("ul#prof>li.sub").html("<div class=\"japanese\"></div><div class=\"english\"></div>")
	$("ul#prof>li.station").html("京阪出町柳駅")
	$("ul#prof>li.car").html("なし")
	$("ul#prof>li.money").html("2500円")
	$("ul#prof>li.message").html("無理なく楽しく、<br />勉強が好きになれるような指導を目指します")
});

$("#teachers>li:nth-of-type(4)").hover(function(){
	$("ul#prof>li.img").html("<img src=\"../images/4.png\">")
	$("ul#prof>li.name").html("吉田綾華")
	$("ul#prof>li.univ").html("立命館大学<br />")
	$("ul#prof>li.sub").html("<div class=\"mathematica\"></div>")
	$("ul#prof>li.station").html("阪急四条大宮駅")
	$("ul#prof>li.car").html("なし")
	$("ul#prof>li.money").html("2000円")
	$("ul#prof>li.message").html("無理なく楽しく、<br />勉強が好きになれるような指導を目指します")
});

$("#teachers>li:nth-of-type(5)").hover(function(){
	$("ul#prof>li.img").html("<img src=\"../images/5.png\">")
	$("ul#prof>li.name").html("中山智博")
	$("ul#prof>li.univ").html("京都美術工芸大学<br />工芸デザインコース")
	$("ul#prof>li.sub").html("<div class=\"other\"></div>")
	$("ul#prof>li.station").html("京阪本線淀駅")
	$("ul#prof>li.car").html("あり")
	$("ul#prof>li.money").html("2500円")
	$("ul#prof>li.message").html("無理なく楽しく、<br />勉強が好きになれるような指導を目指します")
});

$("#teachers>li:nth-of-type(6)").hover(function(){
	$("ul#prof>li.img").html("<img src=\"../images/6.png\">")
	$("ul#prof>li.name").html("福井洋子")
	$("ul#prof>li.univ").html("立命館大学")
	$("ul#prof>li.sub").html("<div class=\"society\"></div><div class=\"science\"></div>")
	$("ul#prof>li.station").html("阪急四条大宮駅")
	$("ul#prof>li.car").html("なし")
	$("ul#prof>li.money").html("2000円")
	$("ul#prof>li.message").html("無理なく楽しく、<br />勉強が好きになれるような指導を目指します")
});

$("#teachers>li:nth-of-type(7)").hover(function(){
	$("ul#prof>li.img").html("<img src=\"../images/7.png\">")
	$("ul#prof>li.name").html("Jango")
	$("ul#prof>li.univ").html("京都大学")
	$("ul#prof>li.sub").html("<div class=\"english\"></div>")
	$("ul#prof>li.station").html("京阪出町柳駅")
	$("ul#prof>li.car").html("あり")
	$("ul#prof>li.money").html("2500円")
	$("ul#prof>li.message").html("無理なく楽しく、<br />勉強が好きになれるような指導を目指します")
});

$("#teachers>li:nth-of-type(8)").hover(function(){
	$("ul#prof>li.img").html("<img src=\"../images/8.png\">")
	$("ul#prof>li.name").html("佐藤修一")
	$("ul#prof>li.univ").html("京都大学<br />")
	$("ul#prof>li.sub").html("<div class=\"society\"></div><div class=\"english\"></div>")
	$("ul#prof>li.station").html("JR京都駅")
	$("ul#prof>li.car").html("あり")
	$("ul#prof>li.money").html("2500円")
	$("ul#prof>li.message").html("無理なく楽しく、<br />勉強が好きになれるような指導を目指します")
});

$("#teachers>li:nth-of-type(9)").hover(function(){
	$("ul#prof>li.img").html("<img src=\"../images/9.png\">")
	$("ul#prof>li.name").html("鳩山千夏")
	$("ul#prof>li.univ").html("立命館大学<br />")
	$("ul#prof>li.sub").html("<div class=\"society\"></div><div class=\"japanese\"></div>")
	$("ul#prof>li.station").html("阪急四条大宮駅")
	$("ul#prof>li.car").html("なし")
	$("ul#prof>li.money").html("2000円")
	$("ul#prof>li.message").html("無理なく楽しく、<br />勉強が好きになれるような指導を目指します")
});

$("#teachers>li:nth-of-type(10)").hover(function(){
	$("ul#prof>li.img").html("<img src=\"../images/10.png\">")
	$("ul#prof>li.name").html("岩渕直也")
	$("ul#prof>li.univ").html("同志社大学<br />工学部機械工学科")
	$("ul#prof>li.sub").html("<div class=\"english\"></div><div class=\"mathematica\"></div>")
	$("ul#prof>li.station").html("JR京都駅")
	$("ul#prof>li.car").html("あり")
	$("ul#prof>li.money").html("2500円")
	$("ul#prof>li.message").html("無理なく楽しく、<br />勉強が好きになれるような指導を目指します")
});

$("#teachers>li:nth-of-type(11)").hover(function(){
	$("ul#prof>li.img").html("<img src=\"../images/11.png\">")
	$("ul#prof>li.name").html("Michael")
	$("ul#prof>li.univ").html("京都大学")
	$("ul#prof>li.sub").html("<div class=\"science\"></div>")
	$("ul#prof>li.station").html("京阪出町柳駅")
	$("ul#prof>li.car").html("あり")
	$("ul#prof>li.money").html("2000円")
	$("ul#prof>li.message").html("無理なく楽しく、<br />勉強が好きになれるような指導を目指します")
});

$("#teachers>li:nth-of-type(12)").hover(function(){
	$("ul#prof>li.img").html("<img src=\"../images/12.png\">")
	$("ul#prof>li.name").html("米澤友加里")
	$("ul#prof>li.univ").html("京都大学")
	$("ul#prof>li.sub").html("<div class=\"society\"></div><div class=\"science\"></div>")
	$("ul#prof>li.station").html("京阪出町柳駅")
	$("ul#prof>li.car").html("なし")
	$("ul#prof>li.money").html("2000円")
	$("ul#prof>li.message").html("無理なく楽しく、<br />勉強が好きになれるような指導を目指します")
});


while($("ul#teachers").children("li").length){
	$("ul#teachers").children("li:lt(4)")
	.wrapAll('<div class="line"></div>')
}

$("ul#teachers>div.line").hover(function(e){
	$(this).next("ul#teachers>div.line").animate({"margin-top":"350px"})
	setTimeout(function(){
		$(this).next("ul#teachers>div.line")
		.stop(true,false).animate({"margin-top":"350px"})
	},10)
	$(".cover").fadeIn(1000).css({"top":($(this).offset().top + 170)})
},
function(){
	$(this).next("ul#teachers>div.line").stop(true,false).animate({"margin-top":"30px"})
	$(".cover").stop(true,false).fadeOut(100)
});

$(".con").hover(
function(){
	$(this).css({"opacity":0}),
	$('.pp').css({"opacity":1}),
	$('.g').css({"opacity":1}),
	$('.b').css({"opacity":1}),
	$('.r').css({"opacity":1}),
	$('.y').css({"opacity":1}),
	$('.p').css({"opacity":1})	
},
function(){
	$(this).css({"opacity":1})
	$('.pp').css({"opacity":0})
	$('.g').css({"opacity":0}),
	$('.b').css({"opacity":0}),
	$('.r').css({"opacity":0}),
	$('.y').css({"opacity":0}),
	$('.p').css({"opacity":0})
	$('.naka').css({"opacity":0})

});

$(".pp").hover(function(){
 	$(".con").css({"opacity":0}),
 	$(".naka").css({"opacity":1}),
 	$(".naka").html("<div style=\"font-size:20px; padding-top:20px;margin-bottom:-20px;\">その他</div><br />の先生<br />を検索"),
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
	$('.naka').css({"opacity":0})
});

$(".pp").click(function(){
	$(".1, .2, .3, .4, .6, .7, .8, .9, .10, .11, .12").fadeOut(100)
});





$(".g").hover(function(){
 	$(".con").css({"opacity":0}),
  	$(".naka").css({"opacity":1}),
   	$(".naka").html("<div style=\"font-size:20px; padding-top:20px;margin-bottom:-20px;\">理科</div><br />の先生<br />を検索"),
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
	$('.naka').css({"opacity":0})
});

$(".b").hover(function(){
 	$(".con").css({"opacity":0}),
  	$(".naka").css({"opacity":1}),
 	$(".naka").html("<div style=\"font-size:20px; padding-top:20px;margin-bottom:-20px;\">数学</div><br />の先生<br />を検索"),
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
	$('.naka').css({"opacity":0})
  	
});

$(".r").hover(function(){
 	$(".con").css({"opacity":0}),
  	$(".naka").css({"opacity":1}), 
 	$(".naka").html("<div style=\"font-size:20px; padding-top:20px;margin-bottom:-20px;\">国語</div><br />の先生<br />を検索"),
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
	$('.naka').css({"opacity":0})

});

$(".y").hover(function(){
 	$(".con").css({"opacity":0}),
  	$(".naka").css({"opacity":1}),
 	$(".naka").html("<div style=\"font-size:20px; padding-top:20px;margin-bottom:-20px;\">社会</div><br />の先生<br />を検索"),
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
	$('.naka').css({"opacity":0})

});

$(".p").hover(function(){
 	$(".con").css({"opacity":0}),
  	$(".naka").css({"opacity":1}), 
 	$(".naka").html("<div style=\"font-size:20px; padding-top:20px;margin-bottom:-20px;\">英語</div><br />の先生<br />を検索"),
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
	$('.naka').css({"opacity":0})
});

/* ↑教科選択をhoverしたときの動作 */


