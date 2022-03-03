$(document).ready(function () {

    //visual
    var swiper1 = new Swiper('.main_visual .swiper-container', {
        loop: true,
        navigation: {
            nextEl: '.main_visual .swiper-button-next',
            prevEl: '.main_visual .swiper-button-prev',
        },
        pagination: {
            el: '.main_visual .swiper-pagination',
            type: 'bullets',
        },

        autoplay: {
            delay: 5000,
        },

    });


    //wall
    var swiper2 = new Swiper("#wall .wallSwiper", {
        slidesPerView: 4,
        spaceBetween: 30,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,

        navigation: {
            nextEl: "#wall .swiper-button-next",
            prevEl: "#wall .swiper-button-prev",
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 20,
                slidesPerGroup: 1,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 50,
                slidesPerGroup: 1,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 40,
                slidesPerGroup: 1,
            },
            1280: {
                slidesPerView: 4,
                spaceBetween: 50,
                slidesPerGroup: 1,
            },
        },
    });

    $('.topMove').hide();

    $(window).on('scroll', function () { //�ㅽ겕濡� 媛믪쓽 蹂��붽� �앷린硫�
        var scroll = $(window).scrollTop(); //�ㅽ겕濡ㅼ쓽 嫄곕━


        //$('.text').text(scroll);

        if (scroll > 500) { //500�댁긽�� 嫄곕━媛� 諛쒖깮�섎㈃
            $('.topMove').fadeIn('slow'); //top蹂댁뿬��~~~~
        } else {
            $('.topMove').fadeOut('fast'); //top�덈낫�щ씪~~~~
        }
    });

    //  $('.topMove').click(function(e){
    //     e.preventDefault();
    //      //�곷떒�쇰줈 �ㅻⅤ瑜� �대룞�⑸땲��.
    //     $("html,body").stop().animate({"scrollTop":0},1000); 
    //  });

    

});