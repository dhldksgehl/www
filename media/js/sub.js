$(document).ready(function () {
   
    //일러스트 호버
    $('.grid-image-item').hover(function () {
        $('dl',this).css('opacity', '1').css('bottom', '15px');
    }, function () {
        $('dl',this).css('opacity', '0').css('bottom', '-48px');
    });

});