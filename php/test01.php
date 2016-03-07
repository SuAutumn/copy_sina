<html>
	<head>
		<meta charset="UTF-8">
		<title>test php</title>
	</head>
	<body>
		<?php
		$notebook=$_POST['notebook'];
		$pencil=$_POST['pencil'];
		$jiaodai=$_POST['jiaodai'];
		$address=$_POST['address'];
		echo "string";
		echo "<p>订单处理中".date("H:i,JS F Y")."</p>";
		echo "<p>$notebook"."个笔记本"."</p>";
		echo "<p>$pencil</p>";
		echo "<p>$jiaodai</p>";

		//读写文件
		$DOCUMENT_ROOT=$_SERVER['DOCUMENT_ROOT'];
		echo "$DOCUMENT_ROOT";
		$fp=fopen("$DOCUMENT_ROOT/copy_sina/newtest001.txt", "a");
		$outContent=$address."\n";
		echo "$outContent";
		fwrite($fp, $outContent,strlen($outContent));
		fclose($fp);
		$fp=fopen("$DOCUMENT_ROOT/copy_sina/newtest001.txt", "r");
		while (!feof($fp)) {
			$order=fgets($fp);
			echo "$order</br>";
		}
		?>				
	</body>
</html>
