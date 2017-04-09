<?php

$config =array(
	'db_type'  => 'mysqli',
	'db_user'  => '2222222',
	'db_pwd'   => '1111111',
	'db_host'  => '1111111',
	'db_port'  => '3306',
	'db_name'  => '****'
);
$conn = mysqli_connect($config['db_host'],$config['db_user'],$config['db_pwd'],$config['db_name']) or die(mysqli_connect_error());

$sql = "SELECT * FROM `##############` where GameID=".$_GET['id'];
$result = mysqli_query($conn,$sql);
$a = array();
while($row = mysqli_fetch_array($result)){
    array_push($a,$row);
}
echo json_encode($a)

//$conn.close();
?>