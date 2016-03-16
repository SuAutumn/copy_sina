<!DOCTYPE html>
<html lang="ch">
<head>
	<meta charset="UTF-8">
	<title>Customer Login</title>
	<link rel="stylesheet" href="../css/cus_login.css">

</head>
<body>
	<div>
		<div class="top_fixed_nav">
			<div class="solog">模仿微博页面</div>
		</div>
		<div class="body">
			<table class="namePass">
				<tr>
					<td class="rowFirst customer">账户：</td>
					<td class="rowSecond"><input class="custoName" type="text" value="邮箱或者手机号"></td>
					<td class="rowThird noteCustomer"></td>
				</tr>
				<tr>
					<td class="rowFirst password">密码：</td>
					<td class="rowSecond"><input class="passwordText" type="password"></td>
					<td class="rowThird notePassword"></td>
				</tr>
				<tr class="loginBtn" >
					<td></td>
					<td><a class="send" href="javascript:void(0)">登入</a></td>
				</tr>
			</table>
			
			<div class=sigin><a class="sigin" href="javascript:void(0)">还没有账户，点击来注册吧</a></div>
		</div>
	</div>
	<script rel="text/javascript" src="../js/jQuery.js"></script>
	<script rel="text/javascript" src="../js/0101.js"></script>

</body>
</html>