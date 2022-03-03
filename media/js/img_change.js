

$(document).ready(function(){


    var characters = [
        {
            name:'RYAN',
            information1:'갈기가 없는 것이 콤플렉스인 수사자',
            information2:'큰 덩치와 무뚝뚝한 표정으로 오해를 많이 사지만, 사실 누구보다도 여리고 섬세한 소녀감성을 지닌 반전 매력의 소유자! 원래 아프리카 둥둥섬 왕위 계승자였으나, 자유로운 삶을 동경해 탈출! 카카오프렌즈의 든든한 조언자 역할을맡고 있습니다.',
        },
        {
            name:'APEACH', 
            information1:'복숭아 나무에서 탈출한 악동 복숭아',
            information2:'유전자 변이로 자웅동주가 된 것을 알고 복숭아 나무에서 탈출한 악동 복숭아 어피치! 섹시한 뒷태로 사람들을 매혹시키며, 성격이 매우 급하고 과격합니다.',
        },
        {
            name:'MUZI & CON', 
            information1:'토끼 옷을 입은 단무지인 무지와 정체불명 콘',
            information2:'호기심 많은 장난꾸러기 무지의 정체는 사실 토끼 옷을 입은 단무지! 토끼 옷을 벗으면 부끄러움을 많이 탑니다. 단무지를 키워 무지를 만든 정체불명의 악어 콘! 이제는 복숭아를 키우고 싶어 어피치를 찾아 다닙니다.',
        },
        {
            name:'TUBE', 
            information1:'겁 많고 마음 약한 오리 튜브',
            information2:'겁 많고 마음 약한 오리 튜브는 극도의 공포를 느끼면 미친 오리로 변신합니다. 작은 발이 콤플렉스이기 때문에 큰 오리발을 착용합니다. 미운 오리 새끼가 먼 친척입니다.',
        },
        {
            name:'CHOONSIK', 
            information1:'길냥이 출신 성별 미상의 고양이',
            information2:'라이언의 반려동물입니다. 골판지 상자에 들어가 있는 걸 좋아하고, 가장 좋아하는 음식은 고구마입니다.',
        },
        {
            name:'JORDY', 
            information1:'등에 핀 기생버섯에 조종 당하는 취업준비생 공룡',
            information2:'운석과의 충돌로 깨진 빙하가 떠내려와 그 안에 갇혀있던 죠르디. 오랫동안 화석으로 살아온 탓에 화려한 과거의 경력이 인정되지 않아 자격증 공부를 추가로 하며 취업 준비를 하고 있습니다. 똑똑한 죠르디에게 한가지 비밀이 있다면 육신을 조종당하고 있으며, 이 공룡을 숙주로 삼은 것은 등에 핀 기생버섯 입니다.',
        },
        {
            name:'SCAPPY', 
            information1:'북극곰 시절 맹수 본능을 간직한 토끼',
            information2:'원래는 극악무도한 북극곰이었지만 마녀의 애완 펭귄을 잡아먹고 저주를 받아 작은 토끼가 돼버린 스카피. 본인의 레스토랑을 운영하며 요리사로 일하고 있는 중. 하지만 고기의 출처는 아무도 알지 못합니다. 가슴에는 북극곰 시절 영광의 상처(X)가 있습니다. 북극곰 시절의 추억을 회상하는 것을좋아합니다.',
        },
        {
            name:'ANGMOND', 
            information1:'NO 튜브 NO 수영! 게으른 초콜렛 중독자 하프물범',
            information2:'초콜렛 잼 통을 입에 달고 살아서 입가에 멍이 들어버린 아기 하프물범 앙몬드. 움직이는 것을 싫어하고 항상 게으르게 늘어져있는 앙이지만 초콜렛 앞에서는 빛보다 빠른 속도로 움직입니다. 자신을 엄마로 착각하고 졸졸 쫓아다니며 초콜렛 타임을 방해하는 펭귄 꼬맹이들이 매우 성가십니다.',
        }
      ];
  
  
    

    $('.characters .charbox img').attr('src','./images/char01.png');
    $('.gallery-thumbs .title').html(characters[0].name);
    $('.gallery-thumbs .main_t').html(characters[0].information2);
    $('.characters .gallery-thumbs ul li:eq(0) a').css('filter','grayscale(0)');
      
    $('.characters .gallery-thumbs a').click(function(e){
        e.preventDefault();
      
        var ind = $(this).index('.characters .gallery-thumbs a');
  
        $('.characters .charbox img').attr('src','./images/char0'+(ind+1)+'.png');
  
        $('.gallery-thumbs .title').html(characters[ind].name);
        $('.gallery-thumbs .con_1').html(characters[ind].information1);
        $('.gallery-thumbs .con_2').html(characters[ind].information2);

        $('.characters .gallery-thumbs ul li a').css('filter','grayscale(100%)');
        $('.characters .gallery-thumbs ul li:eq('+ind+') a').css('filter','grayscale(0)');
    });


    //높이 맞추기
    var boxHeight =  $('#content .charact3').outerHeight(); //박스의 높이(콘텐츠+패딩+보더)

		// for(var i=0; i<6; i++){
		// 	$(".contactUs div:eq("+ i +")").css('height',boxHeight2);
		// }
         $("#content .item").css('height',boxHeight);

	$(window).resize(function(){ 
		$('#content .charact3').css('height','auto');  
        boxHeight =  $('#content .charact3').outerHeight();
        $("#content .item").css('height',boxHeight);
	});



  });
  
  