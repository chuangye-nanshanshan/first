<?php

    /*192.168.129.231*/

    $con = mysql_connect("localhost","root","");

    /*
    开放IP访问权限
    GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY '' WITH GRANT OPTION;
    FLUSH PRIVILEGES;
    */

    if (!$con){
        die('Could not connect: ' . mysql_error());
    }
    mysql_select_db("teacher", $con);

    mysql_query("set character set 'utf8'");
    mysql_query("set names 'utf8'");

    usleep(500000);
?>