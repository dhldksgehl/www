// foodville

$(document).ready(function () {
  /* var cnt=3; 
  $('.f_tab .cont:eq(0)').show(); // 첫번째 탭 내용만 열어라
  $('.f_tab .mission').css('background','#f2921b').css('color','#fff').css('border','1px solid #f2921b'); //첫번째 탭메뉴 활성화
             //자바스크립트의 상대 경로의 기준은 => 스크립트 파일을 불러들인 html파일이 저장된 경로 기준***
    
    $('.tabs .tab').click(function(e){
        e.preventDefault();   // <a> href="#" 값을 강제로 막는다  
        
        var ind = $(this).index('.f_tab .tab');  // 클릭시 해당 index를 뽑아준다
        //console.log(ind);

        $(".f_tab .cont").hide(); //모든 탭내용을 안보이게...
        $(".f_tab .cont:eq("+ind+")").show(); //클릭한 해당 탭내용만 보여라
        $('.tab').css('background','rgb(250, 250, 250)').css('color','#333').css('border','1px solid rgb(250, 250, 250)'); //모든 탭메뉴를 비활성화
        $(this).css('background','#f2921b').css('color','#fff').css('border','1px solid #f2921b'); // 클릭한 해당 탭메뉴만 활성화

   });*/


  $('.ville .link').on('click', function (e) {
    var $this = $(this),
      $t_img = $this.next('.img-cont'),
      $activeLi = $('.ville li.active'),
      $currentImg = $activeLi.find('.img-cont');

    e.preventDefault();
    $activeLi.removeClass('active');
    setTimeout(function () {
      $t_img.show();
      $this.parent().addClass('active');
    }, 100);
    setTimeout(function () {
      $currentImg.hide();
    }, 500);
  })

});

// talk