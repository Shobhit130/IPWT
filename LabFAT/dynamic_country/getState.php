<?php
    include_once "connnection.php";

    $q = $_GET["q"];

    $sql = "SELECT statename FROM state WHERE countryname = '".$q."';";

    $result=mysqli_query($conn, $sql);
    echo "<option value = ''>--Select a State--</option>";
    if(mysqli_num_rows($result) > 0){
        while($row = mysqli_fetch_assoc($result)){
            echo "<option value = '".$row["statename"]."'>".$row["statename"]."</option>";
        }
    }

    mysqli_close($conn);
?>