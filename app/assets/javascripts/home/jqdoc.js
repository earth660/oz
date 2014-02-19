$(".menu-item").hover(function(){
	$(this).children("span").stop(true, false).animate({"opacity":1})
	$(this).next(".menu-item").children("img").stop(true, false).animate({"width":"90px", "margin-top":"20px"})
	$(this).children("img").stop(true, false).animate({"width":"100px", "margin-top":"-10px"})
	$(this).prev(".menu-item").children("img").stop(true, false).animate({"width":"90px", "margin-top":"20px"})
}, function(){
	$(this).children("span").stop(true, false).animate({"opacity":0})
	$(this).children("img").stop(true, false).animate({"width":"70px","margin-top":"30px"})
	$(this).next(".menu-item").children("img").stop(true, false).animate({"width":"70px", "margin-top":"30px"})
	$(this).prev(".menu-item").children("img").stop(true, false).animate({"width":"70px", "margin-top":"30px"})
});

