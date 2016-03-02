<!DOCTYPE html>
<html lang="ch">
<head>
	<meta charset="UTF-8">
	<title>Customer Login</title>
	<link rel="stylesheet" href="cus_login.css">

</head>
<body>
	<div>
		<div class="top_fixed_nav">
			<div class="solog">Welcome to Paradise</div>
		</div>
		<div class="body">
			<div class="namePass">
				<div>
					<h1 class="customer">账户：</h1>
					<input class="custoName" type="text" value="邮箱或者手机号">
				</div>
				<div>
					<h1 class="password">密码：</h1>
					<input class="passwordText" type="password">
				</div>
				<div class="loginBtn" >
					<a class="loginA" href="copy01.html">登入</a>
				</div>
			</div>
			
			<div class=sigin><a class="sigin" href="javascript:void(0)">还没有账户，点击来注册吧</a></div>
		</div>
	</div>
	<script rel="text/javascript" src="http://apps.bdimg.com/libs/jquery/2.1.4/jquery.js"></script>
	<script rel="text/javascript" src="0101.js"></script>
	<?php
	 echo date("H:i");?>
</body>
</html>