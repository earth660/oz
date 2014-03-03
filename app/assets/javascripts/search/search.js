	function NextFocusMove(object, targetName, maxLength)
		{
			if(object.value.length >= maxLength)
				object.form.elements[targetName].focus();
		}
		
	function PrevFocusMove(object, targetName, str)
		{
			if( str.length == 0 ){
				fc(1)
			} else if (str.length == 4) {
				$(".maru").animate({"margin-left":"0px","opacity":1,"z-index":100},500)
			}
		}

	function fc(num){
			document.fcset.elements[num].focus();
		}

/*　↓ 自動判定で使用予定 */	
/* 	郵便番号上が3文字以上の時に、 address フォームの値を old に代入 */

	function valck1(object, maxLength)
		{
			
			AjaxZip3.zip2addr('zipcode1','zipcode2','address','address')

				if(object.value.length >= maxLength){
					var zipcode1 = $('[name=address]').val();
					console.log(zipcode1);
				}
			
		}
		
	function valck2()
		{
			AjaxZip3.zip2addr('zipcode1','zipcode2','address','address')
			var zipcode2  = $('[name=address]').val();
			console.log(zipcode2);
		}
		
/*　↑ 自動判定で使用予定 */	


/*  ↓ optionの設定 */

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

/* 先生をhoverした時の設定 */
while($(".user-wrap").children("div.teacher").length){
	$(".user-wrap").children("div.teacher:lt(4)").wrapAll('<div class="line"></div>')
}

$(".line").hover(function(e){
	$(this).next(".line").stop(true, false).animate({"margin-top":360})
	$(".cover").fadeIn(1000).css({"top":($(this).offset().top + 180)})
	$(".rate").fadeIn(1000).css({"top":($(this).offset().top + 180)})
},
function(){
	$(this).next(".line").animate({"margin-top":0})
	$(".cover").fadeOut(100)
	$(".rate").fadeOut(100)

});
