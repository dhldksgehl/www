var xhr = new XMLHttpRequest(); // XMLHttpRequest 객체를 생성한다.

xhr.onload = function () { // When readystate changes

  if (xhr.status === 200) { // If server status was ok
    responseObject = JSON.parse(xhr.responseText); //서버로 부터 전달된 json 데이터를 responseText 속성을 통해 가져올 수 있다.
    // parse() 메소드를 호출하여 자바스크립트 객체로 변환한다.

    var newContent = '';

    newContent += '<ul>';
    for (var i = 0; i < responseObject.voc.length; i++) {
      newContent += '<li>';
      newContent += '<a href="' + responseObject.voc[i].a + '">';
      newContent += '<dl>';
      newContent += '<dt>' + responseObject.voc[i].talk + '</dt>';
      newContent += '<dd>';
      newContent += '<img src="' + responseObject.voc[i].img + '" alt="이미지">';
      newContent += responseObject.voc[i].map;
      newContent += '<span>' + responseObject.voc[i].date + '</span>';
      newContent += '</dd>'
      newContent += '</dl>'
      newContent += '</a>'
      newContent += '</li>'
    }
    newContent += '</ul>';

    document.getElementById('voc').innerHTML = newContent;
  }
};

xhr.open('GET', './js/data.json', true); // 요청을 준비한다.
xhr.send(null); // 요청을 전송한다