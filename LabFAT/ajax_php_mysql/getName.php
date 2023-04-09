<?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "mydb";

    $conn = mysqli_connect($servername,$username,$password,$dbname);

    if(!$conn){
        die("Connection failed: ".mysqli_error($conn));
    }else{
        $q = $_GET["q"];
        $sql = "SELECT * FROM consumer WHERE ConsumerId = '".$q."';";

        $result = mysqli_query($conn,$sql);

        if(mysqli_num_rows($result)>0){
            while($row = mysqli_fetch_assoc($result)){
                echo "Consumer Name: ".$row["ConsumerName"]."<br>"."Connection Type: ".$row["ConnectionType"];
            }
        }
    }
    mysqli_close($conn);
    
?>