let talkbtn = 0;
$('.remote li:eq(1) a').css('pointer-events','visible');
$('.remote li:eq(1) a').click(function(e) {
    e.preventDefault();
    $('.remote li:eq(0) a').css('pointer-events','visible');
    if (talkbtn <= -1260) $(this).css('pointer-events','none');
    else {
        talkbtn += -350;
        $(this).css('pointer-events','visible');
    }
    $('.talk_box ul').stop().animate({"left":talkbtn},1260);
});

$('.remote li:eq(0) a').click(function(e) {
    e.preventDefault();
    $('.remote li:eq(1) a').css('pointer-events','visible');
    if (talkbtn >= 0) $(this).css('pointer-events','none');
    else {
        talkbtn += 350;
        $(this).css('pointer-events','visible');
    }
    $('.talk_box ul').stop().animate({"left":talkbtn},1260);
})
