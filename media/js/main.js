$(document).ready(function () {
   
    //일러스트 호버
    $('#content .illustration .item').hover(function () {
        $('dl',this).css('opacity', '1').css('bottom', '0');
    }, function () {
        $('dl',this).css('opacity', '0').css('bottom', '-87px');
    });

});