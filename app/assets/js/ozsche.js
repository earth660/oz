$(function(){
		$(".quelist").toggle(function(){
			$(this).not(":animated").animate({
			"height":"220px"},500, "easeOutBack")
		},
		function(){
			$(this).not(":animated").animate({
			"height":"80px"},200)
		});

//先生が書いたコード↓
		var kyoka = $("p#maru").text();
		console.log(kyoka);
		
		if( kyoka.indexOf("英") != -1){
			$("p.kyoka2").css("background-color","#FF6FCF");
		}
		
});

$(function(){
	var i = 128; //
	var n = 2;

	$(".coin").click(function(){
		$("span").text( i++ ).addClass("magictime puffIn")
		setTimeout(function(){
			$("span").removeClass("magictime puffIn")
		}, 700);
	});
	
	
	$(".coin2").click(function(){
		$(".list1").stop().animate({"opacity":0.3},"slow"),
		$("span").text( i+=2 ).addClass("magictime puffIn"),
		setTimeout(function(){
			$("span").removeClass("magictime puffIn")
		}, 700)
		$(this).addClass('magictime holeOut'),
		$(".c1").animate({"opacity":1}),
		$(".list2").css({"z-index":100}),
		$(".chara").animate({"opacity":1},1000)
		$("span.num").text( n-=1 ).addClass("magictime puffIn")
		setTimeout(function(){
			$(".chara").animate({"opacity":0},1000)
		}, 1700)
	});

	$(".c1").click(function(){
		$("span").text( i-=2 ).addClass("magictime puffIn"),
		setTimeout(function(){
			$("span").removeClass("magictime puffIn")
		}, 700)
		$(this).animate({"opacity":0}),
		$(".list1").stop().animate({"opacity":1})
		$("span.num").text( n+=1 ).addClass("magictime puffIn")
		setTimeout(function(){
			$(".coin2").removeClass('magictime holeOut').addClass('magictime holeIn')
		}, 500)

	});

	$(".coin3").click(function(){
		$("span").text( i+=3 ).addClass("magictime puffIn"),
		setTimeout(function(){
			$("span").removeClass("magictime puffIn")
		}, 700)
		$(this).addClass('magictime holeOut'),
		$(".c2").animate({"opacity":1}),
		setTimeout(function(){
			$(".list2").stop().animate({"opacity":0.3})
		}, 500)
		$(".chara").animate({"opacity":1},1000)
		$(".arrow_box").html("おつかれ！")
		$("span.num").text( n-=1 ).addClass("magictime puffIn")
		setTimeout(function(){
			$(".chara").animate({"opacity":0},1000)
		}, 1700)

	});

	$(".c2").click(function(){
		$("span").text( i-=3 ).addClass("magictime puffIn"),
		setTimeout(function(){
			$("span").removeClass("magictime puffIn")
		}, 700)
		$(this).animate({"opacity":0}),
		$(".list2").stop().animate({"opacity":1})
		$(".num").text( n+=1 ).addClass("magictime puffIn")
		setTimeout(function(){
			$(".coin3").removeClass('magictime holeOut').addClass('magictime holeIn')
		}, 500)
	});	

});/* ready */
