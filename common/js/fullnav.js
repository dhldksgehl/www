$(document).ready(function () {

    //2depth 열기/닫기
    $('ul.dropdownmenu').hover(
        function () {
            $('ul.dropdownmenu li.menu ul').fadeIn('normal', function () {
                $(this).stop();
            }); //모든 서브를 다 열어라
            $('#headerArea').animate({
                height: 400
            }, 'fast').clearQueue();
        },
        function () {
            $('ul.dropdownmenu li.menu ul').fadeOut('fast'); //모든 서브를 다 닫아라
            $('#headerArea').animate({
                height: 240
            }, 'normal').clearQueue();
        });

    //1depth 효과
    $('ul.dropdownmenu li.menu').hover(
        function () {
            $('.depth1', this).css('color', 'red');
        },
        function () {
            $('.depth1', this).css('color', '#333');
        });

    //tab 처리
    $('ul.dropdownmenu li.menu .depth1').on('focus', function () {
        $('ul.dropdownmenu li.menu ul').slideDown('normal');
        $('#headerArea').animate({
            height: 400
        }, 'fast').clearQueue();
    });

    $('ul.dropdownmenu li.m6 li:last').find('a').on('blur', function () {
        $('ul.dropdownmenu li.menu ul').slideUp('fast');
        $('#headerArea').animate({
            height: 240
        }, 'normal').clearQueue();
    });

    //상단으로 이동
    $('.topMove').hide();

    $(window).on('scroll', function () { //스크롤 값의 변화가 생기면
        var scroll = $(window).scrollTop(); //스크롤의 거리


        //$('.text').text(scroll);

        if (scroll > 500) { //500이상의 거리가 발생되면
            $('.topMove').fadeIn('slow'); //top보여라~~~~
        } else {
            $('.topMove').fadeOut('fast'); //top안보여라~~~~
        }
    });

    $('.topMove').click(function (e) {
        e.preventDefault();
        //상단으로 스르륵 이동합니다.
        $("html,body").stop().animate({
            "scrollTop": 0
        }, 1000);
    });


    //검색창열기



    //패밀리사이트 이동
    $('.family .arrow').toggle(function () {
        $('.family .aList').fadeIn('slow');
    }, function () {
        $('.family .aList').fadeOut('slow');
    });

    //tab키 처리
    $('.family .arrow').on('focus', function () {
        $('.family .aList').show();
    });

    $('.family .aList li:last').find('a').on('blur', function () {
        $('.family .aList').hide();
    });


});