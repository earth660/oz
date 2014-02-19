//jQuery start
$(function(){
	$("#menu > ul > a > li#work").hover(function(){
		$("#menu > ul > a > li#work > img").stop(true, false).animate({"opacity":0})
		$("#menu > ul > a > li#work > .text").stop(true, false).animate({"opacity":1})
	},
	function(){
		$("#menu > ul > a > li#work > img").stop(true, false).animate({"opacity":1})
		$("#menu > ul > a > li#work > .text").stop(true, false).animate({"opacity":0})
	});

	$("#menu > ul > a > li#chat").hover(function(){
		$("#menu > ul > a > li#chat > img").stop(true, false).animate({"opacity":0})
		$("#menu > ul > a > li#chat > .text").stop(true, false).animate({"opacity":1})
	},
	function(){
		$("#menu > ul > a > li#chat > img").stop(true, false).animate({"opacity":1})
		$("#menu > ul > a > li#chat > .text").stop(true, false).animate({"opacity":0})
	});

	$("#menu > ul > a > li#form").hover(function(){
		$("#menu > ul > a > li#form > img").stop(true, false).animate({"opacity":0})
		$("#menu > ul > a > li#form > .text").stop(true, false).animate({"opacity":1})
	},
	function(){
		$("#menu > ul > a > li#form > img").stop(true, false).animate({"opacity":1})
		$("#menu > ul > a > li#form > .text").stop(true, false).animate({"opacity":0})
	});
	

	$("#menu > ul > a > li#leading").hover(function(){
		$("#menu > ul > a > li#leading > img").stop(true, false).animate({"opacity":0})
		$("#menu > ul > a > li#leading > .text").stop(true, false).animate({"opacity":1})
	},
	function(){
		$("#menu > ul > a > li#leading > img").stop(true, false).animate({"opacity":1})
		$("#menu > ul > a > li#leading > .text").stop(true, false).animate({"opacity":0})
	});

	$("#menu > ul > a > li#search").hover(function(){
		$("#menu > ul > a > li#search > img").stop(true, false).animate({"opacity":0})
		$("#menu > ul > a > li#search > .text").stop(true, false).animate({"opacity":1})
	},
	function(){
		$("#menu > ul > a > li#search > img").stop(true, false).animate({"opacity":1})
		$("#menu > ul > a > li#search > .text").stop(true, false).animate({"opacity":0})
	});

	$("#menu > ul > a > li#allowance").hover(function(){
		$("#menu > ul > a > li#allowance > img").stop(true, false).animate({"opacity":0})
		$("#menu > ul > a > li#allowance > .text").stop(true, false).animate({"opacity":1})
	},
	function(){
		$("#menu > ul > a > li#allowance > img").stop(true, false).animate({"opacity":1})
		$("#menu > ul > a > li#allowance > .text").stop(true, false).animate({"opacity":0})
	});

	$("#menu > ul > a > li#peramon").hover(function(){
		$("#menu > ul > a > li#peramon > img").stop(true, false).animate({"opacity":0})
		$("#menu > ul > a > li#peramon > .text").stop(true, false).animate({"opacity":1})
	},
	function(){
		$("#menu > ul > a > li#peramon > img").stop(true, false).animate({"opacity":1})
		$("#menu > ul > a > li#peramon > .text").stop(true, false).animate({"opacity":0})
	});

	$("#menu > ul > a > li#sche").hover(function(){
		$("#menu > ul > a > li#sche > img").stop(true, false).animate({"opacity":0})
		$("#menu > ul > a > li#sche > .text").stop(true, false).animate({"opacity":1})
	},
	function(){
		$("#menu > ul > a > li#sche > img").stop(true, false).animate({"opacity":1})
		$("#menu > ul > a > li#sche > .text").stop(true, false).animate({"opacity":0})
	});

});
