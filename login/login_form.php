<?
	session_start();
    @extract($_GET); 
    @extract($_POST); 
    @extract($_SESSION);  
?>

<!DOCTYPE html>
<html lang="ko">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>CJ푸드빌 - 로그인</title>
    <link rel="stylesheet" href="./css/login.css">
    <link rel="stylesheet" href="../common/css/common.css">
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css"
        integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossorigin="anonymous">
	<script src="../common/js/prefixfree.min.js"></script>
</head>

<body>
	<div class="wrap">
		<header>
			<h1><a class="logo" href="../index.html">CJ푸드빌</a></h1>
		</header>
		<article id="content">
			
			<form  name="member_form" method="post" action="login.php"> 
				<div class="left">
					<h2>로그인</h2>

					<!-- 로그인 폼 -->
					<div id="id_pw_input">
						<div class="row">
							<label for="id" class="hidden">아이디</label>
							<input type="text" name="id" id="id" class="login_input" placeholder="아이디를 입력하세요" title="아이디" maxlength="41">
							<div id="loadtext"></div>  
						</div>
						<div class="row">
							<label for="pass" class="hidden">비밀번호</label>
							<input type="password" name="pass" id="pass" class="login_input" placeholder="비밀번호를 입력하세요" title="비밀번호" maxlength="16">
							<div id="loadtext"></div>  
						</div>
					</div>
					<div id="login_button">
						<button type="submit" value="로그인">로그인</button>
					</div>
					<!-- 아이디 찾기/비밀번호 찾기/회원가입 -->
					<ul class="find_wrap">
						<li><a href="./id_find.php">아이디 찾기</a></li>
						<li><a href="./pw_find.php">비밀번호 찾기</a></li>
					</ul>
					<div class="join">
						<span>아직 회원이 아니신가요?</span>
						<a href="../member/member_check.html"> 회원가입</a>
					</div>
				</div>
				<!-- <div class="right">
					<div class="view">
					<a href="../sub2/sub2_3.html"><i class="far fa-images"></i>매장찾기</a>
					<a href="../sub2/sub2_1.html"><i class="fa-solid fa-user-gear"></i>문의하기</a>
					</div>
					<div class="join">
						<span>아직 회원이 아니신가요?</span>
						<a href="../member/member_check.html"> 회원가입</a>
						<p>회원가입을 하시면 멤버십 해택이용이 가능합니다.</p>
					</div>
				</div> -->
			</form>
		</article>
	</div>
</body>
</html>


