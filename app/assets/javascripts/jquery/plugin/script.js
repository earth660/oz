$("#btn").hover(
    function(){
        /* hoverしたら */
        $(".ch-info").css({"opacity":1}),
        $(".ch-item7").css({"opacity":0})
    },
    function(){
        /* hover外れたら */
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
        $(".ch-item7").css({"opacity":0});
    }
);

$(".l, .m, .s").hover(function(e){
    $(this).css({"top":($(this).offset().top)})
});

$(".ch-info7").click(function(){
    $(".ch-logo").css({"opacity":0})
    $("#pop-cover").css({"z-index": 500, "background": "#000"})
    $("#pop-logo").css({"z-index": 700})
    $("#logo-L").animate({ rotate: '-30deg', "top": "35px", "left": "-250px" })
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
    $("#logo-L").animate({ rotate: '0deg', "top": "17px", "left": "-102px" })
    $("#logo-R").animate({ rotate: '0deg', "top": "21px", "left": "-12px"})
    $(".e-L").animate({"top":"128px", "left":"70px"})
    $(".e-R").animate({"top":"122px", "left":"110px"})
    $("#login").animate({"opacity":0,"width": "30px", "right":"-65px"})
    $(".new").css({"display":"none"})
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
    $(".new").delay(500).fadeIn()
    $('#logo-L').animate({
        rotate: '30deg',
        rotateX: '180deg',
        "top": "20px"
    });
    $('#logo-R').animate({
        rotate: '30deg',
        rotateX: '-180deg',
        "top": "35px"
    });

    $("#pop-cover").addClass("new-cover");

    $(".new-cover").click(function(){
        $('#logo-L').animate({
            rotateX: '0deg',
            "top": "17px"
        });
        $('#logo-R').animate({
            rotateX: '0deg',
            "top": "21px"
        });

        $(".e-L").animate({"top":"128px", "left":"70px"})
        $(".e-R").animate({"top":"122px", "left":"110px"})
    });
}
