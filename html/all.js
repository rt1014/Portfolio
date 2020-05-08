$(function(){
    // ロード時のエフェクト
    function load_effect(){
        $(".wrap").each(function(){
            $(this).addClass("done");
        });
    };
    load_effect();

    // スクロール時のエフェクト
    $(window).scroll(function(){
        $(".scroll1").each(function(){
            let offsettop = $(".scroll1").offset().top;
            let scrolltop = $(window).scrollTop();
            let height = $(window).height();
            if(scrolltop >  offsettop - height){
                $(this).addClass("done");
            };
        });
    });
    // scroll2に加え、TOPに戻るにもエフェクト
    $(window).scroll(function(){
        $(".scroll2").each(function(){
            let offsettop = $(".scroll2").offset().top;
            let scrolltop = $(window).scrollTop();
            let height = $(window).height();
            console.log("o2:",offsettop);
            console.log("s2:",scrolltop);
            console.log("h2:",height);
            if(scrolltop > offsettop - height){
                $(this).addClass("done");
                $(".button-top").addClass("done");
            };
        });
    });
    $(window).scroll(function(){
        $(".scroll3").each(function(){
            let offsettop = $(".scroll3").offset().top;
            let scrolltop = $(window).scrollTop();
            let height = $(window).height();
            console.log("o3:",offsettop);
            console.log("s3:",scrolltop);
            console.log("h3:",height);
            if(scrolltop > offsettop - height){
                $(this).addClass("done");
            };
        });
    });

    //ヘッダーアイコンクリック時の遷移
    $(".Top-Profile").click(function(){
        const position = $(".scroll1").offset().top;
        $("html,body").animate({
            scrollTop:position
        },{
            queue:false
        });
    });
    $(".Top-Portfolio").click(function(){
        const position = $(".scroll2").offset().top;
        $("html,body").animate({
            scrollTop:position
        },{
            queue:false
        });
    });
    $(".Top-Contact").click(function(){
        const position = $(".scroll3").offset().top;
        $("html,body").animate({
            scrollTop:position
        },{
            queue:false
        });
    });

    // 対象にカーソル合わせた際のエフェクト
    $(".Top-Profile").hover(
        function(){
            $(".Top-Profile").css("background-color","#AAAAAA");
        } , function(){
            $(".Top-Profile").css("background-color","transparent");
        }
    );
    $(".Top-Portfolio").hover(
        function(){
            $(this).css("background-color","#AAAAAA");
        } , function(){
            $(this).css("background-color","transparent");
        }
    );
    $(".Top-Contact").hover(
        function(){
            $(this).css("background-color","#AAAAAA");
        } , function(){
            $(this).css("background-color","transparent");
        }
    );
    $(".button-top").hover(
        function(){
            $(this).css("background-color","red");
        } , function(){
            $(this).css("background-color","coral");
        }
    );

    // TOPに戻るクリック時
    $(".button-top").click(function(){
        const position = $(".Top").offset().top;
        $("html,body").animate({
            scrollTop:position
        },{
            queue:false
        });
    });

    // 上にスクロール時、TOPに戻るを消す
    $(window).scroll(function(){
        $(".button-top.done").each(function(){
            let offsettop = $(".scroll2").offset().top;
            let scrolltop = $(window).scrollTop();
            let height = $(window).height();
            if(scrolltop <  offsettop - height){
                $(this).removeClass("done");
            };
        });
    });


});
