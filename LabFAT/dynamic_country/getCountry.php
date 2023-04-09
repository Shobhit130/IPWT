<?php
    include_once "connnection.php";

    $sql = "SELECT countryname FROM country;";

    $result=mysqli_query($conn, $sql);

    if(mysqli_num_rows($result) > 0){
        while($row = mysqli_fetch_assoc($result)){
            echo "<option value = '".$row["countryname"]."'>".$row["countryname"]."</option>";
        }
    }

    mysqli_close($conn);
?>