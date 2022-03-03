<? 
	session_start(); 

	@extract($_POST);
	@extract($_GET);
	@extract($_SESSION);
	/*
		$_SESSION['userid']
		$_SESSION['username']
		$_SESSION['usernick']
		$_SESSION['userlevel']

		$num=1  (나야나~~~~~)
		$page=2
	*/
	
	include "../lib/dbconn.php";

	$sql = "select * from greet where num=$num";
	$result = mysql_query($sql, $connect);

	$row = mysql_fetch_array($result);       	
	$item_subject     = $row[subject];
	$item_content     = $row[content];
?>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>공지사항 - 정보수정</title>

    <link rel="stylesheet" href="../common/css/common.css">
    <link rel="stylesheet" href="./css/greet.css">

</head>
<body>
    <div class="wrap">
	<? include "../common/sub_header.html" ?>

<div class="visual">
	<img src="../sub5/common/images/visual.jpg" alt="">
	<h3>정보소식</h3>
	<p>INFORMATION</p>
</div>

<div class="sub_menu">
	<ul>
		<li><a href="./concert/list.php">보도자료</a></li>
		<li><a href="./concert/list.php">생생톡</a></li>
		<li class="current"><a href="./greet/list.php">공지사항</a></li>
	</ul>
</div>

<article id="content">
	<div class="title_area">
		<div class="line_map">HOME &gt; 정보소식 &gt; <strong>공지사항</strong></div>
		<h2>공지사항</h2>
		<p>사이트 이용에 꼭 필요한 공지, 확인하면 더 편리해집니다.</p>
	</div>
		<div class="content_area">
            <form  name="board_form" method="post" action="insert.php?mode=modify&num=<?=$num?>&page=<?=$page?>"> 
		<div id="write_form">
			<div class="write_line"></div>
			<div id="write_row1">
				<div class="col1"> 닉네임 </div>
				<div class="col2"><?=$usernick?></div>
			</div>
			<div class="write_line"></div>
			<div id="write_row2"><div class="col1"> 제목   </div>
			                     <div class="col2"><input type="text" name="subject" value="<?=$item_subject?>" ></div>
			</div>
			<div class="write_line"></div>
			<div id="write_row3"><div class="col1"> 내용   </div>
			                     <div class="col2"><textarea rows="15" cols="79" name="content"><?=$item_content?></textarea></div>
			</div>
			<div class="write_line"></div>
		</div>

		<div id="write_button"><input type="submit" value="완료">&nbsp;
								<a href="list.php?page=<?=$page?>">목록</a>
		</div>
		</form>


            </div>

        </article>

<!-- 서브 푸터영역 -->
<? include "../common/sub_footer.html" ?>

     </div>

</body>
</html>