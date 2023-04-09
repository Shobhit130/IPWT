<?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "mydb2";

    $conn = mysqli_connect($servername,$username,$password,$dbname);

    if(!$conn){
        die("Connection failed: ".mysqli_error($conn));
    }else{
        echo("Connection Success"."<br>");
    }
?>