<?php


	// 文件则用$_FILES来接收
	// print_r($_FILES);

	// 利用PHP提供的转移上传文件路径的方法
	move_uploaded_file($_FILES['picture']['tmp_name'], './demo.jpg');

	echo './demo.jpg';


?>