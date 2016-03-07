<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>test php</title>
</head>
<body>
	<form action="test01.php" method="post">
		<table border="0">
			<tr bgcolor="#aaa">
				<td width="20%">项目</td>
				<td width="20%">数量</td>
			</tr>
			<tr>
				<td>笔记本</td>
				<td><input type="text" name="notebook" size="3" maxlength="3"></td>
			</tr>
			<tr>
				<td>铅笔</td>
				<td><input type="text" name="pencil" size="3" maxlength="3"></td>
			</tr>
			<tr>
				<td>胶带</td>
				<td><input type="text" name="jiaodai" size="3" maxlength="3"></td>
			</tr>
			<tr>
				<td>购物地址</td>
				<td><input type="text" name="address" size="10%" ></td>
			</tr>
			<tr>
				<td colspan="2" align="center">
					<input type="submit" value="提交">
				</td>
			</tr>
		</table>
	</form>
<?php
	echo "string";
?>
</body>
</html>