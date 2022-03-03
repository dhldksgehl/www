$(document).ready(function () {
    // 스와이프
    var screenSize, screenHeight;
    var screenSize = $(window).width(); //디바이스의 해상도(폭)

    function screen_size() {
        screenSize = $(window).width(); //스크린의 너비
        screenHeight = $(window).height(); //스크린의 높이  

        if (screenSize > 1280) { //와이드 pc
            var swiper = new Swiper(".mySwiper", {
                slidesPerView: 3,
                spaceBetween: 32,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                }
            });
        } else if (screenSize > 1024, screenSize>640) { //일반pc
            var swiper = new Swiper(".mySwiper", {
                slidesPerView: 2,
                spaceBetween: 24,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                }
            });
        } else { //모바일
            var swiper = new Swiper(".mySwiper", {
                slidesPerView: 1,
                spaceBetween: 20,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                }
            });
        }
    }
    screen_size(); //최초 실행시 호출
    $(window).resize(function () { //웹브라우저 크기 조절시 반응하는 이벤트 메소드()
        screen_size();
    });

    // 유튜브 팝업
    $('.popup-youtube').magnificPopup({
        disableOn: 320,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: true,

        fixedContentPos: false
    });

});