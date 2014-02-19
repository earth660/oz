			$("#btn").hover(
			function(){
/* 			hoverしたら */
				$(".ch-info").css({"opacity":1}),
				$(".ch-item7").css({"opacity":0})
			},
			function(){
/* 			hover外れたら */
				$(".ch-info").css({"opacity":0}),
				$(".ch-item7").css({"opacity":1})
			}
		  );

			$("#btn2").hover(
			function(){
				$(".ch-info2").css({"opacity":1}),
				$(".ch-item7").css({"opacity":0});
			},
			function(){
				$(".ch-info2").css({"opacity":0}),
				$(".ch-item7").css({"opacity":1});
			}
		  );

			$("#btn3").hover(
			function(){
				$(".ch-info3").css({"opacity":1}),
				$(".ch-item7").css({"opacity":0});
			},
			function(){
				$(".ch-info3").css({"opacity":0}),
				$(".ch-item7").css({"opacity":1});
			}
		  );

			$("#btn4").hover(
			function(){
				$(".ch-info4").css({"opacity":1}),
				$(".ch-item7").css({"opacity":0});
			},
			function(){
				$(".ch-info4").css({"opacity":0}),
				$(".ch-item7").css({"opacity":1});
			}
		  );

			$("#btn5").hover(
			function(){
				$(".ch-info5").css({"opacity":1}),
				$(".ch-item7").css({"opacity":0});
			},
			function(){
				$(".ch-info5").css({"opacity":0}),
				$(".ch-item7").css({"opacity":1});
			}
		  );

			$("#btn6").hover(
			function(){
				$(".ch-info6").css({"opacity":1}),
				$(".ch-item7").css({"opacity":0});
			},
			function(){
				$(".ch-info6").css({"opacity":0}),
				$(".ch-item7").css({"opacity":1});
			}
		  );

	$(".l, .m, .s").hover(function(e){
		$(this).css({"top":($(this).offset().top)})
	});

	$(".ch-item7").hover(function(){
		$(".ch-info7").stop(true, false).animate({"opacity":1}, 0)
		$(".ch-info7").stop(true, false).transition({scale:1.1})
	},
	function(){
		$(".ch-info7").transition({scale:0}).animate({"opacity":0});
	});

	$(".ch-info7").click(function(){
		$(".ch-item7").fadeOut(10)
		$(".ch-logo").css({"opacity":0})
		$("#pop-cover").css({"z-index": 500, "background": "#000"})
		$("#pop-logo").css({"z-index": 700})
		$("#LOGO").css({"z-index": 100})
		$("#logo-L").animate({ rotate: '-30deg', "top": "35px", "left": "-250px"})
		$("#logo-R").animate({ rotate: '-30deg', "top": "20px", "left": "140px"})
		$(".e-L").animate({"top":"150px", "left":"60px"})
		$(".e-R").animate({"top":"85px", "left":"130px"})
		$("#login").animate({"opacity":1 ,"width": "330px", "right":"-215px" })
		$(".login").fadeIn()
	});
	
	
	$("#pop-cover").click(function(){
		$(".ch-logo").animate({"opacity":1},"slow")
		$(this).css({"z-index": -500, "background": "#fff"})
		$("#pop-logo").animate({"z-index": 0})
		$("#logo-L").animate({ rotate: '0deg', "top": "21px", "left": "-100px" })
		$("#logo-R").animate({ rotate: '0deg', "top": "25px", "left": "-10px"})
		$(".e-L").animate({"top":"128px", "left":"72px"})
		$(".e-R").animate({"top":"122px", "left":"112px"})
		$("#login").animate({"opacity":0,"width": "30px", "right":"-65px"})
		$(".new").css({"display":"none"})
		$(".ch-item7").fadeIn()
	});

	function changeInputType(inputId, type) {
	    var input = $("#" + inputId);
	    $(input).replaceWith($("<input />").val(input.val()).attr("placeholder", input.attr("placeholder")).attr("id", inputId).attr("type", type));
	}
	
	$("#show-ps").change(function() {
	    if ($(this).attr("checked")) {
	        changeInputType("password", "text");
	    } else {
	        changeInputType("password", "password");
	    }
	});
	
	if ($("#show-ps").attr("checked")) {
	    changeInputType("password", "text");
	}

	$("#newshow-ps").change(function() {
	    if ($(this).attr("checked")) {
	        changeInputType("password", "text");
	    } else {
	        changeInputType("password", "password");
	    }
	});
	
	if ($("#newshow-ps").attr("checked")) {
	    changeInputType("password", "text");
	}


	function newuser(){
		$(".login").fadeOut()
		$(".new").delay(700).fadeIn()
		$('#logo-L').animate({
			"rotate": '30deg',
			"rotateX": '180deg',
			"top": "20px"
		});
		$('#logo-R').animate({
			"rotate": '30deg',
			"rotateX": '-180deg',
			"top": "35px"
		});
		
		$("#pop-cover").addClass("new-cover");
		
		$(".new-cover").click(function(){
			$('#logo-L').animate({
				"rotateX": '0deg',
				"top": "21px"
			});
			$('#logo-R').animate({
				"rotateX": '0deg',
				"top": "25px"
			});

			$(".e-L").animate({"top":"128px", "left":"72px"})
			$(".e-R").animate({"top":"122px", "left":"112px"})
		});	
	}