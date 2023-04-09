<?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "world";

    $conn = mysqli_connect($servername,$username,$password,$dbname);

    if(!$conn){
        die("Connection failed: ".mysqli_error($conn));
    }
?>