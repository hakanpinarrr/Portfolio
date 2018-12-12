<?php 

$host = '127.0.0.1';
$username = 'root';
$password = '';

$mysql_db = 'portfolio';

$conn = mysql_connect($host, $username, $password);

if(!$conn){
    die('Could not connect: ' . mysql_error());
}

mysql_select_db($mysql_db, $conn);

$name = $_POST['name'];
$email = $_POST['email'];
$message =  $_POST['message'];

$sql = "INSERT INTO `messages` (`name`, `email`, `message`) VALUES ('$name','$email','$message')";

if(!mysql_query($sql,$conn)){
    die('Error: ' . mysql_error());
}

mysql_close($con);

?>