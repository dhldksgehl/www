$(document).ready(function () {
    var op = false; //네비가 열려있으면(true) , 닫혀있으면(false)

     // var op = false; //네비가 열려있으면(true) , 닫혀있으면(false)
     $('.menu_ham').toggle(function () {
        $('#headerArea').addClass('mn_open');
        $('#headerArea #gnb').slideDown();
        $('.menu_open').addClass('mn_open');

    }, function () {
        $('#headerArea #gnb').slideUp();
        $('.menu_open').removeClass('mn_open');
        $('#headerArea').removeClass('mn_open');
    });

    /* 모바일 헤더 */
    /*1024일때 모바일 네비로 변경*/
    var current = 0;
    $(window).resize(function () {
        var screenSize = $(window).width();
        var scroll = $(window).scrollTop();

        if (screenSize > 1024) {
            $("#headerArea #gnb").show();
            current = 1;
            if (scroll > 600) {
                $('#headerArea').css('background', 'rgba(0,0,0,.8)');

            } else {
                $('#headerArea').css('background', 'none');
            }
        }
        if (current == 1 && screenSize <= 1024) {
            $("#headerArea #gnb").hide();
            current = 0;
            $('#headerArea').css('background', 'rgba(0,0,0,.8)');
        }
    });
  



    // wide pc gnb scroll event
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        var winSize = $(window).width();

        //$('.text').text(scroll);          
        if (winSize > 1024) {
            if (scroll > 600) {
                $('#headerArea').css('background', 'rgba(0,0,0,.8)');

            } else {
                $('#headerArea').css('background', 'none');
            }
        }else{
            $('#headerArea').css('background', 'rgba(0,0,0,.8)');
        }
    });



    $('.down').click(function(){
        screenHeight = $(window).height();
        $('html,body').animate({'scrollTop':screenHeight}, 1000);
    });


    
    //topmove
    $('.topMove').hide();
    $(window).on('scroll', function () {
        let scroll = $(window).scrollTop();
        if (scroll > 500) {
            $('.topMove').show();
        } else {
            $('.topMove').hide();
        }
    });
    $('.topMove').click(function (e) {
        e.preventDefault();
        $("html,body").stop().animate({
            "scrollTop": 0
        }, 800);
    });

});