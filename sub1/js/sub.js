$(document).ready(function () {
    
        $('.slideMenu a').click(function(e){
        e.preventDefault(); //href="#" 속성을 막아주는..메소드

        var value=0; //이동할 스크롤의 거리

        if($(this).hasClass('link1')){   //첫번째 메뉴를 클릭했냐?   if($(this).is('#link1')){
            value= $('#content .con1').offset().top;  // 해당 콘테츠의 상단의 거리~~
        }else if($(this).hasClass('link2')){
            value= $('#content .con2').offset().top; 
        }else if($(this).hasClass('link3')){
            value= $('#content .con3').offset().top; 
        }else if($(this).hasClass('link4')){
            value= $('#content .con4').offset().top; 
        }
        
    $("html,body").stop().animate({"scrollTop":value},1000);
    });


    // Agencies accordion script
    function accordion(imgnum) {
        $('.ag_title:eq('+imgnum+'),.agencies_inner li:not(:eq('+imgnum+')) .ag_main').hide();
        $('.agencies_inner li:eq('+imgnum+')  .ag_main').fadeIn('slow');
        $('.agencies_inner span:eq('+imgnum+')').css('width','100');
        $('.agencies_inner span:not(:eq('+imgnum+'))').css('width','200');
        $('.ag_title:not(:eq('+imgnum+'))').show().animate({'width':200});
    }

    $('.agencies_inner li span').mouseenter(function(event){
        var $target=$(event.target); 
        if($target.is('.agencies_inner span:eq(0)')){
            $('.agencies_inner li:eq(1)').animate({left:[800,'easeOutQuad']},500).clearQueue();
            $('.agencies_inner li:eq(2)').animate({left:[1000,'easeOutQuad']},500).clearQueue();
            accordion(0);
        }else if($target.is('.agencies_inner span:eq(1)')){    
            $('.agencies_inner li:eq(1)').animate({left:[200,'easeOutQuad']},500).clearQueue();
            $('.agencies_inner li:eq(2)').animate({left:[1000,'easeOutQuad']},500).clearQueue();
            accordion(1);
        }else if($target.is('.agencies_inner span:eq(2)')){    
            $('.agencies_inner li:eq(1)').animate({left:[200,'easeOutQuad']},500).clearQueue();
            $('.agencies_inner li:eq(2)').animate({left:[400,'easeOutQuad']},500).clearQueue();
            accordion(2);
        } 
    });

    $('.agencies_inner>div').mouseleave(function(event) {
        $('.ag_main').hide();
        $('.agencies_inner li:eq(0)').animate({left:[0,'easeOutQuad']},500).clearQueue();
        $('.agencies_inner li:eq(1)').animate({left:[400,'easeOutQuad']},500).clearQueue();
        $('.agencies_inner li:eq(2)').animate({left:[800,'easeOutQuad']},500).clearQueue();
        $('.agencies_inner span').css('width','');
        $('.ag_title').animate({'width':400});
        $('.ag_title').fadeIn(200);
    });




    // products script
    let position=-300;  //최초위치
    let movesize=600; //이미지 하나의 너비
    $('.products ul').after($('.products ul').clone()); 
    $('.pro_btn').click(function(e){
    e.preventDefault();
    if($(this).is('.left')){
        if(position==-300){
            $('.products>div:eq(0)').css('left',-2700);
            position=-2700;
        }
        position+=movesize;  
        $('.products>div:eq(0)').stop().animate({left:position}, 'normal',
            function(){				
                if(position==-300){
                    $('.products>div:eq(0)').css('left',-2700);
                    position=-2700;
                }
            });
        } else if($(this).is('.right')){
            if(position==-2700){
                $('.products>div:eq(0)').css('left',-300);
                position=-300;
            }
            position-=movesize; 
            $('.products>div:eq(0)').stop().animate({left:position}, 'normal',
                function(){							
                    if(position==-2700){
                        $('.products>div:eq(0)').css('left',-300);
                        position=-300;
                    }
                });
        }
    });

    


    //스크롤 스크립트
    $('.topMove').hide();
    $(window).on('scroll',function(){
        let introli = $('.introduction li').offset().top-700;
        let agencyli = $('.agencies li').offset().top-700;
        let productli =  $('.products li').offset().top-700;
        let newsli =  $('.news li').offset().top-700;
        let mediali =  $('.media li').offset().top-700;
        let scroll = $(window).scrollTop();
        
        if (scroll) {
            $('#headerArea').css('background-color','white').css('box-shadow','0 0 5px 0 #ccc');
            $('#gnb h3 a').css('color','black');
            $('h1').css('background-image','url(common/images/navlogo.png)');
        } else if ($('#headerArea').height() == '90') {
            $('#headerArea').css('background-color','transparent').css('box-shadow','none');
            $('#gnb h3 a').css('color','');
            $('h1').css('background-image','url(common/images/navlogo_white.png)');
        }
        if(scroll>500) {
            $('.topMove').show();
        }else{
            $('.topMove').hide();
        }

        if(scroll>introli) {
            $('.introduction li').addClass('moved');
            $('.introduction h3,.introduction p').css('opacity','1').css('top','0');
        }

        if(scroll>agencyli) {
            $('.agencies li').addClass('moved');
            $('.agencies_inner>h3,.agencies_inner>p').css('opacity','1').css('top','0');
        }

        if(scroll>productli) {
            $('.products h3').css('opacity','1').css('top','0');
        }

        if(scroll>newsli) {
            $('.news h3').css('opacity','1').css('top','0');
        }

        if(scroll>mediali) {
            $('.media h3, .media p').css('opacity','1').css('top','0');
        }

        

    });
    $('.content .topMove').click(function(e){
            e.preventDefault();
            $("html,body").stop().animate({"scrollTop":0},1000);
    });

    

    ////찐찐 스크롤

    $('.subNav li:eq(0)').find('a').addClass('spy');
    //첫번째 서브메뉴 활성화
    
    $('.content_area div:eq(0)').addClass('boxMove');
    //첫번째 내용글 애니메이션 처리
    var smh= $('.main').height();  //메인 비주얼의 높이
    var h1= $('.subNav div:eq(1)').offset().top-600 ;
    var h2= $('.subNav div:eq(2)').offset().top-600 ;
    var h3= $('.subNav div:eq(3)').offset().top-600 ;

     //스크롤의 좌표가 변하면.. 스크롤 이벤트
    $(window).on('scroll',function(){
        var scroll = $(window).scrollTop();
        //스크롤top의 좌표를 담는다
       
        $('.text').text(scroll);
        //스크롤 좌표의 값을 찍는다.
        
        //sticky menu 처리
        if(scroll>smh){ 
            $('.navBox').addClass('navOn');
            //스크롤의 거리가 350px 이상이면 서브메뉴 고정
            $('headerArea').hide();
        }else{
            $('.navBox').removeClass('navOn');
            //스크롤의 거리가 350px 보다 작으면 서브메뉴 원래 상태로
            $('headerArea').show();
        }
        
        
        
        $('.subNav li').find('a').removeClass('spy');
        //모든 서브메뉴 비활성화~ 불꺼!!!
        
        
         //스크롤의 거리의 범위를 처리
        if(scroll>=0 && scroll<h1){
            $('.subNav li:eq(0)').find('a').addClass('spy');
            //첫번째 서브메뉴 활성화
            
            $('.content_area div:eq(0)').addClass('boxMove');
            //첫번째 내용 콘텐츠 애니메이
        }else if(scroll>=h1 && scroll<h2){
            $('.subNav li:eq(1)').find('a').addClass('spy');
            //두번째 서브메뉴 활성화
            
             $('.content_area div:eq(1)').addClass('boxMove');
        }else if(scroll>=h2 && scroll<h3){
            $('.subNav li:eq(2)').find('a').addClass('spy');
            //세번째 서브메뉴 활성화
            
             $('.content_area div:eq(2)').addClass('boxMove');
        }else if(scroll>=h3){
            $('.subNav li:eq(3)').find('a').addClass('spy');
            //네번째 서브메뉴 활성화
            
             $('.content_area div:eq(3)').addClass('boxMove');
        }
        
        
        
     /*   
        //스크롤의 거리의 범위를 처리
        if(scroll>=0 && scroll<500){
            $('.subNav li:eq(0)').find('a').addClass('spy');
            //첫번째 서브메뉴 활성화
            
            $('#content div:eq(0)').addClass('boxMove');
            //첫번째 내용 콘텐츠 애니메이
        }else if(scroll>=500 && scroll<1100){
            $('.subNav li:eq(1)').find('a').addClass('spy');
            //두번째 서브메뉴 활성화
            
             $('#content div:eq(1)').addClass('boxMove');
        }else if(scroll>=1100 && scroll<1500){
            $('.subNav li:eq(2)').find('a').addClass('spy');
            //세번째 서브메뉴 활성화
            
             $('#content div:eq(2)').addClass('boxMove');
        }else if(scroll>=1500){
            $('.subNav li:eq(3)').find('a').addClass('spy');
            //네번째 서브메뉴 활성화
            
             $('#content div:eq(3)').addClass('boxMove');
        }
        
    */    
        
    });
});